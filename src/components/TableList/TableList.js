import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllTables} from "../../redux/tablesRedux";

const TableList = () => {

    const tables = useSelector(getAllTables);

    return (
        <section>
            <ul>
            {tables.map(table => (
                <li>
                    <p>{table.name}</p>
                    <p>Status: {table.status}</p>
                    <button>  <Link key={table.id} to={"/table/" + table.id} >
                        Show more
                         </Link>
                </button>
                </li>
            ))}
            </ul>
        </section>
    );

}

export default TableList;