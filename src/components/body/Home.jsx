import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  console.log('testerrr', state)

  return{
        dishes :state.dishes
  }
}

export class Home extends Component {
  render() {
    document.title = "Home";
    return (
      <div>Home</div>
    )
  }
}

export default connect(mapStateToProps)(Home);