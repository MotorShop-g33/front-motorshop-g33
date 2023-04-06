import styled from "styled-components";

interface iPropsTypography {
  color?: string;
}

// HEADING OPTIONS  // titles : Lexend

export const Heading_1_700 = styled.h1`
  font-size: 44px;
  font-weight: 700;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_2_600 = styled.h2`
  font-size: 36px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_3_600 = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_3_500 = styled.h3`
  font-size: 32px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_4_600 = styled.h4`
  font-size: 28px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_4_500 = styled.h4`
  font-size: 28px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_5_600 = styled.h5`
  font-size: 24px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_5_500 = styled.h5`
  font-size: 24px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_6_600 = styled.h6`
  font-size: 20px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_6_500 = styled.h6`
  font-size: 20px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_7_600 = styled.h6`
  font-size: 16px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Heading_7_500 = styled.h6`
  font-size: 16px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

// TEXT OPTIONS

export const Paragraph_1_400 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Paragraph_1_600 = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Paragraph_2_400 = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;

export const Paragraph_2_500 = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--${({ color = "gray-1" }: iPropsTypography) => color});
`;
