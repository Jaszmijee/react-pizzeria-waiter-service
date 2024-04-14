import initialState from "./initialState";
import {useSelector} from "react-redux";

//selectors
export const getAllTables = state => state.tables;
export const getTable = ({ tables }, tableId) => tables.find(table => table.id === tableId);


const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');


// action creators
// export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const updateTable = updatedTableData => ({
    type: 'UPDATE_TABLE',
    payload: updatedTableData
});

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case FETCH_TABLES:
            return [...statePart, { ...action.payload}];
        case 'UPDATE_TABLE':
            const updatedTable = action.payload;
            return statePart.map(table =>
                    table.id === updatedTable.id ? { ...table, ...updatedTable } : table
                )
            ;
        default:
            return statePart;
    };
};
export default tablesReducer;


// // Action types
// const GET_ALL_TABLES_REQUEST = 'app/tables/GET_ALL_TABLES_REQUEST';
// const GET_ALL_TABLES_SUCCESS = 'app/tables/GET_ALL_TABLES_SUCCESS';
// const GET_ALL_TABLES_FAILURE = 'app/tables/GET_ALL_TABLES_FAILURE';
//
// // Action creators
// export const getAllTablesRequest = () => ({
//     type: GET_ALL_TABLES_REQUEST
// });
//
// export const getAllTablesSuccess = (tables) => ({
//     type: GET_ALL_TABLES_SUCCESS,
//     payload: tables
// });
//
// export const getAllTablesFailure = (error) => ({
//     type: GET_ALL_TABLES_FAILURE,
//     payload: error
// });
//
// export const fetchTables = () => {
//     return async (dispatch) => {
//         dispatch(getAllTablesRequest());
//
//         try {
//             const response = await axios.get('http://localhost:3131/tables'); // Replace with your JSON server URL
//             const tables = response.data;
//             dispatch(getAllTablesSuccess(tables));
//         } catch (error) {
//             dispatch(getAllTablesFailure(error.message));
//         }
//     };
// };
//
// // Reducer
// const tablesReducer = (state = initialState.tables, action) => {
//     switch (action.type) {
//         case GET_ALL_TABLES_REQUEST:
//             // Optionally handle loading state in your reducer
//             return state;
//         case GET_ALL_TABLES_SUCCESS:
//             return action.payload; // Update tables state with fetched data
//         case GET_ALL_TABLES_FAILURE:
//             // Optionally handle error state in your reducer
//             return state;
//         default:
//             return state;
//     }
// };

