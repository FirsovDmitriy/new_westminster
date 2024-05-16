import styled from './styled.module.scss'
import AppLink from '@/components/UI-Kit/AppLink'
import routesPath from '@/router/routesPath'

const Error404 = () => {
  return (
    <div className={styled.errorPage}>
      <section className={styled.errorPage__section}>
        <h1 className={styled.errorPage__title}>
          The page your`re looking for doesn`t exist
        </h1>
        <AppLink to={routesPath.HOME}>
          To the homepage
        </AppLink>
      </section>
    </div>
  )
}

export default Error404