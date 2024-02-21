import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Shikkan.ai - Empowering Health Through AI Analysis</title>
        <meta
          name="description"
          content="Our AI-driven platform harnesses the power of machine learning to analyze MRI scans of the brain, kidney, and abdomen with unparalleled accuracy. Within moments, we provide comprehensive insights into potential tumors, hemorrhages, and other critical health indicators."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <PopupWidget />
    </ThemeProvider>
  );
}

export default MyApp;
