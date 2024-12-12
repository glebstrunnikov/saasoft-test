type Tag = {
	text: null | string;
};

export interface LogInterface {
	tags?: Tag[];
	logType: string;
	login: string;
	password: string | null;
}
