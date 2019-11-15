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
                title: 'HTML',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径
                children: [
                    {
                        title: ' 常见问题1',   // 必要的
                        path: '/html/1.md',      // 可选的, 应该是一个绝对路径
                    },
                    {
                        title: ' 常见问题2',   // 必要的
                        path: '/html/2.md',      // 可选的, 应该是一个绝对路径
                    },
                ]
            },
            {
                title: 'css',   // 必要的
                path: '',      // 可选的, 应该是一个绝对路径
                children: [
                    {
                        title: ' 常见问题1',   // 必要的
                        path: '/css/1.md',      // 可选的, 应该是一个绝对路径
                    },
                    {
                        title: ' 常见问题2',   // 必要的
                        path: '/css/2.md',      // 可选的, 应该是一个绝对路径
                    },
                ]
            },
            
        ]
    }
  }