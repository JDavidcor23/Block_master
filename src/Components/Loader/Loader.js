import React from 'react';
import {ThisLoader,ContainerLoader}from './StyledLoader'
const Loader = () => {
    return (
        <ContainerLoader className="ContainerLoader">
            <ThisLoader></ThisLoader>
        </ContainerLoader> 
    );
};

export default Loader;