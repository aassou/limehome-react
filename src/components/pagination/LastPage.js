import axiosInstance from "../../axios";

const LastPage = ({elements, setElements}) => {
    const goToLastPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:last"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:last"]);
    
            setElements(res.data);
        }
    }

    return (
        <button type="button" className="btn paginate" onClick={goToLastPage}>
            &gt;|
        </button>
    )
}

export default LastPage;