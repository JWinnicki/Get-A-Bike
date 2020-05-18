import React from 'react';

import './Backdrop.css';

//Pusty div. Można go od razu zamknąć
const Backdrop = props => {
    return (
        props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
    );
}

export default Backdrop;
