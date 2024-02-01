import { Document } from '@contentful/rich-text-types'
import React from 'react'
import CssInjection from '../utils/objectToCss/CssInjection'
import { useDOMRef } from '../utils/use-dom-ref'
import RenderDocument from './renderDocument'
import styles from './styles/richtextRender.module.css'

interface Props {
  document?: Document
  platform?: 'react' | 'html'
}

export type RichTextRenderProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const RichTextRender = React.forwardRef<HTMLInputElement, RichTextRenderProps>(
  (props, ref) => {
    const {
      // Component
      document,
      platform = 'react',
      // element
      ...htmlProps
    } = props

    const richTextRenderRef = useDOMRef<HTMLDivElement>(ref)

    return (
      <>
        <div
          className={styles.richTextRender}
          ref={richTextRenderRef}
          {...htmlProps}
        >
          {document ? RenderDocument(document, platform) : null}
        </div>
      </>
    )
  },
)
export default RichTextRender
