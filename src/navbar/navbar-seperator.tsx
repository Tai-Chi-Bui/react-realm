import React, { PropsWithChildren } from 'react'
import styles from './styles/navbar-seperator.module.css'

export type NavbarSeperatorProps = PropsWithChildren<
  {} & React.HTMLAttributes<HTMLDivElement>
>

export const NavbarSeperator = React.forwardRef<
  HTMLDivElement,
  NavbarSeperatorProps
>((props, ref) => {
  const { children, ...htmlProps } = props
  return (
    <div className={styles.navbarSeperator} ref={ref} {...htmlProps}>
      {children}
    </div>
  )
})
