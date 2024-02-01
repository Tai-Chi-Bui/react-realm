import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
}

export type ToastLabelProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastLabel = React.forwardRef<HTMLDivElement, ToastLabelProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const toastLabelRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastLabelRef}
        className={`${className} ${styles.toastLabel}`}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default ToastLabel
