import React from 'react';

import './WalletId.css';
const WalletId = ({id}) => {
    return (
        <div className={'clearFix'}>
            <span className={'WalletId'}>
                {id}
            </span>
        </div>
    );
};

export default WalletId;