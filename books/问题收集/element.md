## element侧边导航栏定宽 折叠样式

	.el-menu {
        height: 100%;
        border: none;
        overflow-y: auto;
        &:not(.el-menu--collapse) {
          width: 200px;
        }
    }