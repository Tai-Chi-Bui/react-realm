import React from 'react'
import { useDOMRef } from '../utils/use-dom-ref'

interface Props {
  children?: React.ReactNode
}

export type TagBoxActionProps = Props

const TagBoxAction = React.forwardRef<HTMLDivElement, TagBoxActionProps>(
  (props, ref) => {
    const { children, ...htmlProps } = props

    const tagBoxActionRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <div ref={tagBoxActionRef} {...htmlProps}>
        {children}
      </div>
    )
  },
)

export default TagBoxAction
