import React, { Component } from 'react';
import { connect } from 'react-redux';

class Response extends Component {
  render(){
    return (
      <div id='Response'>
        {this.props.loading
        ?
          <h1>Getting your data</h1>
        :
          null
        }
        {JSON.stringify(this.props.person)}
        {JSON.stringify(this.props.planet)}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    person: state.person,
    planet: state.planet,
    loading: state.loading
  }
}
export default connect(mapStateToProps)(Response);