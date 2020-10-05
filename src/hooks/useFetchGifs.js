import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

// Crearemos un customHook que no son mas que funciones y se usan para separar
// logica y poder reutilizarlo. Un Custom hook puede tener estado y usar hooks
// dentro 
export const useFetchGifs = category => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // useEffect no puede ser async
    useEffect(() => {
        getGifs(category)
            .then(gifsData => {
                setState({
                    data: gifsData,
                    loading: false,
                });
            }); 
    },[category]);

    return state;      // {data:[], loading: true}
}

