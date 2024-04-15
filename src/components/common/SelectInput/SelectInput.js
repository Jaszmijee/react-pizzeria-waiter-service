// import { Form } from 'react-bootstrap';
//
//
// const SelectInput = props => {
//     return (
//         <Form.Select>
//             name={props.name}
//             value={props.value}
//             onChange={props.onChange}
//             {/*<select name={props.name} value={props.value} onChange={props.onChange}>*/}
//                 {props.options.map(option => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))}
//             {/*</select>*/}
//         </Form.Select>
//     );
// };
//
// export default SelectInput;


import React from "react";
import { Form, Col } from "react-bootstrap";

const SelectInput = ({ label, name, value, onChange, options }) => {
    return (
        <Form.Group as={Form.Row} className="mb-3" controlId={name}>
            <Form.Label column sm={1}>
                {label}
            </Form.Label>
            <Col sm={4}>
                <Form.Select
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>
    );
};

export default SelectInput;