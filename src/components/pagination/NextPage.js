import axiosInstance from "../../axios";

const NextPage = ({elements, setElements, token}) => {
    const goToNextPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:next"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:next"]);
    
            setElements(res.data);
        }
    }

    return (
        <button type="button" className="btn paginate" onClick={goToNextPage}>
            Next
        </button>
    )
}

export default NextPage;