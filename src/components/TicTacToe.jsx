import { useState, useEffect } from 'react'
import './TicTacToe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [gameStatus, setGameStatus] = useState('Your turn!')
  const [score, setScore] = useState({ player: 0, cpu: 0, draw: 0 })

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ]

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { winner: currentBoard[a], combo }
      }
    }
    return null
  }

  const isBoardFull = (currentBoard) => {
    return currentBoard.every(cell => cell !== null)
  }

  const getAvailableMoves = (currentBoard) => {
    return currentBoard.map((cell, index) => cell === null ? index : null).filter(val => val !== null)
  }

  const getCPUMove = (currentBoard) => {
    // Medium difficulty: CPU blocks player wins and takes its own wins
    const availableMoves = getAvailableMoves(currentBoard)
    
    // Check if CPU can win
    for (let move of availableMoves) {
      currentBoard[move] = 'O'
      if (checkWinner(currentBoard)) {
        currentBoard[move] = null
        return move
      }
      currentBoard[move] = null
    }
    
    // Check if player is about to win and block it
    for (let move of availableMoves) {
      currentBoard[move] = 'X'
      if (checkWinner(currentBoard)) {
        currentBoard[move] = null
        return move
      }
      currentBoard[move] = null
    }
    
    // Otherwise, make a random move
    const randomIndex = Math.floor(Math.random() * availableMoves.length)
    return availableMoves[randomIndex]
  }

  const handleCellClick = (index) => {
    if (board[index] || !isPlayerTurn) return

    const result = checkWinner(board)
    if (result || isBoardFull(board)) return

    const newBoard = [...board]
    newBoard[index] = 'X'
    setBoard(newBoard)
    setIsPlayerTurn(false)
    setGameStatus('CPU is thinking...')

    // Check if player won
    const playerWin = checkWinner(newBoard)
    if (playerWin) {
      setGameStatus('🎉 You won!')
      setScore(prev => ({ ...prev, player: prev.player + 1 }))
      return
    }

    if (isBoardFull(newBoard)) {
      setGameStatus("It's a draw!")
      setScore(prev => ({ ...prev, draw: prev.draw + 1 }))
      return
    }

    // CPU's turn
    setTimeout(() => {
      const cpuMove = getCPUMove(newBoard)
      if (cpuMove !== null) {
        newBoard[cpuMove] = 'O'
        setBoard(newBoard)

        const cpuWin = checkWinner(newBoard)
        if (cpuWin) {
          setGameStatus('💻 CPU won!')
          setScore(prev => ({ ...prev, cpu: prev.cpu + 1 }))
        } else if (isBoardFull(newBoard)) {
          setGameStatus("It's a draw!")
          setScore(prev => ({ ...prev, draw: prev.draw + 1 }))
        } else {
          setGameStatus('Your turn!')
          setIsPlayerTurn(true)
        }
      }
    }, 500)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsPlayerTurn(true)
    setGameStatus('Your turn!')
  }

  const resetScore = () => {
    setScore({ player: 0, cpu: 0, draw: 0 })
    resetGame()
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="game-card">
        <h1 className="title">FarcasTicTacToe</h1>
        
        <div className="score-board">
          <div className="score-item player">
            <span className="score-label">You</span>
            <span className="score-value">{score.player}</span>
          </div>
          <div className="score-item draw">
            <span className="score-label">Draw</span>
            <span className="score-value">{score.draw}</span>
          </div>
          <div className="score-item cpu">
            <span className="score-label">CPU</span>
            <span className="score-value">{score.cpu}</span>
          </div>
        </div>

        <div className="status">{gameStatus}</div>

        <div className="board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={`cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'player' : ''} ${cell === 'O' ? 'cpu' : ''}`}
              onClick={() => handleCellClick(index)}
              disabled={!isPlayerTurn || cell !== null}
            >
              {cell}
            </button>
          ))}
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={resetGame}>
            New Game
          </button>
          <button className="btn btn-secondary" onClick={resetScore}>
            Reset Score
          </button>
        </div>

        <div className="info">
          <p>You are <strong>X</strong> • CPU is <strong>O</strong></p>
        </div>
      </div>
    </div>
  )
}

export default TicTacToe

