## webpack中SplitChunksPlugin

####以前端性能优化为例,面试官可能的提问:

1. 你把这个手机端的白屏时间减少了150%以上,是从哪些方面入手优化的?这个问题即使你没做过前端性能优化也能回答个七七八八,无非是组件分割、缓存、tree shaking等等，这是第一重比较浅的问题。
2. 我看你用webpack中SplitChunksPlugin这个插件进行分chunk的,你分chunk的取舍是什么?哪些库分在同一个chunk,哪些应该分开你是如何考虑的?如果你提到了SplitChunksPlugin插件可能会有类似的追问,如果没有实际操作过的候选人这个时候就难以招架了,这个过程一定是需要一定的试错和取舍的.
3. 在分chunk的过程中有没有遇到什么坑?怎么解决的?其实SplitChunksPlugin这个插件有一个暗坑,那就是chunk的id自增性导致id不固定唯一,很可能一个新依赖就导致id全部打乱,使得http缓存失效.

