import { api } from "./api";

function gerarAccessToken() {
  return "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTI2MmUwNWM2MmE2ZjQ1NDJlZDAwYTE0M2Q5NWM0ZCIsIm5iZiI6MTczNjkxMDg0MS4wMjIsInN1YiI6IjY3ODcyN2Y5YWJhYmJiYTA0MGJiYmM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zwgT91cjfBRpONPsBJzc_4Ff3ogKPOZBGlT0ii1bKFs";
}

const tokenApi = gerarAccessToken();

const headersOptions = () => ({
  accept: "application/json",
  Authorization: `Bearer ${tokenApi}`,
});

export const filmesServices = {
  buscarTodosFilmes: async () => {
    const { data } = await api.request({
      method: "GET",
      url: "/movie/now_playing",
      params: { language: "pt-BR", page: 1 },
      headers: headersOptions(),
    });

    return data.results;
  },
  buscarFilmePorId: async (filmeId) => {
    const { data } = await api.request({
      method: "GET",
      url: `/movie/${filmeId}`,
      params: {
        api_key: "19262e05c62a6f4542ed00a143d95c4d",
        language: "pt-BR",
      },
      headers: headersOptions(),
    });
    return data;
  },
};
