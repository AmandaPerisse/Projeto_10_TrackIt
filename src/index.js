import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/reset.css';
import './styles/style.css';

import Login from './components/TelaLogin/Login';
import Cadastro from './components/TelaCadastro/Cadastro';
import Hoje from './components/TelaHoje/Hoje';
import Habitos from './components/TelaHabitos/Habitos';
import Historico from './components/Historico';

function App() {
    
    const [token, setToken] = React.useState('');
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [image, setImage] = React.useState('');

    return (
        <BrowserRouter>
			<Routes>
                <Route path="/" element={<Login setToken = {setToken} setId = {setId} setName = {setName} setImage = {setImage} />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/hoje" element={<Hoje token = {token} id = {id} name = {name} image = {image}/>}></Route>
                <Route path="/habitos" element={<Habitos token = {token} id = {id} name = {name} image = {image}/>}></Route>
                <Route path="/historico" element={<Historico token = {token} id = {id} name = {name} image = {image}/>}></Route>
            </Routes>
		</BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));