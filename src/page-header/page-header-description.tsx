import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/page-header-description.module.css'

interface Props {
  children: React.ReactNode
}

export type PageHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const PageHeaderDescription = React.forwardRef<
  HTMLDivElement,
  PageHeaderDescriptionProps
>((props, ref) => {
  const { children, className, ...htmlProps } = props

  const rootClasses = [
    styles.pageHeaderDescription,
    className,
    'cdg-page-header-description',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <p className={rootClasses} ref={ref} {...htmlProps}>
      {children}
    </p>
  )
})

export default PageHeaderDescription
