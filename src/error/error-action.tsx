import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export type ErrorActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ErrorAction = React.forwardRef<HTMLDivElement, ErrorActionProps>(
  (props, ref) => {
    const {
      children,
      variant = 'primary',
      className = '',
      ...htmlProps
    } = props
    const errorActionRef = useDOMRef<HTMLDivElement>(ref)

    const errorActionClasses = [
      `cdg-error-action`,
      className,
      variant && styles[`${variant}VariantErrorAction`],
      styles.errorTitle,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={errorActionClasses} ref={errorActionRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default ErrorAction
