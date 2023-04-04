import styled from "styled-components";

interface iPropsInput {
    set_background_color?: string,
    set_text_color?: string,
    set_border_color?: string,
    set_width?: string,
    set_height?: string,
    set_padding?: string,
    set_margin_bottom?: string,
}

interface iPropsLabel {
    set_color?: string,
}


// INPUT OPTIONS

export const Text_input = styled.input`
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;

    height: ${({set_height = "48px"}: iPropsInput) => set_height};
    width: ${({set_width = "100%"}: iPropsInput) => set_width};
    padding: ${({set_padding = "0 16px"}: iPropsInput) => set_padding};
    color: var(--${({set_text_color = "gray-2"}: iPropsInput) => set_text_color});
    background-color: var(--${({ set_background_color = "gray-9" }: iPropsInput) => set_background_color});
    border: 2px solid var(--${({set_border_color = "gray-7"}: iPropsInput) => set_border_color});
    margin-bottom: ${({set_margin_bottom = "12px"}: iPropsInput) => set_margin_bottom};
`;

export const Input_label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: var(--${({set_color = "gray-1"}: iPropsLabel) => set_color});
`;