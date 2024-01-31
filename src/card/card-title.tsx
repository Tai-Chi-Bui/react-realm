import React from 'react'
import styles from './styles/card.module.css'
interface Props {
  children?: React.ReactNode
}

export type CardTitleProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const CardTitle = React.forwardRef<HTMLDivElement, CardTitleProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    const renderTitle = () => {
      if (typeof children === 'string') {
        return <h3 className={styles.cardTitle}>{children}</h3>
      }
      return children
    }

    return (
      <div
        className={`${styles.cardTitleContainer} ${className}`}
        ref={ref}
        {...htmlProps}
      >
        {renderTitle()}
      </div>
    )
  },
)

export default CardTitle
