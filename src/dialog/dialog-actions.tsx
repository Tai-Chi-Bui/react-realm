import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
  isMobile?: boolean
}

export type DialogActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogActions = React.forwardRef<HTMLDivElement, DialogActionsProps>(
  (props, ref) => {
    const {
      children,
      isMobile = false,
      className,
      ...htmlProps
    } = props
    const dialogActionRef = useDOMRef<HTMLDivElement>(ref)

    const classNames = [
      styles.actionsContainer,
      isMobile && styles.actionsContainerResponsive,
      className,
    ]
      .filter(Boolean)
      .join(' ')
    return (
      <div className={classNames} ref={dialogActionRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default DialogActions
