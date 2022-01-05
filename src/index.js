import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/reset.css';
import './styles/style.css';

import Login from './components/TelaLogin/Login';
import Cadastro from './components/TelaCadastro/Cadastro';
import Habitos from './components/TelaHoje/Hoje';

function App() {
    
    const [token, setToken] = React.useState('');

    return (
        <BrowserRouter>
			<Routes>
                <Route path="/" element={<Login setToken = {setToken} />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/hoje" element={<Habitos token = {token} />}></Route>
            </Routes>
		</BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));