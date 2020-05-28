import React from 'react';
import './Item.css';

function Item(props) {
  return (
    <div className="Item">
      <p>{props.item.name}</p>
      <p>{props.item.snippet}</p>
      <a href={props.item.displayUrl}>{props.item.displayUrl}</a>
    </div>
  );
}

export default Item;
