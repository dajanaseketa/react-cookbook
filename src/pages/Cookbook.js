import { useState } from "react";
import LetterPicker from "../components/LetterPicker";

const Cookbook = () => {
    const [selectedLetter, setSelectedLetter] = useState('a');

    return (
        <div className='page-container'>
            <LetterPicker selectedLetter={selectedLetter} setSelectedLetter={setSelectedLetter} />
        </div>
    )
}

export default Cookbook;
