import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

    return (
     <div className="NavBar">
            <nav>
             <div className="ancora">
                <h1>DESCOMPLICA</h1>


                <a onClick={FecharMenu} href='/'>HOME</a>

                <a onClick={FecharMenu} href="/cadastrar"> CURSOS</a>
                <a onClick={FecharMenu} href="/entrenimentos">ENTERTENIMENTOS</a>
                <a onClick={FecharMenu} href="/sobre">SOBRE</a>



                </div>
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                <h1>DESCOMPLICA</h1>


                <a onClick={FecharMenu} href='/'>HOME</a>

                <a onClick={FecharMenu} href="/cadastrar"> CURSOS</a>
                <a onClick={FecharMenu} href="/entretenimentos">ENTERTENIMENTOS</a>
                <a onClick={FecharMenu} href="/sobre">SOBRE</a>


            </section>
        </div>
    );
}
export default NavBar;
