import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import '../../services/api';
import api from '../../services/api';

export default function Register(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[whatsapp,setWhatsapp] = useState('');
    const[city,setCity] = useState('');
    const[uf,setUf] = useState('');

    async function handleRegister(e){
        e.preventDefault(); 

        const data = {
            name,email,whatsapp,city,uf
        };
        console.log(data);
        try{
       const response = await api.post('ongs', data);

       alert(`Seu acesso é: ${response.data.id}`);
        }catch(err){
            alert("Erro no cadastro");
            console.log(err);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro</p>
                    <Link className="back-link" to="/register" >
                        <FiArrowLeft color="#e02041"/> Não tenho cadastro
                    </Link>
                    
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
                        <input placeholder="UF" style={{ width:80}} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button" type="submit">
                        Cadatrar
                    </button>
                </form>
            </div>
        </div>
    )
}