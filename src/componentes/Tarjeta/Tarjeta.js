import React from 'react';

import '../Tarjeta/Tarjeta.css'


const Tarjeta = (props)=>{

    return (
        <div className='Tarjeta'>
            <div className="producto">
                <div className="imagen">
                    <img src={`img/sillon(${props.id}).png`} alt="" />
                </div>

                <div className="descripcion">
                    <h2>Sillon {props.title}</h2>
                    <p>{props.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;
