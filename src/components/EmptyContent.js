const EmptyContent = () => {
    return (
        <div className="empty-content-container">
            <img alt="no recipes found" className="empty-content-image" src="no-recipes.png"/>
            <h2>There are no recipes starting with this letter... yet! </h2>
            <h3>Try choosing another one!</h3>
        </div>
    )
}

export default EmptyContent;