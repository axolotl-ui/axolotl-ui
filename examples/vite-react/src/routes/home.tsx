import React from 'react'

import { Button } from '@axolotl-ui/components'

export const Home: React.FC = (): React.ReactNode => {
  return (
    <div className="flex justify-between gap-2">
      <Button variant="solid">solid</Button>
      <Button variant="off">off</Button>
      <Button variant="outline">outlined</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="text">text</Button>
    </div>
  )
}
