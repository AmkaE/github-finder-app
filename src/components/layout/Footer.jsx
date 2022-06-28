import HashIcon from '../assets/hashIcon.svg';

const Footer = () => {
	const footerYear = new Date().getFullYear();

	return (
		<footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
			<div>
				<img src={HashIcon} alt='hash icon' />
			</div>
			<p>Copyright &copy; {footerYear} Alrights reserved</p>
		</footer>
	);
};

export default Footer;
