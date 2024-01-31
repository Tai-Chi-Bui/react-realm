import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/footer-info-social.module.css'
interface Props {
  children?: React.ReactNode
}

export type FooterInfoSocialProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoSocial = React.forwardRef<
  HTMLDivElement,
  FooterInfoSocialProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props

  const rootClasses = [
    styles.footerInfoSocial,
    className,
    'cdg-footer-info-social',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} ref={ref} {...htmlProps}>
      {children}
    </div>
  )
})

export default FooterInfoSocial
