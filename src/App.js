import { Nav } from 'react-bootstrap';
import './App.css';
import './components/styles/navbar.css';
import './components/styles/cv.css';
import './components/styles/edit-cv-form.css';

import Cv from './components/Cv';
import MyNavbar from './components/MyNavbar';

function App() {
	return (
		<div className="App">
			<MyNavbar />
			<Cv />
		</div>
		);
	}
	
	export default App;
	