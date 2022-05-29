import React, { useEffect } from "react";
import styled from "styled-components";
import TableContainer from "./TableContainer.js"
import Matrix from "../Utils/Matrix.js"
import "./table.css"

export default function Login() {
	useEffect(() => {
		Matrix();
	})

	return (
		<div>
			<canvas id="canvasEl"></canvas>
			<LoginPage className="canvas-back">
				<TableContainer />
			</LoginPage>
		</div>
	);
}

const LoginPage = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: #011322;
	display: flex;
	justify-content: center;
`;