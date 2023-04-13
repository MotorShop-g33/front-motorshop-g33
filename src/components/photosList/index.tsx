import { useState } from "react";
import {
	DivImage,
	StyledList,
	StyledListItem,
	StyledModalContent,
} from "../../styles/photosList";

import {
	Modal,
	ModalOverlay,
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
					<StyledListItem
						onClick={() => {
							onOpen();
							setProductImage(item.img);
						}}
						key={item.id}
					>
						<img src={item.img} />
					</StyledListItem>
				))}
			</StyledList>

			<Modal isOpen={isOpen} onClose={onClose} size="xl">	
				<ModalOverlay />
				<StyledModalContent>
					<ModalHeader pb={45}>Imagem do veículo</ModalHeader>
					<ModalCloseButton
						fontSize={"md"}
						color={"var(--gray-4)"}
						_hover={{ bg: "var(--gray-7)", color: "var(--gray-2)" }}
					/>
					<ModalBody>
						<DivImage>
							<img src={productImage} />
						</DivImage>
					</ModalBody>
				</StyledModalContent>
			</Modal>
		</>
	);
};
