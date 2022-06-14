import React, { Component, useState } from 'react';

class EventPractice extends Component {
  // 여러개의 input 을 하나의 handle 로 관리하는 법
  // onKeyPress 이벤트

  state = {
    username: '',
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

      // message: e.target.value,

      // 객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됩니다
      // ex)
      // const name = 'variantKey'
      // const object{
      // [name] : 'value'
      // };

      // ->
      // { 'variantKey' : 'value' }
    });
  };

  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="암거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
