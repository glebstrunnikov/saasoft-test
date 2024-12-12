<script setup lang="ts">
import { onMounted } from "vue";
import { useLogStore } from "./store.ts";
import TableRow from "./components/TableRow.vue";
const store = useLogStore();
onMounted(() => {
	store.loadData();
	console.log(store.logs);
});
</script>

<template>
	<div class="main-container container">
		<div class="page-title">
			<h1>Учетные записи</h1>
			<div class="add-btn">
				<button type="button" class="btn btn-outline-dark">
					<img
						class="btn-icon"
						src="/src/assets/svg/plus.svg"
						alt=""
					/>
				</button>
			</div>
		</div>
		<div class="page-footnote">
			<img
				src="/src/assets/svg/question.svg"
				alt=""
				class="footnote-icon"
			/><span class="footnote-text"
				>Для указания нескольких меток для одной пары логин/пароль
				используйте разделитель ;</span
			>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th style="width: 25%" scope="col">Метки</th>
					<th style="width: 20%" scope="col">Тип записи</th>
					<th style="width: 25%" scope="col">Логин</th>
					<th style="width: 25%" scope="col">Пароль</th>
					<th style="width: 5%" scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<TableRow
					v-for="(log, index) in store.logs"
					:key="index"
					:data="log"
					:keyProp="index"
				></TableRow>
				<!-- <tr>
					<th>1asdasdsad</th>
					<td>2</td>
					<td>2</td>
					<td>2</td>
					<td>2</td>
				</tr>
				<tr>
					<th>1</th>
					<td colspan="2">2</td>
					<td>2</td>
					<td>2</td>
				</tr> -->
			</tbody>
		</table>
	</div>
</template>

<style lang="sass" scoped>
.main-container
  max-width: 75%
.btn-icon
  width: 30px
  height: 30px
.page-title
  display: flex
  align-items: center
.page-footnote
  background-color: #eff4fa
</style>
