import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="container-fluid shadow-sm">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo col-auto"><h2>D.O.P</h2></div>
                    <nav className=" col-auto">
                        <ul className="d-flex">
                            <li><Link to="/">דף הבית</Link></li>
                            <li><Link to="/gallery">גלריה</Link></li>
                            <li><Link to="/products">מוצרים</Link></li>
                            <li><Link to="/events">אירועים</Link></li>
                            <li><Link to="/login">התחברות/הרשמה</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}