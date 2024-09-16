import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
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

import { generateForgetPin, forgetPassword } from '../../../service/UserService'

const ForgetPassword = () => {
  const [otpSent, setOtpSent] = useState(false) // To control OTP state
  const [email, setEmail] = useState('') // Store the email to pass to getOtp
  const navigate = useNavigate()
  async function handleForgetPassword(values) {
    console.log('Submitting with values:', values)
    let response = await forgetPassword(values)
    if (response.responseMessage === 'Entered OTP is Correct') {
      navigate('/setNewPassword')
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

  async function getOtp(email) {
    console.log(`Sending OTP to: ${email}`)
    let otpResponse = await generateForgetPin(email)
    if (otpResponse.responseStatus === '000') {
      setOtpSent(true)
      toast(otpResponse.responseMessage, {
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
      toast('Something went wrong', {
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
      setOtpSent(true)
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Form
                  onSubmit={handleForgetPassword}
                  render={({ handleSubmit }) => (
                    <CForm onSubmit={handleSubmit}>
                      <h1>Forget Password</h1>
                      <p className="text-body-secondary">Change your password</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>@</CInputGroupText>
                        <Field name="emailId">
                          {({ input }) => (
                            <CFormInput
                              {...input}
                              placeholder="Enter Email"
                              autoComplete="email"
                              required
                              disabled={otpSent} // Disable email input once OTP is sent
                              onChange={(e) => {
                                input.onChange(e) // Update form state
                                setEmail(e.target.value) // Store email separately
                              }}
                            />
                          )}
                        </Field>
                      </CInputGroup>
                      <div className="d-grid mb-3">
                        <CButton
                          color="success"
                          disabled={otpSent} // Disable "Get OTP" once OTP is sent
                          onClick={() => getOtp(email)}
                        >
                          Get OTP
                        </CButton>
                      </div>

                      {/* OTP Field: Initially disabled until OTP is sent */}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>#</CInputGroupText>
                        <Field name="otp">
                          {({ input }) => (
                            <CFormInput
                              {...input}
                              placeholder="Enter OTP"
                              autoComplete="otp"
                              required
                              disabled={!otpSent} // Enable only after OTP is sent
                            />
                          )}
                        </Field>
                      </CInputGroup>

                      <div className="d-grid">
                        <CButton type="submit" color="success" disabled={!otpSent}>
                          Submit
                        </CButton>
                      </div>
                    </CForm>
                  )}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgetPassword
