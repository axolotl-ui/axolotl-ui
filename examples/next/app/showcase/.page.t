'use client'

import type React from 'react'

import { Button, Container, Heading, Input, Separator } from '@axolotl-ui/components'
import { style } from '@axolotl-ui/core'

const Page: React.FC = (): React.ReactNode => {
  return (
    <Container
      className={style({
        paddingY: '$8'
      })}
    >
      <Heading>Register</Heading>

      <div>
        <div
          className={style({
            display: 'flex',
            flexDirection: 'column',

            gap: '$2'
          })}
        >
          <Input placeholder='E-Mail' label='E-Mail:' />
          <Input placeholder='Username' label='Username:' />
          <Input placeholder='Password' label='Password:' />
        </div>

        <Separator />

        <div>
          <Button>Submit</Button>
        </div>
      </div>
    </Container>
  )
}

export default Page
