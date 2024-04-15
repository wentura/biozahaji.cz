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
    <div className="divide-y divide-neutral-200">
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Načítám aktuální nabídku z Biozahájí...</p>}
      {data &&
        data.posts.nodes.map((post) => (
          <div
            className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0"
            key={post.id}
          >
            <h3 className="font-semibold md:col-span-3">{post.title}</h3>
            <span
              className="md:pl-0 md:col-span-7"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></span>
            <span
              className="md:pl-0 md:col-span-2"
              dangerouslySetInnerHTML={{ __html: post.cena.cena }}
            ></span>
          </div>
        ))}
    </div>
  );
}
