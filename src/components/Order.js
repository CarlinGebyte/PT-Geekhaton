import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFbAsync, listFbAsync } from "../redux/actions/firebaseActions";
import { ListContainer } from "../styles/styledComp/listStyle";

function Order() {
  const dispatch = useDispatch();

  const { coctails } = useSelector((state) => state.coctails);
  useEffect(() => {
    dispatch(listFbAsync());
  }, [dispatch]);

  const deleteCoctail = (id) => {
    console.log(id)
    dispatch(deleteFbAsync(id));
  };

  return (
    <div>
      <div>
        <h1>Cocteles Agregados</h1>
      </div>
      <div>
        <ListContainer>
          {coctails?.map((coctail) => (
            <div key={coctail.idDrink}>
              <div>{coctail.strDrink}</div>
              <div>{coctail.strInstructions}</div>
              <div>{coctail.strCategory}</div>
              <div>{coctail.strGlass}</div>
              <img src={coctail.strDrinkThumb} alt="Coctail" />
              <button onClick={() => deleteCoctail(coctail.idDrink)}>
                Eliminar
              </button>
            </div>
          ))}
        </ListContainer>
      </div>
    </div>
  );
}

export default Order;
