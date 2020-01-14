import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';


const td = (item) => (<React.Fragment>
    <td>{item.address.street}</td>
    <td>{item.size}</td>
    <td>{item.type}</td>
    <td>{item.price}</td>
    <td>
        {/* TODO: Poner la llave */}
        {item.labels.map(label => (<span>{label}</span>))}
    </td>
</React.Fragment>
);

const List = (props) => {
    let { properties, labels } = props;
    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(0);
    const [addr, setAddr] = useState(null);
    const [size, setSize] = useState(null);
    const [type, setType] = useState(null);
    const [price, setPrice] = useState(null);
    const [label, setLabel] = useState([]);

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
                {
                    properties.map(item =>
                        <tr key={item.id}>
                            {edit === item.id ?
                                (<React.Fragment>
                                    <td><input type="text" value={addr !== null ? addr : item.address.street} onChange={(e) => setAddr(e.target.value)} /></td>
                                    <td><input type="text" value={size !== null ? size : item.size} onChange={(e) => setSize(e.target.value)} /></td>
                                    <td>
                                        {/* TODO: arreglar esto, se hay q seleccionar uno obligado, no se puede querad por default y eso esta mal */}
                                        <select name="type" value={type !== null ? type : item.type} onChange={(e) => setType(e.target.value)}>
                                            <option value="offices">Offices</option>
                                            <option value="industrial">Industrial</option>
                                            <option value="family home">Family home</option>
                                            <option value="retail">Retail</option>
                                        </select>
                                    </td>
                                    <td><input type="text" value={price !== null ? price : item.price} onChange={(e) => setPrice(e.target.value)} /></td>
                                    <td><input type="text" value={label !== null ? label : item.label} onChange={(e) => setAddr(e.target.label)} /></td>
                                    <td><div onClick={() => {
                                        props.updateProperty({
                                            ...item,
                                            address: addr,
                                            type: type,
                                            size: size,
                                            price: price,
                                            labels: label
                                        });
                                        setEdit(0);
                                    }}>Aquii</div></td>
                                </React.Fragment>) : td(item)}
                            <td onClick={() => setEdit(item.id)}>Edit</td>
                            <td onClick={() => props.deleteProperty(item)}>Delete</td>
                        </tr>)
                }
                {add ? (
                    <tr>
                        <td><input type="text" value={addr} onChange={(e) => setAddr(e.target.value)} /></td>
                        <td><input type="text" value={size} onChange={(e) => setSize(e.target.value)} /></td>
                        <td>
                            <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="offices">Offices</option>
                                <option value="industrial">Industrial</option>
                                <option value="family home">Family home</option>
                                <option value="retail">Retail</option>
                            </select>
                        </td>

                        <td><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
                        <td>
                            {labels.map((l) => (
                                <span onClick={() => label.indexOf(l) === -1 ? setLabel([...label, l]) : setLabel(label)}>{l}</span>
                            ))}
                        </td>
                        <td><div onClick={() => {
                            props.addProperty({
                                address: addr,
                                type: type,
                                size: size,
                                price: price,
                                labels: label,
                                is_deleted: false
                            });
                            setAdd(false);
                        }}>Aquii</div></td>

                    </tr>
                ) : <React.Fragment />}

            </table>
            <div onClick={() => setAdd(true)}>Add</div>
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