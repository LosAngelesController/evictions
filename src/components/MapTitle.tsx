import * as React from "react";

export function MapTitle() {
  return (
    <div
      className="absolute mt-[3em] md:mt-[3.7em] md:ml-3 top-0 z-5 titleBox ml-2 text-base bold md:semi-bold break-words bg-[#212121]"
      style={{
        backgroundColor: "#212121",
        color: "#ffffff",
      }}
    >
      <strong className="">Eviction Notices Feb 2023 - Nov 2024</strong>
    </div>
  );
}
