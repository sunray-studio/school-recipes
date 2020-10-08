import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';


const Measurements = () => {
    const metrics = [{
        usa_unit: '1/4 teaspoon',
        canadian_metric: '1 ml.',
        australian_metric: '1 ml.'
    }, {
        usa_unit: '1/2 teaspoon',
        canadian_metric: '2 ml.',
        australian_metric: '2 ml.'
    }, {
        usa_unit: '1 teaspoon',
        canadian_metric: '5 ml.',
        australian_metric: '5 ml.'
    }, {
        usa_unit: '1 tablespoon',
        canadian_metric: '15 ml.',
        australian_metric: '20 ml.'
    }, {
        usa_unit: '1/4 cup',
        canadian_metric: '50 ml.',
        australian_metric: '60 ml.'
    }, {
        usa_unit: '1/3 cup',
        canadian_metric: '75 ml.',
        australian_metric: '80 ml.'
    }, {
        usa_unit: '1/2 cup',
        canadian_metric: '125 ml.',
        australian_metric: '125 ml.'
    }, {
        usa_unit: '2/3 cup',
        canadian_metric: '150 ml.',
        australian_metric: '170 ml.'
    }, {
        usa_unit: '3/4 cup',
        canadian_metric: '175 ml.',
        australian_metric: '190 ml.'
    }, {
        usa_unit: '1 cup',
        canadian_metric: '250 ml.',
        australian_metric: '250 ml.'
    }, {
        usa_unit: '1 quart',
        canadian_metric: '1 liter',
        australian_metric: '1 liter'
    }, {
        usa_unit: '1-1/2 quarts',
        canadian_metric: '1.5 liters',
        australian_metric: '1.5 liters'
    }, {
        usa_unit: '2 quarts',
        canadian_metric: '2 liters',
        australian_metric: '2 liters'
    }, {
        usa_unit: '2-1/2 quarts',
        canadian_metric: '2.5 liters',
        australian_metric: '2.5 liters'
    }, {
        usa_unit: '3 quarts',
        canadian_metric: '3 liters',
        australian_metric: '3 liters'
    }, {
        usa_unit: '4 quarts',
        canadian_metric: '4 liters',
        australian_metric: '4 liters'
    }, {
        usa_unit: '1 ounce',
        canadian_metric: '30 grams',
        australian_metric: '30 grams'
    }, {
        usa_unit: '2 ounces',
        canadian_metric: '55 grams',
        australian_metric: '60 grams'
    }, {
        usa_unit: '3 ounces',
        canadian_metric: '85 grams',
        australian_metric: '90 grams'
    }, {
        usa_unit: '4 ounces (1/4 pound)',
        canadian_metric: '115 grams',
        australian_metric: '125 grams'
    }, {
        usa_unit: '8 ounces (1/2 pound)',
        canadian_metric: '225 grams',
        australian_metric: '250 grams'
    }, {
        usa_unit: '16 ounces (1 pound)',
        canadian_metric: '455 grams',
        australian_metric: '500 grams'
    }, 
];
    
    const renderMetrics = (metrics, index) => {
        return(
            <tr key={index}>
                <td>{metrics.usa_unit}</td>
                <td>{metrics.canadian_metric}</td>
                <td>{metrics.australian_metric}</td>
            </tr>
        )
    }


    return (
    <Container>
        <br />
        <h1>Table of Measurements</h1>
        <h3>Metric Conversion Table</h3>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>U.S. Units</th>
                    <th>Canadian Metric</th>
                    <th>Australian Metric</th>
                </tr>
            </thead>
            <tbody>
                {metrics.map(renderMetrics)}
            </tbody>
        </Table>
    </Container>
    )
}

export default Measurements;
