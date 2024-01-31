import React from 'react'
import styles from './styles/footer-info-download.module.css'

interface Props {
  children?: React.ReactNode
}

export type FooterInfoDownloadProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const FooterInfoDownload = React.forwardRef<
  HTMLDivElement,
  FooterInfoDownloadProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props
  const rootClasses = [
    styles.footerInfoDownload,
    className,
    'cdg-footer-info-download',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} ref={ref} {...htmlProps}>
      {children}
    </div>
  )
})

export default FooterInfoDownload
