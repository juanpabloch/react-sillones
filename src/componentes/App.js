import React from 'react';

import '../componentes/App.css'

import Tarjeta from './Tarjeta/Tarjeta';
import Botones from './Botones/Botones';


const productos = [
    {
        id: 1, 
        title: 'Numero 1',
        descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda incidunt aut nostrum, adipisci eaque magnam! Est doloremque labore nobis, expedita odit consectetur voluptas omnis optio dolorem enim!'
    },

    {
        id: 2, 
        title: 'Numero 2',
        descripcion: 'quo odit perspiciatis ut soluta laudantium mollitia omnis cum sit aperiam maiores dicta nam, error placeat id expedita neque architecto.'
    },

    {
        id: 3, 
        title: 'Numero 3',
        descripcion: 'laboriosam asperiores accusamus dolore vitae obcaecati vero! Accusantium incidunt fuga dolorum ratione? Officiis distinctio rem in corporis neque expedita eos aliquid aut illo.'
    },

    {
        id: 4, 
        title: 'Numero 4',
        descripcion: 'Tempora ad hic nulla ea mollitia veniam, quaerat repellendus, laborum quam ipsa ipsam iste! Ut provident atque quis eius, dignissimos accusamus, voluptate reprehenderit ipsum esse saepe ipsa.'
    }
]

const App = ()=>{
    
    const resultado = productos.map( tarjeta=>{
        return <Tarjeta id={tarjeta.id} title={tarjeta.title} descripcion={tarjeta.descripcion} key={tarjeta.id} />
    })

    let [resultadoFinal, setResultadoFinal] = React.useState(resultado[0]);
    
    const renderTarjeta = (id)=>{
        setResultadoFinal(resultado[id])
    }

    return (
        <div className="body" style={{backgroundColor: 'bisque'}}>
            <div className='container'>
                <h1>Deco Hogar</h1>
                <div className="tarjetas-container">
                    <div className="tarjetas">
                        {resultadoFinal}
                    </div>
                </div>
                <Botones render={renderTarjeta} />
            </div>
        </div>
    )
}

export default App;