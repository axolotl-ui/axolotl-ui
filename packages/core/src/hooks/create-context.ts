'use client'

import {
  type Context,
  createContext as createReactContext,
  type Provider,
  useContext as useReactContext
} from 'react'

export type CreateContextProps<T> = {
  name?: string
  defaultValue?: T | null | undefined
}

export type CreateContextReturnProps<T> = [
  Provider<T | null | undefined>,
  () => T,
  Context<T | null | undefined>
]

export const createContext = <T>({
  name = 'Context',
  defaultValue = null
}: CreateContextProps<T> = {}): CreateContextReturnProps<T> => {
  const Context: Context<T | null | undefined> = createReactContext<T | null | undefined>(
    defaultValue
  )
  Context.displayName = name

  const useContext = (): T => {
    const context: T | null | undefined = useReactContext(Context)

    if (!context) {
      const error: Error = new Error(`Can't find context, ${name}`)
      error.name = 'ContextError'

      Error.captureStackTrace(error, useContext)

      throw error
    }

    return context as T
  }

  return [Context.Provider, useContext, Context]
}
