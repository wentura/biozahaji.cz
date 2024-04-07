import React from "react";
const recenze = [
  {
    id: 1,
    kdo: "Iveta M.",
    co: "Jsem absolutně nadšena farmou manželů Rimkevičových. Jejich přístupem ke mně jako zákazníkovi, ke mně, jako člověkovi. I přesto, že jsme se dopředu nenahlásili, se nám oba nadmíru věnovali. Paní nám ukázala, kde vše pěstují a měli jsme možnost si ochutnat i několik druhů kiwi přímo z keře (nebo stromku 🙃). Božská chuť, mimochodem. Ochutnat jsme dostali i skvělý mošt. Odvezli jsme si produkty s láskou vypěstované a těšíme se, až je všechny ochutnáme. Tuhle “farmu” si zamiluje každý.",
    kolik: 5,
    kde: "maps.google.com",
  },
  {
    id: 2,
    kdo: "Josef L.",
    co: "Skvele ceny bezvadná domluva v sezóně se dá že zeleniny dostat prakticky cokoliv",
    kolik: 5,
    kde: "maps.google.com",
  },
];
export default function Recenzebio() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Řekli o nás
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {recenze.map((recenze) => (
            <div
              className="flex flex-col gap-3 rounded-lg border p-4 md:p-6"
              key={recenze.id}
            >
              <div>
                <span className="block text-sm font-bold md:text-base capitalize">
                  {recenze.kdo}
                </span>
              </div>
              <p className="text-gray-600">{recenze.co}</p>
              {/* <div className="text-gray-400  self-end relative bottom-0">
                {recenze.kde}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
