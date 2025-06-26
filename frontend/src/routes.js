import React from 'react'
import { Text, Reply } from '@botonic/react'

export const routes = [
  {
    path: 'initial',
    text: /hi|hello|hey/i,
    action: () => (
      <>
        <Text>Hello! Welcome to Orange Research AI! 🧡</Text>
        <Text>
          How can I help you today?
          <Reply payload='search'>Search for research</Reply>
          <Reply payload='about'>About Orange Research</Reply>
          <Reply payload='contact'>Contact us</Reply>
        </Text>
      </>
    ),
  },
  {
    path: 'search',
    payload: 'search',
    action: () => (
      <>
        <Text>I can help you search for research topics!</Text>
        <Text>What would you like to research today?</Text>
      </>
    ),
  },
  {
    path: 'about',
    payload: 'about',
    action: () => (
      <>
        <Text>Orange Research AI is your intelligent research assistant.</Text>
        <Text>We help you discover, analyze, and understand research data faster and more efficiently.</Text>
      </>
    ),
  },
  {
    path: 'contact',
    payload: 'contact',
    action: () => (
      <>
        <Text>You can reach us at:</Text>
        <Text>📧 info@orangeresearch.com</Text>
        <Text>🌐 orangeresearch.com</Text>
      </>
    ),
  },
  {
    path: '404',
    action: () => (
      <Text>I'm not sure I understand. Could you try rephrasing that?</Text>
    ),
  },
] 