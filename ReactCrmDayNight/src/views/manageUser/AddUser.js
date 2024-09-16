import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { toast, Bounce } from 'react-toastify'
import { customerSignUpByAdmin } from '../../service/UserService'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Field, Form } from 'react-final-form'
import { Link, useNavigate } from 'react-router-dom'
export default function AddUser() {
  const navigate = useNavigate()
  async function handleAddCustomer(values) {
    console.log(values)
    const response = await customerSignUpByAdmin(values)
    console.log(response)
    if (response.responseMessage === 'Registration Successfull') {
      navigate('/manageUser/userList')
      // localStorage.setItem('auth', JSON.stringify(true))
      toast(response.responseMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    } else {
      // navigate('/login')
      toast(response.responseMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }
  return (
    <CRow className="justify-content-center">
      <CCol md={9} lg={7} xl={6}>
        <CCard className="mx-4">
          <CCardBody className="p-4">
            <Form
              onSubmit={handleAddCustomer}
              render={({ handleSubmit }) => (
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <Field name="username">
                      {({ input }) => (
                        <CFormInput {...input} placeholder="Username" autoComplete="username" />
                      )}
                    </Field>
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <Field name="emailId">
                      {({ input }) => (
                        <CFormInput {...input} placeholder="Email" autoComplete="email" />
                      )}
                    </Field>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>FN</CInputGroupText>
                    <Field name="firstName">
                      {({ input }) => (
                        <CFormInput {...input} placeholder="First Name" autoComplete="email" />
                      )}
                    </Field>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>LN</CInputGroupText>
                    <Field name="lastName">
                      {({ input }) => (
                        <CFormInput {...input} placeholder="Last Name" autoComplete="email" />
                      )}
                    </Field>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>#</CInputGroupText>
                    <Field name="mobile">
                      {({ input }) => (
                        <CFormInput {...input} placeholder="Mobile" autoComplete="mobile" />
                      )}
                    </Field>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <Field name="password">
                      {({ input }) => (
                        <CFormInput
                          {...input}
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                        />
                      )}
                    </Field>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <Field name="confirmPassword">
                      {({ input }) => (
                        <CFormInput
                          {...input}
                          type="password"
                          placeholder="Repeat password"
                          autoComplete="new-password"
                        />
                      )}
                    </Field>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              )}
            ></Form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
