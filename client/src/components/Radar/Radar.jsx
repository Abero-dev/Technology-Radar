import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import radar_visualization from '../../assets/radar'
import { SearchDetailsContext } from '../contexts/SearchDetailsContext'
import SearchBar from '../SearchBar'

const Radar = () => {
    const { searchTerm, resultsFilter, resultsOrder } = useContext(SearchDetailsContext);
    const [results, setResults] = useState([])

    // function to search the technology in outters APIs
    const handleSearch = async () => {
        if (searchTerm !== '') {
            try {
                // search in OpenAlex
                const responseOpenAlex = await fetch(`https://api.openalex.org/works?filter=title.search:${searchTerm}`);
                const dataOpenAlex = await responseOpenAlex.json();
                console.log(dataOpenAlex)

                // search in DeepSeek
                const dsApiKey = "sk-59dc0909b3904b919e9ffb1f1cf4266a"
                deepseekSearch(searchTerm, dsApiKey).then(resultado => {
                    if (resultado) {
                        console.log(resultado)
                    }
                    else {
                        console.log("No hay resultados");
                    }
                })
                // get entries from self API
                const entries = await axios.get("http://localhost:8000/app/entries");

                // creating the new entrie
                const newEntrie = {
                    "label": `${searchTerm}`,
                    "quadrant": 1,
                    "ring": 1,
                    "active": true,
                    "moved": 0,
                    "link": `https://www.${searchTerm}.com`
                }

                // if there are entries
                if (entries.data.length != 0) {
                    entries.data.map( async (entry, index) => {
                        // if there is an entrie with the same label then update the entrie with the same label
                        if (entry.label === searchTerm) {
                            await axios.put(`http://localhost:8000/app/entries/${index + 1}/`, newEntrie)
                            setResults([])
                            return
                        }
                    })
                    }
                    // else post the new entrie
                    await axios.post("http://localhost:8000/app/entries/", newEntrie);
                    console.log(entries.data);
                    console.log(newEntrie);
                    setResults([]);
            } catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Plis enter the technology to search!")
        }
    }

    // setting radar config
    const config = {
        svg_id: "radar",
        width: 1600,
        height: 950,
        colors: {
            background: '#eee',
            grid: "#bbb",
            inactive: "#ddd"
        },
        quadrants: [
            { name: "Languages and Framework" },
            { name: "Scientific Stage" },
            { name: "Business Intelligence" },
            { name: "Platform and Supported Tool" },
        ],
        rings: [
            { name: "ADOPT", color: "#5ba300" },
            { name: "TEST", color: "#009eb0" },
            { name: "EVALUATE", color: "#c7ba00" },
            { name: "SUSTAIN", color: "#e09b96" }
        ],
        print_layout: true,
        links_in_new_tabs: true,
        entries: results
    }

    // showing radar each time happens entries updates or when adding new entries
    useEffect(() => {
        radar_visualization(config);
    }, [searchTerm, resultsFilter, resultsOrder, results])

    return (
        <>
            <section className='sectionRadar'>
                <SearchBar onSearch={handleSearch} />
                <div>
                    <svg id="radar"></svg>
                </div>
            </section>
        </>
    )
}

export default Radar


// my DeepSeek API key *OJO CON FACHARTELA*

