import axios from 'axios';
import React, { useState } from 'react';
import { ItenBeer} from '../../types/beers'


const Beer = () => {

  const[listBeer, setListBeer] = useState<ItenBeer[]>([])

  const renderBeer = () => {
    axios.get(`https://api.punkapi.com/v2/beers/?per_page=8`)
      .then(resposta => setListBeer(resposta.data))
  }
 
  return (
    <div className="food-beer-list food-shop">
      
      <h1>Tipos de Cerveja</h1>
      <button onClick={renderBeer}>Buscar Cerveja</button>
      <div className="beers-list">
          {
            listBeer !== null &&
            listBeer.map((item: ItenBeer) => (
              <div className="beer" key={item.id}>
                <img src={item.image_url} alt="Buzz" />
                <h3>{item.name}</h3>
                <span>{item.tagline}</span>
                <small>{item.description}</small>
              </div>
            ))
          }
      </div>
    </div>
  );
}

export default Beer;