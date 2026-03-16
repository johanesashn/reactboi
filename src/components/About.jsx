function About(props) {

    return (
        <section id="about" className="about">
            <h2>{props.about.title}</h2>
            <p>
                {props.about.description}
            </p>
        </section>
    )
}

export default About;