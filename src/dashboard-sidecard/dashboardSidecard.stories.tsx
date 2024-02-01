import { Meta } from '@storybook/react'
import React from 'react'
// import Box from '../box'
import Button from '../button'
import SearchField from '../searchfield'
import DashboardSidecard from './index'

export const Default: React.FC = () => {
  const Card = (
    <div
      style={{
        backgroundColor: 'white',
        color: 'blue',
        borderRadius: '8px',
        width: '100%',
        height: '11rem',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontWeight: '500', fontSize: '1.2em' }}>Title</div>
      <div
        style={{
          fontSize: '0.8em',
          textAlign: 'justify',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic quae,
        adipisci tempore minus beatae itaque tenetur.
      </div>
    </div>
  )
  return (
    <div>
      <h3>Default</h3>
      <DashboardSidecard>
        <DashboardSidecard.Header>My header</DashboardSidecard.Header>
        <DashboardSidecard.Content>
          {Card}
          {Card}
          <SearchField />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button style={{ width: '48%' }}>Action</Button>
            <Button variant='danger' style={{ width: '48%' }}>
              Warning
            </Button>
          </div>
        </DashboardSidecard.Content>
      </DashboardSidecard>
    </div>
  )
}

const meta = {
  title: 'Example/Dashboard Sidecard',
  component: Default,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Default>

export default meta
