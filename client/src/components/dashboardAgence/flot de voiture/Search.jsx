import React, { Fragment } from "react";
import ModalAjoutVoiture from "./ModalAjoutVoiture";
import ModalFiltreVoiture from "./ModalFiltreVoiture";

const Recherche = props => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <form
        className='form-inline'
        style={{ justifyContent: "center" }}
        onSubmit={e => handleSubmit(e)}
      >
        <ModalFiltreVoiture />
        <input
          className='form-control w-50'
          type='search'
          placeholder='Cherchez une voiture'
          aria-label='Search'
        />

        <button className='btn btn-outline-success my-2 my-sm-0 m-1'>
          Recherche
        </button>
        <ModalAjoutVoiture />
      </form>
    </Fragment>
  );
};

export default Recherche;
