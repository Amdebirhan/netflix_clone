import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        //a scroll listner that listen when we are scrolling
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", null)
        }

    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png" alt="" className="nav__logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="nav__avatar" />
        </div>
    )
}

export default Nav