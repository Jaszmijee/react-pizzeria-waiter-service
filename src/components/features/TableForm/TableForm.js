import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Form, Button, Col, Row} from "react-bootstrap";
import TextInput from "../../common/TextInput/TextInput";
import SelectInput from "../../common/SelectInput/SelectInput";
import {updateTableRequest} from "../../../redux/tablesRedux";
import {isStatusBusy, isTableTooSmall, isValidNumericInput} from "../utils/validations";
import styles from "./TableForm.modules.scss"

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
        dispatch(updateTableRequest(updatedTableData));
    };

    const statusOptions = [
        {value: "Free", label: "Free"},
        {value: "Reserved", label: "Reserved"},
        {value: "Cleaning", label: "Cleaning"},
        {value: "Busy", label: "Busy"},
    ];

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="status" className="inputForm">
                <Form.Label column sm={1} className="fw-bold">
                    Status:
                </Form.Label>
                <Col sm={7}>
                    <SelectInput
                        label=""
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        options={statusOptions}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="peopleInputs" className="inputForm">
                <Col sm={6}>
                    <Form.Group as={Row} controlId="peopleInputs" className="inputForm">
                        <Form.Label column sm={2} className="fw-bold">
                            People:
                        </Form.Label>
                        <Col sm={2}>
                            <TextInput
                                label=""
                                name="peoplePresent"
                                value={formData.peoplePresent}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Form.Label column sm={1} className="fw-bold">
                            /
                        </Form.Label>
                        <Col sm={2}>
                            <TextInput
                                label=""
                                name="peopleMax"
                                value={formData.peopleMax}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Group>
                </Col>
            </Form.Group>

            {isStatusBusy(formData.status) && (
                <Form.Group as={Row} controlId="bill" className="inputForm">
                    <Col sm={6}>
                        <Form.Group as={Row} controlId="bill" className="inputForm">
                    <Form.Label column sm={2} className="fw-bold">
                        Bill:
                    </Form.Label>
                    <Col sm={1}>$</Col>
                    <Col sm={2}>
                        <TextInput
                            label=""
                            name="bill"
                            value={formData.bill}
                            onChange={handleInputChange}
                        />
                    </Col>
                        </Form.Group>
                    </Col>
                </Form.Group>
            )}

            <Button variant="primary" type="submit">
                Update
            </Button>
        </Form>
    );
};

export default TableForm;