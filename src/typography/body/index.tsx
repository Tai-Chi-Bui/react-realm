import React from 'react'
import { Component } from '../utils'
import styles from './body.module.css'

interface Props {
  variant?: 'body1' | 'body2' | 'body3'
  component?: Component
  weight?: 'none' | 'bold' | 'semibold'
  children: React.ReactNode
}

export type bodyTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props>

const Body: React.FC<bodyTypographyProps> = (props) => {
  const {
    children,
    variant = 'body1',
    weight,
    component,
    className,
    ...htmlProps
  } = props
  const Component = React.useMemo(() => {
    if (component) return component
    return 'p'
  }, [component])

  const classNames = React.useMemo(() => {
    const arr = [
      variant && styles[variant],
      weight && styles[weight],
      styles.body,
      className,
      'cdg-body',
    ]
    return arr.filter(Boolean).join(' ')
  }, [variant, weight, className])

  return (
    <>
      <Component className={classNames} {...htmlProps}>
        {children}
      </Component>
    </>
  )
}

export default Body
