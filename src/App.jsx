/***** Router *****/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*****-----------*****/

/***** Contexts *****/
import { GithubPrivider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
/*****-----------*****/

/***** Pages *****/
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
/*****-----------*****/

/***** Components *****/
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
/*****-----------*****/

const App = () => {
	return (
		<GithubPrivider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
						<main className='container mx-auto px-6 p-12'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubPrivider>
	);
};

export default App;
