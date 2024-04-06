import React from "react";

export default function Onas() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              O nás a naší BIO farmě
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Jsme malá BIO farma.
              <br />
              Zkušenosti s pěstováním plodin máme letité (z klasického
              zemědělství, ale přestalo nám dávat smysl a studovali jsme
              zemědělství a ne chemii).
              <br />
              Setkáváme se a radíme se i s kolegy farmáři, kteří mají stejný
              přístup k zemědělství a životu jako my.
              <br />
              <br />
              Až k nám přijedete na návštěvu, rozhodně poznáte, že se nenudíme a
              poctivé zemědělství bez chemie, velkých moderních strojů a s
              rozumem, je tvrdá a nekončící dřina.
              <br />
              Ale máme to rádi, je to náš životní styl a poslání.
            </p>

            {/* <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
