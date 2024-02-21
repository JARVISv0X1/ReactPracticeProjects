import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CModalHeader,
  CContainer,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CModal,
  CRow,
} from '@coreui/react'
import Cookies from 'js-cookie'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
// import { set } from 'core-js/core/dict'

const Login = () => {
  const [responseMessage, setResponseMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  let [loginCred, setLoginCred] = useState({
    emailId: '',
    password: '',
  })
  function handleInput(event) {
    {
      let { id, value } = event.target
      setLoginCred((prev) => {
        return {
          ...prev,
          [id]: value,
        }
      })
    }
  }
  function setFetchResMessage(fetchResponseMessage) {
    setResponseMessage(fetchResponseMessage)
    setVisible(true)
  }
  function handleSubmit(event) {
    event.preventDefault()
    axios({
      // Endpoint to login
      url: 'http://localhost:8081/user/login',
      method: 'POST',
      // Attaching the form data
      data: loginCred,
    })
      .then((res) => {
        console.log(res.data.responseMessage)
        let resUtype = res.data.userType

        let fetchResponseMessage = res.data.responseMessage
        if (fetchResponseMessage === 'validUser') {
          Cookies.set('userName', loginCred.emailId)
          Cookies.set('userAuth', true)
          Cookies.set('userType', resUtype)
          if (resUtype === 'admin') {
            navigate('/adminHome')
          } else {
            navigate('/customerHome')
          }
        } else {
          // setLoaderImg(() => false)
          // toast(responseMessage)
          setFetchResMessage(fetchResponseMessage)
        }
      })
      .catch((err) => {
        // setLoaderImg(() => false)
        console.log(err)
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Login Error</CModalTitle>
          </CModalHeader>
          <CModalBody>{responseMessage}</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            {/* <CButton color="primary">Save changes</CButton> */}
          </CModalFooter>
        </CModal>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        id="emailId"
                        aria-describedby="emailHelp"
                        onChange={handleInput}
                        defaultValue={''}
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        id="password"
                        onChange={handleInput}
                        placeholder="Password"
                        defaultValue={''}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
