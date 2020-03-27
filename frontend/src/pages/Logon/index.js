import React from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import foto1 from '../../assets/28929274.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
            <form>
                <h1>Faça seu logon:</h1>
                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register" >
                    <FiLogIn color="#e02041"/> Não tenho cadastro
                </Link>
            </form>
            </section>

            <img src={foto1} alt= "rocket"/>
        </div>

    );
}