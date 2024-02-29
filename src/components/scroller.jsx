import 'bootstrap-icons/font/bootstrap-icons.css';

import React from 'react';

export default function Scroller() {
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button className='btn btn-primary' onClick={scroll} style={{position: "fixed", bottom:"20px", right:"20px"}}>
            <i className="bi bi-arrow-up-circle" style={{color: "white", fontSize: "20px"}}></i>
        </button>
    )}