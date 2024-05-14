import ErrorPage404 from '@/pages/404'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorRouteElement = () => {

  const error = useRouteError()

  const isRouteError = isRouteErrorResponse(error)

  if(isRouteError) {
    switch(error.status) {
      case 404:
        return <ErrorPage404 />
      case 401:
        return <div>You aren't authorized to see this</div>
      case 503:
        return <div>Looks like our API is down</div>
      case 418:
        return <div>🫖</div>
    }
  }

}

export default ErrorRouteElement