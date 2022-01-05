import ReactDOM from "react-dom";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/reset.css';
import './styles/style.css';

import Login from './components/TelaLogin/Login';
import Cadastro from './components/TelaCadastro/Cadastro';

function App() {
    
    return (
        <BrowserRouter>
			<Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
		</BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));