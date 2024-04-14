import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAllTables} from "../../../redux/tablesRedux";
import {Button, Card, Col, ListGroup, Row} from "react-bootstrap";
import styles from './TableList.modules.scss'
import clsx from "clsx";


const TableList = () => {

    const tables = useSelector(getAllTables);
    // className={`${styles.navbar} px-4`
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

//     return (
//         <section>
//             {tables.map(table => (
//                 <Card key={table.id} >
//                     <ListGroup variant="flush" >
//                         <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <span>{table.name}
//                             <strong>Status:</strong> {table.status} </span>
//                             <Button variant="primary">
//                                 <Link to={`/table/${table.id}`} className="text-white">
//                                     Show more
//                                 </Link>
//                             </Button>
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Card>
//             ))}
//         </section>
//     );
// }

//     return (
//         <section>
//             <div className="row row-cols-1 row-cols-md-2 g-4">
//                 {tables.map(table => (
//                     <div key={table.id} className="col">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{table.name}</Card.Title>
//                                 <Card.Text>Status: {table.status}</Card.Text>
//                                 <Button variant="primary">
//                                     <Link to={"/table/" + table.id} className="text-white">
//                                         Show more
//                                     </Link>
//                                 </Button>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

//     return (
//         <section>
//             <ul>
//                 {tables.map(table => (
//                     <li key={table.id}>
//                         <Row className="align-items-center">
//                             <Col xs={3}>
//                                 <h3>{table.name}</h3>
//                             </Col>
//                             <Col xs={3}>
//                                 <h4>Status: {table.status}</h4>
//                             </Col>
//
//                             <Col xs={4} className="text-end">
//                                 <Button>
//                                     <Link to={"/table/" + table.id}>Show more</Link>
//                                 </Button>
//                             </Col>
//                         </Row>
//                     </li>
//                 ))}
//             </ul>
//         </section>
//     );
// }
//     return (
//         <section>
//             <ul>
//             {tables.map(table => (
//                 <li key={table.id}>
//                     <p>{table.name}</p>
//                     <p>Status: {table.status}</p>
//                     <Button>
//                         <Link to={"/table/" + table.id}>Show more</Link>
//                     </Button>
//                     {/*<CustomButton>*/}
//                     {/*    <Link to={"/table/" + table.id}>Show more</Link>*/}
//                     {/*</CustomButton>*/}
//                 </li>
//             ))}
//             </ul>
//         </section>
//     );
//
// }

export default TableList;