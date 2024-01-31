import React from 'react'
import styles from './styles/menu-list-dropdown-item.module.css'

interface Props {
  css?: unknown
  children?: React.ReactNode
  isActive?: boolean
  icon?: React.ReactNode
  isNested?: boolean
  isDisabled?: boolean
}

export type MenuListDropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuListDropdownItem = React.forwardRef<
  HTMLDivElement,
  MenuListDropdownItemProps
>((props, ref) => {
  const {
    // ComponentProps
    children,
    isActive,
    isNested,
    isDisabled,
    icon,
    className = '',
    // StyledComponentProps
    css = {},
    // HTML Div props
    ...htmlProps
  } = props

  const tabIndex = isDisabled || isNested ? -1 : 0

  const rootClasses = [
    styles.menuListDropdownItem,
    isNested && styles.nested,
    isActive && styles.active,
    isDisabled && styles.disabled,
    className,
    'cdg-menu-list-dropdown-item',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} ref={ref} tabIndex={tabIndex} {...htmlProps}>
      {icon ? (
        <div
          className={`${styles.cdgMenuListDropdownIcon} cdg-menu-list-dropdown-icon`}
        >
          {icon}
        </div>
      ) : (
        <></>
      )}
      {children}
    </div>
  )
})

export default MenuListDropdownItem
