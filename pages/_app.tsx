import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
const calSans = localFont({ src: "../fonts/CalSans-SemiBold.woff2" });
const satoshiRegular = localFont({ src: "../fonts/Satoshi-Regular.woff2" });
const satoshiMedium = localFont({ src: "../fonts/Satoshi-Medium.woff2" });
const satoshiVariable = localFont({ src: "../fonts/Satoshi-Variable.woff2" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --calSans-font: ${calSans.style.fontFamily};
          --satoshiRegular-font: ${satoshiRegular.style.fontFamily};
          --satoshiMedium-font: ${satoshiMedium.style.fontFamily};
          --satoshiVariable-font: ${satoshiVariable.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
