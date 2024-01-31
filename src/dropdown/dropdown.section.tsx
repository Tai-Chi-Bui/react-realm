import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/dropdown.module.css'

export interface DropdownSectionBase {
  title?: React.ReactNode
  'aria-label'?: string
  children: React.ReactNode
  isClickable?: boolean
  onClick?: () => void
  isChecked?: boolean
  checkmark?: 'checkbox' | 'tick'
}

export type DropdownSectionProps = DropdownSectionBase &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof DropdownSectionBase>

const DropdownSection = React.forwardRef<HTMLDivElement, DropdownSectionProps>(
  (props, ref) => {
    const {
      children,
      title,
      isClickable,
      className,
      onClick,
      ...htmlProps
    } = props

    const DropdownSectionRef = useDOMRef<HTMLDivElement>(ref)

    const handleOnClick = () => {
      if (!isClickable) {
        return
      }
      onClick?.()
    }

    const rootClasses = [
      styles.dropdownSection,
      className,
      'cdg-dropdown-section',
    ]
      .filter(Boolean)
      .join(' ')

    const titleClasses = [
      styles.dropdownSectionContent,
      isClickable && styles.dropdownSectionContentClickable,
      'cdg-dropdown-section-title',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div {...htmlProps} className={rootClasses} ref={DropdownSectionRef}>
        {title && (
          <div className={titleClasses} onClick={handleOnClick}>
            {title}
          </div>
        )}
        {children}
      </div>
    )
  },
)

export default DropdownSection
