<script setup lang="ts"></script>

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
	</div>
</template>

<style lang="sass" scoped>
.btn-icon
  width: 30px
  height: 30px
.page-title
  display: flex
  align-items: center
.page-footnote
  background-color: #eff4fa
</style>
