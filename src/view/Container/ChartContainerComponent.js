import React from 'react';
import ChartistContainer from "../../component/chartist/ChartistContainer";

import './ChartContainerComponent.css'
import Main from "../MainRouter";

const ChartContainerComponent = () => {
    return (
        <div className='chart-container'>
            <div className='aside-1'>T22</div>
            <div className='main'>
             <Main/>
            </div>
            <div className='aside-2'>Hooo</div>
        </div>
    );
};

export default ChartContainerComponent;
