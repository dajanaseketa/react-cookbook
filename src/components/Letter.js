const Letter = ({letter, isSelected, onSelect}) => {
    return (
        <div className={isSelected ? "letter-selected" : "letter"} onClick={onSelect}>
            {letter}
        </div>
    )
}

export default Letter;
