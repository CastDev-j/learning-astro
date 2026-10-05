// Components
// https://docs.astro.build/en/basics/astro-components/
import React from "react";
import { useStore } from "@nanostores/react";
import { counter } from "@/store";

const Counter = () => {
  const $counter = useStore(counter);

  return <div>Counter: {$counter}</div>;
};

export default Counter;
