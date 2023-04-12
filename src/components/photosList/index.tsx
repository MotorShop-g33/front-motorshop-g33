import { ListItem } from "@chakra-ui/react";
import { StyledList, StyledListItem } from "../../styles/photosList";

interface IPhotosList {
	photosList: Array<object>;
}

export const PhotosList = ({ photosList }: IPhotosList) => {
	return (
		<StyledList spacing={10}>
			{photosList.map((item) => (
				<StyledListItem key={item.id}>
					<img src={item.img} />
				</StyledListItem>
			))}
		</StyledList>
	);
};
