import React from "react";
export default function emailContactForm() {
  return (
    <div>
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
  );
}
