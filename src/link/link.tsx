import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/link.module.css'

interface Props {
  href?: string
  target?: string
  external?: boolean
  children?: React.ReactNode
}

export type LinkProps = Props &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, keyof Props>

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    // ComponentProps
    href,
    target,
    external,
    children,
    // html props
    ...htmlProps
  } = props

  const linkRef = useDOMRef<HTMLAnchorElement>(ref)

  return (
    <>
      <a
        className={styles.link}
        ref={linkRef}
        href={href}
        target={target || (external ? '_blank' : undefined)}
        rel={
          target === '_blank' || external ? 'noopener noreferrer' : undefined
        }
        {...htmlProps}
        role='link'
        tabIndex={0}
      >
        {children}
      </a>
    </>
  )
})

export default Link
