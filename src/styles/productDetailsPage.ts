import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 40px 0 70px 0;

	width: 100vw;

	font-family: "Inter";
	font-style: normal;

	color: var(--gray-1);
	background: var(--random-13);

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
`;

export const ProductSection = styled.section`
	width: 50vw;
	padding-right: 2vw;
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
`;

export const DescriptionProduct = styled.div`
	padding: 36px 44px;
	margin-bottom: 16px;
	background: var(--gray-10);

	border-radius: 4px;

	h1 {
		margin-bottom: 32px;
	}
`;

export const CommentsProduct = styled.section``;

export const Comments = styled.div`
	padding: 36px 44px;
	margin-bottom: 33px;
	background: var(--gray-10);

	border-radius: 4px;

	.comments-h1 {
		margin-bottom: 32px;
	}
`;

export const AddComments = styled.div`
	padding: 36px 44px;
	background: var(--gray-10);

	border-radius: 4px;
`;

export const InfoSection = styled.aside`
	height: min-content;
	width: 30vw;
`;

export const ProductPhotos = styled.div`
	padding: 36px 44px;
	margin-bottom: 33px;
	background: var(--gray-10);

	border-radius: 4px;
`;

export const UserProfile = styled.div`
	padding: 36px 44px;
	background: var(--gray-10);

	border-radius: 4px;
`;
