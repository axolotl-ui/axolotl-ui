'use client'

import {
  createContext as createReactContext,
  useContext as useReactContext,
  type Context,
  type Provider
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
  const Context = createReactContext<T | null | undefined>(defaultValue)
  Context.displayName = name

  const useContext = (): T => {
    const context = useReactContext(Context)

    if (!context) {
      const error = new Error(`Can't find context, ${name}`)
      error.name = 'ContextError'

      Error.captureStackTrace(error, useContext)

      throw error
    }

    return context as T
  }

  return [Context.Provider, useContext, Context]
}
