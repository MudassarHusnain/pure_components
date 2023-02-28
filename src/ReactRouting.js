import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes, Switch } from 'react-router-dom'
export default function ReactRouting() {
    return (
        <div>ReactRouting
            <Router>
                <Link to='/'>Home Page</Link>
                <br />
                <Link to='/about'>About Page</Link>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </div>
    )
}
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page of website</p>
        </div>
    )
}
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is the About page of website</p>
        </div>
    )
}
function PageNotFound() {
    return(
    <h1>404 Page Not Found</h1>
    );
}