import React from 'react'
import defaults from './defaults'

if (!React.createContext) {
  throw new Error('React.createContext not defined. Try using react > 16')
}

export const {Provider, Consumer} = React.createContext({
  ...defaults,
})
