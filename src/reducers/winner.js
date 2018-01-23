import {SELECT} from '../actions/select'
import board from './board'
import turn from './turn'

const initialState = "?"
export default (state = initialState,{type, payload},board,turn,result) => {

  switch (type) {
    case SELECT:
    if (board)
    {
      var temp
      //check col
      for (var i =0; i < 3; i++)
        result.push(checkLine(board[i],turn))

      //check row
      for (var i=0; i < 3; i++){
        temp = []
        for (var j=0; j < 3; j++)
          temp.push(board[j][i])

            console.log("temp " + temp)

          result.push(checkLine(temp, turn))
          console.log("result " + result)
      }
      //check crossing lines
      temp = []
      temp.push(board[0][0], board[1][1], board[2][2])
      result.push(checkLine(temp,turn))

      temp = []
      temp.push(board[0][2], board[1][1], board[2][0])
      result.push(checkLine(temp, turn))
      console.log(result)
      if (result.includes("Nobody") && !(result.includes("x") || result.includes("o")))
        return "Nobody"
      if (result.includes("x"))
        return "x"
      if (result.includes("o"))
        return "o"
    }
     default:
     return state
  }
}


function checkLine(array,turn)
{
  if (array.includes("x") && !(array.includes("") || array.includes("o")) && turn === "o")
     return "x"
  else if (array.includes("o") && !(array.includes("") || array.includes("x")) && turn === "x")
    return "o"
  else
    return "Nobody"

}
