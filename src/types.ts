export type Tag = {
	text: null | string;
};

export interface LogInterface {
	// Помимо прямо указанных в задании, в интерфейс LogInterface добавлено значение id, которое уникально и присваивается автоматически, чтобы решить проблему возможного совпадения логинов и других полей.
	id: number;
	tags?: Tag[];
	logType: string;
	login: string;
	password: string | null;
}
