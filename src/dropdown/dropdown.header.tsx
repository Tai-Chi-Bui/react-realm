import React, { useContext } from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import { DropdownContext } from './dropdown-context'
interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export type DropdownItemProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

export type DropdownHeaderProps = Props

const DropdownHeader = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  (props, ref) => {
    const { children, onClick } = props
    const dropdownHeaderRef = useDOMRef<HTMLDivElement>(ref)
    const { onHeaderClick } = useContext(DropdownContext)

    const handleHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
      onHeaderClick()
      onClick?.(event)
    }

    return (
      <div ref={dropdownHeaderRef} onClick={handleHeaderClick}>
        {children}
      </div>
    )
  },
)
export default DropdownHeader
