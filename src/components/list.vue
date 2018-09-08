<template>
	<el-container class="data-list">
		<el-header>
			<el-row>
				<el-col :span="18">
					<span>标题</span>
				</el-col>
				<el-col :span="6">
					<span>时间</span>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			<el-row v-for="article in list_articles">
				<el-col :span="18">
					<a @click="goto_article(article.id)">
						{{ lenok(article.title) ? article.title : article.title.substring(0, title_limit) + '...' }}
					</a>
				</el-col>
				<el-col :span="6">
					<span class="ctime">{{ article.ctime }}</span>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
export default {
	props:['list_articles', 'title_limit'],
	data() {
		return {
		}
	},
	methods: {
		lenok(text) {
			return text.length <= this.title_limit;
		},
		goto_article(id) {
			this.$emit('goto_article', id);
		}
	}
}
</script>
