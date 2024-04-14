import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import TableList from "../../TableList/TableList";

const Home = () => {
    return (
       <div>
           <h1>All tables</h1>
           <TableList />
       </div>
    );
};

export default Home;