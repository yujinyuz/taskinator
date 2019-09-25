import React from 'react';

const ClearTodos = ({onClear}) => {
  return (
    <i
      className="delete far fa-trash-alt"
      style={{fontSize: '30px', padding: '10px', textAlign: 'center'}}
      onClick={() => onClear()}
    />
  );
};

export default ClearTodos;