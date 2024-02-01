import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/snackbar.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type SnackbarTextProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const SnackbarText = React.forwardRef<HTMLHeadingElement, SnackbarTextProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const SnackbarTextRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        className={`cdg-snackbar-text ${className} ${styles.snackbarText}`}
        ref={SnackbarTextRef}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default SnackbarText
