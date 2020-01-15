import React, { useState, useEffect } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const CreateUpdate = (props) => {
    const { labels, update, callback } = props;
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [size, setSize] = useState(0);
    const [type, setType] = useState("offices");
    const [price, setPrice] = useState(0);
    const [label, setLabel] = useState([]);

    useEffect(()=>{
        
        if (update) {
            setStreet(update.address.street);
            setCity(update.address.city);
            setState(update.address.state);
            setCountry(update.address.country);
            setSize(update.size);
            setType(update.type);
            setPrice(update.price);
            setLabel(update.labels);
        }
    },[update]);
    

    const saveHandler = () => {
        let obj = {
            address: {
                street: street,
                city: city,
                state: state,
                country: country
            },
            type: type,
            size: Number.parseFloat(size),
            price: Number.parseFloat(price),
            labels: label

        }
        if (update) {
            props.updateProperty({
                ...update,
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
    }

    return (
        <tr>
            <td><input type="text" value={street} onChange={(e) => setStreet(e.target.value)} /></td>
            <td><input type="text" value={city} onChange={(e) => setCity(e.target.value)} /></td>
            <td><input type="text" value={state} onChange={(e) => setState(e.target.value)} /></td>
            <td><input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /></td>
            <td><input type="number" value={size} onChange={(e) => setSize(e.target.value)} /></td>
            <td>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="offices">Offices</option>
                    <option value="industrial">Industrial</option>
                    <option value="family home">Family home</option>
                    <option value="retail">Retail</option>
                </select>
            </td>

            <td><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
            <td>
                {labels.map((l) => (
                    <span key={l.id} className="labeltag" onClick={() => {
                        if (label.indexOf(l.name) === -1) {
                            setLabel([...label, l.name])
                        }
                    }
                    }>{l.name}</span>
                ))}
            </td>
            <td><div onClick={saveHandler}>Save</div></td>

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