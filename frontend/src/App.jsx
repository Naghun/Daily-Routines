import './scss/App.scss'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import NotesPage from './pages/NotesPage'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

function App() {
	const [activeComponent, setActiveComponent] = useState(null)
	const handle_navigation_click = (link) => {
		setActiveComponent(link)
	}
	const handle_footer_click = (link) => {
		setActiveComponent(link)
	}
	return (
	<div className="App">
		<Router>
			<Navigation activeLink = {activeComponent} onLinkClick = {handle_navigation_click} />
			<Routes>
				<Route path='/' element= {<HomePage />} />
				<Route path='/tasks' exact Component={TasksPage} />
				<Route path='/notes' exact Component={NotesPage} />
				<Route path='/contact' exact Component={AboutPage} />
				<Route path='/about' exact Component={ContactPage} />
				<Route path='/privacy-policy' exact Component={PrivacyPolicyPage} />
			</Routes>
			<Footer activeLink={activeComponent} onFooterClick={handle_footer_click} />
		</Router>
	</div>
	);
}

export default App;
