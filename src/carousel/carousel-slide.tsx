import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/carousel.module.css'

interface Props {
  children?: React.ReactNode
  active: boolean
  className?: string
}

export type CarouselSlideProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CarouselSlide = React.forwardRef<HTMLDivElement, CarouselSlideProps>(
  (props, ref) => {
    const {
      children,
      active,
      className = '',
      style,
      ...htmlProps
    } = props

    const slideRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <div
        className={`${className} slider-slide ${styles.sliderSlide} ${active ? styles.sliderSlideActive : ''
          }`}
        {...htmlProps}
        style={style}
      >
        {children}
      </div>
    )
  },
)

export default CarouselSlide
