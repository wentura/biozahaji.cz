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
    <div className="container flex flex-col justify-center mx-auto">
      {error && <p className="pt-12">Error: {error.message}</p>}
      {loading && <div className="pt-12">načítám novinky z Biozahájí</div>}

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
        className={`transition ease-in-out duration-1000 divide-y divide-neutral-200 px-8 ${
          !data && "opacity-0"
        } ${data && "opacity-100"}`}
      >
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
