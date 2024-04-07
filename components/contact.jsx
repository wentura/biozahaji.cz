import React from "react";

export default function Contact() {
  return (
    <section className="py-6">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Biozahájí s.r.o.</h1>
          <p className="pt-2 pb-4">vaše naše BIO farma</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                <span className="font-bold">Provozovna</span>
                <br />
                Zahájí 8
                <br />
                za památnou lípou
              </span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>
                Mělnická 163
                <br />
                Vysoká Libeň
                <br />
                277 38
              </span>
            </p>
            <div className="flex items-center">
              <div>
                <h2 className="text-xl font-bold">Lenka Rimkevičová</h2>
                <div className="flex pt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <a
                    className="underline underline-offset-2"
                    href="tel:+420739036371"
                  >
                    739 036 371
                  </a>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <a
                    className="underline underline-offset-2"
                    href="mailto:lenka@biozahaji.cz"
                  >
                    lenka@biozahaji.cz
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <h2 className="text-xl font-bold">Přemysl Rimkevič</h2>
                <div className="flex pt-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <a
                    className="underline underline-offset-2"
                    href="tel:+420604245430"
                  >
                    604 245 430
                  </a>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <a
                    className="underline underline-offset-2"
                    href="mailto:premysl@biozahaji.cz"
                  >
                    premysl@biozahaji.cz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1">Vaše jméno</span>
            <input
              type="text"
              placeholder="Dlouhý Janek"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-3"
            />
          </label>
          <label className="block">
            <span className="mb-1">E-mail na který Vám máme odpovědět</span>
            <input
              type="email"
              placeholder="janek@dlouhy.cz"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-3"
            />
          </label>
          <label className="block">
            <span className="mb-1">Zpráva pro nás...</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 p-3"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded bg-bio-50 shadow-xl hover:opacity-95 hover:shadow-lg hover:translate-y-1 hover:translate-x-1 transition duration-500"
          >
            Odeslat zprávu
          </button>
        </form>
      </div>
    </section>
  );
}
