export function Footer(props) {
    
    return (
        <footer className="bg-green">
            <p>{props.footer.title}</p>
            <p>
                {
                    props.footer.socials.map(social => <a href="#">{social}</a>)
                }
            </p>
        </footer>
    )
}