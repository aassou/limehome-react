import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableBody from "./table";
import { getReservations } from '../../functions/ReservationApi';
import Pagination from "../pagination/Pagination";

import '../../assets/style/table.scss';
import '../../assets/style/buttons.scss';
import { HTTP_STATUS_CODE } from "../../utils/utils";

const ReservationList = () => {
    const [reservations, setReservations] = useState(null);
    const [reservationsList, setReservationsList] = useState([]);

    useEffect(async () => {
        const response = await getReservations();
        const data = await response.data;
        
        if (response.status === HTTP_STATUS_CODE.SUCESS.OK) {
            setReservations(data);
            setReservationsList(data['hydra:member']);
        }
    }, []);

    const renderHelper = (reservations) => {
        if (reservations) {
            return reservationsList.map((reservation) => (
                <TableBody 
                    key={reservation.id} 
                    reservation={reservation}
                    reservationsList={reservationsList}
                    setReservationsList={setReservationsList}
                />
            ))
        }
    };

    return (
        <>
            <div className="text-end">
                <Link className="btn book grey m-5" to="/reservations/add">
                    New Booking
                </Link>
            </div>
            <div className="mytable">
                <h1>Reservations List</h1>
                <table className="booking-list">
                    <thead className="table-header-inversed">
                        <tr>
                            <th>Check-in/out</th>
                            <th>Guests</th>
                            <th>Fullname</th>
                            <th>Billing Address</th>
                            <th>Postal Code</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderHelper(reservations)}
                    </tbody>
                </table>
                <Pagination  
                    elements={reservations} 
                    setElements={setReservations} 
                />
            </div>
        </>
    )
};

export default ReservationList;