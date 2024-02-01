'use client'
import React from 'react'
import styles from './styles/sub-header-description.module.css'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'h5'
  className?: string
}

export type SubHeaderDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderDescription = React.forwardRef<
  HTMLDivElement,
  SubHeaderDescriptionProps
>((props, ref) => {
  const {
    children,
    className = '',
    variant = 'default',
    ...htmlProps
  } = props

  return (
    <p
      className={`cdg-sub-header-description ${className} ${styles.subHeaderDescription
        } ${styles[`${variant}`]}`}
      ref={ref}
      {...htmlProps}
    >
      {children}
    </p>
  )
})

export default SubHeaderDescription
