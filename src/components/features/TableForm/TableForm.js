import React, {useState} from "react";
import {useDispatch} from "react-redux";
import TextInput from "../../common/TextInput/TextInput";
import {updateTableRequest} from "../../../redux/tablesRedux";
import SelectInput from "../../common/SelectInput/SelectInput";
import {isStatusBusy, isTableTooSmall, isValidNumericInput} from "../utils/validations";
import {Button} from "react-bootstrap";

const TableForm = ({table}) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        status: table.status,
        peoplePresent: table.peoplePresent,
        peopleMax: table.peopleMax,
        bill: table.bill,
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});

        if (!(name === 'status')) {
            if (isValidNumericInput(value)) {
                if (name === 'peoplePresent' && isTableTooSmall(value, formData.peopleMax)) {
                    setFormData({...formData, [name]: value, peoplePresent: 0});
                } else {
                    setFormData({...formData, [name]: value});
                }
            } else {
                setFormData({...formData});
            }


        } else {
            if (!isStatusBusy(value)) {
                setFormData({...formData, [name]: value, bill: 0});
            } else {
                setFormData({...formData, [name]: value});
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTableData = {
            id: table.id,
            name: table.name,
            ...formData,
        };
        dispatch(updateTableRequest(updatedTableData))
    };

    const statusOptions = [
        {value: "Free", label: "Free"},
        {value: "Reserved", label: "Reserved"},
        {value: "Cleaning", label: "Cleaning"},
        {value: "Busy", label: "Busy"},
    ];

    return (
        <form onSubmit={handleSubmit}>
            <span>Status: </span>
            <SelectInput
                label="Status:"
                value={formData.status}
                onChange={handleInputChange}
                name="status"
                options={statusOptions}
            />
            <div>
                <span>People: </span>
                <TextInput
                    name="peoplePresent"
                    value={formData.peoplePresent}
                    onChange={handleInputChange}
                />
                <span>/ </span>
                <TextInput
                    name="peopleMax"
                    value={formData.peopleMax}
                    onChange={handleInputChange}
                />
            </div>
            {isStatusBusy(formData.status) && (<div>
                <span>Bill: </span>
                <TextInput
                    name="bill"
                    value={formData.bill}
                    onChange={handleInputChange}
                />
            </div>)}
            <Button type="submit">Update</Button>
            {/*<CustomButton type="submit">Update</CustomButton>*/}
        </form>
    );
};

export default TableForm;