import Head from "next/head";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services - My Next App</title>
      </Head>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
        <ul className="text-gray-600 mt-4 list-disc text-left px-6">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Cloud Solutions</li>
          <li>Consulting Services</li>
        </ul>
      </div>
    </>
  );
};

export default Services;
