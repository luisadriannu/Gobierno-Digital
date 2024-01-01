import pikachu from "../assets/pikachu-404.png";

export default function Error404() {
  return (
    <section className="py-0 px-5 relative">
      <article className="max-w-[1000px] mx-auto relative pb-8 top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-[#2E3057] text-4xl font-bold text-center">
          Error, no se ha podido encontrar esta página
        </h2>
        <img className="rounded-xl w-52" src={pikachu} alt="Pikachu" />
      </article>
    </section>
  );
}
