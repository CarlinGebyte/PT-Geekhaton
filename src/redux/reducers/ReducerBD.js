import { types } from "../types/types";

const initialState = {
  coctails: [],
};
export const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return {
        coctails: [action.payload],
      };
    case types.delete:
      return {
        coctails: state.coctails.filter(
          (coctail) => coctail.id !== action.payload
        ),
      };
    case types.listBD:
      return {
        coctails: [...action.payload],
      };
    default:
      return state;
  }
};
