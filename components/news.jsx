"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";

const GET_NEWS = gql`
  query GetPosts {
    posts(where: { categoryName: "novinky" }) {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export default function News() {
  const { loading, error, data, refetch } = useQuery(GET_NEWS);
  return (
    <div className="container flex flex-col justify-center px-2 py-16 mx-auto">
      {error && <p className="pt-12">Error: {error.message}</p>}
      {loading && (
        <div className="pt-12 opacity-85">Načítají se novinky z Biozahájí</div>
      )}

      <div
        className={`transition ease-in-out duration-1000 ${
          !data && "opacity-0"
        } ${data && "opacity-100"}`}
      >
        {!loading && data.posts.nodes.length > 0 && (
          <h2 className="mb-8 text-4xl font-bold text-center sm:text-5xl mt-8 mx-auto md:pt-12">
            Novinky
          </h2>
        )}
      </div>

      <div
        className={`transition duration-3000 divide-y divide-neutral-200  ${
          !data && "opacity-0"
        } ${data && "opacity-100"}`}
      >
        {data &&
          data.posts.nodes.map((post) => (
            <div className="py-2 flex flex-col" key={post.id}>
              <h3 className="font-semibold text-xl">{post.title}</h3>
              <span
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
}
