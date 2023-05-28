import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Pages/Inicial"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login"
import Mensagem from "./Pages/Mensagem"
import Perfil from "./Pages/Perfil"
import Home from "./Pages/Home"

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mensagem" element={<Mensagem />}></Route>
          <Route path="/perfil" element={<Perfil />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
