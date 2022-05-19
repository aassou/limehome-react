import SwitchLinks from './components/SwitchLinks';
import MyNav from './components/navbar';
// styling
import './assets/style/general.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const renderHelper = () => {
		return <div className='booking-container'>
			<MyNav />
			<div className="row mx-0  p-0">
				<div className="p-0">
					<SwitchLinks />
				</div>
			</div>
		</div>
	}

  	return renderHelper();
};

export default App;
