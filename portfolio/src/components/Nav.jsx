import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




export default function Nav() {

    return(
        < section id='Nav' >
            <nav className={'navbar navbar-expand-lg mt-3 ${styles.tab}'} >
                <div className='container-fluid'>
                    
                    <a href='/' className='navbar-brand ' style={{fontWeight: "bold"}}><span style={{color: '#008080'}}>Omodolapo</span> Olabanji</a>
                    
                
                <button className='navbar-toggler' type='button' data-bs-toggle ='collapse' data-bs-target = '#navbarSupportedContent' aria-controls = '#navbarSupportedContent' aria-expanded= "false" aria-label='Toggle navigation' >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2-lg-0' >

                    <li className='nav-item'>
                        <a href="#Hero" className={'nav-link '}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#projects" className='nav-link'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills" className='nav-link'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#contact" className='nav-link'>Contacts</a>
                    </li>
                </ul>
                </div>
                </div>
            </nav>
        </section>

    )



}
