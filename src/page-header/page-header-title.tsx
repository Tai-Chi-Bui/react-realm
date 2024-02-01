import React from 'react'
import styles from './styles/page-header-description.module.css'

interface Props {
  css?: unknown
  children: React.ReactNode
}

export type PageHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const PageHeaderTitle = React.forwardRef<HTMLDivElement, PageHeaderTitleProps>(
  (props, ref) => {
    const { children, css = {}, className, ...htmlProps } = props

    const rootClasses = [
      styles.pageHeaderTitle,
      className,
      'cdg-page-header-title',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <h1 className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </h1>
    )
  },
)

export default PageHeaderTitle
