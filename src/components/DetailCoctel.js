import React from "react";
import { Detail } from "../styles/styledComp/detailStyle";
import { GrClose } from 'react-icons/gr'

const DetailCoctel = ({ modal, close }) => {

    console.log(modal)

    const handleClose = () => {
        close(false);
    };

    return (
        <Detail className="modal_container">
            <div className="modal_background">
                <div className="modal_content">

                    <div className="modal_header">
                        <h1>Name: {modal.strDrink}</h1>
                        <button onClick={handleClose}>
                            <GrClose />
                        </button>
                    </div>

                    <div className="modal_body">
                        <p>Instructions: {modal.strInstructions}</p>
                        <p>Alcoholic: {modal.strAlcoholic}</p>
                        <p>Category: {modal.strCategory}</p>
                        <p>Glass: {modal.strGlass}</p>
                        <img src={modal.strDrinkThumb} alt="" />
                    </div>

                </div>
            </div>
        </Detail>
    );
}

export default DetailCoctel;
