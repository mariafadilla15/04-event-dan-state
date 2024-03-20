import { sculptureList } from "../data/article"; // ambil data artikel yang sudah ada
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);  // index data mulai dari 0

    function handleClick() {
        setIndex(index + 1); // counter index + 1, untuk melihat data selanjutnya
    };

    let sculpture = sculptureList[index]; // membaca data sesuai dengan index

    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-400 hover:bg-blue-700 text-white p-2 rounded m-2"> Artikel Selanjutnya </button>
            <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}