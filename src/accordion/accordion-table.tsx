import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/accordion-table.module.css'

interface Props {
  children: React.ReactNode
}

export type AccordionTableProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const AccordionTable = React.forwardRef<HTMLDivElement, AccordionTableProps>(
  (props, ref) => {
    const { children, className, ...htmlProps } = props

    const accordionTableRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <div
        className={`${styles.accordionTable} ${className}`}
        {...htmlProps}
        ref={accordionTableRef}
      >
        {children}
      </div>

    )
  },
)

export default AccordionTable
