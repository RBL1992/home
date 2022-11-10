import React from 'react';

const styles = {
    featureCard: {
        minHeight: 200,
        maxWidth: 'auto',
        padding: 12,
        border: '2px solid black',
        margin: 24

    }
};

const Card = (props) => {
    return (
        <div>
            <div style={styles.featureCard} className='flex flex-col justify-center align-center'>
                <h3>{props.name}</h3>
                <img src={props.image} alt='card img' />
                <p className='card-room'>Room: {props.room}</p>
                <p className='card-m-date'>Last Maintenance: {props.maintenance}</p>
            </div>
        </div>
    );
};

export default Card;