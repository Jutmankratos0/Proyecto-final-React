import React from 'react';

    function Seccion({ peliculas }) {
    return (
        <section>
        <h2>Lista de Películas</h2>
        <ul>
            {peliculas.map(pelicula => (
            <li key={pelicula.id}>
                <h3>{pelicula.titulo}</h3>
                <p>{pelicula.descripcion}</p>
            </li>
            ))}
        </ul>
        </section>
    );
    }

export default Seccion;
