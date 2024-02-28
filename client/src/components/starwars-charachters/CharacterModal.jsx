import { useEffect, useState } from 'react';
import axios from 'axios';
import { RingLoader } from 'react-spinners'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

function CharacterModal({ open, onCloseModal, character }) {
    const [homeworld, setHomeWorld] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getHomeWorld() {
            try {
                const response = await axios.get(character.homeworld);
                setHomeWorld(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Hiba történt a szülőföld lekérése során:", error);
            }
        }
        if (open && character.homeworld) {
            getHomeWorld();
        }
    }, [open, character.homeworld])

    const bg = {
        modal: {
            background: "#1f2937",
            borderRadius: "1rem",
        },
        closeButton: {
            background: '#fff',
            borderRadius: "50%",
            padding: '0.2rem',
            marginTop: "1.1rem",
            marginRight: "0.5rem",
            outline: "none"
        }
    };

    return (
        <>
            <Modal open={open} onClose={onCloseModal} center styles={bg}>
                <div className="border-b-4 border-indigo-500 mb-8">
                    <h2 className='text-5xl text-indigo-500 mb-3'>{character.name}</h2>
                </div>
                <div className='text-white'>
                    <h3 className='text-3xl mb-5 text-center md:text-left'>Alapadatok</h3>
                    <div className="flex gap-5 mb-5 flex-wrap justify-center md:justify-start">
                        <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                            <p className='text-[1.2rem] font-semibold'>Magasság</p>
                            {
                                character.height === "unknown" ? <p>Nincs adat.</p>
                                    :
                                    <p>{character.height}</p>
                            }
                        </div>
                        <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                            <p className='text-[1.2rem] font-semibold'>Súly</p>
                            {
                                character.mass === "unknown" ? <p>Nincs adat.</p>
                                    :
                                    <p>{character.mass}</p>
                            }
                        </div>
                        <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                            <p className='text-[1.2rem] font-semibold'>Születés dátum</p>
                            {
                                character.birth_year === "unknown" ? <p>Nincs adat.</p>
                                    :
                                    <p>{character.birth_year.split("BBY")[0]} BBY</p>
                            }
                        </div>
                        <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                            <p className='text-[1.2rem] font-semibold'>Filmek száma</p>
                            {
                                character.films.length === "unknown" ? <p>Nincs adat.</p>
                                    :
                                    <p>{character.films.length}</p>
                            }
                        </div>
                    </div>
                    {loading ?
                        <div className="flex justify-center">
                            <RingLoader color="#facc15" size={40} />
                        </div>
                        :
                        homeworld &&
                        <>
                            <h3 className='text-3xl mb-5 mt-10 text-center md:text-left'>Szülőföld adatok</h3>
                            <div className="flex gap-5 flex-wrap justify-center md:justify-start">
                                <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                                    <p className='text-[1.2rem] font-semibold'>Szülőföld</p>
                                    {
                                        homeworld.name === "unknown" ? <p>Nincs adat.</p>
                                            :
                                            <p>{homeworld.name}</p>
                                    }
                                </div>
                                <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                                    <p className='text-[1.2rem] font-semibold'>Terep</p>
                                    {
                                        homeworld.terrain === "unknown" ? <p>Nincs adat.</p>
                                            :
                                            <p>{homeworld.terrain}</p>
                                    }
                                </div>
                                <div className="bg-gray-600 py-2 px-3 rounded-lg w-[250px] md:w-[auto]">
                                    <p className='text-[1.2rem] font-semibold'>Klíma</p>
                                    {
                                        homeworld.climate === "unknown" ? <p>Nincs adat.</p>
                                            :
                                            <p>{homeworld.climate}</p>
                                    }
                                </div>

                            </div>
                        </>
                    }
                </div>
            </Modal>
        </>
    )
}

export default CharacterModal