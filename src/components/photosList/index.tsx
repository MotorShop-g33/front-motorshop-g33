import { useState } from "react";
import { DivImage, StyledList, StyledListItem } from "../../styles/photosList";

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
	const [productImage, setProductImage] = useState<string | undefined>();

	return (
		<>
			<StyledList>
				{photosList.map((item) => (
					<StyledListItem onClick={() => {
            onOpen()
            setProductImage(item.img)}}  key={item.id}>
						<img src={item.img} />
					</StyledListItem>
				))}
			</StyledList>


			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Imagem do veículo</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<DivImage>
							<img src={productImage} />
						</DivImage>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
