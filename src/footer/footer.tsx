import React from 'react'
import FooterHeader from './footer-header'
import FooterNavigation from './footer-nav'
import FooterPolicy from './footer-policy'
import styles from './styles/footer.module.css'
interface Props {
  css?: unknown
  children?: React.ReactNode
  color?: 'white' | 'black' | 'blue'
}

export type FooterProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const { children, color = 'white', className, css = {}, ...htmlProps } = props

  const rootClasses = [styles.footer, styles[color], className, 'cdg-footer']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} ref={ref} color={color} {...htmlProps}>
      {children}
    </div>
  )
})

export default Footer as typeof Footer & {
  Header: typeof FooterHeader
  Nav: typeof FooterNavigation
  Policy: typeof FooterPolicy
}
