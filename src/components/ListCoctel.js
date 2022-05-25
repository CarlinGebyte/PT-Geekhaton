import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ListCoctel = () => {

    const [drinks, setDrinks] = useState([])

    const [search, setSearch] = useState({
        drink: ''
    });

    const listCoctel = (drink = '') => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
            .then(resp => {
                const coctelList = resp.data.drinks
                setDrinks(coctelList)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        listCoctel(search.drink)
    }, [search])


    const handleChange = ({ target }) => {
        console.log(target.value)

        setSearch({
            [target.name]: target.value
        })
    }

    console.log(drinks)

    return (
        <div>
            <nav>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="drink"
                        value={search.drink}
                        placeholder='search by name'
                    />
            </nav>

            {drinks?.map(d => (
                <div key={d.idDrink}>
                    <p>{d.strDrink}</p>
                    <img src={d.strDrinkThumb} alt="" />
                    {/* <p>{d.strAlcoholic}</p>
                    <p>{d.strInstructions}</p>
                    <p>{d.strCategory}</p>
                    <p>{d.strGlass}</p> */}

                    <button>Agregar</button>
                </div>
            ))}
        </div>
    )
}

export default ListCoctel