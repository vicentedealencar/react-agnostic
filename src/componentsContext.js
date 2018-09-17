import React from 'react'
import defaults from './defaults'

export const {Provider, Consumer} = React.createContext({
  ...defaults,
})
