import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import CreateMatricula from './CriarMatricula'
import ReadGames from './ListarGames'
import UpdateMatricula from './AlterarMatricula'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={ <Home/> }/>
                  <Route path="/matricula/cadastrar" element={ <CreateMatricula/> }/>
                  <Route path="/games" element={ <ReadGames/> }/>
                  <Route path="/matriculas/alterar" element={ <UpdateMatricula/>}/>
            </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
)



