//selectors
export const getAllTables = state => state.tables;
export const getTable = ({tables}, tableId) => tables.find(table => table.id === tableId);


const createActionName = actionName => `app/tables/${actionName}`;
const FETCH_TABLES = createActionName('FETCH_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLE_REQUEST = createActionName('UPDATE_TABLE_REQUEST');

// action creators
export const fetchTables = payload => ({type: FETCH_TABLES, payload})
export const updateTable = payload => ({type: UPDATE_TABLE, payload});

export const fetchTablesFromServer = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/tables')
            .then(resp => resp.json())
            .then(tables => dispatch(fetchTables(tables)));
    }
};

export const updateTableRequest = (table) => {
    return (dispatch) => {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(table),
        };

        fetch('http://localhost:3131/tables/1', options)
            .then(updatedTableFromServer => {
            dispatch(updateTable(updatedTableFromServer))});
    };
}

const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case FETCH_TABLES:
            return [...action.payload];
        case UPDATE_TABLE:
            const updatedTable = action.payload;
             const updatedTables = statePart.map(table =>
                table.id === updatedTable.id ? {...table, ...updatedTable} : table
            );
            console.log('Updated tables:', updatedTables); // Log updated state
            return updatedTables
        case UPDATE_TABLE_REQUEST:
            return [...action.payload];
        default:
            return statePart;
    }
};
export default tablesReducer;

