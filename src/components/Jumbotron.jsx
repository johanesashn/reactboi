function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1>{props.jumbotron.title}</h1>
            <p>{props.jumbotron.description}</p>
            <a href="#about" className="btn">{props.jumbotron.button}</a>
        </div>
    )
}

export default Jumbotron;