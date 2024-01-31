import React from 'react'
import styles from './styles/menu-list.module.css'

interface Props {
  children?: React.ReactNode
}

export type MenuListProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const MenuList = React.forwardRef<HTMLDivElement, MenuListProps>(
  (props, ref) => {
    const {
      // ComponentProps
      children,
      className = '',
      // HTML Div props
      ...htmlProps
    } = props

    const rootClasses = [styles.menuList, className, 'cdg-menu-list']
      .filter(Boolean)
      .join(' ')

    return (
      <div className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default MenuList
