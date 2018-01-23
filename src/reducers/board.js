import {
  SELECT
} from '../actions/select'

const initialState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
export default (state = initialState, {
  type,
  payload
},turn) => {

  switch (type) {
    case SELECT:
      var board = state.map((oldCol, x) =>
        oldCol.map((oldCellvalue, y) => {
          if (x === payload.x && y === payload.y && oldCellvalue === "")
            return turn
          else
            return oldCellvalue
        }))

      return board

    default:
      return state
  }
}
