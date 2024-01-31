import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
}

export type DialogIconProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DialogIcon = React.forwardRef<HTMLDivElement, DialogIconProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props
    const dialogIconRef = useDOMRef<HTMLDivElement>(ref)
    const classNames = [className, styles.iconContainer]
      .filter(Boolean)
      .join(' ')
    return (
      <div className={classNames} ref={dialogIconRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default DialogIcon
