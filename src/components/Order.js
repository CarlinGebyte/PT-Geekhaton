import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFbAsync, listFbAsync } from "../redux/actions/firebaseActions";

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
        <div>
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
        </div>
      </div>
    </div>
  );
}

export default Order;
