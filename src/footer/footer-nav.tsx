import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-nav.module.css'

interface Props {
  children?: React.ReactNode
  gridNumber?: number
  tabletGridNumber?: number
  component?: keyof JSX.IntrinsicElements
}

export type FooterNavigationProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterNavigation = React.forwardRef<
  HTMLDivElement,
  FooterNavigationProps
>((props, ref) => {
  const {
    children,
    ...htmlProps
  } = props


  return (
    <>
      {React.createElement(
        'div',
        {
          ...htmlProps,
          className: `${styles.footerNav} cdg-footer-nav`,
          ref: ref,
        },
        children,
      )}
    </>
  )
})

export default FooterNavigation
