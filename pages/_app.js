import "../styles/globals.css";
import MainLayout from "../components/layout/index";
import defaultLayout from "../components/layout/default";
import Scrollbar from "../smooth-scrollbar";
import Tooltip from "../components/tooltip";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || defaultLayout;

  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
