module.exports = {
    base: '/',
    title: '木子',
    description: '博客简介',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/img/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'stylesheet', href: '/css/style.css' }], // 引入公共样式
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
            //     title: 'CSS',  
            //     path: '',      
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
                title: 'JS',  
                path: '',   
                children: [
                    {
                        title: '函数进阶',   
                        path: '/js/function/', 
                        children: [
                            {
                                title: 'this 指向',   
                                path: '/js/function/this.md'     
                            }, 
                            {
                                title: 'apply 和 bind',   
                                path: '/js/function/applybind.md'      
                            }, 
                            {
                                title: '严格模式',   
                                path: '/js/function/strict.md'      
                            },
                            {
                                title: '高阶函数',   
                                path: '/js/function/higherOrderfn.md'      
                            }, 
                            {
                                title: '闭包',   
                                path: '/js/function/closure.md'      
                            }, 
                            {
                                title: '递归',   
                                path: '/js/function/recursive.md'      
                            },
                            {
                                title: '深拷贝和浅拷贝',   
                                path: '/js/function/copy.md'      
                            },
                        ]     
                    },
                    {
                        title: '面向对象和类的继承',   
                        path: '/js/OOP/', 
                        children: [
                            {
                                title: 'ES6中的类和对象',   
                                path: '/js/OOP/class.md',      
                            },
                            {
                                title: '类的继承',   
                                path: '/js/OOP/extends.md',      
                            },
                        ]     
                    },
                    {
                        title: '构造函数和原型',   
                        path: '/js/prototype/', 
                        children: [
                            {
                                title: '构造函数',   
                                path: '/js/prototype/constructor.md',      
                            },
                            {
                                title: '原型',   
                                path: '/js/prototype/prototype.md',      
                            },
                            {
                                title: '继承',   
                                path: '/js/prototype/call.md',      
                            },
                        ]     
                    }, 
                    {
                        title: '正则表达式',   
                        path: '/js/RegExp/', 
                        children: [
                            {
                                title: '正则表达式的组成',   
                                path: '/js/RegExp/compose.md',      
                            }, 
                        ]     
                    },
                    {
                        title: 'Array 方法总结',   
                        path: '/js/arrayFun.md'      
                    },
                    {
                        title: 'String 方法总结',   
                        path: '/js/stringFun.md'      
                    },
                    {
                        title: 'Object 方法总结',   
                        path: '/js/objectFun.md'      
                    },
                    
                    
                ]   
            },
            {
                title: 'ES6',   
                path: '/ES6/',      
                children: [  
                    
                    {
                        title: 'let 和 const命令',   
                        path: '/ES6/letconst.md',      
                    },
                    {
                        title: '解构赋值',   
                        path: '/ES6/deconstructAssignment.md',      
                    },
                    {
                        title: '字符串的扩展',
                        path: '/ES6/string.md'
                    },
                    {
                        title: '函数的扩展',
                        path: '/ES6/function.md'
                    },
                    {
                        title: '剩余参数',
                        path: '/ES6/rest.md'
                    },
                    {
                        title: '箭头函数',
                        path: '/ES6/arrow.md'
                    }, 
                    {
                        title: '数组的扩展',
                        path: '/ES6/spread.md'
                    }, 
                    {
                        title: 'Array 构造函数',
                        path: '/ES6/array.md'
                    }, 
                    {
                        title: 'Array 实例',
                        path: '/ES6/ArrayInstance.md'
                    },
                    {
                        title: '对象的扩展',   
                        path: '/ES6/object.md',
                    },
                    {
                        title: 'Object 方法',   
                        path: '/ES6/objectFun.md',
                    }, 
                    {
                        title: 'Symbol',   
                        path: '/ES6/symbol.md',
                    },
                    {
                        title: 'Set',   
                        path: '/ES6/set.md',
                    },
                    {
                        title: 'Map',   
                        path: '/ES6/map.md',
                    },
                    {
                        title: 'Promise',   
                        path: '/ES6/promise.md',
                    },
                    {
                        title: 'Generator',   
                        path: '/ES6/generator.md',
                    },
                ]
            },
            {
                title: 'TS',   // 必要的
                path: '/ts/', 
                children: [
                    {
                        title: '起步',   
                        path: '/ts/base.md', 
                    },
                    {
                        title: '类型系统',   
                        path: '/ts/typeSystem/', 
                        children: [
                            {
                                title: '基础类型',   
                                path: '/ts/typeSystem/base.md', 
                            }, 
                            {
                                title: '空和未定义类型',   
                                path: '/ts/typeSystem/null.md', 
                            }, 
                            {
                                title: '对象类型',   
                                path: '/ts/typeSystem/object.md', 
                            }, 
                            {
                                title: '数组类型',   
                                path: '/ts/typeSystem/array.md', 
                            }, 
                            {
                                title: '枚举类型',   
                                path: '/ts/typeSystem/enum.md', 
                            },
                            {
                                title: '无值类型',   
                                path: '/ts/typeSystem/void.md', 
                            }, 
                            {
                                title: '任意类型',   
                                path: '/ts/typeSystem/any.md', 
                            },
                        ]
                    },
                    {
                        title: '接口',
                        path: '', 
                        children: [
                            
                            {
                                title: '属性类接口',   
                                path: '/ts/interface/props', 
                            }, 
                            {
                                title: '函数类型接口',   
                                path: '/ts/interface/function.md', 
                            }, 
                            {
                                title: '可索引接口',   
                                path: '/ts/interface/indexs.md', 
                            }, 
                            {
                                title: '类类型接口',   
                                path: '/ts/interface/class.md', 
                            },  
                            {
                                title: '继承接口',   
                                path: '/ts/interface/extends.md', 
                            },   
                        ]
                    },
                    {
                        title: '泛型',
                        path: '', 
                        children: [
                            
                            {
                                title: '泛型的定义',   
                                path: '/ts/genericParadigm/', 
                            }, 
                            {
                                title: '泛型类',   
                                path: '/ts/genericParadigm/class.md', 
                            },
                            {
                                title: '泛型接口',   
                                path: '/ts/genericParadigm/interface.md', 
                            },   
                        ]
                    },
                    {
                        title: '模块',
                        path: './ts/modules.md', 
                    },
                    {
                        title: '命名空间',
                        path: './ts/namespace.md', 
                    },
                    {
                        title: '装饰器',
                        path: '/ts/decorators/', 
                        children: [
                            
                            {
                                title: '类装饰器',   
                                path: '/ts/decorators/class', 
                            },   
                            {
                                title: '属性装饰器',   
                                path: '/ts/decorators/props', 
                            }, 
                            {
                                title: '方法装饰器',   
                                path: '/ts/decorators/function', 
                            },
                            {
                                title: '参数装饰器',   
                                path: '/ts/decorators/params', 
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
                        title: 'Vue-router',   
                        path: '/vue/router/', 
                        children: [
                            {
                                title: '基本使用',   
                                path: '/vue/router/base.md',      
                            },
                            {
                                title: '动态路由',   
                                path: '/vue/router/dynamic.md',      
                            },
                            {
                                title: '嵌套路由',   
                                path: '/vue/router/child.md',      
                            },
                            {
                                title: '编程式导航',   
                                path: '/vue/router/programming.md',      
                            },
                            {
                                title: '命名路由',   
                                path: '/vue/router/name.md',      
                            },
                            {
                                title: '命名视图',   
                                path: '/vue/router/nameView.md',      
                            }, 
                            {
                                title: '参数属性传递',   
                                path: '/vue/router/props.md',      
                            },
                            {
                                title: '路由懒加载',   
                                path: '/vue/router/lazyLoading.md',      
                            },
                            {
                                title: '导航守卫',   
                                path: '/vue/router/guard.md',      
                            },
                        ]    
                    },
                    {
                        title: 'Vuex',   
                        path: '/vue/vuex/', 
                        children: [
                            {
                                title: '基本使用',   
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
                    {
                        title: 'cli',   
                        path: '/vue/cli/', 
                        children: [
                            {
                                title: '图形化界面创建项目',   
                                path: '/vue/cli/gui.md',      
                            },
                        ]    
                    },
                    {
                        title: '服务端渲染',   
                        path: '/vue/ssr/', 
                        children: [
                            {
                                title: '项目实战',   
                                path: '/vue/ssr/actualCombat.md',      
                            },
                        ]    
                    },
                    {
                        title: 'Nuxt',   
                        path: '/vue/nuxt/', 
                        children: [
                            {
                                title: '起步',   
                                path: '/vue/nuxt/base.md',      
                            }, 
                            {
                                title: '路由',   
                                path: '/vue/nuxt/router.md',      
                            },
                            {
                                title: '视图',   
                                path: '/vue/nuxt/view.md',      
                            },
                            {
                                title: '异步数据',   
                                path: '/vue/nuxt/asyncData.md',      
                            },
                            {
                                title: '整合 axios',   
                                path: '/vue/nuxt/axios.md',      
                            },
                            {
                                title: 'vuex',   
                                path: '/vue/nuxt/vuex.md',      
                            },
                        ]    
                    } 
                ]
                
            },
            {
                title: 'React',   
                path: '/react/',      
                children: [
                    {
                        title: 'JSX',   
                        path: '/react/JSX/',  
                        children: [
                            {
                                title: '总结',   
                                path: '/react/JSX/summary.md',      
                            }
                        ]      
                    },
                    {
                        title: '组件使用',   
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
                            {
                                title: '跨层级通信',   
                                path: '/react/context.md'    
                            },
                        ]     
                    }, 
                    {
                        title: '组件设计',   
                        path: '/react/designComp.md'    
                    },
                    {
                        title: '组件复合',   
                        path: '/react/composition.md'    
                    },
                    
                    
                    {
                        title: '生命周期',   
                        path: '', 
                        children: [
                            {
                                title: 'React v16.0 前',   
                                path: '/react/lifecycle/16.0.md',      
                            },
                            {
                                title: 'React v16.4',   
                                path: '/react/lifecycle/16.4.md',      
                            },
                        ]    
                    },
                    {
                        title: '高阶组件',   
                        path: '/react/hoc/', 
                        children: [
                            
                            {
                                title: '链式调用',   
                                path: '/react/hoc/link.md',      
                            },
                            {
                                title: '装饰器使用',   
                                path: '/react/hoc/decorator.md',      
                            },
                        ]    
                    },
                    {
                        title: 'Hook',   
                        path: '/react/hook/', 
                        children: [
                            {
                                title: '状态钩子',   
                                path: '/react/hook/state.md',      
                            },
                            {
                                title: '副作用钩子',   
                                path: '/react/hook/effect.md',      
                            },
                            {
                                title: '自定义钩子',   
                                path: '/react/hook/custom.md',      
                            },
                        ]    
                    },
                    {
                        title: 'react-router',   
                        path: '/react/router/', 
                        children: [
                            {
                                title: '导航链接',   
                                path: '/react/router/link.md',      
                            }, 
                            {
                                title: '动态路由',   
                                path: '/react/router/dynamic.md',      
                            },
                            {
                                title: '嵌套路由',   
                                path: '/react/router/nested.md',      
                            },
                            {
                                title: '404页面',   
                                path: '/react/router/404.md',      
                            },
                            {
                                title: '路由守卫',   
                                path: '/react/router/guard.md',      
                            },
                        ]    
                    },
                    {
                        title: 'Redux',   
                        path: '/react/redux/',
                        children: [
                            {
                                title: 'react-redux',   
                                path: '/react/redux/react-redux.md',      
                            },
                            {
                                title: '中间件',   
                                path: '/react/redux/middlewares.md',      
                            },
                            {
                                title: '多模块重构',   
                                path: '/react/redux/modules.md',      
                            },
                        ] 
                           
                    },
                    {
                        title: 'redux-saga',   
                        path: '/react/saga/',    
                    },
                    {
                        title: 'umi',   
                        path: '/react/umi/', 
                        children: [
                            {
                                title: '路由配置',   
                                path: '/react/umi/router.md',      
                            },
                            {
                                title: '路由权限',   
                                path: '/react/umi/guard.md',      
                            },
                            {
                                title: '引入antd',   
                                path: '/react/umi/antd.md',      
                            },
                            {
                                title: '引入dva',   
                                path: '/react/umi/dva.md',      
                            },
                        ]   
                          
                    },
                    {
                        title: 'ant-design',   
                        path: '/react/antd.md',    
                    },
                   
                ]
            },
            {
                title: '小程序',   // 必要的
                path: '',
                children: [
                    {
                        title: '第一个微信小程序',   
                        path: '/wechat/',      
                    },
                    {
                        title: '第一个云开发项目',   
                        path: '/wechat/cloud.md',      
                    }, 
                    {
                        title: 'Taro 初体验',   
                        path: '/wechat/taro.md',      
                    }, 
                    {
                        title: '微信小程序支付',   
                        path: '/wechat/pay.md',      
                    }, 
                ]
            },
            {
                title: 'Webpack',   
                path: '/webpack/',      
                children: [
                    {
                        title: '安装和配置',   
                        path: '/webpack/base/',
                        children: [
                            {
                                title: '配置文件',   
                                path: '/webpack/base/path.md',      
                            },
                            {
                                title: '配置自动打包',   
                                path: '/webpack/base/server.md',      
                            }
                        ]      
                    },
                    {
                        title: 'loader 加载器',   
                        path: '/webpack/loader/',      
                        children: [
                            {
                                title: 'css-loader',   
                                path: '/webpack/loader/css.md',      
                            },
                            {
                                title: 'less-loader',   
                                path: '/webpack/loader/less.md',      
                            },
                            {
                                title: 'sass-loader',   
                                path: '/webpack/loader/scss.md',      
                            },
                            {
                                title: 'file-loader',   
                                path: '/webpack/loader/file.md',      
                            },
                            {
                                title: 'url-loader',   
                                path: '/webpack/loader/url.md',      
                            },
                            {
                                title: 'babel-loader',   
                                path: '/webpack/loader/babel.md',      
                            },
                            {
                                title: 'postcss-loader',   
                                path: '/webpack/loader/postcss.md',      
                            },
                        ]
                    },
                    {
                        title: 'Plugins',   // 必要的
                        path: '',
                        children: [
                            {
                                title: 'HtmlWebpackPlugin',   
                                path: '/webpack/plugins/html.md',      
                            },
                            {
                                title: 'cleanWebpackPlugin',   
                                path: '/webpack/plugins/clean.md',      
                            },
                            {
                                title: 'miniCssExtractPlugin',   
                                path: '/webpack/plugins/minicss.md',      
                            },
                            
                        ]
                    },
                    {
                        title: 'sourceMap',
                        path: '/webpack/sourceMap.md'
                    },
                    {
                        title: '设置代理',
                        path: '/webpack/proxy.md'
                    },
                    {
                        title: '模块热替换',
                        path: '/webpack/hmr.md'
                    },
                    {
                        title: 'tree shaking',
                        path: '/webpack/shaking.md'
                    },
                    {
                        title: 'webpack merge',
                        path: '/webpack/merge.md'
                    },
                    {
                        title: '代码分离',
                        path: '/webpack/code-splitting.md'
                    },
                    {
                        title: '自定义Loader',
                        path: '/webpack/custom-loader.md'
                    },
                    {
                        title: '自定义Plugins',
                        path: '/webpack/custom-plugin.md'
                    },
                    
                ]
            },
            {
                title: 'Node',   // 必要的
                path: '/node/',
                children: [
                    {
                        title: '核心 API',   
                        path: '/node/api.md',      
                    },
                    {
                        title: '跨域',   
                        path: '/node/http.md',      
                    },
                    {
                        title: 'Node 中体验 ES6',   
                        path: '/node/babel.md',      
                    },
                ]
            },
            {
                title: '网络协议',
                path: '/netPro/',
                children: [
                    {
                        title: 'HTTP协议',   
                        path: '/netPro/http.md',  
                    },
                    {
                        title: 'TCP/UDP协议',   
                        path: '/netPro/tcpudp.md',  
                    }
                ]
            },
            // {
            //     title: 'Git',   // 必要的
            //     path: '',      // 可选的, 应该是一个绝对路径
            // },
            {
                title: '前端性能优化',
                path: '/perOpt/',
                children: [
                    {
                        title: '文件获取优化',   
                        path: '/perOpt/render.md',  
                    },
                    {
                        title: '代码执行优化',   
                        path: '/perOpt/code.md',  
                    },
                    {
                        title: '雅虎军规',   
                        path: '/perOpt/rule.md',  
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
                    {
                        title: '模块化的基本语法',   
                        path: '',      
                        children: [
                            {
                                title: '默认导入与导出',   
                                path: '/module/base/default.md',      
                            },
                            {
                                title: '按需导入与导出',   
                                path: '/module/base/demand.md',      
                            },
                            {
                                title: '直接导入并执行',   
                                path: '/module/base/import-ing.md',      
                            },
                        ]
                    }
                ]
            },
            // {
            //     title: '面试汇总',   
            //     path: '',          
            // }
        ]
    }
  }