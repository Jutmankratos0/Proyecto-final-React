import React, { useState } from 'react';
import Header from './Header';
import Seccion from './Seccion';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

    function App() {
    const [peliculas, setPeliculas] = useState([
        { id: 1, titulo: 'El Conjuro', descripcion: 'Un grupo de investigadores paranormales...' },
        { id: 2, titulo: 'Hereditary', descripcion: 'Una familia desciende a la locura...' },
        { id: 3, titulo: 'It', descripcion: 'Un grupo de niños enfrenta a un payaso maligno...' },
        { id: 4, titulo: 'La Llamada', descripcion: 'Una cinta de video que predice muertes...' },
        { id: 5, titulo: 'Midsommar', descripcion: 'Una pareja viaja a un festival en Suecia...' },
    ]);

    return (
        <Router>
        <div>
            <Header />
            <Switch>
            <Route path="/" exact>
                <Seccion peliculas={peliculas} />
            </Route>
            {/* Otras rutas pueden ser añadidas aquí */}
            </Switch>
            <Footer />
        </div>
        </Router>
    );
    }

export default App;
