import React from 'react'
import { Text, Reply } from '@botonic/react'

export const routes = [
  {
    path: 'initial',
    text: /hi/i,
    action: () => (
      <>
        <Text>Hello! Welcome to Orange Research AI! 🍊</Text>
        <Text>
          How can I help you today?
          <Reply payload='search'>Search research</Reply>
          <Reply payload='about'>About us</Reply>
        </Text>
      </>
    ),
  },
]
