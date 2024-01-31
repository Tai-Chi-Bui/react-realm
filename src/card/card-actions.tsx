import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import styles from './styles/card.module.css'

interface Props {
  children?: React.ReactNode
}

export type CardActionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    return (
      <div
        className={`${styles.cardActions} ${className ?? ''}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default CardAction
