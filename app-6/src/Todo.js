import React, { Component } from 'react'

function Todo (props) {
    let list = props.tasks.map( (e, i) => (<h4 key={i}> {e} </h4>) )
  return (
    <div>
        { list }
    </div>
  );
}

export default Todo