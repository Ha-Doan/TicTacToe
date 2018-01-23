import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './TicTacToe.css'
import './Cell.css'
import { connect } from 'react-redux'

class Cell extends PureComponent{

  selectCell(){

    this.props.dispatch({
      type: 'SELECT',
      payload: { x: this.props.x,y: this.props.y}
    })
  }
  render(){
    return(
      <div className="Cell" onClick={this.selectCell.bind(this)}>
        <p>&nbsp;{ this.props.value }&nbsp;</p>
      </div>
    )
  }
}


export default connect()(Cell)
