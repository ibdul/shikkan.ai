import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Cta />
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
