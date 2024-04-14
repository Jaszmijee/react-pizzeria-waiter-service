import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllTables} from "../../../redux/tablesRedux";
import {Button} from "react-bootstrap";

const TableList = () => {

    const tables = useSelector(getAllTables);

    return (
        <section>
            <ul>
            {tables.map(table => (
                <li key={table.id}>
                    <p>{table.name}</p>
                    <p>Status: {table.status}</p>
                    <Button>
                        <Link to={"/table/" + table.id}>Show more</Link>
                    </Button>
                </li>
            ))}
            </ul>
        </section>
    );

}

export default TableList;