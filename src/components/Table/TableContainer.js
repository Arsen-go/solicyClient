import React from "react";
import styled from "styled-components";
import AppLogo from "../Utils/AppLogo.js";
import Table from "./Table";

export default function MyTableContainer() {
	return (
		<MTableContainer>
			<AppLogo />
			<TableBackground className="make-dissapear">
				<Table></Table>
			</TableBackground>
		</MTableContainer>
	);
}

const MTableContainer = styled.div`
	height: 100vh;
	width: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TableBackground = styled.div`
	height: 60vh;
	width: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	border-radius: 7%;
	overflow: hidden;
`;