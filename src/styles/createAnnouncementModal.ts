import styled from "styled-components";

export const DivModal = styled.div`
	font-family: "Lexend";
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;

	.buttonOpenModal {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 0px;
	}

	.label {
		font-size: 14px;
		line-height: 17px;

		color: var(--gray-1);
	}

	.input {
		::placeholder {
			font-weight: 400;
			font-size: 16px;
			line-height: 0px;

			color: var(--gray-3);
		}
	}

	.textArea {
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;

		color: var(--gray-3);
	}

	.buttonAddImage {
		@media screen and (max-width: 415px){
			height: 3rem;
		}
	}

	.buttonFooter {
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 0px;

		border-radius: 3px;
		padding: 0.9rem 2rem;
	}
`;
