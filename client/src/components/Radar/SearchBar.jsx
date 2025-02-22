import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AfterSearchContext } from '../contexts/AfterSearchContext'

export const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const { datosContext, setDatosContext } = useContext(AfterSearchContext);

    // my DeepSeek API key *OJO CON FACHARTELA*
    const dsApiKey = "sk-59dc0909b3904b919e9ffb1f1cf4266a";

    // function to get information from DeepSeek (***DONT WORK YET, DONT TOUCH***)
    async function deepseekSearch(term, dsApiKey) {
        const url = "https://api.deepseek.com/chat/completions";
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

    // function to search the technology in outters APIs
    const search = async () => {
        if (searchTerm !== '') {
            try {
                // search in OpenAlex
                const responseOpenAlex = await fetch(`https://api.openalex.org/works?filter=title.search:${searchTerm}`);
                const datosOpenAlex = await responseOpenAlex.json();
                console.log(datosOpenAlex);
                // search in DeepSeek
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

                // if there are entries
                if (entries.data.length != 0) {
                    // creating the new entrie
                    const newEntrie = {
                        "label": `${searchTerm}`,
                        "quadrant": 1,
                        "ring": 1,
                        "active": true,
                        "moved": 0,
                        "link": `https://www.${searchTerm}.com`
                    }
                    for (let i = 0; i < entries.data.length; i++) {
                        // if there is an entrie with the same label then update the entrie with the same label
                        if (entries.data[i].label === searchTerm) {
                            await axios.put(`http://localhost:8000/app/entries/${i + 1}/`, newEntrie)
                            setDatosContext([]);
                            window.location.reload()
                            return;
                        }
                    }
                    // else post the new entrie
                    await axios.post("http://localhost:8000/app/entries/", newEntrie);
                    console.log(entries.data);
                    console.log(newEntrie);
                    setDatosContext([]);
                    // reload page for update radar visualization
                    window.location.reload()
                }

            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            alert("Plis enter the technology to search!")
        }
    }

    return (
        <div className='searchBar'>
            <input type='text' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <span className='lupa' onClick={search}>AA</span>
        </div>
    )
}
