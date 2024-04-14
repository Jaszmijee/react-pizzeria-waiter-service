//selectors
export const getAllTables = state => state.tables;
export const getTable = ({tables}, tableId) => tables.find(table => table.id === tableId);


const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const fetchTables = payload => ({type: FETCH_TABLES, payload})

export const updateTable = payload => ({type: UPDATE_TABLE, payload});

export const fetchTablesFromServer = dispatch => {
    fetch('http://localhost:3131/tables')
        .then(resp => resp.json())
        .then(tables => dispatch(fetchTables(tables)));
}

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case FETCH_TABLES:
            return [...action.payload];
        case UPDATE_TABLE:
            const updatedTable = action.payload;
            return statePart.map(table =>
                table.id === updatedTable.id ? {...table, ...updatedTable} : table
            );
        default:
            return statePart;
    }
};
export default tablesReducer;

