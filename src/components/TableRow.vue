<script setup lang="ts">
import { ref } from "vue";
import { LogInterface, Tag } from "../types.ts";
import { useLogStore } from "../store.ts";
const store = useLogStore();
const props = defineProps<{
	data: LogInterface;
	id: number;
}>();
const tagsInput = ref<string>(stringifyTags(props.data.tags));
const logTypeInput = ref<string>(props.data.logType);
const loginInput = ref<string>(props.data.login);
const passwordInput = ref<string | null>(props.data.password);
const loginInputElement = ref<HTMLInputElement | null>(null);
const passwordInputElement = ref<HTMLInputElement | null>(null);

function rmLog() {
	store.removeLog(props.id);
}
function stringifyTags(arr: Tag[] | undefined) {
	if (arr) {
		let result: string = "";
		arr.forEach((tag: Tag) => {
			result += tag.text;
			result += "; ";
		});
		return result;
	}
	return "";
}
function parseTags(str: string): Tag[] | null {
	const tagsArr = str.split("; ");
	if (tagsArr.length > 0) {
		return tagsArr.map((tag) => {
			return { text: tag };
		});
	} else return null;
}

function validate(): boolean {
	let result: boolean = true;
	if (!loginInput.value || loginInput.value.trim().length === 0) {
		loginInputElement.value?.classList.add("error");
		result = false;
	} else loginInputElement.value?.classList.remove("error");
	if (logTypeInput.value === "local") {
		if (!passwordInput.value || passwordInput.value.trim().length === 0) {
			passwordInputElement.value?.classList.add("error");
			result = false;
		} else passwordInputElement.value?.classList.remove("error");
	}
	return result;
}

function setData() {
	const tagToSet: LogInterface = {
		id: props.id,
		logType: logTypeInput.value,
		login: loginInput.value,
		password: logTypeInput.value === "local" ? passwordInput.value : null,
	};
	const parsedTags = parseTags(tagsInput.value);
	if (parsedTags !== null) {
		tagToSet.tags = parsedTags;
	} else {
		tagToSet.tags = undefined;
	}
	if (validate()) {
		store.setData(props.id, tagToSet);
	}
}
</script>

<template>
	<tr>
		<td>
			<input
				maxlength="50"
				@blur="setData"
				type="text"
				v-model="tagsInput"
			/>
		</td>
		<td>
			<select @change="setData" v-model="logTypeInput">
				<option value="local">Локальная</option>
				<option value="ldap">LDAP</option>
			</select>
		</td>
		<td :colspan="logTypeInput === 'local' ? 1 : 2">
			<input
				@blur="setData"
				ref="loginInputElement"
				maxlength="100"
				type="text"
				v-model="loginInput"
			/>
		</td>
		<td v-if="logTypeInput === 'local'">
			<input
				@blur="setData"
				ref="passwordInputElement"
				maxlength="100"
				type="password"
				v-model="passwordInput"
			/>
		</td>
		<td>
			<img @click="rmLog" src="/src/assets/svg/trash.svg" alt="" />
		</td>
	</tr>
</template>
<style scoped lang="sass">
input
	width: 100%
.error
	border-color: red
</style>
