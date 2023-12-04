export default function About() {
  return (
    <section
      className="bg-primary rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
      id="about"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold font-mono">
        {'//About'}
      </h2>
      <div className="flex flex-col items-start justify-center h-full font-medium font-inter">
        <p className=" sm:px-12 py-2">
          Jmenuji se Lukáš a jsem Front-end Developer se zaměřením na tvorbu
          moderních webových aplikací. Mám 2 roky praxe v oblasti vývoje
          webových stránek a aplikací s použitím technologií jako{' '}
          <span className="font-bold">Next.js</span> a{' '}
          <span className="font-bold">React</span>.
        </p>
        <p className=" sm:px-12 py-2">
          Mým cílem je vytvářet nejen funkční, ale také vizuálně atraktivní
          webové stránky. Snažím se dosáhnout dokonalého spojení mezi{' '}
          <span className="font-bold">designem</span> a funkcionalitou, abych
          vytvořil uživatelsky přívětivé a esteticky příjemné prostředí pro
          uživatele.
        </p>
        <p className=" sm:px-12 py-2">
          Jsem otevřený novým výzvám a neustále se učím novým technologiím a
          trendům v oboru, abych se neustále zdokonaloval a posouval své
          dovednosti na vyšší úroveň.
        </p>
        <p className=" sm:px-12 py-2">
          V současné době hledám novou příležitost, kde bych mohl uplatnit své
          znalosti a dovednosti jako Front-end Developer. Rád bych se zapojil do
          týmu profesionálů, kde bych mohl rozvíjet své schopnosti a přinášet
          inovativní řešení.
        </p>
        <p className=" sm:px-12 py-2">
          Věřím že Vám mohu pomoc s vytvářením skvělých aplikací a přispět
          Vašemu týmu!
        </p>
      </div>
    </section>
  );
}
