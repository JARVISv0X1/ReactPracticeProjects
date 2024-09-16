import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'

export default function Logout() {
  const navigate = useNavigate()

  // Correct the localStorage method to removeItem
  localStorage.removeItem('auth')
  let isAuth = JSON.parse(localStorage.getItem('auth')) // Auth should now be null after removal

  useEffect(() => {
    // Check if not authenticated and toast is not already shown
    if (!isAuth && !toast.isActive('auth-toast')) {
      toast.success('Logout Successfull', {
        toastId: 'auth-toast', // Set a unique ID for the toast
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

      // Navigate to login
      navigate('/login')
    }
  }, [isAuth, navigate])
}
