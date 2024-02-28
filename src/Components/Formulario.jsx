import React, { useState } from 'react';
import Card from './Card';

const Formulario = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
    const [mostrarCard, setMostrarCard] = useState(false);

    const eventHandleSubmit = (e) => {
        e.preventDefault();

        if (input1.trim().length < 3 || !input1.trim() || input1.trim()[0] === ' ' || input2.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        } else {
        setError('');
        // Renderizar el componente <Card /> con la información ingresada
        setMostrarCard(true);
        }
    };

    return (
        <div className='container-fluid'>
            <h1 className="text-center">Elige un Color Hexadecimal</h1>
            <div className="row">
                <form className='col-md-6 mx-auto' onSubmit={eventHandleSubmit}>
                <input
                    className="form-control m-1"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    />
                <input
                    className="form-control m-1"
                    type="text"
                    placeholder="Ingresa tu color favorito (formato HEX)"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    />
                <button className="btn btn-primary mt-3" type="submit">Enviar</button>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
                {mostrarCard && <Card input1={input1} input2={input2} />}
                </form>
        </div>
    </div>
    );
    };

export default Formulario;