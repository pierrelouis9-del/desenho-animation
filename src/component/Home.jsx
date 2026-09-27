import react from "react";
import {useNavigate} from "react-router-dom";
import "./Home.css";


function Home() {
    const navigate = useNavigate();
    return(
        <body> 
            <header>Drawing & Animation</header>
            <p>Bem-vindo à Drawing & Animation app!</p>
            <main className="container">
                <div className="card" >
                    <h2>Escolha</h2>
                    <button onClick={() => navigate("/sistema-solar")}>Ir no Sistema Solar</button>  
                     <button onClick={() => navigate("/paysagem")}>Ir para Paysagem</button>
                </div>
            </main>
        </body>
    )
}
export default Home;