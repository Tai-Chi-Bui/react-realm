import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import style from './styles/card.module.css'

type Props = {
}

export type CardImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  (props, ref) => {
    const { className, ...htmlProps } = props

    const cardImageRef = useDOMRef<HTMLImageElement>(ref)

    return (
      <img
        className={`${style.cardImage} ${className ?? ''}`}
        {...htmlProps}
        ref={cardImageRef}
      />
    )
  },
)

export default CardImage
