'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type SidebarContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const sidebarContentRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        className={`cdg-sidebar-content ${styles.sidebarContent} ${className}`}
        ref={sidebarContentRef}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default SidebarContent
