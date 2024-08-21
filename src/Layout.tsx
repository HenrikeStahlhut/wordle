import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const Layout = () => {
  return (
    <>
      <main
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Homepage />
        <Footer />
      </main>
    </>
  );
};

export default Layout;
