import React, { Component } from 'react';
import List from '../../components/List';
import Label from '../../components/Label';
import { connect } from 'react-redux';
import { actions_func } from '../../actions';
import './style.css';

class SmartList extends Component {
    state = {
        typeFilter: "",
        priceFilter: {
            value: 0,
            lt: false
        },
        deletedFilter: false,
        order_by_priceFilter: true,
        order_by_sizeFilter: true
    }

    componentDidMount() {
        this.props.fetchProperties();
        this.props.fetchLabels();
    }
    render() {
        return (
            <div className="container">

                <div className="filter">
                    <ul>
                        <li>
                            <input type="text" value={this.state.typeFilter} onChange={(e) => this.setState({ typeFilter: e.target.value })} />
                            <div className="btn" onClick={() => { this.props.typeFilter(this.state.typeFilter) }}>Type Filter</div>
                        </li>
                        <li>
                            Smaller than
                             <input type="checkbox" checked={this.state.priceFilter.lt} onChange={(e) => this.setState({
                                priceFilter: {
                                    value: this.state.priceFilter.value,
                                    lt: e.target.checked
                                }
                            })} />
                            <input type="number" value={this.state.priceFilter.value} onChange={(e) => this.setState({
                                priceFilter: {
                                    value: Number.parseFloat(e.target.value),
                                    lt: true
                                }
                            })} />


                            <div className="btn" onClick={() => { this.props.priceFilter(this.state.priceFilter.value, this.state.priceFilter.lt) }}>Price Filter</div>

                        </li>
                        <li>
                            <input type="checkbox" checked={this.state.deleted} onChange={(e) => this.setState({ deletedFilter: e.target.checked })} />
                            <div className="btn" onClick={() => { this.props.deletedFilter(this.state.deletedFilter) }}>Deleted Filter</div>

                        </li>
                        <li>

                            <input type="checkbox" checked={this.state.order_by_priceFilter} onChange={(e) => this.setState({ order_by_priceFilter: e.target.checked })} />
                            <div className="btn" onClick={() => { this.props.order_by_priceFilter(this.state.order_by_priceFilter) }}>order_by_priceFilter</div>

                        </li>
                        <li>

                            <input type="checkbox" checked={this.state.order_by_sizeFilter} onChange={(e) => this.setState({ order_by_sizeFilter: e.target.checked })} />
                            <div className="btn" onClick={() => { this.props.order_by_sizeFilter(this.state.order_by_sizeFilter) }}>order_by_sizeFilter</div>

                        </li>
                    </ul>

                    <div className="offline">
                        <div className="btn" onClick={() => {
                            this.props.offlineFilter({
                                deleted: this.state.deletedFilter,
                                type: this.state.typeFilter,
                                price: this.state.priceFilter,
                                order_by_price: this.state.order_by_priceFilter,
                                order_by_size: this.state.order_by_sizeFilter
                            })
                        }}>offlinefilter</div>

                    </div>
                    Este filtro a diferencia de los anteriores, encadena todos los filtros, no los hace independientes
                </div>

                <Label addLabel={this.props.addLabel} />


                <div className="list">
                    <List
                        properties={this.props.properties}
                        labels={this.props.labels}
                        addProperty={this.props.addProperty}
                        updateProperty={this.props.updateProperty}
                        deleteProperty={this.props.deleteProperty}
                    />
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => (
    {
        properties: state.crud.properties,
        labels: state.crud.labels
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

        typeFilter: (pattern) => dispatch(actions_func.typeFilter(pattern)),
        priceFilter: (pattern, lt = true) => dispatch(actions_func.priceFilter(pattern, lt)),
        deletedFilter: (deleted = true) => dispatch(actions_func.deletedFilter(deleted)),
        order_by_priceFilter: (order) => dispatch(actions_func.order_by_priceFilter(order)),
        order_by_sizeFilter: (order) => dispatch(actions_func.order_by_sizeFilter(order)),
        offlineFilter: (filter) => dispatch(actions_func.offlineFilter(filter)),

    }
};

export default SmartList = connect(mapStateToProps, mapDispatchToProps)(SmartList);



