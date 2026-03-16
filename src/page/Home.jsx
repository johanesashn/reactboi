import Jumbotron from "@/components/Jumbotron"
import About from "@/components/About"
import { Footer } from "@/components/Footer"

export default function Home () {
    const about = {
        title: "About Us",
        description: "My Company is a leading provider of innovative technology solutions, helping businesses worldwide to achieve their goals. Our team is committed to excellence, creativity,and delivering outstanding results to our clients."
    }

    const footer = {
        title: "copyright 2026",
        socials: ['facebook', 'instagram', 'whatsapp']
    }

    const jumbotron = {
        title: "Selamat Datang",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, laboriosam.",
        button: "click me"
    }   

    return (
        <>
            <Jumbotron jumbotron={jumbotron}/>            
            <About about={about}/>
            <Footer footer={footer} />            
        </>
    )
}