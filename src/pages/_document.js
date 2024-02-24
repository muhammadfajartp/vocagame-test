import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

// import { Html, Head, Main, NextScript } from "next/document";
// import { Providers } from "./Provider";
// import { store } from "./store";
// export default function Document() {
//    return (
//       <Html lang="en">
//          <Head />
//          <body>
//             <Providers store={store}>
//                <Main />
//             </Providers>
//             <NextScript />
//          </body>
//       </Html>
//    );
// }
