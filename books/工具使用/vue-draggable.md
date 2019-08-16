##安装

##使用

####代码

	<draggable
      class="dragArea list-group"
      :list="list1"
      :group="{ name: 'people', pull: 'clone', put: false }"	............................... 	pull:'clone' 代表拖拽时拷贝
      :sort="false"		............................... 	是否启用排序功能
      @change="log"
    >
	          <div class="form-edit-widget-label" v-for="item in list1" :key="item.name">{{ item.name }}</div>
	</draggable>

