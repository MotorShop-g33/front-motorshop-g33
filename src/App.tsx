import { FooterComponents } from "./components/footer";
import { HeaderMenu } from "./components/header";
import { RoutesApp } from "./routes";

export const App = () => {
  return (
    <>
      <HeaderMenu />
      <RoutesApp />
      <FooterComponents />
    </>
  );
};
