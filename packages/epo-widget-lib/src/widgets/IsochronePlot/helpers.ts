import { parsecsToLightyears } from "@/lib/helpers";

export const ageToGyrs = (age: number): number => Math.pow(10, age - 9);

export const distanceToLyrs = (distance: number): number =>
  parsecsToLightyears(Math.pow(10, distance / 5 + 1));
