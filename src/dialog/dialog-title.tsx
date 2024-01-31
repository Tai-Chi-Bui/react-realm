import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
}

export type DialogTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props
    const dialogTitleRef = useDOMRef<HTMLHeadingElement>(ref)
    const classNames = [styles.title, className].filter(Boolean).join(' ')
    return (
      <div className={classNames} ref={dialogTitleRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default DialogTitle
