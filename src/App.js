import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Projects from './components/pages/Projects'

function App(){
    return(
        <Router>
            <Navbar/>
                <Container customClass='min-height'>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/company' element={<Company nome='luis'/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/newproject' element={<NewProject/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                </Routes>
                </Container>
            <Footer/>
        </Router>
    )
}

export default App