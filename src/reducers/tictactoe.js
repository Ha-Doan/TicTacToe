import { combineReducers } from 'redux'
import board from './board'
import turn from './turn'
import winner from './winner'

export default (state={}, action) => {
  var newBoard = board(state.board, action, state.turn)
  var newTurn = turn(state.turn, action)
  var result = []
  return{
  board: newBoard ,
  turn: newTurn,
  winner: winner(state.winner, action, newBoard, newTurn,result)
}
}
