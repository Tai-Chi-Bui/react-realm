'use client'
import React from 'react'
import styles from './styles/subBanner.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type SubBannerDescriptionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const SubBannerDescription = React.forwardRef<
  HTMLDivElement,
  SubBannerDescriptionProps
>((props, ref) => {
  const { children, className = '', ...htmlProps } = props

  return (
    <p
      ref={ref}
      {...htmlProps}
      className={`cdg-sub-banner-description ${className} ${styles.subBannerDescription}`}
    >
      {children}
    </p>
  )
})

export default SubBannerDescription
