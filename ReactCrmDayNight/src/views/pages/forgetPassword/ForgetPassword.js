import React from 'react'
import { Form, Field } from 'react-final-form'
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
import { cilDoubleQuoteSansLeft } from '@coreui/icons'

const ForgetPassword = () => {
  function handeForgetPassword(values) {
    console.log(values)
  }

  function getOtp(input) {
    console.log(`OTP: ${input}`)
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Form
                  onSubmit={handeForgetPassword}
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
                            />
                          )}
                        </Field>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>#</CInputGroupText>
                        <Field name="otp">
                          {({ input }) => (
                            <CFormInput
                              {...input}
                              placeholder="Enter OTP"
                              autoComplete="otp"
                              required
                            />
                          )}
                        </Field>
                      </CInputGroup>
                      <div className="d-grid">
                        <CButton onClick={() => getOtp(handleSubmit)} color="success">
                          Get OTP
                        </CButton>
                      </div>
                      <div className="d-grid">
                        <CButton type="submit" color="success">
                          Submit
                        </CButton>
                      </div>
                    </CForm>
                  )}
                ></Form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgetPassword
