import React, { type ReactNode } from 'react'

type ComponentsProviderProps = {
  children?: ReactNode
}

export const ComponentsProvider: React.FC<ComponentsProviderProps> = ({
  children
}: ComponentsProviderProps): ReactNode => {
  return children
}
