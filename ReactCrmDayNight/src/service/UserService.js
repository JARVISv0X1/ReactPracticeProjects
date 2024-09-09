import axios from 'axios'
import { toast, Bounce } from 'react-toastify'

const backendUrl = import.meta.env.VITE_BACKEND_USER_LOGIN_URL
const endPoint = ''

export async function userLogin(loginDetails) {
  const loginEndPoint = 'login' // Renamed to avoid conflict with global endPoint
  console.log('EndPoint: ' + backendUrl + loginEndPoint)

  try {
    const response = await axios.post(backendUrl + loginEndPoint, {
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
