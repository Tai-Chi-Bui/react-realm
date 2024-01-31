import React from 'react'
import styles from './styles/list-image.module.css'

interface Props {
  isRounded?: boolean
  children?: React.ReactNode
  variant?: 'item' | 'interactive' | 'h5'
}

export type ListImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const ListImage = React.forwardRef<HTMLImageElement, ListImageProps>(
  (props, ref) => {
    const {
      isRounded = false,
      className,
      variant,
      ...htmlProps
    } = props

    const rootClass = React.useMemo(() => {
      return [
        styles.image,
        isRounded && styles.isRounded,
        variant === 'h5' && styles.variantH5,
        'cdg-list-image',
        className,
      ]
        .filter(Boolean)
        .join(' ')
    }, [className, isRounded, variant])

    return (
      <img ref={ref} className={rootClass} {...htmlProps} />
    )
  },
)

export default ListImage
