import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3';
import RadarGrid from './RadarGrid';
import RadarRings from './RadarRings';
import RadarEntries from './RadarEntries';
import RadarLegend from './RadarLegend';
import Tooltip from './Tooltip';

const RadarVisualization = ({ config }) => {
    useEffect(() => {
        // Aquí iría la lógica de D3 para crear el radar
        const svg = select(`#${config.svg_id}`)
            .attr("width", config.width)
            .attr("height", config.height);
        
        // Lógica para dibujar el radar, anillos, entradas, etc.
        // ...

    }, [config]);

    return (
        <svg id={config.svg_id}>
            <RadarGrid config={config} />
            <RadarRings config={config} />
            <RadarEntries entries={config.entries} />
            <RadarLegend config={config} />
            <Tooltip />
        </svg>
    );
};

RadarVisualization.propTypes = {
    config: PropTypes.object.isRequired,
};

export default RadarVisualization