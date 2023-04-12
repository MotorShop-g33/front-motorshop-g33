import { StyledList, StyledListItem } from "../../styles/photosList";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

interface IPhotosList {
	photosList: Array<object>;
}

export const PhotosList = ({ photosList }: IPhotosList) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<StyledList>
				{photosList.map((item) => (
					<StyledListItem onClick={onOpen} key={item.id} >
						<img src={item.img} />
					</StyledListItem>
				))}
			</StyledList>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Imagem do veículo</ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
