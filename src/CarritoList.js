import React, { useState, useEffect } from 'react';

const CarritoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realiza la solicitud GET a tu función Lambda
    fetch('https://vh84teu5dj.execute-api.us-east-2.amazonaws.com/etapaConexionAPIcarrito/lambda_handler', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Elementos del Carrito</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Temperatura: {item.temperatura}, Distancia: {item.distancia}, Timestamp: {item.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarritoList;
