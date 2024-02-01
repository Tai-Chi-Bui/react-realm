'use client'
import React from 'react'
import styles from './styles/sub-header-title.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'h5'
  className?: string
}

export type SubHeaderTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderTitle = React.forwardRef<HTMLDivElement, SubHeaderTitleProps>(
  (props, ref) => {
    const {
      children,
      className = '',
      variant = 'default',
      ...htmlProps
    } = props

    return (
      <h1
        className={`cdg-sub-header-title ${className} ${styles.subHeaderTitle
          } ${styles[`${variant}`]}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </h1>
    )
  },
)

export default SubHeaderTitle
