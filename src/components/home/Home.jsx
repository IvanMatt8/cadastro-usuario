import React from "react";
import Main from "../teamplate/Main";



// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
        <Main icon="home" title="Inicio"
           subtitle="Projeto React"> 
           <div className="display-4">
                Bem Vindo!
                <hr />
               <p className="mb-0">Sistema para exemplificar 
               a construção de um cadastro desenvolvido em React!</p> 
           </div>
           
        </Main>