import React from 'react';

const CarPrice = ({ price }) => {
    return (
        <p>
            {new Intl.NumberFormat('ru-RU', {
                style: 'currency',
                currency: 'USD'
            }).format(price)}
        </p>
    );
};

export default React.memo(CarPrice);
