import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTable, updateTable} from "../../../redux/tablesRedux";
import {useParams} from "react-router-dom";

const Table =  () => {
    const { tableId } = useParams();
    const table = useSelector(state => getTable(state, tableId));
    console.log('table', table)

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        status: table.status,
        peoplePresent: table.peoplePresent,
        peopleMax: table.peopleMax,
        bill: table.bill
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const updatedTableData = {
            id: table.id,
            name: table.name,
            ...formData
        };
        dispatch(updateTable(updatedTableData));
    };

    return (
        <div>
            <h1>{table.name}</h1>
            <form onSubmit={handleSubmit}>
                <label>Status:</label>
                <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                />
                <label>People: </label>
                <input
                    type="number"
                    name="peoplePresent"
                    value={formData.peoplePresent}
                    onChange={handleInputChange}
                />
                <label>/</label>
                <input
                    type="number"
                    name="peopleMax"
                    value={formData.peopleMax}
                    onChange={handleInputChange}
                />
                <label>Bill:</label>
                <input
                    type="number"
                    name="bill"
                    value={formData.bill}
                    onChange={handleInputChange}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Table;


    // const { tableId } = useParams();
    //
    // // Retrieve the table data from Redux store based on tableId
    // const table = useSelector(state => state.tables.find(table => table.id === parseInt(tableId)));


//     const [newStatus, setNewStatus] = useState(''); // Local state for updating status
//     const status = useSelector(state => state.tables.status); // Get status from Redux store
//     const dispatch = useDispatch();
//
//     const handleUpdateStatus = () => {
//         // Dispatch action to update status in Redux store
//         dispatch(updateStatus(newStatus));
//         setNewStatus(''); // Clear input field after updating
//     };
//
//
//     return (
//         <div>
//         <h1>Table1</h1>
//         <p>Status: </p>
//     <p>People: </p>
//             <p>Bill: </p>
//             <button>Update</button>
//         </div>
//     )
// };
//
// export default Table;

    // const table = useSelector(state => state.tables.find(table => table.id === tableId));
//     const dispatch = useDispatch();
//
//     const [formData, setFormData] = useState({
//         status: table.status,
//         peoplePresent: table.peoplePresent,
//         peopleMax: table.peopleMax,
//         bill: table.bill
//     });
//
//     const handleInputChange = e => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };
//
//     const handleSubmit = e => {
//         e.preventDefault();
//         const updatedTableData = {
//             id: table.id,
//             name: table.name,
//             ...formData
//         };
//         dispatch(updateTable(updatedTableData));
//     };
//
//     return (
//         <div>
//             <h1>{table.name}</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>Status:</label>
//                 <input
//                     type="text"
//                     name="status"
//                     value={formData.status}
//                     onChange={handleInputChange}
//                 />
//                 <label>People Present:</label>
//                 <input
//                     type="number"
//                     name="peoplePresent"
//                     value={formData.peoplePresent}
//                     onChange={handleInputChange}
//                 />
//                 <label>Max People:</label>
//                 <input
//                     type="number"
//                     name="peopleMax"
//                     value={formData.peopleMax}
//                     onChange={handleInputChange}
//                 />
//                 <label>Bill:</label>
//                 <input
//                     type="number"
//                     name="bill"
//                     value={formData.bill}
//                     onChange={handleInputChange}
//                 />
//                 <button type="submit">Update</button>
//             </form>
//         </div>
//     );
// };
//
// export default Table;