<script setup lang="ts">
import { LogInterface } from "../types.ts";
import { useLogStore } from "../store.ts";
const store = useLogStore();
const props = defineProps<{
	data: LogInterface;
	keyProp: number;
}>();
function rmLog() {
	store.removeLog(props.keyProp);
}
</script>

<template>
	<tr>
		<td>{{ data.tags ? data.tags : "" }}</td>
		<td>{{ data.logType }}</td>
		<td>{{ data.login }}</td>
		<td>{{ data.password }}</td>
		<td>
			<img @click="rmLog" src="/src/assets/svg/trash.svg" alt="" />
		</td>
	</tr>
</template>
