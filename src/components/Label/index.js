import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Label = (props) => {
    const [value, SetValue] = useState("");
    return (
        <div>
            <input type="text" value={value} onChange={(e) => SetValue(e.target.value)} />
            <Button outline color="success"
                onClick={() => {
                    props.addLabel({
                        name: value
                    });
                    SetValue("");
                }}>Add Label</Button>
        </div>
    );
};

Label.propTypes = {
    addLabel: PropTypes.func,
};

export default Label;

