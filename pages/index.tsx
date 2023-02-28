import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Init App</title>
        <meta name="description" content="NextJs Initial App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid place-content-center">
        <h1 className=" text-2xl">Home</h1>
        <h1 className=" text-2xl font-raleway">Home</h1>
        <h1 className=" text-2xl font-montserrat">Home</h1>
        <h1 className=" text-2xl font-dancingScript">Home</h1>
      </main>
    </>
  );
}
