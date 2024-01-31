import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/accordion-button.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
  expand?: boolean
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

export type AccordionButtonProps = Props &
  Omit<React.HTMLAttributes<HTMLButtonElement>, keyof Props>

const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>((props, ref) => {
  const {
    children,
    expand,
    className,
    onMouseDown,
    onKeyDown,
    ...htmlProps
  } = props

  const buttonRef = useDOMRef<HTMLButtonElement>(ref)

  return (
    <button
      aria-expanded={expand}
      aria-controls={props['aria-controls']}
      ref={buttonRef}
      className={`${styles.accordionButton} ${expand ? styles.open : styles.close
        } ${className}`}
      onPointerDown={onMouseDown}
      onKeyDown={onKeyDown}
      type='button'
      {...htmlProps}
    >
      {children}
    </button>
  )
})

export default AccordionButton
