import PropTypes from "prop-types"

const EntriesLeyendCard = ({ quadrantName, text, color, entries }) => {
    return (
        <div className={quadrantName}>
            <h3 style={{ color: color, fontWeight: "bolder", fontStyle: "italic", fontFamily: "Calibri", fontSize: "19px" }}>{text}</h3>
            <ol>
                {entries.length > 0 && entries.map((entry, index) => <li key={index}>{entry}</li> )}
                {entries.length === 0 && <li>No hay elementos</li> }
            </ol>
        </div>
    )
}

EntriesLeyendCard.propTypes = {
    quadrantName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    entries: PropTypes.array,
}

export default EntriesLeyendCard