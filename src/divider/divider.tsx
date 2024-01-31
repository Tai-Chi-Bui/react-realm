import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'
import styles from './styles/divider.module.css'

interface Props {
  color?: string
  flexItem?: boolean
  absolute?: boolean
  children?: React.ReactNode
  component?: keyof JSX.IntrinsicElements
  orientation?: 'vertical' | 'horizontal'
  variant?: 'fullWidth' | 'inset' | 'middle'
  textAlign?: 'center' | 'right' | 'left' | 'top' | 'bottom'
}

export type DividerProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Divider = React.forwardRef<HTMLElement, DividerProps>((props, ref) => {
  const {
    children,
    className,
    absolute = false,
    flexItem = false,
    textAlign = 'center',
    variant = 'fullWidth',
    orientation = 'horizontal',
    color = 'var(--cdg-color-divider)',
    component = children ? 'div' : 'hr',
    ...htmlProps
  } = props

  const dividerRef = useDOMRef<HTMLElement>(ref)

  const dividerClass = React.useMemo(() => {
    return [
      styles.divider,
      absolute && styles.absolute,
      flexItem && styles.flexItem,
      children && styles.hasChildren,
      variant === 'inset' && styles.variantInset,
      orientation === 'vertical' && styles.orientationVertical,
      variant === 'middle' &&
      orientation === 'horizontal' &&
      styles.variantMiddleOrientationHorizontal,
      variant === 'middle' &&
      orientation === 'vertical' &&
      styles.variantMiddleOrientationVertical,
      children &&
      orientation === 'vertical' &&
      styles.hasChildrenOrientationVertical,
      textAlign === 'right' &&
      orientation === 'horizontal' &&
      styles.textAlignRightOrientationHorizontal,
      textAlign === 'left' &&
      orientation === 'horizontal' &&
      styles.textAlignLeftOrientationHorizontal,
      textAlign === 'top' &&
      orientation === 'vertical' &&
      styles.textAlignTopOrientationVertical,
      textAlign === 'bottom' &&
      orientation === 'vertical' &&
      styles.textAlignBottomOrientationVertical,
      'cdg-divider',
      className,
    ]
      .filter(Boolean)
      .join(' ')
  }, [className, absolute, flexItem, children, variant, orientation, textAlign])

  const bodyClass = React.useMemo(() => {
    return [
      styles.body,
      orientation === 'vertical' && styles.bodyOrientationVertical,
      'cdg-divider-body',
    ]
      .filter(Boolean)
      .join(' ')
  }, [orientation])

  return (
    {
      React.createElement(
        component,
        {
          ...htmlProps,
          className: dividerClass,
          style: { '--divider-color': color },
          ref: dividerRef,
        },
        children && <span className={bodyClass}>{children}</span>,
      )
    }
  )
})

export default Divider
