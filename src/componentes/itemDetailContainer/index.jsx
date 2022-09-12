import itemDetail from '../itemDetail';
import React, {useState, useEffect} from 'react'




const film = [
  { id: 1, Image: "https://pixabay.com/es/photos/pizza-italiano-hecho-en-casa-queso-3007395/", title:"pizza"},
]

export const itemDetailContainer =() => {

  const [data, setData] = useState({});

  useEffect (() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(film)
      },3000);
    });
    getData.then(res => setData(res));
  }, [])

  return (
    <itemDetail data={data}/>
  );
}


export default itemDetailContainer;