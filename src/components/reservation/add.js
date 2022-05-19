import Form from './Form';
import { createReservation } from '../../functions/ReservationApi';

const ReservationAdd = () => {
    return (
        <Form
            formTitle='Book your suite at Limehome'
            ActionMethod={createReservation} 
            ActionBtn="BOOK NOW" 
        />
    )
};

export default ReservationAdd;
