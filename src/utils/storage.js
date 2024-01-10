import AsyncStorage from "@react-native-async-storage/async-storage";
import { BEST_PLAYERS } from "./constants";

export async function getBestScorePlayers(){
    try {
        const response= await AsyncStorage.getItem(BEST_PLAYERS);
        return response
    } catch (error) {
        throw error
    }
}
export async function addScore(score){
    try {
        const bestScorePlayers=[]
        bestScorePlayers.push(score)
       await AsyncStorage.setItem(BEST_PLAYERS,JSON.stringify(bestScorePlayers))
    } catch (error) {
        throw error
    }

}