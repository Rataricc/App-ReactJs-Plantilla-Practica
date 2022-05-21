import React from 'react';
import '../stylesheet/Testimonio.css';

function Testimonio(props) { 
    const {nombre, precio, cuotas, info} = props
    return (
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio"
                src={require(`../img/${props.img}.jpg`)} 
                alt='foto de pc'
            />
            <div className='contenedor-texto'>
                <p className='nombre-testimonio'>
                    <strong>{nombre}</strong>
                </p>
                <p className='precio-testimonio'>
                    <strong>{precio}</strong> <br></br>
                    {cuotas}
                </p>
                <p className='info-testimonio'>
                    {info}
                </p>
            </div>
        </div>
    );  
}
export default Testimonio