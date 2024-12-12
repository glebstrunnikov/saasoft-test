export type Tag = {
	text: null | string;
};

export interface LogInterface {
	id: number;
	tags?: Tag[];
	logType: string;
	login: string;
	password: string | null;
}
