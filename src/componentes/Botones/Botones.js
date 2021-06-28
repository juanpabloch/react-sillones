import React from 'react';

import '../Botones/Botones.css';

const Botones = (props)=>{
    // let id = 1;
    let [id, setId] = React.useState(1);

    const onClickBtnD = ()=>{
        if(id === 4){
            return 
        }
        id++
        setId(id);  
        props.render(id-1);
    }

    const onClickBtnI = ()=>{
        if(id === 1){
            return 
        }
        id--
        setId(id);  
        props.render(id-1);
    }

    return (
        <div className='containerNumero'>
            <div className='numeros'>
                <span className='numero'>0{id}</span>
                <div className='line'></div>
                <span className='numero numeroCantidad'>04</span>
            </div>
            
            <div className="botones">
                <button className="ui circular icon button" onClick={onClickBtnI}><i aria-hidden="true" className="angle left icon"></i></button>
                <button className="ui circular icon button" onClick={onClickBtnD}><i aria-hidden="true" className="angle right icon"></i></button>
            </div>
        </div>
    );
};

export default Botones;