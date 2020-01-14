import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List';
import { connect } from 'react-redux';
import { actions_func } from '../../actions'

class SmartList extends Component {
   
    componentDidMount(){
        this.props.fetchProperties();
        this.props.fetchLabels();
    }
    render() {
        return (
            <div>
                <List
                    properties={this.props.properties}
                    labels={this.props.labels}
                    addProperty={this.props.addProperty}
                    addLabel={this.props.addLabel}
                    updateProperty={this.props.updateProperty}
                    deleteProperty={this.props.deleteProperty}
                />
            </div>
        )
    }
}


const mapStateToProps = state => (
    {
        properties: state.crud.properties,
        labels: state.crud.properties
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperties: () => dispatch(actions_func.fetchProperties()),
        fetchLabels: () => dispatch(actions_func.fetchLabels()),
        addProperty: (item) => dispatch(actions_func.addProperty(item)),
        addLabel: (item) => dispatch(actions_func.addLabel(item)),
        updateProperty: (item) => dispatch(actions_func.updateProperty(item)),
        deleteProperty: (item) => dispatch(actions_func.deleteProperty(item)),

    }
};

export default SmartList = connect(mapStateToProps, mapDispatchToProps)(SmartList);



