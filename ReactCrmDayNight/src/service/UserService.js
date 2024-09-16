import axios from 'axios'
import { toast, Bounce } from 'react-toastify'

const backendUrl = import.meta.env.VITE_BACKEND_URL
let endPoint = ''

export async function userLogin(loginDetails) {
  endPoint = 'user/login'
  console.log('EndPoint: ' + backendUrl + endPoint)

  try {
    const response = await axios.post(backendUrl + endPoint, {
      emailId: loginDetails.emailId,
      password: loginDetails.password,
    })
    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    toast(error.message, {
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
    throw error.message
  }
}
export async function customerSignUpByAdmin(signUpDetails) {
  endPoint = 'user/customerSignUpByAdmin'
  console.log('EndPoint: ' + backendUrl + endPoint)

  try {
    const response = await axios.post(backendUrl + endPoint, {
      emailId: signUpDetails.emailId,
      password: signUpDetails.password,
      mobile: signUpDetails.mobile,
      firstName: signUpDetails.firstName,
      lastName: signUpDetails.lastName,
      confirmPassword: signUpDetails.confirmPassword,
    })
    return response.data
  } catch (error) {
    console.error('Error logging in:', error)
    toast(error.message, {
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
    throw error.message
  }
}
export async function generateForgetPin(emailId) {
  endPoint = 'user/forgetPasswordOtpGenarator'
  console.log('EndPoint: ' + backendUrl + endPoint)
  try {
    const response = await axios.post(backendUrl + endPoint, {
      emailId: emailId,
    })
    return response.data
  } catch (error) {
    console.error('Error :', error)
    toast(error.message, {
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
    throw error.message
  }
}

export async function forgetPassword(values) {
  endPoint = 'user/forgetPassword'
  console.log('EndPoint: ' + backendUrl + endPoint)
  try {
    const response = await axios.post(backendUrl + endPoint, {
      emailId: values.emailId,
      otp: values.otp,
    })
    return response.data
  } catch (error) {
    console.error('Somthing Went Wrong !', error)
    toast(error.message, {
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
    throw error.message
  }
}

export async function getAllCustomerList() {
  endPoint = 'user/getAllCustomerList'
  console.log('EndPoint: ' + backendUrl + endPoint)
  try {
    const response = await axios.post(backendUrl + endPoint)
    console.log('Customer List fetched successfull', response)
    // toast.success(response.message, {
    //   position: 'top-right',
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'light',
    //   transition: Bounce,
    // })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Somthing Went Wrong !', error)
    toast(error.message, {
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
    throw error.message
  }
}
