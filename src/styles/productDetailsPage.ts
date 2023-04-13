import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 40px 0 70px 0;

	width: 100%;

	font-family: "Inter";
	font-style: normal;

	color: var(--gray-1);
	background: linear-gradient(to bottom, var(--random-13), var(--gray-7));

	h1 {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 25px;
	}

	p {
		color: var(--gray-2);
	}

	@media screen and (max-width: 750px) {
	}
`;

export const PrimarySection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;

	width: auto;

	@media screen and (max-width: 750px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}
`;

export const ProductSection = styled.section`
	width: 54vw;
	padding-right: 2vw;

	@media screen and (max-width: 750px) {
		padding: 0 2vw 0 2vw;
		width: inherit;
	}
`;

export const ProductMainImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
	height: 355px;

	background: var(--gray-10);
	border-radius: 4px;

	img {
		height: 100%;
	}

	@media screen and (max-width: 750px) {
		img {
			width: inherit;
			height: 80%;
		}
	}
`;

export const InfoProduct = styled.div`
	padding: 36px 44px;
	margin-bottom: 40px;
	border-radius: 4px;

	background: var(--gray-10);

	p {
		font-family: "Inter";
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;

		color: var(--gray-1);
	}

	.frame-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 45px;
		margin-bottom: 24px;
	}

	.frame-tags {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
	}

	.tags {
		padding: 4px 8px;
		border-radius: 4px;

		height: max-content;
		width: max-content;

		font-weight: 500;
		font-size: 14px;
		line-height: 24px;

		color: var(--random-13);
		background: var(--brand-4);
	}

	.purchase-button {
		color: var(--white-fixed);
		background: var(--random-13);
	}

	@media screen and (max-width: 750px) {
		padding: 36px 26px;
		height: 330px;

		div {
			height: 65%;
		}

		.frame-info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			margin-top: 35px;
			margin-bottom: 32px;
		}

		.purchase-button {
			margin-bottom: 32px;
		}
	}
`;

export const DescriptionProduct = styled.div`
	padding: 36px 44px;
	margin-bottom: 16px;
	background: var(--gray-10);

	border-radius: 4px;

	h1 {
		margin-bottom: 32px;
	}

	@media screen and (max-width: 750px) {
		padding: 36px 26px;
	}
`;

export const SecondarySection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 7.5vw;

	width: 54vw;

	@media screen and (max-width: 750px) {
		margin: 0;
		width: inherit;
	}
`;

export const CommentsProduct = styled.section`
	width: inherit;
	padding: 0 2vw 0 0;

	@media screen and (max-width: 750px) {
		padding: 0 2vw 0 2vw;
		width: auto;
	}
`;

export const Comments = styled.div`
	padding: 36px 44px;
	margin-bottom: 33px;
	background: var(--gray-10);

	border-radius: 4px;

	.comments-h1 {
		margin-bottom: 32px;
	}

	@media screen and (max-width: 750px) {
		padding: 36px 26px;
	}
`;

export const AddComments = styled.div`
	padding: 36px 44px;
	background: var(--gray-10);

	border-radius: 4px;

	@media screen and (max-width: 750px) {
		padding: 36px 26px;
	}
`;

export const InfoSection = styled.section`
	height: min-content;
	width: 30vw;

	@media screen and (max-width: 750px) {
		padding: 0 2vw 0 2vw;
		margin-bottom: 18px;
		width: inherit;
	}
`;

export const ProductPhotos = styled.div`
	padding: 36px 44px;
	margin-bottom: 33px;
	background: var(--gray-10);

	border-radius: 4px;

	h1 {
		margin-bottom: 32px;
	}

	@media screen and (max-width: 750px) {
		padding: 36px 38px;
	}
`;

export const UserProfile = styled.div`
	padding: 36px 44px;
	background: var(--gray-10);

	border-radius: 4px;
`;
