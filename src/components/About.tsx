export default function About() {
  return (
    <section
      className="bg-primary rounded-[56px] h-max text-slate-50 p-6 md:p-10 my-10 sm:w-[90%] mx-auto"
      id="about"
    >
      <h2 className="text-3xl lg:text-4xl pb-5 pl-6 sm:px-16 font-bold font-mono">
        {'//About me'}
      </h2>
      <div className="font-inter sm:container leading-8">
        <p>
          Ahoj, jmenuji se Lukáš Homolka a jsem frontend vývojář se zaměřením na
          React a TypeScript. Již dva roky se věnuji programování jako samouk,
          což mi umožnilo rychle se učit a adaptovat na nové technologie a
          výzvy. Mám vášeň pro vytváření čistého, efektivního a uživatelsky
          přívětivého kódu. V mém portfolio najdete projekty, které reflektují
          můj růst jako vývojáře a mé schopnosti řešit praktické problémy
          prostřednictvím kódu. Přistupuji k projektům s otevřeností pro nové
          myšlenky a neustálou touhou se zlepšovat. Děkuji za vaši pozornost a
          těším se na příležitost spolupracovat na vzrušujících projektech!
        </p>
      </div>
    </section>
  );
}
