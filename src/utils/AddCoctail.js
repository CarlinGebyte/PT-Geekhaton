import { addFbAsync } from "../redux/actions/firebaseActions";

export const addCoctail = (dispatch, coctail) => {
    dispatch(addFbAsync(coctail));
};
