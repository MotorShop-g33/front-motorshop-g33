import styled from "styled-components";
import { List, ListItem } from "@chakra-ui/react";

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
`;

export const DivImage = styled.div`
	margin-bottom: 28px;

	background: var(--gray-7);
	border-radius: 4px;
`;
