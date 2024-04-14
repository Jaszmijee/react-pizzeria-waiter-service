import {Route, Routes} from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import NavBar from "./components/views/NavBar/NavBar";
import Home from "./components/pages/Home/Home";
import Table from "./components/pages/Table/Table";


const App = () => {
    return (
        <main>
            {/*<Container>*/}
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                 <Route path="/table/:tableId" element={<Table/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            {/*</Container>*/}
        </main>
    );
};


export default App;