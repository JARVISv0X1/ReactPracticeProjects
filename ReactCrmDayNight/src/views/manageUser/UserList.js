import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import {
  CAvatar,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { useState, useEffect } from 'react'
import { getAllCustomerList } from '../../service/UserService'
import { useNavigate } from 'react-router-dom'

export default function UserList() {
  const [resData, setResData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function getUserList() {
      const data = await getAllCustomerList()
      setResData(data)
    }
    getUserList()
  }, [])

  // Placeholder for avatar selection logic
  const getAvatarSrc = (index) => {
    const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]
    return avatars[index % avatars.length]
  }

  return (
    <>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell>Unique Id</CTableHeaderCell>
            <CTableHeaderCell className="text-center">
              <CIcon icon={cilPeople} />
            </CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Create Date</CTableHeaderCell>
            <CTableHeaderCell>Mobile No.</CTableHeaderCell>
            <CTableHeaderCell>Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {resData.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.uniqueId}</CTableDataCell>
              <CTableDataCell className="text-center">
                <CAvatar size="md" src={getAvatarSrc(index)} />
              </CTableDataCell>
              <CTableDataCell>{item.emailId}</CTableDataCell>
              <CTableDataCell>{item.userStatus}</CTableDataCell>
              <CTableDataCell>{item.createDate}</CTableDataCell>
              <CTableDataCell>{item.mobile}</CTableDataCell>
              <CTableDataCell>
                <CButton
                  color="success"
                  onClick={() => {
                    navigate(`/manageUser/edit/${item.uniqueId}`)
                  }}
                >
                  Edit
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}
