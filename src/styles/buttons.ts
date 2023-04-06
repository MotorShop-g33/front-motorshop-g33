import styled from "styled-components";

interface iPropsButtons {
  set_background_color?: string;
  set_text_color?: string;
  set_border_color?: string;
  set_width?: string;

  set_hover_transform_scale?: string;
  set_hover_bg_color?: string;
  set_hover_txt_color?: string;
  set_hover_border_color?: string;
}

// BUTTON OPTIONS

export const Button_big_text = styled.button`
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;

  width: ${({ set_width = "146px" }: iPropsButtons) => set_width};
  color: var(
    --${({ set_text_color = "gray-1" }: iPropsButtons) => set_text_color}
  );
  background-color: var(
    --${({ set_background_color = "gray-6" }: iPropsButtons) => set_background_color}
  );
  border: 2px solid
    var(--${({ set_border_color = "none" }: iPropsButtons) => set_border_color});

  :hover {
    transition: 600ms;

    transform: scale(
      ${({ set_hover_transform_scale = "1" }: iPropsButtons) =>
        set_hover_transform_scale}
    );
    color: var(
      --${({ set_hover_txt_color = "gray-1" }: iPropsButtons) => set_hover_txt_color}
    );
    background-color: var(
      --${({ set_hover_bg_color = "gray-6" }: iPropsButtons) => set_hover_bg_color}
    );
    border: 2px solid
      var(
        --${({ set_hover_border_color = "none" }: iPropsButtons) => set_hover_border_color}
      );
  }

  :not(:hover) {
    transition: 500ms;
  }
`;

export const Button_medium_text = styled.button`
  height: 48px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;

  width: ${({ set_width = "146px" }: iPropsButtons) => set_width};
  color: var(
    --${({ set_text_color = "gray-1" }: iPropsButtons) => set_text_color}
  );
  background-color: var(
    --${({ set_background_color = "gray-6" }: iPropsButtons) => set_background_color}
  );
  border: 2px solid
    var(--${({ set_border_color = "none" }: iPropsButtons) => set_border_color});

  :hover {
    transition: 600ms;

    transform: scale(
      ${({ set_hover_transform_scale = "1" }: iPropsButtons) =>
        set_hover_transform_scale}
    );
    color: var(
      --${({ set_hover_txt_color = "gray-1" }: iPropsButtons) => set_hover_txt_color}
    );
    background-color: var(
      --${({ set_hover_bg_color = "gray-6" }: iPropsButtons) => set_hover_bg_color}
    );
    border: 2px solid
      var(
        --${({ set_hover_border_color = "none" }: iPropsButtons) => set_hover_border_color}
      );
  }

  :not(:hover) {
    transition: 500ms;
  }
`;
