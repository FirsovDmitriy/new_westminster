import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import routesPath from '../router/routesPath'
import { selectCurrentToken } from '../store/slice/auth.slice'
import useAppSelector from '../hooks/useAppSelector'

const RequiredAuth: React.FC = () => {
  const location = useLocation()
  const token = useAppSelector(selectCurrentToken)

  return (
    token 
      ? <Outlet />
      : <Navigate to={routesPath.AUTH} state={{ from: location }} replace />
  )
}

export default RequiredAuth