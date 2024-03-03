import React from 'react'
import styled from './Headline.module.scss'

interface HeadlineProps {
  children: React.ReactNode
}

const Headline: React.FC<HeadlineProps> = ({ children }) => (
  <div className={styled.headline}>
    { children }
  </div>
)

export default Headline