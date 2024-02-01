'use client'
import React from 'react'
import styles from './styles/sub-header-header.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

export type SubHeaderHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderHeader = React.forwardRef<HTMLDivElement, SubHeaderHeaderProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props

    return (
      <div
        className={`cdg-sub-header-header ${className} ${styles.subHeaderHeader}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default SubHeaderHeader
