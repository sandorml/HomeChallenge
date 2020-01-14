import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Label = (props) => {
    const [value, SetValue] = useState("");
    return (
        <div className="label">
            <input className="inline" type="text" value={value} onChange={(e) => SetValue(e.target.value)} />
            <div className="btn inline" onClick={() => {
                props.addLabel({
                    name: value
                });
                SetValue("");
            }}>Add Label</div>
        </div>
    );
};

Label.propTypes = {
    addLabel: PropTypes.func,
};

export default Label;

