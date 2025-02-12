import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - My Next App</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 mt-4">
            We are a company dedicated to providing the best solutions for your business needs.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
