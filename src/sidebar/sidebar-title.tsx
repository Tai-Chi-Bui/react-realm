'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  css?: unknown
  className?: string
}

export type SidebarTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarTitle = React.forwardRef<HTMLDivElement, SidebarTitleProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return (
          <div
            className={`cdg-sidebar-title ${styles.sidebarTitle} ${className}`}
            ref={sidebarTitleRef}
            {...htmlProps}
          >
            {children}
          </div>
        )
      }
      return children
    }
    const sidebarTitleRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        className={`cdg-sidebar-title ${styles.sidebarTitle} ${className}`}
        ref={sidebarTitleRef}
        {...htmlProps}
      >
        {renderTitle()}
      </div>
    )
  },
)

export default SidebarTitle
