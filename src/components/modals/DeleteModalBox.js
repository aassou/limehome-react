import "../../assets/style/modalbox.scss"

const DeleteModalBox = ({ formClass, closeDeleteModalBox, onClickDeleteReservation, name, id }) => {

    return (
        <div className={formClass}>
            <div className="modalbox-content">
                <div className="modalbox-header">
                    <h4>Delete Reservation</h4>
                    <button onClick={() => { closeDeleteModalBox() }} className="close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modalbox-body">
                    <p>Are you sure about deleting the reservation of <strong>{name}</strong></p>
                </div>
                <div className="modalbox-footer">
                    <button type="button" className="btn btn-cancel" onClick={() => closeDeleteModalBox()}>
                        No
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => onClickDeleteReservation(id)}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModalBox;