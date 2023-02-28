import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Init App</title>
        <meta name="description" content="NextJs Initial App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid h-screen place-content-center">
        <h1 className=" text-2xl">Home</h1>
      </main>
    </>
  );
}
