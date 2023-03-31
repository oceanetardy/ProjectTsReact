import React, {FC} from "react";
import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";
import Title from "../components/Title";
import logo from "../assets/logo.svg";

const User:FC = ()=>{
    return(

        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>
            {/*<button onClick={add}>Ajouter un utilisateur </button>*/}
            {/*<button onClick={listTasks}>Voir toutes les tâches </button>*/}


                <div> <ListUsers /></div>


            <img src={logo} className="App-logo" alt="logo" />

            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Footer/>

        </header>





    )
}

export default User;