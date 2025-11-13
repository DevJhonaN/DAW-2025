export function Highlight() {
    return (
        <section className="flex relative bg-cover bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-[left_calc((50vw-170px)-340px)_top]">
            
            <div className="bg-gradient-to-r absolute inset-0 from-[#111111] from-[calc((50vw-70px)-340px)] via-[#111111b3] via-1/2 to-[#111111b3] z-[1]"></div>

            <div className="relative flex gap-8 max-w-6xl mx-auto py-8 z-[2]">
                <img
                    src="public/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                    alt="Capa filme"
                    className="w-[250px] h-auto rounded-lg"
                />

                <div className="flex flex-col">
                    <h2 className="text-white text-4xl font-normal">Como Treinar seu Dragão</h2>

                    <div className="flex flex-wrap gap-2 my-2 text-sm">
                        <span className="text-white bg-white/20 px-3 py-1 rounded-full">Fantasia</span>
                        <span className="text-white bg-white/20 px-3 py-1 rounded-full">Família</span>
                        <span className="text-white bg-white/20 px-3 py-1 rounded-full">Ação & Aventura</span>
                        <span className="text-gray-400 pl-4">2h 5m</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="text-white text-2xl font-normal pt-12 pb-2">Sinopse</h4>
                        <p className="text-sm text-gray-400">
                            Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna
                            amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas
                            tribos e descobrem que dragões não são os monstros que todos acreditavam ser.
                        </p>
                    </div>

                    <div className="flex gap-4 my-6">
                        <button className="rounded bg-[#e50914] px-6 py-3 font-bold text-white transition-colors duration-300 hover:bg-[#b8070f]">
                            Assistir
                        </button>
                        <button className="rounded bg-white/20 border border-white/30 px-6 py-3 text-white transition-colors duration-300 hover:bg-white/30">
                            Detalhes
                        </button>
                        <button className="rounded bg-white/20 border border-white/30 px-6 py-3 text-white transition-colors duration-300 hover:bg-white/30">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
