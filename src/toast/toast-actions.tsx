import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/toast.module.css'

interface Props {
  children?: React.ReactNode
}

export type ToastActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const ToastActions = React.forwardRef<HTMLDivElement, ToastActionsProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const toastActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        ref={toastActionsRef}
        className={`${className} ${styles.toastActionsContainer}`}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default ToastActions
