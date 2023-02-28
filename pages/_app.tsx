import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Montserrat, Dancing_Script } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${raleway.style.fontFamily};
            --font-montserrat: ${montserrat.style.fontFamily};
            --font-dancing-script: ${dancingScript.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
