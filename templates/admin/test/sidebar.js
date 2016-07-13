module.exports = {
  comps: {
    "common/sidebar": function() {
      return [
        {
          "name": "工作台",
          "icon": "icon-gongzuotai",
          "href": "/dashboard/panel"
        },
        {
          "name": "组织管理",
          "icon": "icon-jigouguanli",
          "child": [
            {
              "name": "用户查询",
              "href": "/orgmanage/user-query"
            },
            {
              "name": "用户管理",
              "href": "/orgmanage/user-manage"
            },
            {
              "name": "部门管理",
              "href": "/orgmanage/dep-manage"
            },
            {
              "name": "部门信息",
              "href": "/orgmanage/dep-info"
            },
            {
              "name": "机构信息",
              "href": "/orgmanage/org-info"
            }
          ]
        },
        {
          "name": "系统权限管理",
          "icon": "icon-quanxianguanli",
          "child": [
            {
              "name": "用户类别管理",
              "href": "/privilege/categoryManage"
            },
            {
              "name": "功能管理",
              "href": "/privilege/privilegeManage"
            },
            {
              "name": "角色管理",
              "href": "/privilege/roleManage"
            },
            {
              "name": "岗位管理",
              "href": "/privilege/positionManage"
            },
            {
              "name": "流程模板",
              "href": "/privilege/procedureManage"
            }
          ]
        }
      ];
    }
  }
};
