import React from "react";
import Header from "./components/Header";
import GlobalStyle from './styles/global';
import Resume from "./components/Header/Resume";

const App = () =>{
    return (
    <>
    <Header/>
    <GlobalStyle/>
    <Resume/>
    </>
    );
};
export default App;