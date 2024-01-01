import pokebola from "../assets/pokebola.png";

export default function Footer() {
  return (
    <footer className="bg-[#78716c1a] py-12 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-2">
          <h2 className="text-4xl font-bold">Pokédex</h2>
          <img className="w-10" src={pokebola} alt="Pokebola" />
        </div>
        <p className="pt-4">© 2023 Design by @Luis Adrian</p>
      </div>
    </footer>
  );
}
