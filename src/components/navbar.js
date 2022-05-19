import { Link } from 'react-router-dom';
import '../assets/style/navbar.scss';

const MyNav = () => (
	<nav>
		<ul className='no-bullets flex'>
			<li className='m-2'><Link to="/">Home</Link></li>
			<li className='m-2'><Link to="/reservations">Booking List</Link></li>
		</ul>
	</nav>
);

export default MyNav;
