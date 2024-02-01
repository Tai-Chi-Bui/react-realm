'use client'
import React from 'react'
import styles from './styles/sub-header-image.module.css'
interface Props {
  className?: string
}

export type SubHeaderImageProps = Props &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof Props>

const SubHeaderImage = React.forwardRef<HTMLImageElement, SubHeaderImageProps>(
  (props, ref) => {
    const { className = '', ...htmlProps } = props

    return (
      <img
        className={`cdg-sub-header-image ${className} ${styles.subHeaderImage}`}
        ref={ref}
        {...htmlProps}
      />
    )
  },
)

export default SubHeaderImage
