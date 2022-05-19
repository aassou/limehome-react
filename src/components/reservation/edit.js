import { useEffect, useState } from 'react';
import Form from './Form';
import { getReservation, putReservation } from '../../functions/ReservationApi';

const ReservationEdit = (props) => {
    const [reservation, setReservation] = useState(null);

    useEffect(async () => {
        if (props.match.params.id) {
            const response = await getReservation(props.match.params.id);
            setReservation(response.data);
        }
    }, []);

    return (
        <Form 
            reservation={reservation}
            formTitle='Update your booking at Limehome'
            ActionMethod={putReservation} 
            ActionBtn="CONFIRM" 
        />
    )
};

export default ReservationEdit;
