import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Label = (props) => {
    const [value, SetValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => SetValue(e.target.value)} />
            <div onClick={() => {
                props.addLabel({
                    name: value
                });
                SetValue("");
            }}>Save</div>
        </div>
    );
};

Label.propTypes = {
    addLabel: PropTypes.func,
};

export default Label;

