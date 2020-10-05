import React, {Fragment} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';
//import { getGif } from '../helpers/getGifs';

// Componente para mostrar una coleccion de elementos
const GifGrid = ({category}) => {
    /*const [gifs, setGifs] = useState([]);
    // es como ComponentDidMount se ejecuta cuando el componente es renderizado
    // por primera vez la lista vacia es una lista de dependencias
    useEffect(() => {
        getGif(category)
            //.then(gifsData => setGifs(gifsData))
            .then(setGifs);         
    }, [category]);
    // si la categoria cambia debemos ejecutar otra vez getGif*/
    
    const {data:gifs, loading} = useFetchGifs(category); 
    // puedo renombrar cuando hago desestructuracion

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn'>
                {category}
            </h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    gifs.map(gif => (
                        <GifGridItem key={gif.id} {...gif}/> 
                    ))
                }
            </div>
        </Fragment>
    );
};
// {...gif} manda las propiedades por separada o sea id, title y url 
// asi es mas facil usar desestructuracion en GifGridItem

GifGrid.propTypes = {

};

export default GifGrid;

// React cada vez que hay un cambio en un estado renderiza el componente
// otra vez por lo que ejecuta el metodo getGif() cada vez que hay un cambio
// por lo que hay que usar otro hook el useEffect