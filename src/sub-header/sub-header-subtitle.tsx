'use client'
import React from 'react'
import styles from './styles/sub-header-subtitle.module.css'

interface Props {
  children: React.ReactNode
  className?: string
}

export type SubHeaderSubtitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubHeaderSubtitle = React.forwardRef<
  HTMLDivElement,
  SubHeaderSubtitleProps
>((props, ref) => {
  const { children, className = '', ...htmlProps } = props

  return (
    <span
      className={`cdg-sub-header-subtitle ${className} ${styles.subHeaderSubtitle}`}
      ref={ref}
      {...htmlProps}
    >
      {children}
    </span>
  )
})

export default SubHeaderSubtitle
