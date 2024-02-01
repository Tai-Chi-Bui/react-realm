import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
}

export type ToastMessageProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastMessage = React.forwardRef<HTMLDivElement, ToastMessageProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const toastMessageRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastMessageRef}
        className={`${className ?? ''} ${styles.toastMessage}`}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default ToastMessage
