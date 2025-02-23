import PropTypes from "prop-types"
import EntriesLeyendCard from './EntriesLeyendCard'

const QuadrantLeyends = ({ entries }) => {
    const quadrant = (quadrantName, entries) => {
        return (
            <div className={quadrantName}>
                <EntriesLeyendCard quadrantName={quadrantName} 
                    text="ADOPTAR" 
                    color="#5ba300"
                    entries={entries.adopt} />

                <EntriesLeyendCard quadrantName={quadrantName} 
                    text="PROBAR"
                    color="#009eb0" 
                    entries={entries.test} />

                <EntriesLeyendCard quadrantName={quadrantName} 
                    text="EVALUAR" 
                    color="#c7ba00"
                    entries={entries.evaluate} />

                <EntriesLeyendCard quadrantName={quadrantName} 
                    text="DETENER" 
                    color="#e09b96"
                    entries={entries.sustain} />
            </div>
        )
    }

    return (
        <>
            {quadrant('ScienceStage', entries.scienceStage)}
            {quadrant('BusinessIntel', entries.businessIntel)}
            {quadrant('LanguagesAndFrameworks', entries.languagesAndFrameworks)}
            {quadrant('SupportTechsAndPlatforms', entries.supportTechsAndPlatforms)}
        </>
    );
};

QuadrantLeyends.propTypes = {
    entries: PropTypes.object.isRequired,
};

export default QuadrantLeyends