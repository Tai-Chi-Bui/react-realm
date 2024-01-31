import React from 'react'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
}

export type DashboardSidecardHeaderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardHeader = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardHeaderProps
>((props, ref) => {
  const { children, ...htmlProps } = props

  return (
    <div ref={ref} className={`${styles.header}`} {...htmlProps}>
      {children}
    </div>
  )
})

export default DashboardSidecardHeader
