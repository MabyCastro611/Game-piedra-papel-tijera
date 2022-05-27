import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Boards.css";
import tijera from "../assets/tijera.png";
import piedra from "../assets/piedra.png";
import papel from "../assets/papel.png";

export const Boards = () => {
	let navigate = useNavigate();

	const [players] = useState(JSON.parse(localStorage.getItem("players")));
	const [player1, setplayer1] = useState({
		name: "",
		counter: "",
	});

	const [player2, setplayer2] = useState({
		name: "",
		counter: "",
	});

	const [options] = useState([
		{
			name: "piedra",
			imagen: piedra,
			counter: "papel",
		},

		{
			name: "papel",
			imagen: papel,
			counter: "tijera",
		},

		{
			name: "tijera",
			imagen: tijera,
			counter: "piedra",
		},
	]);

	const handlerSelectOption = (data, isPlayers2 = false) => {
		if (isPlayers2 && player1.name.length < 1) {
			alert(`El turno es de: ${players.player1}`);
		}
		if (data.player1) {
			setplayer1({ name: data.player1.name, counter: data.player1.counter });
		} else {
			setplayer2({ name: data.player2.name, counter: data.player2.counter });
		}
	};

	const viewResults = () => {
		if (player1.name.length === 0 && player2.name.length === 0) {
			return alert(`El turno es de: ${players.player1}`);
		}

		if (player1.name === player2.counter) {
			let confirm = window.confirm(
				`${players.player1} Fue el ganador, ¿Desea Iniciar Otra partida?`
			);
			confirm ? navigate("/") : cleanResults();
		} else if (player2.name === player1.counter) {
			let confirm = window.confirm(
				`${players.player2} Fue el ganador, ¿Desea Iniciar Otra partida?`
			);
			confirm ? navigate("/") : cleanResults();
		} else {
			let confirm = window.confirm("Empate, ¿Desea Iniciar Otra partida?");
			confirm ? navigate("/") : cleanResults();
		}

		cleanResults();
	};

	const cleanResults = () => {
		setplayer1({ name: "", counter: "" });
		setplayer2({ name: "", counter: "" });
	};

	return (
		<div className="container">
			<div className="board">
				<div className="boxPlayer">
					<div style={{ textAlign: "center" }}>
						<h2>Player 1: {players.player1}</h2>
					</div>
					<div className="boardBox">
						{options.map((option, index) => (
							<div
								key={index}
								onClick={() =>
									handlerSelectOption(
										{ player1: { name: option.name, counter: option.counter } },
										false
									)
								}
								className="optionBox"
							>
								<p>{option.name}</p>
								<img className="options" src={option.imagen} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="btnCenterStart">
				<button className="btnResult" onClick={viewResults}>
					Ver resultados
				</button>
			</div>

			<div className="board1">
				<div className="boxPlayer">
					<div style={{ textAlign: "center" }}>
						<h2>Player 2: {players.player2}</h2>
					</div>
					<div className="boardBox">
						{options.map((option) => (
							<div
                className="optionBox"
								onClick={() =>
									handlerSelectOption(
										{ player2: { name: option.name, counter: option.counter } },
										true
									)
								}
							>
								<p>{option.name}</p>
								<img className="options" src={option.imagen} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
