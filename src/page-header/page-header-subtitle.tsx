import React from 'react'
import styles from './styles/page-header-description.module.css'

interface Props {
  children: React.ReactNode
}

export type PageHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  PageHeaderSubtitleProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props

  const rootClasses = [
    styles.pageHeaderSubtitle,
    className,
    'cdg-page-header-subtitle',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={rootClasses} ref={ref} {...htmlProps}>
      {children}
    </span>
  )
})

export default PageHeaderSubtitle
