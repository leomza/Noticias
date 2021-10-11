import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //Primero debo inicializar el state del Hook personalizado
    const [state, actualizarState] = useState(stateInicial);

    //Este será el nombre del elemento de la Interfaz
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );
    //Luego retorno un arreglo que será el State (es decir, lo que el usuario seleccione)
    return [state, SelectNoticias];
}

export default useSelect;