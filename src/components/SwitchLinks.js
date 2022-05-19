import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

// supplier
import ReservationList from './reservation/index';
import ReservationEdit from './reservation/edit';
import ReservationAdd from './reservation/add';


const SwitchLinks = () => (
    <Switch>
        <Route path="/" exact component={props => <Dashboard {...props} />} />
        {/* Reservations */}
        <Route path="/reservations" exact component={ReservationList} />
        <Route path="/reservations/:id/update" exact component={ReservationEdit} />
        <Route path="/reservations/add" exact component={ReservationAdd} />
    </Switch>
);

export default SwitchLinks;
