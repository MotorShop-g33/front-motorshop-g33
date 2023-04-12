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
	align-content: center;
	justify-content: center;
	margin-top: 0;

	height: 108px;
	width: 108px;

	img {
		height: 100%;
	}
`;
