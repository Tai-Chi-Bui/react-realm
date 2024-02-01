'use client'

import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/sidebar.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type SidebarActionsProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SidebarActions = React.forwardRef<HTMLDivElement, SidebarActionsProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const sidebarActionsRef = useDOMRef<HTMLDivElement>(ref)
    return (
      <div
        className={`cdg-sidebar-actions ${styles.sidebarActions} ${className}`}
        ref={sidebarActionsRef}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default SidebarActions
