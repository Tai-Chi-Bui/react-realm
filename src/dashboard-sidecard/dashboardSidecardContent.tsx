import React from 'react'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
}

export type DashboardSidecardContentProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecardContent = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardContentProps
>((props, ref) => {
  const { children, ...htmlProps } = props

  return (
    <div
      ref={ref}
      className={`${styles.content} cdg-dashboard-sidecard-content`}
      {...htmlProps}
    >
      {children}
    </div>
  )
})

export default DashboardSidecardContent
