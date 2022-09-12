import "./style.css";
import itemList from "../item";



import React from 'react'

function itemList({data=[]}) {
  return (
    data.map(film => <item key={film.id} info={film}/>)
  );
}

export default itemList

