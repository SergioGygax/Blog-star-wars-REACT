import React, { useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Personajes from "../component/personajes.jsx";
import Planetas from "../component/planetas.jsx";
import Naves from "../component/naves.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);

	
	console.log("NAVES", store.naves)
	
	
	return (
	<div className="text-center mt-5">
		<Personajes/>
		<Planetas/>
		<Naves/>
	</div>
)};
