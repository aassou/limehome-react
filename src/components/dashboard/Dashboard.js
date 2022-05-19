import { Link } from 'react-router-dom';

import '../../assets/style/general.scss';
import booking from '../../assets/images/booking.jpg';

const Dashboard = () => (
  <div className="p-0 h-100 m-3 flex flex-wrap-reverse">
    <div className='flex-1'>
      <h1>Welcome on our Booking page!</h1>
      <p className='fs-24'>
        Are you looking to enjoy your next vacation?
        <br />
        Don't worry! You can book your suite with us in one step.</p>
        <Link to='/reservations/add' className='btn book grey'>BOOK NOW</Link>
    </div>
    <div>
      <img src={booking} className="home-image" alt='Booking suite!' />
    </div>
  </div>
);

export default Dashboard;
