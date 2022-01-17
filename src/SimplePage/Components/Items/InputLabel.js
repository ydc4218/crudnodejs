import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

const EntradaEtiqueta = ({ Id }) => {
  return (
    <div className="container mt-2">
      <InputLabel>{Id}</InputLabel>
    </div>
  );
};

export default EntradaEtiqueta;
