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
	PrimarySection,
	ProductMainImage,
	ProductPhotos,
	ProductSection,
	SecondarySection,
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
			createdAt: "há 3 dias",
		},
		{
			id: 2,
			userImg:
				"https://www.seekpng.com/png/full/145-1453424_shrek-movie-dragon-james-charles-dragon-from-shrek.png",
			username: "Dragon",
			description: "Esse já é rodado, pau pra toda obra uiui",
			createdAt: "há 1 dia",
		},
		{
			id: 3,
			userImg:
				"https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-HD-Quality.png",
			username: "Shrek",
			description:
				"Esse é o meu preferido, já rodei muitos quilômetros com ele, pra qualquer lugar que eu ia.",
			createdAt: "há 8 dias",
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
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-PNG-Pic-Background.png",
		},
		{
			id: 5,
			img: "https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-Background-Clip-Art.png",
		},
		{
			id: 6,
			img: "https://www.pngplay.com/wp-content/uploads/12/Donkey-From-Shrek-Transparent-Images.png",
		},
	];

	return (
		<Main>
			<PrimarySection>
				<ProductSection>
					<ProductMainImage>
						<img src={exampleData.img} alt={exampleData.title} />
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
				</ProductSection>

				<InfoSection>
					<ProductPhotos>
						<h1>Fotos</h1>
						<PhotosList photosList={photosAnnouncement} />
					</ProductPhotos>
					<UserProfile>Profile</UserProfile>
				</InfoSection>
			</PrimarySection>

			<SecondarySection>
				<CommentsProduct>
					<Comments>
						<h1 className="comments-h1">Comments</h1>
						<CommentsList commentsList={fakeComments} />
					</Comments>
					<AddComments>Add Comments</AddComments>
				</CommentsProduct>
			</SecondarySection>
		</Main>
	);
};
