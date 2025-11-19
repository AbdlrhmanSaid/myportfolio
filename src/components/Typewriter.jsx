"use client";

import dynamic from "next/dynamic";

const TypeAnimation = dynamic(
  () =>
    import("react-type-animation").then(
      (mod) => mod.TypeAnimation ?? mod.default
    ),
  {
    ssr: false,
    loading: () => (
      <span aria-hidden="true" className="inline-block opacity-0">
        ...
      </span>
    ),
  }
);

export default TypeAnimation;

