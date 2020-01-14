import React from 'react';
import './style.css';
import PropTypes from 'prop-types';


const List = (props) => {
    let { properties } = props;
    return (
        <div>

            <table>
                <tr>
                    <th>Address</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Labels</th>
                </tr>
                {properties.map(item => (
                    properties.is_deleted ? <React.Fragment /> :
                        <tr key={item.id}>
                            <td>{item.address.street}</td>
                            <td>{item.size}</td>
                            <td>{item.type}</td>
                            <td>{item.price}</td>
                            <td>
                                {/* TODO: Poner la llave */}
                                {item.labels.map(label => (<span>{label}</span>))}
                            </td>

                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                ))}
            </table>
            <div>Add</div>
        </div>

    )
}

List.propTypes = {
    properties: PropTypes.array
};
List.defaultProps = {
    properties: [
        {
            "id": 1,
            "address": {
                "street": "Soto 2434",
                "city": "Havana",
                "state": "Havana",
                "country": "Cuba"
            },
            "size": 240,
            "type": "office",
            "price": 50000,
            "labels": ["pool"],
            "is_deleted": false
        }
    ]
};

export default List;