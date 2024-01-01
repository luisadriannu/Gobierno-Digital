import loading from "../assets/loading.gif";

export function Loading() {
  return (
    <div className="max-w-[1000px] mx-auto pb-8 left-0 w-full h-screen flex flex-col justify-center items-center gap-4 relative">
      <div className=" flex flex-col justify-center items-center">
        <img className="w-40" src={loading} alt="Cargando.." />
        <p className="text-[#2E3057] font-bold text-lg pt-4">Cargando...</p>
      </div>
    </div>
  );
}
