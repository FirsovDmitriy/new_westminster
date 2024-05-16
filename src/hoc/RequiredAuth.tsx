import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import routesPath from '@/router/routesPath'
import useAppSelector from '@/hooks/useTypedSelector'
import { selectCurrentToken } from '@/store/slices/auth.slice'

const RequiredAuth: React.FC = () => {
  const token = useAppSelector(selectCurrentToken)
  const location = useLocation()

  return (
    token
      ? <Outlet />
      : <Navigate to={routesPath.REGISTRATION} state={{ from: location }} replace />
  )
}

export default RequiredAuth