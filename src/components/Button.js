import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPerson, getPlanet } from './../ducks/reducer';

class Button extends Component {
  render(){
    return (
      <div id='Button'>
        <button onClick={this.props.getPerson}>get starwars person</button>
        <button onClick={this.props.getPlanet}>get starwars planet</button>
      </div>
    )
  }
}
export default connect(null, { getPerson, getPlanet })(Button);