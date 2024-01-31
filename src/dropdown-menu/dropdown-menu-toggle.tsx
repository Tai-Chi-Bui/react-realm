'use client'
import React, { useContext } from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import DropdownMenuContext from './dropdown-menu-context'

interface Props {
  children?: React.ReactNode
  'aria-haspopup'?: boolean
}

export type DropdownMenuToggleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DropdownMenuToggle = React.forwardRef<
  HTMLDivElement,
  DropdownMenuToggleProps
>((props, ref) => {
  const { children, onClick, ...htmlProps } = props
  const DropdownMenuToggleRef = useDOMRef<HTMLDivElement>(ref)

  const { open, setOpen, onClose, onOpenChange } = useContext(DropdownMenuContext)

  const handleButtonClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (open) {
      onClose?.()
    }
    onOpenChange?.(!open)
    setOpen(!open)
    onClick?.(event)
  }

  return (
    <div
      ref={DropdownMenuToggleRef}
      onClick={handleButtonClick}
      aria-haspopup={props['aria-haspopup']}
      {...htmlProps}
    >
      {children}
    </div>
  )
})

export default DropdownMenuToggle
