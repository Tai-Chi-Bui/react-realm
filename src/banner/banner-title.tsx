'use client'
import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/banner.module.css'

interface Props {
  children?: React.ReactNode
  className?: string
}

export type BannerTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, keyof Props>

const BannerTitle = React.forwardRef<HTMLHeadingElement, BannerTitleProps>(
  (props, ref) => {
    const { children, className = '', ...htmlProps } = props
    const bannerTitleRef = useDOMRef<HTMLDivElement>(ref)
    const renderTitle = () => {
      if (typeof children === 'string') {
        return <>{children}</>
      }
      return children
    }

    return (
      <h1
        className={`cdg-banner-title ${styles.bannerTitle} ${className}`}
        ref={bannerTitleRef}
        {...htmlProps}
      >
        {renderTitle()}
      </h1>
    )
  },
)

export default BannerTitle
