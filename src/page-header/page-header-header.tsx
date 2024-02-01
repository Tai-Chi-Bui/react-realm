import React from 'react'
import styles from './styles/page-header-description.module.css'

interface Props {
  children: React.ReactNode
}

export type PageHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderHeader = React.forwardRef<
  HTMLDivElement,
  PageHeaderHeaderProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props

  const rootClasses = [
    styles.pageHeaderHeader,
    className,
    'cdg-page-header-header',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={rootClasses} ref={ref} {...htmlProps}>
      {children}
    </div>
  )
})

export default PageHeaderHeader
