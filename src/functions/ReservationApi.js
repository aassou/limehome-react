import axiosInstance from '../axios';

export const createReservation = (reservation) => axiosInstance.post(`/api/reservations`, reservation);

export const putReservation = (reservation) => axiosInstance.put(`/api/reservations/${reservation.id}`,reservation);

export const patchReservation = (reservation) => axiosInstance.patch(`/api/reservations/${reservation.id}`,
	reservation,
	{
		headers: {
			"Content-Type": "application/merge-patch+json"
		}
	}
);

export const getReservation = (id) => axiosInstance.get(`/api/reservations/${id}`);

export const getReservations = () => axiosInstance.get(`/api/reservations`);

export const deleteReservation = (id) => axiosInstance.delete(`/api/reservations/${id}`);
