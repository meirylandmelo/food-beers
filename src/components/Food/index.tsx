import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Category } from '../../types/categorias';
import { Listing } from '../../types/listagem';

const Foods = () => {

    const [foodCategory, setFoodCategory] = useState<Category[]>([])
    const [listFood, setListFood] = useState<Listing[]>([])
    const [category, setCategory] = useState<String>('')
    const [search, setSearch] = useState<String>('')

    useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(resposta => setFoodCategory(resposta.data.categories))
    }, [])

    useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(resposta => setListFood(resposta.data.meals))
    }, [category])

    useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(resposta => setListFood(resposta.data.meals))
   }, [search])

  return (
    <div className="food-beer-list food-shop">
      <h1>Tipos de pratos</h1>
      <p>
        Selecione uma categoria ou digite a comida (em inglês):
        <input type="text" placeholder="Digite a comida..." onChange={(event) =>  {
          setSearch(event.target.value)}
         } />
      </p>
      <ul>
        {foodCategory.map((item: Category) => (
          <li key={item.idCategory} onClick={() => setCategory(item.strCategory)}> 
            {item.strCategory}
          </li>
        ))}   
      </ul>
      <h2>Tipo selecionado: <strong>{search}</strong></h2>
      <div className="food-container">
        {listFood !== null &&
        listFood.map((item: Listing) =>(
          <div className="food-item" key={item.idMeal}>
              <img src={item.strMealThumb} alt="Food" />
              <p>{item.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;