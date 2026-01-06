import { defineStore } from "pinia";

export interface InterfaceInfo {
	countOnline: number;
	playersInRoomsCount: number;
}

export const useInfo = defineStore("info", {
	state: (): InterfaceInfo => ({
		countOnline: 0,
		playersInRoomsCount: 0
	}),
	actions: {
		setCountOnline(dataCount: number) {
			this.countOnline = dataCount
		},
		setPlayersInRoomsCount(dataCount: number) {
			this.playersInRoomsCount = dataCount
		}
	},
	getters: {
	},
});
