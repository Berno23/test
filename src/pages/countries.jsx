import { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        setError("Une erreur est survenue lors de la récupération des pays.");
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={country.flags.svg}
                alt={`Drapeau de ${country.name.common}`}
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
              <h2 className="text-lg font-bold">{country.name.common}</h2>
              <p><strong>Capitale:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;