import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
  className?: string
}

export type SnackbarSuffixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarSuffixIcon = React.forwardRef<
  HTMLDivElement,
  SnackbarSuffixIconProps
>((props, ref) => {
  const { children, className = '', onClose, ...htmlProps } = props
  const snackbarSuffixIconRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <div
      className={`cdg-snackbar-suffix-icon ${className} ${styles.snackbarSuffixIcon}`}
      ref={snackbarSuffixIconRef}
      {...htmlProps}
      onClick={(e) => {
        e.stopPropagation()
        onClose?.()
      }}
    >
      {children}
    </div>
  )
})

export default SnackbarSuffixIcon
