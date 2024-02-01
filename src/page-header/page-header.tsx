import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import PageHeaderDescription from './page-header-description'
import PageHeaderHeader from './page-header-header'
import PageHeaderSubtitle from './page-header-subtitle'
import PageHeaderTitle from './page-header-title'
import styles from './styles/page-header-description.module.css'

interface Props {
  children?: React.ReactNode
  color?: 'white' | 'blue'
}

export type PageHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

// eslint-disable-next-line react-refresh/only-export-components
const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (props, ref) => {
    const { children, color = 'white', className, ...htmlProps } = props

    const rootClasses = [
      styles.pageHeader,
      styles[color],
      className,
      'cdg-page-header',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={rootClasses} ref={ref} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default PageHeader as typeof PageHeader & {
  Title: typeof PageHeaderTitle
  Subtitle: typeof PageHeaderSubtitle
  Header: typeof PageHeaderHeader
  Description: typeof PageHeaderDescription
}
