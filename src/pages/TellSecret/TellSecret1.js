import React, { useState } from 'react'
import Tree1 from './images/tree.png'
import "./TellSecret1.css"

export default function TellSecret1() {

    const [text, setText] = useState("");

    return (
        <div className="wrapper">
            <div className="left">
                <div className="title">Got a secret and it is killing you?</div>
                <div className="subt">You came to the right place</div>
                <div className="nidarr" >Submit your secret to Flammable Tree</div>

                <div className="boxT">

                <input type="text" name="Type here"              placeholder="Type here" 
                    />

                </div>
                
                <p style={{ color: 'black' }}>No worries, nothing will be saved:) </p>
            </div>



            {/* <div className="right" style={{
                height: '10px'
            }}>
                <div className="imgbg" style={{
                    marginLeft:'500px',
                    backgroundImage: `url(${Tree1})`,
                    // backgroundSize: 'cover'
                    backgroundRepeat: 'no-repeat'
                }}></div>
            </div> */}
        </div>
    )
}
