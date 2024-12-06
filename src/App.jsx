import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GenreView from './views/GenreView'
import DetailView from './views/DetailView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'
import Feature from './components/Feature'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="" element={<Feature />}/>
          <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
