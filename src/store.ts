import { defineStore } from "pinia";
import { LogInterface } from "./types";
import { ref } from "vue";
import dummy from "./dummyData.json";
export const useLogStore = defineStore("logs", () => {
	const logs = ref<LogInterface[]>([]);
	function addLog(log: LogInterface) {
		logs.value.push(log);
	}
	function removeLog(logNumber: number) {
		logs.value.splice(logNumber, 1);
	}
	function loadData() {
		const data: string | null = localStorage.getItem("logs");
		if (data !== null) {
			const parsedData = <LogInterface[]>JSON.parse(data);
			logs.value = parsedData;
		} else {
			const dummyData: LogInterface[] = dummy;
			logs.value = dummyData;
		}
	}
	function saveData() {
		if (logs.value && logs.value.length > 0) {
			localStorage.setItem("logs", JSON.stringify(logs.value));
		}
	}
	return {
		logs,
		addLog,
		removeLog,
		loadData,
		saveData,
	};
});
