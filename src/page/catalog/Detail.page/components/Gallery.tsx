import React from 'react'
import styled from './Gallery.module.scss'
import img from '../../../../assets/test.webp'
import img2 from '../../../../assets/img2.webp'
import img3 from '../../../../assets/img3.webp'
import img4 from '../../../../assets/img4.webp'

const Gallery: React.FC = () => {
  return (
    <div className={styled.gallery}>
      <img src={img} alt="" className={styled.item} />
      <img src={img2} alt="" className={styled.item} />
      <img src={img3} alt="" className={styled.item} />
      <img src={img4} alt="" className={styled.item} />
    </div>
  )
}

export default Gallery