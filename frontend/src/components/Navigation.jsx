import { Link } from 'react-router-dom'
import '../scss/components/navigation.scss'
import React, {useState} from 'react';


function Navigation({activeLink, onLinkClick}) {
  return (
    <div className="container nav-starter">
		<div className='row navigation-row'>
			<nav className="col-12 navbar navbar-expand-md navigation-container">
				<Link to='/' onClick={() => onLinkClick('/')} className={`navbar-brand col-4 navbar-header ${activeLink === '/' ? 'active' : ''}`}>
					Daily Routines
				</Link>
				<div className="collapse navbar-collapse col-6">
					<ul className="navbar-nav col-12">
						<li className="nav-item col-2">
							<Link to='/tasks' onClick={() => onLinkClick('/tasks')} className={`col-12 nav-link ${activeLink === '/tasks' ? 'active' : ''}`}>Tasks</Link>
						</li>
						<li className="nav-item col-2">
							<Link to='/notes' onClick={() => onLinkClick('/notes')} className={`col-12 nav-link ${activeLink === '/notes' ? 'active' : ''}`}>Notes</Link>
						</li>
					</ul>
				</div>
			</nav>		
		</div>
    </div>
  )
}

export default Navigation;
