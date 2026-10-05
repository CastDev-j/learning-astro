// Share state between islands
// https://docs.astro.build/en/recipes/sharing-state-islands/#using-atoms
import { atom } from "nanostores";

export const counter = atom(0);
