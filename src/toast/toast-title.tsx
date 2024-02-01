import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
}

export type ToastTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const ToastTitle = React.forwardRef<HTMLHeadingElement, ToastTitleProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const toastTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastTitleRef}
        className={`${className} ${styles.toastTitle}`}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default ToastTitle
