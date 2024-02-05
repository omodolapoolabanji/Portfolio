import React from 'react'


export default function Nav() {

    return(
        <>
            <nav className='navbar navbar-expand-lg mt-3 '>
                <div className='container-fluid'>
                    <div className='navigation-header'>
                    <a href='/' className='navbar-brand '>Omodolapo Olabanji</a>
                    </div>
                
                <button className='navbar-toggler' type='button' data-bs-toggle ='collapse' data-bs-target = '#navItems' aria-controls = '#navItems' aria-expanded= "false" aria-label='Toggle for nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='navigation-header' id='navItems'>
                <ul className='container-fluid navbar-nav collapse navbar-collapse me-auto' id='#navItems'>

                    <li className='nav-item'>
                        <a href="" className='nav-link'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href="" className='nav-link'>Contacts</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </>

    )



}
