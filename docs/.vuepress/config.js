module.exports = {
    base: '/',
    title: '木子',
    description: '博客简介',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/img/icon.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
        // 个人 GitHub仓库，请正确填写
        repo: 'https://github.com/muzikou',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            {
                title: ' 自我介绍',   // 必要的
                path: '/home/',      // 可选的, 应该是一个绝对路径
            },
            {
                title: 'CSS',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径
                children: [
                    {
                        title: '日常总结',   
                        path: '',      
                        children: [
                            {
                                title: 'placeholder样式',   
                                path: '/css/placeholder.md',      
                            },
                            {
                                title: 'checkbox样式',   
                                path: '/css/checkbox.md',      
                            },
                        ]
                    },
                ]
            },
            {
                title: 'ES6',   
                path: '',      
                children: [    
                    {
                        title: 'Node 中体验 ES6',   
                        path: '/ES6/babel.md',      
                    },
                    {
                        title: '模块化的基本语法',   
                        path: '',      
                        children: [
                            {
                                title: '默认导入与导出',   
                                path: '/ES6/module_base/default.md',      
                            },
                            {
                                title: '按需导入与导出',   
                                path: '/ES6/module_base/demand.md',      
                            },
                            {
                                title: '直接导入并执行',   
                                path: '/ES6/module_base/import-ing.md',      
                            },
                        ]
                    }
                ]
            },
            {
                title: '前端工程化',   
                path: '',      
                children: [
                    {
                        title: '模块化的相关规范',   
                        path: '/module/what.md',      
                    },
                    
                ]
            }
        ]
    }
  }