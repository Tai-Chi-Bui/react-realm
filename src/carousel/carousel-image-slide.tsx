import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

interface Props {
  imageUrl: string
  active: boolean
  className?: string
}

export type CarouselImageSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLImageElement>, keyof Props>

const CarouselImageSlide = React.forwardRef<
  HTMLDivElement,
  CarouselImageSlideProps
>((props, ref) => {
  const { imageUrl, active, className, ...htmlProps } = props

  const buttonRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <img
      className={`slider-slide ${className ? className : ''} ${styles.carouselImageSlide
        } ${active ? styles.sliderSlideActive : ''}`}
      src={imageUrl}
      {...htmlProps}
    />
  )
})

export default CarouselImageSlide
