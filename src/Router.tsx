import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefualtLayout";

import { CadEmpresa } from "./pages/CadEmpresa/Home";

import React from 'react'
import { Header } from "./layouts/Header/Header";
import { CadFunc } from "./pages/CadFunc/Home";
import { SearchPoint } from "./pages/SearchPoint/Home";
import { AddPoint } from "./pages/Add Point/Home";



export function Router() {

return (

    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/Header" element={<Header />} />
        <Route path="/AddPoint" element={<AddPoint />} />
        <Route path="/Empresa" element={<CadEmpresa />} />
        <Route path="/Funcionario" element={<CadFunc/>} />
        <Route path="/Point" element={<SearchPoint />} />
      </Route>
    </Routes>


)


}