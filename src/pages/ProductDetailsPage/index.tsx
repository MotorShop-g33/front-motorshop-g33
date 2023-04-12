import { CommentsList } from "../../components/commentsList";
import { PhotosList } from "../../components/photosList";
import { Button_medium_text } from "../../styles/buttons";
import {
	AddComments,
	Comments,
	CommentsProduct,
	DescriptionProduct,
	InfoProduct,
	InfoSection,
	Main,
	ProductMainImage,
	ProductPhotos,
	ProductSection,
	UserProfile,
} from "../../styles/productDetailsPage";

export const ProductDetailsPage = () => {
	// --> DADOS MOCKADOS APENAS PARA VISUALIZAÇÃO DO DESIGN DOS CARDS (NECESSÁRIO DELEÇÃO FUTURA) <--
	const exampleData = {
		img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-PNG-Pic-Background.png",
		title: "Burro do shrek",
		description: "Um novissimo burro com 0 km e manutenção em dia",
		userImg: "",
		username: "Felipe Bulhoes",
		milage: "0 KM",
		year: 2006,
		price: 59990,
	};

	const fakeComments = [
		{
			id: 1,
			userImg:
				"https://www.pngplay.com/wp-content/uploads/14/Princess-Fiona-PNG-Clipart-Background.png",
			username: "Fiona",
			description:
				"Burro de qualidade, tração nas quatro patas! POTEEENTE!",
			createdAt: "12/04/2023",
		},
		{
			id: 2,
			userImg:
				"https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-HD-Quality.png",
			username: "Shrek",
			description: "Esse é o meu preferido, tô com ele em todo lugar.",
			createdAt: "12/04/2023",
		},
		{
			id: 3,
			userImg:
				"https://www.pngplay.com/wp-content/uploads/14/Princess-Fiona-PNG-Clipart-Background.png",
			username: "Fiona",
			description:
				"Burro de qualidade, tração nas quatro patas. POTEEENTE!",
			createdAt: "12/04/2023",
		},
	];

	const photosAnnouncement = [
		{
			id: 1,
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-PNG-Pic-Background.png",
		},
		{
			id: 2,
			img: "https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-Background-Clip-Art.png",
		},
		{
			id: 3,
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-Transparent-Images.png",
		},
		{
			id: 4,
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-Transparent-Images.png",
		},
		{
			id: 5,
			img: "https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-Background-Clip-Art.png",
		},
		{
			id: 6,
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-PNG-Pic-Background.png",
		},
	];

	return (
		<>
			<Main>
				<ProductSection>
					<h1></h1>
					<ProductMainImage>
						<img
							src={exampleData.img}
							alt={exampleData.description}
						/>
					</ProductMainImage>
					<InfoProduct>
						<div>
							<h1>{exampleData.title}</h1>

							<div className="frame-info">
								<div className="frame-tags">
									<div className="tags">
										{exampleData.year}
									</div>
									<div className="tags">
										{exampleData.milage}
									</div>
								</div>
								<p>R$ {exampleData.price}</p>
							</div>
							<Button_medium_text className="purchase-button">
								Comprar
							</Button_medium_text>
						</div>
					</InfoProduct>
					<DescriptionProduct>
						<h1>Description</h1>
						<p>{exampleData.description}</p>
					</DescriptionProduct>
					<CommentsProduct>
						<Comments>
							<h1 className="comments-h1">Comments</h1>
							<CommentsList commentsList={fakeComments} />
						</Comments>
						<AddComments>Add Comments</AddComments>
					</CommentsProduct>
				</ProductSection>
				<InfoSection>
					<ProductPhotos>
						<h1>Fotos</h1>
						<PhotosList photosList={photosAnnouncement} />
					</ProductPhotos>
					<UserProfile>Profile</UserProfile>
				</InfoSection>
			</Main>
		</>
	);
};
