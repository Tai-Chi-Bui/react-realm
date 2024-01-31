import React from 'react'
import styles from './styles/footer-header.module.css'

interface Props {
  children?: React.ReactNode
}

export type FooterHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterHeader = React.forwardRef<HTMLDivElement, FooterHeaderProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    const rootClasses = [styles.footerHeader, className, 'cdg-footer-header']
      .filter(Boolean)
      .join(' ')

    return (
      <div className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default FooterHeader
