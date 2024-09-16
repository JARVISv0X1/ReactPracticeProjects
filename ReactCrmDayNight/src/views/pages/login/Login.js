import React from 'react'
import { Form, Field } from 'react-final-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { userLogin } from '../../../service/UserService'

const Login = () => {
  const navigate = useNavigate()

  async function handleLogin(values) {
    console.log(values)
    const response = await userLogin(values)
    console.log(response)
    if (response.responseMessage === 'Login Successfull') {
      localStorage.setItem('auth', JSON.stringify(true))
      navigate('/dashboard')
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
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Form
                    onSubmit={handleLogin}
                    render={({ handleSubmit }) => (
                      <CForm onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-body-secondary">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <Field name="emailId">
                            {({ input }) => (
                              <CFormInput
                                {...input}
                                placeholder="Email Id"
                                autoComplete="username"
                                type="email"
                                required
                              />
                            )}
                          </Field>
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <Field name="password">
                            {({ input }) => (
                              <CFormInput
                                {...input}
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                required
                              />
                            )}
                          </Field>
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton type="submit" color="primary" className="px-4">
                              Login
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <Link to="/forgetPassword">
                              <CButton color="link" className="px-0">
                                Forgot password?
                              </CButton>
                            </Link>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  />
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
