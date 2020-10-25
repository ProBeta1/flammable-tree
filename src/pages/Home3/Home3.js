import React from 'react'
import "./styles.css"
import HomeBackground from './images/home.png'

export default function Home3() {
    return (
        <div className="imgbg" style={{
            backgroundImage: `url(${HomeBackground})`,
            backgroundSize: 'cover'
        }}>
            
        </div>
    )
}
