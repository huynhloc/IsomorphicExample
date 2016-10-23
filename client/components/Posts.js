import React, {Component} from 'react';
import {connect} from 'react-redux';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: '',
      text: '',
      id: ''
    };
  }

  render() {
    return (
      <div>List post</div>
    );
  }
}

export default connect()(Posts);