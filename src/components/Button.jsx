import { Component } from 'react';

const Button = (props) => {
  console.log('PROPS', props);
  return (
    <>
      <button>{props.content}</button>
    </>
  );
};

export default Button;
