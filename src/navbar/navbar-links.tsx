import React, { PropsWithChildren } from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/navbar-links.module.css'

export type NavbarLinksProps = PropsWithChildren<
  {} & React.HTMLAttributes<HTMLUListElement>
>

export const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
  (props, ref) => {
    const { children, ...htmlProps } = props

    const listOfChildren = React.Children.toArray(children)

    return (
      <ul className={styles.navbarLinks} ref={ref} {...htmlProps}>
        {listOfChildren.map((child, index) => {
          return <li key={index}>{child}</li>
        })}
      </ul>
    )
  },
)
