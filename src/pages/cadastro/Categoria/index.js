import React from 'react';

import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function Categoria(){
    return ( 
        <PageDefault>
            <h1>cadastro de categoria</h1>
            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    );
};

export default Categoria;