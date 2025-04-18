import { Helmet } from "react-helmet-async";

const Minusta = () => {
  return (
    <>
      <Helmet>
        <title>Minusta | Aino Pekkarinen</title>
        <meta 
          name="description" 
          content="Tutustu terapeutti Aino Pekkariseen. Lue lisää taustastani ja lähestymistavastani terapiaan."
        />
      </Helmet>

      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-semibold mb-8">Minusta</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default Minusta;
