import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartistBar from "./ChartistBar";

class ChartistContainer extends Component {
    render() {
        return (
            <div className='chartist-container'>
                <ChartistBar/>
                <ChartistBar/>
            </div>
        );
    }
}

ChartistContainer.propTypes = {};

export default ChartistContainer;
