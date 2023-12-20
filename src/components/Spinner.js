import React, { Component } from 'react'
import loading from './loader.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="LOADING" />
      </div>
    )
  }
}

export default Spinner