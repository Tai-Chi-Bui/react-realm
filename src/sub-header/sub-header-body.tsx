'use client'
import React from 'react'
import styles from './styles/sub-header-body.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

export type SubHeaderBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderBody = React.forwardRef<HTMLDivElement, SubHeaderBodyProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props

    return (
      <div
        className={`cdg-sub-header-body ${className} ${styles.subHeaderBody}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default SubHeaderBody
