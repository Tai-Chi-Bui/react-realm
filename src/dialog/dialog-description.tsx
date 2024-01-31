import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dialog.module.css'

interface Props {
  children?: React.ReactNode
}

export type DialogDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLParagraphElement>, keyof Props>

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props
  const dialogDescriptionRef = useDOMRef<HTMLParagraphElement>(ref)
  const classNames = [styles.description, className].filter(Boolean).join(' ')
  return (
    <div ref={dialogDescriptionRef} className={classNames} {...htmlProps}>
      {children}
    </div>
  )
})

export default DialogDescription
