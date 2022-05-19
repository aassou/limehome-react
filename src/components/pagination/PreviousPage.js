import axiosInstance from "../../axios";

const PreviousPage = ({elements, setElements}) => {
    const goToPreviousPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:previous"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:previous"]);
    
            setElements(res.data);
        }
    }

    return (
        <button type="button" className="btn paginate" onClick={goToPreviousPage}>
            Previous
        </button>
    )
}

export default PreviousPage;