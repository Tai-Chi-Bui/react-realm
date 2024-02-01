import React from 'react'
import CssInjection from '../../utils/objectToCss/CssInjection'
import styles from './link.module.css'

interface Props {
  variant?: 'link1' | 'link2' | 'link3'
  weight?: 'semibold' | 'bold'
  children: React.ReactNode
}

export type linkTypographyProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const Link: React.FC<linkTypographyProps> = (props) => {
  const {
    children,
    weight,
    variant = 'link1',
    className,
    ...htmlProps
  } = props

  const classNames = React.useMemo(() => {
    const arr = [
      styles.link,
      variant && styles[variant],
      weight && styles[weight],
      className && className,
      'cdg-link',
    ]
    return arr.filter(Boolean).join(' ')
  }, [className, variant, weight])

  return (
    <>
      <a {...htmlProps} className={classNames}>
        {children}
      </a>
    </>
  )
}

export default Link
