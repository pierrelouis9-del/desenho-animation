import React from "react";
import "./sistema-solar.css";


function SistemaSolar() {


    return(
        <body>
    <main class="container">
        <div class="sistema-solar">
            <div class="sol"></div>
            <div class="orbita-Mercure">
                <div class="Mercure"></div>
            </div>
            
            <div class="orbita-Venus">
                <div class="Venus"></div>
            </div>
            <div class="orbita-Terre">
                <div class="Terre"></div>
            </div>
            <div class="orbita-Mars">
                <div class="Mars"></div>
            </div>
            <div class="orbita-Jupiter">
                <div class="Jupiter"></div>
            </div>
            <div class="orbita-Saturne">
                <div class="Saturne"></div>
            </div>
            <div class="orbita-Uranus">
                <div class="Uranus"></div>
            </div>
            <div class="orbita-Neptune">
                <div class="Neptune"></div>
            </div>
        </div>
    </main>
        </body>
    );
}
export default SistemaSolar;