// function to get information from DeepSeek (***UNIMPLENTED YET, DONT TOUCH***)
const deepseekSearch = async (term, dsApiKey) => {
    const url = "https://api.deepseek.com/chat/completions"
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${dsApiKey}`
    };
    const data = {
        model: "deepseek-chat",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: term }
        ],
        stream: false
    };

    try {
        const response = await axios.post(url, data, { headers });
        return response.data;
    } catch (error) {
        console.error("Error al hacer la petición: ", error);
        return null;
    }
}


// useEffect(() => {    
//     // getEntries()
// }, [])
// //console.log(datosContext)

// function to get entries from self API
// const getEntries = async () => {
//     let entries = await axios.get("http://localhost:8000/app/entries")
//     for (let i = 0; i < entries.data.length; i++) {
//         console.log(entries.data[i])
//         // getting info from OpenAlex
//         const responseOpenAlex = await fetch(`https://api.openalex.org/works?filter=title.search:${entries.data[i].label}`)
//         const seekDataOpenAlex = await responseOpenAlex.json()

//         let updatedEntrie;
//         // conditions to decide entries rings using information quality
//         if (seekDataOpenAlex.results.length >= 1 && seekDataOpenAlex.results.length <= 10 && seekDataOpenAlex.meta.count > 1 && seekDataOpenAlex.meta.count <= 100)
//             updatedEntrie = {
//                 "label": entries.data[i].label,
//                 "quadrant": entries.data[i].quadrant,
//                 "ring": 3,
//                 "active": entries.data[i].active,
//                 "moved": entries.data[i].move,
//                 "link": entries.data[i].link
//             }
//         else if (seekDataOpenAlex.results.length >= 11 && seekDataOpenAlex.results.length <= 25 && seekDataOpenAlex.meta.count > 100 && seekDataOpenAlex.meta.count <= 1000)
//             updatedEntrie = {
//                 "label": entries.data[i].label,
//                 "quadrant": entries.data[i].quadrant,
//                 "ring": 2,
//                 "active": entries.data[i].active,
//                 "moved": entries.data[i].move,
//                 "link": entries.data[i].link
//             }
//         else if (seekDataOpenAlex.results.length >= 26 && seekDataOpenAlex.results.length <= 50 && seekDataOpenAlex.meta.count > 1000 && seekDataOpenAlex.meta.count <= 5000)
//             updatedEntrie = {
//                 "label": entries.data[i].label,
//                 "quadrant": entries.data[i].quadrant,
//                 "ring": 1,
//                 "active": entries.data[i].active,
//                 "moved": entries.data[i].move,
//                 "link": entries.data[i].link
//             }
//         else
//             updatedEntrie = {
//                 "label": entries.data[i].label,
//                 "quadrant": entries.data[i].quadrant,
//                 "ring": 0,
//                 "active": entries.data[i].active,
//                 "moved": entries.data[i].move,
//                 "link": entries.data[i].link
//             }
//         //updating entries rings if change
//         await axios.put(`http://localhost:8000/app/entries/${entries.data[i].id}/`, updatedEntrie)
//     }
//     //get entries from self API
//     entries = await axios.get("http://localhost:8000/app/entries")
//     //console.log(entries.data);
//     setData(entries.data)
// }

    // old entries
    /*const otherEntries = [
        {
            "quadrant": 0,
            "ring": 0,
            "label": "JavaScript",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "Python",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "TypeScript",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "C++",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "Django",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "React",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 1,
            "label": "Angular",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 1,
            "label": "Vue.js",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "Laravel",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "Express.js",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "Spring Framework",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 0,
            "ring": 3,
            "label": "Symfony",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "ML",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "IA Generativas",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "UX",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "Programación Neuromórfica",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 2,
            "label": "Interacción Inmersiva",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 1,
            "ring": 3,
            "label": "Computación Cuántica",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Clean Code",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "Power BI",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "tableau",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 2,
            "label": "Dooker",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Competencia",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Adopción de la IA",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Big Data",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Visualización de Datos",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Soluciones en la Nube",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Experiencia de Usuario",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 2,
            "label": "Analítica de Datos Inmersiva",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 2,
            "label": "Automatización de la preparación de datos",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 2,
            "label": "IA explicativa",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 2,
            "label": "Clean Code",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 3,
            "label": "Datos en cilos",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 3,
            "label": "Desarrollo Tradicional del Software",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 2,
            "ring": 3,
            "label": "Boletines de Inteligencia",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Git",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "GitLab",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Visual Studio Code",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Postman",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Atom",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Docker",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Kubernetes",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "Webpack",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "Github Copilot",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "Mirrord",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 2,
            "label": "Alloy Unified API",
            "active": true,
            "moved": 0
        },
        {
            "quadrant": 3,
            "ring": 3,
            "label": "PWA",
            "active": true,
            "moved": 0
        }
    ]*/
