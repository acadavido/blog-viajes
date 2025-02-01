export default function SobreNosotras() {
  return (
    <section className="bg-[rgb(236,252,252)] h-screen flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center max-w-5xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 mr-10">
            <img
              src="/img/sobre-nosotras.jpg"
              alt="Marcela y Andrea"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[rgb(4,140,140)] mb-4">
              Sobre Nosotras
            </h2>
            <p className="text-lg text-[rgb(77,164,164)] mb-6">
              ¡Bienvenidos a <span className="font-semibold">Cadaviaje</span>!
              Somos Marcela y Andrea, dos hermanas apasionadas por descubrir el
              mundo, siempre en busca de nuevas experiencias. Nos encanta
              viajar, sobre todo si el destino incluye estar cerca del mar, pero
              lo que realmente nos mueve es la emoción de conocer diferentes
              culturas y sumergirnos en lo desconocido. Cada viaje que
              emprendemos es único, porque cada destino nos enseña algo nuevo.
            </p>
            <p className="text-lg text-[rgb(77,164,164)] mb-6">
              A través de <span className="font-semibold">Cadaviaje</span>,
              queremos compartir con ustedes no solo nuestras historias y
              vivencias, sino también información útil y consejos prácticos que
              puedan hacer más fácil y divertido tu próximo viaje. Nos encanta
              la idea de inspirar a otros a salir, explorar y disfrutar de las
              maravillas que el mundo tiene para ofrecer.
            </p>
            <p className="font-semibold text-xl text-[rgb(84,132,135)]">
              ¡Esperamos que nuestras experiencias te acompañen en tu próxima
              aventura!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

