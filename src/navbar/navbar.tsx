import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import NavbarActions from './navbar-actions'
import NavbarBrand from './navbar-brand'
import { NavbarLinks } from './navbar-links'
import { NavbarSeperator } from './navbar-seperator'
import styles from './styles/navbar.module.css'

interface Props {
  children?: React.ReactNode
  variant?: 'portal' | 'website'
  color?: 'blue' | 'white'
}

export type NavbarProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  const {
    // ComponentProps
    children,
    color = 'blue',
    variant = 'portal',
    className = '',
    // HTMLDiv props
    ...htmlProps
  } = props

  // const variantProps = {
  //   color: color,
  //   variant: variant,
  // }

  const rootClasses = [
    styles.navbar,
    color === 'blue' && styles.blue,
    color === 'white' && styles.white,
    variant === 'website' && styles.website,
    `cdg-navbar-${color}`,
    className,
    'cdg-navbar',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav className={rootClasses} ref={ref} role='navigation' {...htmlProps}>
      {children}
    </nav>
  )
})

export default Navbar as typeof Navbar & {
  Brand: typeof NavbarBrand
  Actions: typeof NavbarActions
  Links: typeof NavbarLinks
  Separator: typeof NavbarSeperator
}
