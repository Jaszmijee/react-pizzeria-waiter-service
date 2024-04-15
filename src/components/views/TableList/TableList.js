import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllTables} from "../../../redux/tablesRedux";
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import styles from './TableList.modules.scss'

const TableList = () => {

    const tables = useSelector(getAllTables);

    return (
        <section>
            {tables.map(table => (
                <Card key={table.id}  className="custom-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="custom-list-item">
                            <div>
                            <span className="table-name">{table.name}</span>
                            <strong>Status:</strong> {table.status}
                            </div>
                            <div>
                            <Button variant="primary" className="ml-auto">
                                <Link to={`/table/${table.id}`} className="text-white">
                                    Show more
                                </Link>
                            </Button>
                        </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </section>
    );
}

export default TableList;