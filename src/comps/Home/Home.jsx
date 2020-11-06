import React from 'react'
import headset from "./headset.png"

function Home() {

    return (
        <div className="Home" id="home">
            <div className="square"></div>
           <div className="Home-content">
               <h1>Best &#38; Smart Digital Product</h1>
               <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
               <button>BUY PRODUCTS</button>
           </div>
           <img src={headset} alt="headset"/>
        </div>
    )
}

export default Home
