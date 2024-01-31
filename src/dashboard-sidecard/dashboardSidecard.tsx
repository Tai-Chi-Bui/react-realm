import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import DashboardSidecardContent from './dashboardSidecardContent'
import DashboardSidecardHeader from './dashboardSidecardHeader'
import styles from './styles/dashboardSidecard.module.css'

interface Props {
  children?: React.ReactNode
}

export type DashboardSidecardProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const DashboardSidecard = React.forwardRef<
  HTMLDivElement,
  DashboardSidecardProps
>((props, ref) => {
  const {
    children,
    // VariantProps
    // HTMLDiv Props
    ...htmlProps
  } = props

  const dashboardSidecardRef = useDOMRef<HTMLDivElement>(ref)

  return (
    <div
      className={`${styles.container} cdg-dashboard-sidecard`}
      ref={dashboardSidecardRef}
      {...htmlProps}
    >
      {children}
    </div>
  )
})

export default DashboardSidecard as typeof DashboardSidecard & {
  Header: typeof DashboardSidecardHeader
  Content: typeof DashboardSidecardContent
}
