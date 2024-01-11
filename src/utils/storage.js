import AsyncStorage from "@react-native-async-storage/async-storage";
import { BEST_PLAYERS } from "./constants";

export async function getBestScorePlayersFromStorage() {
  try {
    const response = await AsyncStorage.getItem(BEST_PLAYERS);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}
export async function addScoreOnStorage(name, score) {
  try {
    const bestScorePlayers = await getBestScorePlayersFromStorage();
    bestScorePlayers.push({ nickname: name, score: score });
    await AsyncStorage.setItem(BEST_PLAYERS, JSON.stringify(bestScorePlayers));
  } catch (error) {
    throw error;
  }
}
