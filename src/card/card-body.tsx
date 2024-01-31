import React from 'react'
import styles from './styles/card.module.css'
interface Props {
  children?: React.ReactNode
}

export type CardBodyProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    return (
      <div
        className={`${styles.cardBody} ${className ?? ''}`}
        ref={ref}
        {...htmlProps}
      >
        {children}
      </div>
    )
  },
)

export default CardBody
