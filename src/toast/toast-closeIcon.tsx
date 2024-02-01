import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
  onClose?: () => void
}

export type ToastCloseIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastCloseIcon = React.forwardRef<HTMLDivElement, ToastCloseIconProps>(
  (props, ref) => {
    const { children, className = '', onClose, ...htmlProps } = props
    const toastCloseIconRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastCloseIconRef}
        className={`${className} ${styles.toastCloseIcon}`}
        {...htmlProps}
        onClick={() => onClose?.()}
      >
        {children}
      </div>
    )
  },
)

export default ToastCloseIcon
