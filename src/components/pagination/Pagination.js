import FirstPage from "./FirstPage";
import PreviousPage from "./PreviousPage";
import NextPage from "./NextPage";
import LastPage from "./LastPage";

const Pagination = ({elements, setElements}) => {
    console.log(elements);
    return (
        <>
            <FirstPage  elements={elements} setElements={setElements} />
            <PreviousPage  elements={elements} setElements={setElements} />
            <NextPage elements={elements} setElements={setElements} />
            <LastPage  elements={elements} setElements={setElements} />
        </>
    )
}

export default Pagination;