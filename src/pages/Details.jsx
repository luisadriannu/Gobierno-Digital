import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import typeColors from "../utilities/typeColors";
import capitalizeFirstLetter from "../utilities/capitalizeFirstLetter";
import { Loading } from "../components/Loading";

export default function Details() {
  const { pokemonId } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  let { data, loading } = useFetch(url);

  const descriptionInSpanish = data?.species?.flavor_text_entries?.find(
    (entry) => entry.language.name === "es"
  )?.flavor_text;

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const mainType = data?.types?.[0]?.type?.name;

  const colorClass = typeColors[mainType] || "bg-gray-200";

  const nameWithCapital = capitalizeFirstLetter(data?.name);

  return (
    <section className="py-0 px-5">
      <article className="max-w-[1000px] mx-auto relative pb-8 pt-24">
        <NavLink
          className="fixed rounded-full top-7 lg:hover:scale-[103%] transition duration-300 delay-75 ease-in-out"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>
        </NavLink>
        <div>
          <p className="text-[#2E3057] text-center py-2 text-base">
            #{data?.id}
          </p>
        </div>
        <div className="lg:flex lg:gap-8">
          <div
            className={`${colorClass} rounded-xl flex justify-center items-center`}
          >
            <img
              className="w-80"
              src={data?.sprites.front_default}
              alt={data?.name}
            />
          </div>
          <div className="pt-4">
            <h2 className="text-[#2E3057] font-bold text-3xl pt-2">
              {nameWithCapital}
            </h2>
            <h2 className="text-[#2E3057] font-bold text-xl pt-4">Detalles:</h2>
            <p className="font-semibold pt-2">
              Categoría:{" "}
              <span className="font-normal">
                {
                  data?.species?.genera?.find((g) => g.language.name === "es")
                    ?.genus
                }
              </span>
            </p>
            <p className="font-semibold pt-2">
              Altura:{" "}
              <span className="font-normal"> {data?.height / 10} m</span>
            </p>
            <p className="font-semibold pt-2">
              Peso: <span className="font-normal">{data?.weight / 10} kg</span>
            </p>
            <p className="font-semibold pt-2">
              Tipo(s):{" "}
              <span className="font-normal">
                {data?.types.map((t) => t.type.name).join(", ")}
              </span>
            </p>
            <p className="font-semibold pt-2">
              Descripción:{" "}
              <span className="font-normal">{descriptionInSpanish}</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
