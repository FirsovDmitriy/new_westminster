import styled from './styled.module.scss'

interface GalleryProps {
  images: string[]
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className={styled.gallery}>
      {images?.map(image => (
        <img
          src={image}
          className={styled.item}
          alt=""
        />
      ))}
    </div>
  )
}

export default Gallery