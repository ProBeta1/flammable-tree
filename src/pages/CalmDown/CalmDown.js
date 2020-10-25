import React from 'react'
import YouTube from 'react-youtube';
import "./styles.css"

export default function CalmDown() {
    return (
        <div className="ct">
            <div className="quote">Can’t stop thinking? Something is driving you crazy?</div>
            <div className="quote">You came to the right place </div>
            <div className="quote" >Watch a relaxing video here</div>

            <div className="vid">
                <YouTube videoId="5gBJrZmbGLo" />
            </div>

        </div>
    )
}
