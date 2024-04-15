import React from "react";
import { Form, Col } from "react-bootstrap";
import styles from './TextInput.modules.scss';

const TextInput = ({ label, name, value, onChange }) => {
    return (
        <Form.Group as={Form.Row} className="mb-3" controlId={name}>
            <Form.Label >
                {label}
            </Form.Label>
            <Col >
                <Form.Control className="textForm"
                    name={name}
                    value={value}
                    onChange={onChange}
                    type="text"
                />
            </Col>
        </Form.Group>
    );
};

export default TextInput;