import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
}

export type ToastIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastIcon = React.forwardRef<HTMLDivElement, ToastIconProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const toastIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastIconRef}
        className={`${className} ${styles.toastIcon}`}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default ToastIcon
