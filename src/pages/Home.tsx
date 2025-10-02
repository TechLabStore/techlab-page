import HomeFooter from "../components/Footer/Footer";
import Description from "../components/Header/Description";
import NavBar from "../components/Header/NavBar";
import Products from "../components/Main/Products";

function HomePage() {
  return (
    <>
      <NavBar />
      <Description />
      <Products />
      <HomeFooter />
    </>
  );
}

export default HomePage;
