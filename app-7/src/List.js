import React, { Component } from 'react';

function List (props) {
  let = props.tasks.map((e, i) => {
    return <Todo key={i} task={e} />
  });

  return (
    <div>
        { list }
    </div>
  );
}

export default List;