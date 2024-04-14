const initialState = {
    "tables": [
        {
            "id": "1",
            "name": "Table 1",
            "status": "Free",
            "peoplePresent": 0,
            "peopleMax": 4,
            "bill": 0
        },
        {
            "id": "2",
            "name": "Table 2",
            "status": "Reserved",
            "peoplePresent": 2,
            "peopleMax": 6,
            "bill": 0
        },
        {
            "id": "3",
            "name": "Table 3",
            "status": "Busy",
            "peoplePresent": 3,
            "peopleMax": 3,
            "bill": 90
        },
        {
            "id": "4",
            "name": "Table 4",
            "status": "Cleaning",
            "peoplePresent": 0,
            "peopleMax": 3,
            "bill": 0
        },
        {
            "id": "5",
            "name": "Table 5",
            "status": "Free",
            "peoplePresent": 0,
            "peopleMax": 6,
            "bill": 0
        }
    ]
}

export default initialState;