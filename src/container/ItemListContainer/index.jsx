
import ItemCount from '../../componentes/ItemCount';
import React, {useState, useEffect} from 'react';
import './styles.css';



const film = [
  { id: 1, Image: "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/", title:"pizza"},
]

const ItemListContainer = () => {
  const  [data, ] = useState([]);

  useEffect (() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(film);
      },3000);
    });
    getData.then(res => console.log(res));


  }, [])
  
  const onAdd = (quantity) => {
    console.log("se compro",quantity,"unidad");
    

  }
  return (
    <>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    <itemList data={data} />
    </>
  );
}

export default ItemListContainer;