import React from 'react';

const styles = {
    phoneButton: {
        padding: 16
    },

    phoneButtonEl: {
        color: '#fff',
        width: 12,
        height: 12
    },

    userCard: {
        border: '2px solid black',
        padding: 20
    },

    userDetail: {
        margin: '24px 0'
    }
};

const UserInfo = (props) => {
    return (
        <div className='flex flex-row justify-center'>


            <div style={styles.userCard} className="flex flex-col justify-center align-center user-card">
                <p style={styles.userDetail}>{props.userName}</p>
                <p style={styles.userDetail}>{props.userEmail}</p>
                <div style={styles.userDetail}>
                    <p>{props.userPhone}</p>
                    <button style={styles.phoneButton}><span style={styles.phoneButtonEl}>+</span></button>
                </div>
            </div>
            <div className='user-reward-status'>

            </div>

        </div>
    );
};


export default UserInfo;