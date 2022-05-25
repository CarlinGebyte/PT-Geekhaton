// ======== ADD ========

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { DB } from "../../Firebase/FirebaseConf";
import { types } from "../types/types";

export const addFbAsync = (coctel) => {
  return (dispatch) => {
    addDoc(collection(DB, "cocteles"), coctel)
      .then(() => {
        dispatch(addFbSync(coctel));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addFbSync = (coctel) => {
  return {
    type: types.add,
    payload: coctel,
  };
};

// ======== LIST ========
export const listFbAsync = () => {
  return async (dispatch) => {
    const getCollection = await getDocs(collection(DB, "cocteles"));
    let coctails = [];
    getCollection.forEach((coctail) => {
      coctails.push({
        ...coctail.data(),
      });
    });
    dispatch(listFbSync(coctails));
  };
};

export const listFbSync = (coctails) => {
  return {
    type: types.listBD,
    payload: coctails,
  };
};
// ======== DELETE ========

export const deleteFbAsync = (id) => {
  return async (dispatch) => {
    const getCollection = await collection(DB, "cocteles");
    const q = query(getCollection, where("id", "==", id));
    const getDataQuery = await getDocs(q);
    getDataQuery.forEach((coctail) => {
      deleteDoc(doc(DB, "cocteles", coctail.id));
    });
    dispatch(deleteFbSync(id));
    dispatch(listFbAsync());
  };
};

export const deleteFbSync = (id) => {
  return {
    type: types.delete,
    payload: id,
  };
};
