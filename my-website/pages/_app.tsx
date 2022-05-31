import "antd/dist/antd.css";
import "../styles/index.sass";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
