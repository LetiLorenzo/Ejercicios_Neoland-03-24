import { APIRickyMorty } from "./rickyMortyApi.config";

export const getById = async (id) => {
  return APIRickyMorty.get(`character/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
