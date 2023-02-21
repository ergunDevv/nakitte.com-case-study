import { defineStore } from "pinia";

export const useGamesFetchDataStore = defineStore("games", {
  state: () => ({
    games: [],
    textOfNothing:"textOfNothing",
    fetchURL:
      "https://api.rawg.io/api/games?key=257ad12aa1114c9b8f5a7f8ab2f6ce83",
    gameNextURL:
      "https://api.rawg.io/api/games?key=257ad12aa1114c9b8f5a7f8ab2f6ce83&page=3",
  }),
  getters: {
    getGames() {
      return this.games;
    },
    getFetchUrl() {
      return this.fetchURL;
    },
    getGameNextURL() {
      return this.gameNextURL;
    },
  },

  actions: {
    changeNextUrl(nextUrl) {
      this.gameNextURL = nextUrl;
      console.log(this.gameNextURL);
    },
    changeFetchUrl(fetchURL) {
      this.fetchURL = fetchURL;
    },
    changeGamesObject(gamesArr) {
      this.games = gamesArr;
      console.log(this.games)
    },
  },
});
