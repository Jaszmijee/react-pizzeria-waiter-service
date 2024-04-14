import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {fetchTablesFromServer, getAllTables} from "./redux/tablesRedux";
import {useEffect} from "react";
import Footer from "./components/views/Footer/Footer";

import {Container} from "react-bootstrap";
import Header from "./components/views/Header/Header";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchTablesFromServer()), [dispatch]);
    const tablesReady = useSelector(getAllTables);


    if (!tablesReady.length) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <Container>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/table/:tableId" element={<Table/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
            </Container>
        </main>
    );
};

export default App;