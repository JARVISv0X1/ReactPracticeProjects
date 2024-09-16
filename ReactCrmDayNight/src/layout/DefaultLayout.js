import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import Login from '../views/pages/login/Login'

const DefaultLayout = () => {
  const navigate = useNavigate()
  const isAuth = JSON.parse(localStorage.getItem('auth'))

  useEffect(() => {
    // Check if not authenticated and toast is not already shown
    if (!isAuth && !toast.isActive('auth-toast')) {
      toast('UnAuthorized URL', {
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
    }
  }, [isAuth])

  if (!isAuth) {
    return <Login />
  }

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
