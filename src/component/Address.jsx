import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Address = () => {
  const { state } = useLocation();
  const { id } = useParams();

  console.log(id);
  return (
    <div class="container-fluid">
      <div class="row nana">

        <div class="col-5 WESC">
      <h1>{ id}</h1>

          <h1>{state.form.name}</h1>
        </div>

        <div class="col-5 RESC">
          <p>{state.form.history}</p>

        </div>
      </div>

      <div class="row nana"> 
        <div class="col-5 gambar">
         <img src={state.form.gambar}/>
        </div>
      </div>

    </div>

  );
};

export default Address;

