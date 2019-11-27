import React from 'react';
import Plot from 'react-plotly.js';


const PieChart = (props) => {

    return (
        <Plot data={[
            {
                values: props.size,
                labels: props.data,
                type: 'pie'
            }
        ]}
            layout={{ width: 700, height: 400 }}
        />
    );
}
export default PieChart;
