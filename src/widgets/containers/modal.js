import React, { Component } from 'react';
import {createPortal} from 'react-dom';
 
export class ModalContainer extends Component {
  render() {
    return createPortal(
        this.props.children, 
        document.getElementById('modal-container')
        )
  }
}

export default ModalContainer;