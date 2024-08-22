import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const Layout = () => {
  return (
    <>
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Homepage />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
