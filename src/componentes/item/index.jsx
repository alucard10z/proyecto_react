import "./styles.css";
import React from 'react';

function item({info}) {
  return (
    <a href="" className="film">
      <img src={info.image} alt=""></img>
      <p>{info.title}</p>
    </a>
  )
}

export default item