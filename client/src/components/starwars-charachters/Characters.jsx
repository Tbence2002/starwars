import { useEffect, useState } from 'react'
import Character from './Character'
import axios from 'axios'
import { RingLoader } from 'react-spinners'
import CharacterSearch from './CharacterSearch';

function Characters({ search, setSearch }) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            axios.get(`http://localhost:3002/api/people/?page=${page}`)
                .then((response) => {
                    if (response.data.error) {
                        console.log("Hiba történt a karakterek lekérés során.");
                    } else {
                        setCharacters(response.data.results);
                    }
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 500);
        return () => clearTimeout(timer);
    }, [page]);

    function handleNext() {
        setPage(page + 1)
    }

    function handleBack() {
        setPage(page - 1);
    }

    return (
        <div className='py-5 px-10'>
            <div className="flex items-center justify-around my-14 flex-col gap-10 lg:flex-row">
                <h2 className='text-white text-5xl text-center'><span className='text-yellow-400'>Star Wars</span> karakterek</h2>
                <CharacterSearch search={search} setSearch={setSearch} />
            </div>
            {loading ?
                <div className="flex justify-center py-20">
                    <RingLoader color="#facc15" size={90} className='flex justify-center' />
                </div>
                :
                error ?
                    <div className='text-white text-center py-6'>
                        <h3 className='text-3xl mb-3'>Nincs megjeleníthető adat,</h3>
                        <p className='text-2xl'>Hiba történt a Star Wars karakterek lekérdezése során!</p>
                    </div>
                    :
                    <>
                        <div className='flex gap-10 flex-wrap justify-center py-5'>
                            {characters
                                .filter((names) => {
                                    if (search === "") {
                                        return true;
                                    } else if (names.name.toLowerCase().includes(search.toLowerCase())) {
                                        return true;
                                    }
                                    return false;
                                })
                                .map((character, index) => (
                                    <Character key={index} character={character} />
                                ))}
                        </div>
                        <div className="buttons text-white flex gap-7 my-5 justify-center">
                            {page === 1 ? ""
                                :
                                <div className="back-btn">
                                    <button onClick={handleBack} className='bg-gray-800 py-2 px-5 rounded-md hover:bg-gray-900 transition'>Vissza</button>
                                </div>
                            }
                            <div className="page-number">
                                <button className='bg-gray-800 py-2 px-5 rounded-md hover:bg-gray-900 transition'>{page}. oldal</button>
                            </div>
                            {page >= 9 ? ""
                                :
                                <div className="next-btn">
                                    <button onClick={handleNext} className='bg-gray-800 py-2 px-5 rounded-md hover:bg-gray-900 transition'>Tovább</button>
                                </div>
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default Characters