import { useEffect } from 'react'
import sdk from '@farcaster/frame-sdk'
import TicTacToe from './components/TicTacToe'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Farcaster Frame SDK
    const init = async () => {
      try {
        const context = await sdk.context
        console.log('Farcaster context:', context)
        sdk.actions.ready()
      } catch (error) {
        console.error('Error initializing Farcaster SDK:', error)
      }
    }
    
    init()
  }, [])

  return (
    <div className="app">
      <TicTacToe />
    </div>
  )
}

export default App

