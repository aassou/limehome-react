import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { deleteReservation } from '../../functions/ReservationApi';
import DeleteModalBox from '../modals/DeleteModalBox';
import { HTTP_STATUS_CODE } from '../../utils/utils';

const TableBody = ({ reservation, reservationsList, setReservationsList }) => {
	const [deleteModalBoxClass, setDeleteModalBoxClass] = useState('none');
	const checkin = new Date(reservation.checkin);
	const checkout = new Date(reservation.checkout);

	const closeDeleteModalBox = () => {
        setDeleteModalBoxClass('none');
    };

	const onClickDeleteReservation = async (reservationId) => {
        const response = await deleteReservation(reservationId);
        
        response.status === HTTP_STATUS_CODE.SUCESS.NO_CONTENT 
            && setReservationsList(reservationsList.filter(reservation => reservation.id !== reservationId));
    };

	return (
		<tr>
			<td>
			{checkin.toLocaleString('default', { month: 'long' })} {checkin.getDate()}
			{' - '}
			{checkout.toLocaleString('default', { month: 'long' })} {checkout.getDate()}
			</td>
			<td>{reservation.guestNumber}</td>
			<td>{reservation.firstname} {reservation.lastname}</td>
			<td>{reservation.billingAddress} {reservation.billingCountry}</td>
			<td>{reservation.postalCode}</td>
			<td>{reservation.city}</td>
			<td>{reservation.phone}</td>
			<td>{reservation.email}</td>
			<td>
				<Link to={`/reservations/${reservation.id}/update`} className="btn me-2 text-white bg-success">
					{' '}
					<i className="fas fa-sync" />
				</Link>
				{' '}
				{/* <Link to={`/reservations/${reservation.id}/delete`} className="btn me-2 text-white bg-danger">
					{' '}
					<i className="fas fa-trash" />
				</Link> */}
				<button
					onClick={() => { setDeleteModalBoxClass('modalbox') }}
					className="btn me-2 text-white bg-danger"
				>
					<i className="fas fa-trash-alt" />
				</button>
                <DeleteModalBox
                    formClass={deleteModalBoxClass}
                    closeDeleteModalBox={closeDeleteModalBox}
                    onClickDeleteReservation={onClickDeleteReservation}
                    name={`${reservation.firstname} ${reservation.lastname}`}
                    id={reservation.id}
                />
			</td>
		</tr>
	)
};

export default TableBody;
