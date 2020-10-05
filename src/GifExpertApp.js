import React, {Fragment, useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    /*const handleAdd = () => {
        // Agregar HunterxHunter
        //setCategories([...categories, 'HunterxHunter']); // cambia es estado anterior por el nuevo
        //setCategories(['HunterxHunter', ...categories]);
        // recordar que no debemos mutar el original osea no podemos usar push
        // otra forma es pasandole un callback con las categorias anteriores o sea el estado anterior
        setCategories(cats => [...categories, 'HunterxHunter']);
    }*/

    return (
        <Fragment>
            <h2 className='app-title'>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <br/>
            <hr/>
            <div className='container'>
                {
                    categories.map(category =>(
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </div>
        </Fragment>
    )
}


export default GifExpertApp;
