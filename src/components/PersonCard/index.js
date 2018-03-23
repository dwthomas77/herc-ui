import React from 'react';

function PersonCard({ name, email }) {

    const styles = {
        container: {
            width: '100%',
            minWidth: '275px',
            backgroundColor: '#636363',
            paddingBottom: '15px',
        },
        img: {
            borderRadius: '50%',
            height: '75px',
            width: '75px',
            margin: '15px 0 15px 30px',
        },
        name: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            marginLeft: '30px',
        },
        email: {
            color: 'white',
            fontSize: '14px',
            marginLeft: '30px',
        }
    };

    return (
        <div style={styles.container}>
            <img style={styles.img} src='https://placebear.com/g/75/75' />
            <div style={styles.name}>{name}</div>
            <div style={styles.email}>{email}</div>
        </div>
    )
};

PersonCard.defaultProps = {
    name: 'Michelle McMillan',
    email: 'n.mcmillan182@gmail.com',
};

export default PersonCard;