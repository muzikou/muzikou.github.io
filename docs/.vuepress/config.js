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
            // {
            //     title: 'CSS',   // 必要的
            //     path: '',      // 可选的, 应该是一个绝对路径
            //     children: [
            //         {
            //             title: '日常总结',   
            //             path: '',      
            //             children: [
            //                 {
            //                     title: 'placeholder样式',   
            //                     path: '/css/placeholder.md',      
            //                 },
            //                 {
            //                     title: 'checkbox样式',   
            //                     path: '/css/checkbox.md',      
            //                 },
            //             ]
            //         },
            //     ]
            // },
            {
                title: 'JS',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径
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
                title: 'Vue',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径 /vue/
                children: [
                    {
                        title: 'Vuex',   
                        path: '/vue/vuex/', 
                        children: [
                            {
                                title: 'Vuex 的基本使用',   
                                path: '/vue/vuex/base.md',      
                            },
                            {
                                title: 'State',   
                                path: '/vue/vuex/state.md',      
                            },
                            {
                                title: 'Mutation',   
                                path: '/vue/vuex/mutation.md',      
                            },
                            {
                                title: 'Action',   
                                path: '/vue/vuex/action.md',      
                            },
                            {
                                title: 'Getter',   
                                path: '/vue/vuex/getter.md',      
                            },
                        ]    
                    },
                ]
                
            },
            {
                title: 'React',   
                path: '/react/',      
                children: [
                    {
                        title: '基本知识点',   
                        path: '/react/ABC.md',      
                    },
                    {
                        title: '组件的使用',   
                        path: '/react/component/', 
                        children: [
                            {
                                title: 'props属性传递',   
                                path: '/react/component/props.md',      
                            },
                            {
                                title: 'state和setstate',   
                                path: '/react/component/state.md',      
                            },
                            {
                                title: '条件渲染与循环',   
                                path: '/react/component/list.md',      
                            },
                            {
                                title: '事件处理',   
                                path: '/react/component/event.md',      
                            },
                            {
                                title: '父子组件通信',   
                                path: '/react/component/correspond.md',      
                            },
                        ]     
                    },
                    {
                        title: '生命周期',   
                        path: '/react/lifecycle/', 
                        children: [
                            {
                                title: 'React v16.4 的生命周期',   
                                path: '/react/lifecycle/16.4.md',      
                            },
                        ]    
                    },
                ]
            },
            // {
            //     title: 'UI 组件库',   // 必要的
            //     path: '',      // 可选的, 应该是一个绝对路径
            // },
            
            {
                title: 'Webpack',   
                path: '/webpack/',      
                children: [
                    {
                        title: '安装和配置',   
                        path: '/webpack/init.md',      
                    },
                    {
                        title: '配置打包的入口与出口',   
                        path: '/webpack/path.md',      
                    },
                    {
                        title: '配置自动打包',   
                        path: '/webpack/server.md',      
                    },
                    {
                        title: '配置预览页面',   
                        path: '/webpack/preview.md',      
                    },
                    {
                        title: '加载器',   
                        path: '/webpack/loader/',      
                        children: [
                            {
                                title: '处理css文件',   
                                path: '/webpack/loader/css.md',      
                            },
                            {
                                title: '处理less文件',   
                                path: '/webpack/loader/less.md',      
                            },
                            {
                                title: '处理scss文件',   
                                path: '/webpack/loader/scss.md',      
                            },
                            {
                                title: '处理图片和字体文件',   
                                path: '/webpack/loader/file.md',      
                            },
                            {
                                title: '处理 JS 高级语法',   
                                path: '/webpack/loader/js.md',      
                            },
                            {
                                title: '配置 postCSS',   
                                path: '/webpack/loader/postcss.md',      
                            },
                        ]
                    },
                ]
            },
            // {
            //     title: 'Git',   // 必要的
            //     path: '',      // 可选的, 应该是一个绝对路径
            // },
            {
                title: '微信小程序',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径
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
            },
            {
                title: '面试汇总',   
                path: '',          
            }
        ]
    }
  }