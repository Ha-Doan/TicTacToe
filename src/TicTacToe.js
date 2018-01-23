import React, {PureComponent} from 'react'
import Cell from './Cell'
import { connect } from 'react-redux'
import tictactoe from './reducers/tictactoe'
class TicTacToe extends PureComponent{

  render(){
  const { board, turn, winner} = this.props

    return(
      <div className="TicTacToe">
        <Cell  x={0} y={0} value = {board[0][0]}/>
        <Cell x={1} y ={0} value = {board[1][0]}/>
        <Cell x={2} y ={0} value ={board[2][0]}/>
        <br />
        <Cell x={0} y ={1} value ={board[0][1]}/>
        <Cell x={1} y ={1} value ={board[1][1]}/>
        <Cell x={2} y ={1} value ={board[2][1]}/>
        <br />
        <Cell x={0} y ={2} value ={board[0][2]}/>
        <Cell x={1} y ={2} value ={board[1][2]}/>
        <Cell x={2} y ={2} value ={board[2][2]}/>
        <br />
        <h3>{winner} won!</h3>
      </div>
    )
  }

}

//const mSTP = ({ board, turn }) => ({ board, turn })
const mapStateToProps = (state) => {
  return {
    board: state.tictactoe.board,
    turn: state.tictactoe.turn,
    winner: state.tictactoe.winner
  }
}

export default connect(mapStateToProps)(TicTacToe)
