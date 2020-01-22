import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreateUpdate from './create_update';
import { Badge, Table, Button } from 'reactstrap';


const List = (props) => {
    let { properties, labels } = props;
    const [edit, setEdit] = useState(null);
    const [create_update, setCreate_update] = useState(false);

    const reset = () => {
        setEdit(null);
        setCreate_update(false);
    }

    return (
        <div>
            <Button outline color="success"
                onClick={() => {
                    reset();
                    setCreate_update(true)
                }}>Add</Button>{' '}
            
            <Table hover>
                <thead>
                    <tr>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Size</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Labels</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {create_update ?
                        <CreateUpdate
                            properties={properties}
                            labels={labels}
                            update={edit}
                            callback={() => {
                                reset();
                            }}
                            addProperty={props.addProperty}
                            updateProperty={props.updateProperty}
                        /> : null}
                    {
                        properties.map(item =>
                            <tr key={item.id}>
                                <td>{item.address.street}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.state}</td>
                                <td>{item.address.country}</td>
                                <td>{item.size}</td>
                                <td>{item.type}</td>
                                <td>{item.price}</td>
                                <td>
                                    {item.labels.map(label => (<Badge color="primary" pill key={label}>{label}</Badge>))}
                                </td>
                                <td>
                                    <Button size="sm" color="info" onClick={() => {
                                        reset();
                                        setEdit(item);
                                        setCreate_update(true)
                                    }}>Edit</Button>{' '}
                                    <Button size="sm" color="danger" onClick={() => props.deleteProperty(item)}>Delete</Button>
                                </td>

                            </tr>)
                    }
                </tbody>
            </Table>

        </div >

    )
}

List.propTypes = {
    properties: PropTypes.array,
    labels: PropTypes.array,
    addProperty: PropTypes.func,
    addLabel: PropTypes.func,
    updateProperty: PropTypes.func,
    deleteProperty: PropTypes.func
};
List.defaultProps = {
    properties: [],
    labels: []
};

export default List;