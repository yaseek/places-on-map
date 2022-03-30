import {TPoint} from "../types";

export const getPoints = (): PromiseLike<TPoint[]> => {
  return window.fetch('/data.json').then(({ body }) => new Response(body).json());
};