import React from 'react'



export default function Nav() {

    return(
        < section id='Nav' >
            <nav className={'navbar navbar-expand-lg mt-3 ${styles.tab}'} >
                <div className='container-fluid'>
                    <div className='navigation-header'>
                    <a href='/' className='navbar-brand ' style={{fontWeight: "bold"}}><span style={{color: '#008080'}}>Omodolapo</span> Olabanji</a>
                    </div>
                
                <button className='navbar-toggler' type='button' data-bs-toggle ='collapse' data-bs-target = '#navItems' aria-controls = '#navItems' aria-expanded= "false" aria-label='Toggle for nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='navigation-header' id='navItems'>
                <ul className='container-fluid navbar-nav collapse navbar-collapse me-auto' id='#navItems'>

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
