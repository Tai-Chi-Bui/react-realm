'use client'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dropdown-menu.module.css'

interface MenuProps {
  children?: React.ReactNode
}

export type DropdownMenuMenuProps = MenuProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof MenuProps>

export const MULTILEVEL_MENU_CLASS_NAME = 'cdg-dropdown-multilevel-menu'

const DropdownMenuMenu = React.forwardRef<
  HTMLUListElement,
  DropdownMenuMenuProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props

  const DropdownMenuMenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <ul
      ref={DropdownMenuMenuRef}
      className={`${className ?? ''} ${MULTILEVEL_MENU_CLASS_NAME} ${styles.dropdownMenuBoxshadow
        }`}
      {...htmlProps}
    >
      {children}
    </ul>
  )
})

export default DropdownMenuMenu
