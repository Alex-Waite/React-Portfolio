import React from "react"

import AbtMeText from "../components/AbtMeText"
import AbtMeImage from "../components/AbtMeImage"

function Aboutme () {
    return (
        <main>
        <section class="section-1">
            <div class="container text-center">
                <div class="row">

                    <AbtMeText />
                    <AbtMeImage />                   
                    
                </div>

            </div>
        </section>
    </main>
    )
}

export default Aboutme