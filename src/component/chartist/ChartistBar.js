import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartistGraph from "react-chartist";

import "./ChartistBar.css";

class ChartistBar extends Component {


    constructor(props){
        super(props)
        this.data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, 4, 2, 4, 1, 0]
            ]
        };

        this.options = {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        this.type = 'Bar';
    }


    render() {
        return (
            <div>
                <h2>Chartist Bar</h2>
                <ChartistGraph className={'ct-simple-bar'} data={this.data} options={this.options} type={this.type} />
            </div>
        )
    }
}

ChartistBar.propTypes = {};

export default ChartistBar;
