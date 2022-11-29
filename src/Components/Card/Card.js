import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  // const [title, setTitle] = useState("Book");
  return (
    <div className="card-container">
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669393313/vintage_ogyz0n.png"
            alt="skiing"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669392737/waves_ag738p.png"
            alt="waves"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669392947/dogs_cfs4ml.png"
            alt="dogs"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674279/Book%20Store/2_bsjltm.png"
            alt="lost cities"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674477/Book%20Store/3_w5qsat.png"
            alt="Mark Twain"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674492/Book%20Store/6_xunidf.png"
            alt="Lolo"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674247/Book%20Store/1_jpcf0q.png"
            alt="sleigh"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674509/Book%20Store/9_lxlyas.png"
            alt="jugar arte"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674485/Book%20Store/4_h0yahy.png"
            alt="Jane Austen"
          />
        }
      </div>
      <div className="img-container">
        {
          <img
            src="https://res.cloudinary.com/ddauluwus/image/upload/v1669674504/Book%20Store/8_mr3o8g.png"
            alt="cuentos para ninos"
          />
        }
      </div>
    </div>
  );
};

export default Card;
