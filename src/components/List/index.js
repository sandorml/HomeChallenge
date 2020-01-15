import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import CreateUpdate from './create_update';


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
            <div className="btn" onClick={() => {
                reset();
                setCreate_update(true)
            }}>Add</div>
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
            <table className="table">
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
                </tr>
                </thead>
                <tbody>
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
                                {item.labels.map(label => (<span key={label} className="labeltag">{label}</span>))}
                            </td>
                            <td className="btn orange" onClick={() => {
                                reset();
                                setEdit(item);
                                setCreate_update(true)
                            }}>Edit</td>
                            <td className="btn red" onClick={() => props.deleteProperty(item)}>Delete</td>
                        </tr>)
                }
                </tbody>
            </table>

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