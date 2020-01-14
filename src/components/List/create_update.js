import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const CreateUpdate = (props) => {
    const { labels, update, callback } = props;
    let item = {};
    if (update === null) {
        item = {
            address: {
                street: "",
                city: "",
                state: "",
                country: ""
            },
            type: "",
            size: "",
            price: "",
            labels: [],
        }
    }
    else {
        item = { ...update }
    }


    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [size, setSize] = useState();
    const [type, setType] = useState();
    const [price, setPrice] = useState();
    const [label, setLabel] = useState([]);


    return (
        <tr>
            <td><input type="text" value={street ? street : item.address.street} onChange={(e) => setStreet(e.target.value)} /></td>
            <td><input type="text" value={city ? city : item.address.city} onChange={(e) => setCity(e.target.value)} /></td>
            <td><input type="text" value={state ? state : item.address.state} onChange={(e) => setState(e.target.value)} /></td>
            <td><input type="text" value={country ? country : item.address.country} onChange={(e) => setCountry(e.target.value)} /></td>
            <td><input type="text" value={size ? size : item.size} onChange={(e) => setSize(e.target.value)} /></td>
            <td>
                {/* TODO: arreglar esto, se hay q seleccionar uno obligado, no se puede querad por default y eso esta mal */}

                <select name="type" value={type ? type : item.type} onChange={(e) => setType(e.target.value)}>
                    <option value="offices">Offices</option>
                    <option value="industrial">Industrial</option>
                    <option value="family home">Family home</option>
                    <option value="retail">Retail</option>
                </select>
            </td>

            <td><input type="text" value={price ? price : item.price} onChange={(e) => setPrice(e.target.value)} /></td>
            <td>
                {console.log(labels)}
                {labels.map((l) => (
                    <span onClick={() => {
                        if (label.indexOf(l.name) === -1) {
                            setLabel([...label, l.name])
                        }
                    }
                    }>{l.name}</span>
                ))}
            </td>
            <td><div onClick={() => {
                let obj = {
                    address: {
                        street: street,
                        city: city,
                        state: state,
                        country: country
                    },
                    type: type,
                    size: size,
                    price: price,
                    labels: label

                }
                if (update) {
                    props.updateProperty({
                        ...item,
                        ...obj
                    });
                }
                else {
                    props.addProperty({
                        ...obj,
                        is_deleted: false
                    });
                }
                callback();
            }}>Save</div></td>

        </tr>
    )
}


CreateUpdate.propTypes = {
    properties: PropTypes.array,
    labels: PropTypes.array,
    addProperty: PropTypes.func,
    updateProperty: PropTypes.func,
    update: PropTypes.object,
    callback: PropTypes.func
};
CreateUpdate.defaultProps = {
    properties: [],
    labels: [],
    update: {
        address: {
            street: "",
            city: "",
            state: "",
            country: ""
        },
        type: "",
        size: "",
        price: "",
        labels: [],
    },
    callback: () => console.log()
};

export default CreateUpdate;