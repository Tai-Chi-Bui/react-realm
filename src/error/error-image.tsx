import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export type ErrorImageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorImage = React.forwardRef<HTMLDivElement, ErrorImageProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      className = '',
      ...htmlProps
    } = props
    const errorImageRef = useDOMRef<HTMLDivElement>(ref)

    const errorImageClasses = [
      `cdg-error-image`,
      className,
      variant && styles[`${variant}VariantErrorImage`],
      styles.errorImage,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={errorImageClasses} ref={errorImageRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default ErrorImage
