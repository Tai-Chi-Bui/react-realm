import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type SnackbarPrefixIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SnackbarPrefixIcon = React.forwardRef<
  HTMLDivElement,
  SnackbarPrefixIconProps
>((props, ref) => {
  const { children, className = '', ...htmlProps } = props
  const snackbarIconRef = useDOMRef<HTMLDivElement>(ref)
  return (
    <div
      className={`cdg-snackbar-prefix-icon ${className} ${styles.snackbarIcon}`}
      ref={snackbarIconRef}
      {...htmlProps}
    >
      {children}
    </div>
  )
})

export default SnackbarPrefixIcon
