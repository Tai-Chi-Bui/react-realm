'use client'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dropdown-menu.module.css'

interface SubmenuProps {
  children?: React.ReactNode
  'aria-labelledby'?: string
}
export const MULTILEVEL_SUBMENU_CLASS_NAME = 'cdg-dropdown-multilevel-submenu'

export type DropdownMenuSubmenuProps = SubmenuProps &
  Omit<React.HTMLAttributes<HTMLUListElement>, keyof SubmenuProps>

const DropdownMenuSubmenu = React.forwardRef<
  HTMLUListElement,
  DropdownMenuSubmenuProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props
  const DropdownMenuSubmenuRef = useDOMRef<HTMLUListElement>(ref)

  return (
    <ul
      ref={DropdownMenuSubmenuRef}
      role='menu'
      aria-labelledby={props['aria-labelledby']}
      className={`${MULTILEVEL_SUBMENU_CLASS_NAME} ${className ?? ''} ${styles.dropdownMenuBoxshadow
        } ${styles.dropdownMenuSubmenu}`}
      {...htmlProps}
    >
      {children}
    </ul>
  )
})

export default DropdownMenuSubmenu
