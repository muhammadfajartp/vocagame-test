import "@/styles/globals.css";
import { Providers } from "./Provider";
import { store } from "./store";

export default function App({ Component, pageProps }) {
   return (
      <Providers store={store}>
         {" "}
         <Component {...pageProps} />;
      </Providers>
   );
}
