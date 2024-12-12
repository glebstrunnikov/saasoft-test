import { defineStore } from "pinia";
import { LogInterface } from "./types";
import { ref, computed } from "vue";
import dummy from "./dummyData.json";
export const useLogStore = defineStore("logs", () => {
	const logs = ref<LogInterface[]>([]);
	const maxId = computed(() => {
		// Используется для назначения id новых строк, чтобы избежать дублирования
		let result = 0;
		logs.value.forEach((log: LogInterface) => {
			if (log.id > result) {
				result = log.id;
			}
		});
		return result;
	});
	function addLog() {
		// Добавляет пустую строку
		const log: LogInterface = {
			id: maxId.value + 1,
			logType: "local",
			login: "",
			password: "",
		};
		logs.value.push(log);
	}
	function removeLog(id: number) {
		// Удаляет строку по айди
		logs.value = logs.value.filter((log: LogInterface) => {
			return log.id !== id;
		});
		saveData();
	}
	function loadData() {
		// Загружает данные из localStorage, или, при отсутствии - из файла с образцом
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
		// Чтобы данные не пропадали при загрузке страницы, они пишутся по-простому в localStorage - бэк и базу подключать в задании не просили.
		localStorage.setItem("logs", JSON.stringify(logs.value));
	}
	function setData(id: number, logData: LogInterface) {
		for (let i: number = 0; i < logs.value.length; i++) {
			if (logs.value[i].id === id) {
				logs.value[i] = logData;
			}
		}
		saveData();
	}
	return {
		logs,
		maxId,
		addLog,
		removeLog,
		loadData,
		saveData,
		setData,
	};
});
