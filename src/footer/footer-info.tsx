import React from 'react'
import FooterInfoDownload from './footer-info-download'
import FooterInfoSocial from './footer-info-social'
import styles from './styles/footer-info.module.css'
interface Props {
  css?: unknown
  children?: React.ReactNode
}

export type FooterInfoProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfo = React.forwardRef<HTMLDivElement, FooterInfoProps>(
  (props, ref) => {
    const { children, css = {}, className, ...htmlProps } = props

    const rootClasses = [styles.footerInfo, className, 'cdg-footer-info']
      .filter(Boolean)
      .join(' ')

    return (
      <div className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default FooterInfo as typeof FooterInfo & {
  Social: typeof FooterInfoSocial
  Download: typeof FooterInfoDownload
}
