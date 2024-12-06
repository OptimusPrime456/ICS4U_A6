import './HomeView.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

function HomeView() {
    return (
        <>
            <Header />
            <div className="content">
                <Hero />
                <Feature />
                <Feature />
                <Hero />
                <Feature />
                <Feature />
            </div>
            <Footer />
        </>
    )
}

export default HomeView