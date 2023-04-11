import { Footer } from "../../styles/footer";
import motor_shop from "../../assets/footer_g33.png";
import angle_up from "../../assets/angle-up.svg";
import { Paragraph_2_400 } from "../../styles/typography";
export const FooterComponents = () => {
  return (
    <>
      <Footer>
        <div>
          <img src={motor_shop} width={180} alt="" />
        </div>
        <Paragraph_2_400 color="--white-fixed">
          © 2023 - Todos os direitos reservados.
        </Paragraph_2_400>
        <a href="#" id="scroll_up">
          <img src={angle_up} alt="" />
        </a>
      </Footer>
    </>
  );
};
