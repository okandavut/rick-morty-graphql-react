/* eslint-disable react/react-in-jsx-scope */
import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./queries";
import "./App.css";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 3 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <div
      className="container flex justify-center flex-col w-full"
      style={{ margin: "0 auto" }}
    >
      <header>
        <h1 className="text-center m-5 mt-5 text-[25px] text-bold">
          Rick and Morty GraphQL App
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {data?.characters?.results.map((character) => (
          <>
            <a
              href="#"
              className="flex p-1 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={character.image}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {character.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {character.status !== "unknown" ? character.status + "-" : ""}
                  {character.species !== "unknown" ? character.species : ""}
                </p>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
