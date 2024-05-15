// Reusable Section component
function Section({ title, content, imageUrl, imageAlt }) {
  return (
    <div className="flex justify-between">
      <div className="flex w-5/12 m-20 flex-col gap-10">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="mr-20">
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  );
}

export default function Whistleblowing() {
  return (
    <section className="px-40 pb-80 pt-12">
      <div className="flex flex-col gap-32 pb-44 bg-sand">
        {/* First Section */}
        <Section
          title="Vi vill göra rätt"
          content="Som företag verkar vi för ett gott och etiskt arbetssätt. Därför vill vi skapa trygghet genom att ta eventuella missförhållanden på allvar. Vår verksamhet byggs av personal och gäster och därför värnar vi om allas mående innanför och utanför vår verksamhet."
          imageUrl="./images/item-1.png"
          imageAlt=""
        />

        {/* Second Section */}
        <Section
          title="Det händer sen"
          content="När du skickat in ditt ärende, ljudinspelning eller mötesförfrågan så måste vi enligt lag bekräfta mottagandet. Därefter kommer vi så snart vi gått igenom ditt ärende att återkomma till dig. Alla ärenden hanteras av vår oberoende grupp för visselblåsning. För att vår grupp ska anses vara oberoende ingår inte aktieägare, VD eller de högsta beslutfattarna."
          imageUrl="./images/method1.png"
          imageAlt=""
        />

        {/* Third Section */}
        <Section
          title="Denna visselblåsartjänst"
          content="Genom denna kanal för visselblåsning ger vi alla inom organisationen en lättillgänglig möjlighet att informera (“Visselblåsa”) till en utvald grupp när något inte står rätt till. Vår visselblåsarfunktion kan också användas vid misstanke S K “Early Warning”. Du kan visselblåsa om något har hänt, händer just nu eller om det är något som riskerar att hända. Kom ihåg att generella klagomål inte är en visselblåsning. Vid anonym visselblåsning rapporterar du i skrift, vid muntlig- och mötesförfrågningar är du inte anonym."
          imageUrl="./images/method3.png"
          imageAlt=""
        />
      </div>

      {/* Additional Section */}
      <section className="flex flex-col gap-52 rounded-3xl bg-white px-60 pb-14 pt-20">
        <div className="flex flex-col gap-2">
          <h3>Hur fungerar det?</h3>
          <p className="text-lg font-normal">
            För att visselblåsa kan du använda denna kanal om du vill rapportera skriftligt. Välj anonym tvåvägskommunikation för att vara anonym, eller boka ett möte för att personligen framföra en visselblåsning
          </p>
        </div>
        <div className="gap flex flex-col justify-center gap-14 px-28 text-2xl text-light-gray">
          <button className="rounded-3xl bg-burkina-blue py-4 transition delay-100 ease-in-out hover:bg-light-gray hover:text-dark-blue ">
            Skicka visselblåsning
          </button>
          <button className="rounded-3xl bg-burkina-blue py-4 transition delay-100 ease-in-out hover:bg-light-gray hover:text-dark-blue">
            Login visselblåsare
          </button>
          <button className="rounded-3xl bg-burkina-blue py-4 transition delay-100 ease-in-out hover:bg-light-gray hover:text-dark-blue ">
            Login Företag
          </button>
        </div>
      </section>
    </section>
  );
}
