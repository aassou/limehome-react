import axiosInstance from "../../axios";

const FirstPage = ({elements, setElements}) => {
    const goToFirstPage = async () => {
        if (elements && elements["hydra:view"] && elements["hydra:view"]["hydra:first"]) {
            const res = await axiosInstance.get(elements["hydra:view"]["hydra:first"]);
    
            setElements(res.data);
        }
    }

    return (
        <button type="button" className="btn paginate" onClick={goToFirstPage}>
            |&lt;
        </button>
    )
}

export default FirstPage;