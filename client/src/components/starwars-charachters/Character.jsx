import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { useState } from 'react';
import CharacterModal from './CharacterModal';

function Character({ character }) {
    const imageUrl = `https://picsum.photos/300/200?random=${encodeURIComponent(character.name)}`;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <>
            <Tilt>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}
                    onClick={onOpenModal}
                    className="box hover: cursor-pointer">
                    <div className="w-[300px] h-[100%] bg-gray-800 rounded-lg">
                        <div className="image">
                            <img src={imageUrl} alt={character.name} className='rounded-lg' />
                        </div>
                        <div className="flex items-center justify-center text-center">
                            <h3 className='truncate text-3xl text-indigo-500 p-5'>{character.name}</h3>
                        </div>
                    </div>
                </motion.div>
            </Tilt>
            <CharacterModal open={open} onCloseModal={onCloseModal} character={character}/>
        </>
    )
}

export default Character