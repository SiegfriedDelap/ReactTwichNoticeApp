import React from 'react';

import './app-header.css';
// import styled from 'styled-components';

// const Header = styled.div`
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     h1{
//         font-size: 26px;
//         :hover{
//             color:purple;
//         }
//     }
//     h2{
//         font-size: 1.2rem;
//         color: grey;
//     }
// `;

const AppHeader = () => {
    return (
        <div className="app-header">
            <h1>Ветеран АТО</h1>
            <h2>14 записей, из них понравилось 88</h2>
        </div>
    )
}

export default AppHeader;