import {SELECT} from '../actions/select'

const initialState = "x"
export default (state = initialState,{type, payload}) => {

  switch (type) {
    case SELECT:
      return (state === "x") ? "o" : "x"

     default:
     return state
  }
}
