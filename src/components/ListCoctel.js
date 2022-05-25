import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailCoctel from "./DetailCoctel";
import { ListContainer } from "../styles/styledComp/listStyle";
import { addCoctail } from "../utils/AddCoctail";
import { useDispatch } from "react-redux";

const ListCoctel = () => {
  const [drinks, setDrinks] = useState([]);

  const dispatch = useDispatch();

  const [search, setSearch] = useState({
    drink: "",
  });

  const [detail, setDetail] = useState({});

  const [modal, setModal] = useState(false);

  const listCoctel = (drink = "") => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then((resp) => {
        const coctelList = resp.data.drinks;
        setDrinks(coctelList);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    listCoctel(search.drink);
  }, [search]);

  const handleChange = ({ target }) => {
    console.log(target.value);

    setSearch({
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <nav>
        <input
          type="text"
          onChange={handleChange}
          name="drink"
          value={search.drink}
          placeholder="search by name"
        />
      </nav>

      <ListContainer>
        {drinks?.map((d) => (
          <div key={d.idDrink}>
            <p>
              <strong>Name: </strong>
              {d.strDrink}
            </p>
            <img
              src={d.strDrinkThumb}
              alt=""
              onClick={() => {
                setModal(true);
                setDetail(d);
              }}
            />

            <button onClick={() => addCoctail(dispatch, d)}>Agregar</button>
          </div>
        ))}
      </ListContainer>

      {modal ? <DetailCoctel modal={detail} close={setModal} /> : ""}
    </div>
  );
};

export default ListCoctel;
