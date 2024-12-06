import './MoviesView.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import { Outlet } from 'react-router-dom'

function MoviesView() {
    return (
        <div className="layout">
            <Header className="header" />
            <Genres className="sidebar" />
            <div className="main-content">
                <Outlet /> { }
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default MoviesView