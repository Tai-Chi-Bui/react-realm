import React from 'react'
import styles from './styles/footer-policy.module.css'

interface Props {
  children?: React.ReactNode
}

export type FooterPolicyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterPolicy = React.forwardRef<HTMLDivElement, FooterPolicyProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    const rootClasses = [styles.footerPolicy, className, 'cdg-footer-policy']
      .filter(Boolean)
      .join(' ')

    return (
      <div className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default FooterPolicy
