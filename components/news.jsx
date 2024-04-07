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
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
        Novinky
      </h2>
      <div className="divide-y divide-neutral-200">
        {error && <p>Error: {error.message}</p>}
        {loading && <p>Načítám novinky z Biozahájí...</p>}
        {data &&
          data.posts.nodes.map((post) => (
            <div
              className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0"
              key={post.id}
            >
              <h3 className="font-semibold md:col-span-2">{post.title}</h3>
              <span
                className="md:pl-0 md:col-span-10"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></span>
            </div>
          ))}
      </div>
    </div>
  );
}
