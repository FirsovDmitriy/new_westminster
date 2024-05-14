import FormAuth from '@/components/FormAuth'
import styled from './styled.module.scss'

const RegistrationRoot = () => {
  return (
    <section className={styled.section}>
      <div className={styled.label}>
        <h1 className={styled.title}>create account</h1>
      </div>
      <div className={styled.main}>
        <h3>Your account</h3>
        <FormAuth />
      </div>
    </section>
  )
}

export default RegistrationRoot