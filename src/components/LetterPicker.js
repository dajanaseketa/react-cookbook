import Letter from "./Letter";

const LetterPicker = ({selectedLetter, setSelectedLetter}) => {
    return (
        <div className="letter-picker-container">
            <Letter key='A' letter='A' isSelected={selectedLetter === 'a'} onSelect={() => setSelectedLetter('a')}/>
            <Letter key='B' letter='B' isSelected={selectedLetter === 'b'} onSelect={() => setSelectedLetter('b')}/>
            <Letter key='C' letter='C' isSelected={selectedLetter === 'c'} onSelect={() => setSelectedLetter('c')}/>
            <Letter key='D' letter='D' isSelected={selectedLetter === 'd'} onSelect={() => setSelectedLetter('d')}/>
            <Letter key='E' letter='E' isSelected={selectedLetter === 'e'} onSelect={() => setSelectedLetter('e')}/>
            <Letter key='F' letter='F' isSelected={selectedLetter === 'f'} onSelect={() => setSelectedLetter('f')}/>
            <Letter key='G' letter='G' isSelected={selectedLetter === 'g'} onSelect={() => setSelectedLetter('g')}/>
            <Letter key='H' letter='H' isSelected={selectedLetter === 'h'} onSelect={() => setSelectedLetter('h')}/>
            <Letter key='I' letter='I' isSelected={selectedLetter === 'i'} onSelect={() => setSelectedLetter('i')}/>
            <Letter key='J' letter='J' isSelected={selectedLetter === 'j'} onSelect={() => setSelectedLetter('j')}/>
            <Letter key='K' letter='K' isSelected={selectedLetter === 'k'} onSelect={() => setSelectedLetter('k')}/>
            <Letter key='L' letter='L' isSelected={selectedLetter === 'l'} onSelect={() => setSelectedLetter('l')}/>
            <Letter key='M' letter='M' isSelected={selectedLetter === 'm'} onSelect={() => setSelectedLetter('m')}/>
            <Letter key='N' letter='N' isSelected={selectedLetter === 'n'} onSelect={() => setSelectedLetter('n')}/>
            <Letter key='O' letter='O' isSelected={selectedLetter === 'o'} onSelect={() => setSelectedLetter('o')}/>
            <Letter key='P' letter='P' isSelected={selectedLetter === 'p'} onSelect={() => setSelectedLetter('p')}/>
            <Letter key='Q' letter='Q' isSelected={selectedLetter === 'q'} onSelect={() => setSelectedLetter('q')}/>
            <Letter key='R' letter='R' isSelected={selectedLetter === 'r'} onSelect={() => setSelectedLetter('r')}/>
            <Letter key='S' letter='S' isSelected={selectedLetter === 's'} onSelect={() => setSelectedLetter('s')}/>
            <Letter key='T' letter='T' isSelected={selectedLetter === 't'} onSelect={() => setSelectedLetter('t')}/>
            <Letter key='U' letter='U' isSelected={selectedLetter === 'u'} onSelect={() => setSelectedLetter('u')}/>
            <Letter key='V' letter='V' isSelected={selectedLetter === 'v'} onSelect={() => setSelectedLetter('v')}/>
            <Letter key='W' letter='W' isSelected={selectedLetter === 'w'} onSelect={() => setSelectedLetter('w')}/>
            <Letter key='X' letter='X' isSelected={selectedLetter === 'x'} onSelect={() => setSelectedLetter('x')}/>
            <Letter key='Y' letter='Y' isSelected={selectedLetter === 'y'} onSelect={() => setSelectedLetter('y')}/>
            <Letter key='Z' letter='Z' isSelected={selectedLetter === 'z'} onSelect={() => setSelectedLetter('z')}/>
        </div>
    )
}

export default LetterPicker;
