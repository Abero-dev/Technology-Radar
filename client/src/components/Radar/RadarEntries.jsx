import PropTypes from 'prop-types';

const RadarEntries = ({ entries }) => {
    return (
        <g>
            {entries.map((entry, index) => (
                <g key={index}>
                    {/* Aquí iría la lógica para dibujar cada entrada */}
                </g>
            ))}
        </g>
    );
};

RadarEntries.propTypes = {
    entries: PropTypes.array.isRequired,
};

export default RadarEntries;