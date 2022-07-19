import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/***** Contexts *****/
import { GithubPrivider } from './context/github/GithubContext';
/***** Pages *****/
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
/*****-----------*****/
/***** Components *****/
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const App = () => {
	return (
		<GithubPrivider>
			<Router>
				<div className='flex flex-col justify-between h-screen'>
					<Navbar />
					<main className='container mx-auto px-6 p-12'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/about' element={<About />} />
							<Route path='/notfound' element={<NotFound />} />
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</GithubPrivider>
	);
};

export default App;
