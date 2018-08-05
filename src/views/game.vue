<template>
	<el-container>
		<el-row v-if="mode === 'default'">
			<article-list :list_articles="list_articles" :title_limit="title_limit" @goto_article="goto_article"></article-list>
		</el-row>
	</el-container>
</template>

<script>
export default {
	data() {
		return {
			title_limit:10,
			mode:'default',
			list_articles:[
				{
					title:'test',
					ctime:'2018-08-01 15:04'
				},
				{
					title:'tttttttttttttttttttttttttt',
					ctime:'2018-08-01 15:04'
				},
				{
					title:'一二三四五六七八九十十一',
					ctime:'2018-08-01 15:04'
				}
				]
		}
	},
	methods: {
		goto_article(id) {
			window.location.href='#/game/'+id;
			// TODO: change mode
			// TODO: add router
		}
	}
}
</script>
