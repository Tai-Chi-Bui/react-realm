import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/error.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
  variant?: 'primary' | 'secondary'
}

export type ErrorDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const ErrorDescription = React.forwardRef<
  HTMLParagraphElement,
  ErrorDescriptionProps
>((props, ref) => {
  const {
    children,
    css = {},
    variant = 'primary',
    className = '',
    ...htmlProps
  } = props
  const errorDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)

  const ErrorDescriptionClasses = [
    `cdg-error-description`,
    className,
    variant && styles[`${variant}VariantErrorDescription`],
    styles.errorDescription,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <p
      className={ErrorDescriptionClasses}
      ref={errorDescriptionRef}
      {...htmlProps}
    >
      {children}
    </p>
  )
})

export default ErrorDescription
