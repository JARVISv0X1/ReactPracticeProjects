import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Login from 'src/views/pages/login/Login'

export default function AdminProtectedRouter({ Component }) {
  let [isAuthenticated, setIsAuthenticated] = useState(Cookies.get('userAuth'))
  const navigate = useNavigate()
  useEffect(() => {
    const userAuth = Cookies.get('userAuth')
    console.log('userAuth: ' + userAuth)
    setIsAuthenticated(() => userAuth)
    if (isAuthenticated === false || isAuthenticated === undefined) {
      navigate('/login')
    }

    console.log('isAuthenticated: ' + localStorage.getItem('userAuth'))
  }, [isAuthenticated])

  return <>{isAuthenticated ? <Component></Component> : <Login />}</>
}
