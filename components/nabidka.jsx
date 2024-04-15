"use client";

import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";

const GET_NABIDKA = gql`
  query GetPosts {
    posts(where: { categoryName: "nabidka" }) {
      nodes {
        id
        title
        content
        cena {
          cena
        }
      }
    }
  }
`;

export default function Nabidka() {
  const { loading, error, data, refetch } = useQuery(GET_NABIDKA);
  return (
    <div className="flex flex-col mx-auto w-full">
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Načítám aktuální nabídku z Biozahájí...</p>}
      {data &&
        data.posts.nodes.map((post) => (
          <div
            className="my-4 flex flex-col md:flex-row w-full border-b-2 border-dashed border-bio-50 border-opacity-50"
            key={post.id}
          >
            <div className="flex-1 flex-col ">
              <h3 className="font-semibold text-xl">{post.title}</h3>
              <div
                className="flex-auto md:flex-1 text-xs"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>

            <div
              className="text-right justify-self-end h-full self-end text-xl"
              dangerouslySetInnerHTML={{ __html: post.cena.cena }}
            ></div>
          </div>
        ))}
    </div>
  );
}
