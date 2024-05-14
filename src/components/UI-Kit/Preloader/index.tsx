import styled from "./styled.module.scss"
import Portal from "@/components/Portal"

const Preloader = () => (
    <Portal>
      <div className={styled.preloader}>
        <div className={styled.content}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styled.icon}
            width={'60px'}
            height={'60px'}
            fill="none"
            viewBox="0 0 60 60"
          >
            <circle
              className={styled.iconCircle}
              strokeWidth={'0.2rem'}
              r="20"
              cx="30"
              cy="30"
            />
          </svg>
        </div>
      </div>
    </Portal>
)

export default Preloader
