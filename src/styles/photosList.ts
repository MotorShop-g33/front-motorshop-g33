import styled from "styled-components";
import { List, ListItem, ModalContent } from "@chakra-ui/react";

export const StyledList = styled(List)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
	justify-content: center;
	align-items: center;

	gap: 32px 14px;
`;

export const StyledListItem = styled(ListItem)`
	display: flex;
	align-items: flex-start;
	align-content: center;
	justify-content: center;

	padding: 20px 5px;
	gap: 10px;

	background: var(--gray-7);
	border-radius: 4px;

	height: 108px;
	width: 108px;

	cursor: pointer;

	img {
		height: 100%;
		width: auto;
	}

	@media screen and (max-width: 750) {
		height: 90px;
		width: 90px;
	}
`;

export const DivImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 28px;

	height: 32vh;

	background: var(--gray-7);
	border-radius: 4px;

	img {
		height: 100%;
		width: auto;

		padding: 20px;
	}
`;

export const StyledModalContent = styled(ModalContent)`
	width: 100vw;
`;
