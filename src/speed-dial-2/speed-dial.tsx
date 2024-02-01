import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import { SpeedDialActions } from './speed-dial-actions'
import { SpeedDialButton } from './speed-dial-button'
import styles from './styles/speed-dial.module.css'

interface Props {
  className?: string
  children?: React.ReactNode
  showing?: boolean
  actions?: React.ReactNode
  style?: React.CSSProperties
}

export type SpeedDial2Props = Props &
  Omit<React.ButtonHTMLAttributes<HTMLDivElement>, keyof Props>

const SpeedDial2 = React.forwardRef<HTMLDivElement, SpeedDial2Props>(
  (props, ref) => {
    const {
      className,
      children,
      actions,
      style,
      showing = false,
      ...htmlProps
    } = props

    const speedDialRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <div
        className={`cdg-speed-dial ${className} ${styles.speedDial} ${showing && styles.showing
          }`}
        {...htmlProps}
        ref={speedDialRef}
        role='presentation'
        style={{ ...style }}
      >
        {children}
        {showing && actions}
      </div>
    )
  },
)

export default SpeedDial2 as typeof SpeedDial2 & {
  Actions: typeof SpeedDialActions
  Button: typeof SpeedDialButton
}
