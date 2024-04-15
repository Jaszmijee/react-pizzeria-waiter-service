import {useSelector} from "react-redux";
import {getTable} from "../../../redux/tablesRedux";
import {useParams} from "react-router-dom";
import TableForm from "../../features/TableForm/TableForm";

const Table =  () => {
    const { tableId } = useParams();
    const table = useSelector((state) => getTable(state, tableId));

    if (!table) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="mt-4">{table.name}</h1>
            <TableForm table={table} />
        </div>
    );
};

export default Table;

