module.exports =　{
    title: "dongcyun's 文档",
    description: 'Docment library',
    head: [
        ['link', { rel : 'icon', href: `/favicon.ico`} ]
    ],

    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '前端规范', link: '/frontend/' },
            { text: '开发环境', link: '/development/' },
            { text: '学习文档', link: '/notes/' },
            { text: '博客', link: 'http://www.lawglow.me' },
            
            {
                text: 'language',
                items: [
                    { text: 'Chinese', link: '/language/chinese'},
                    { text: 'English', link: '/language/English'}
                ]
            }

        ],
        sidebar: [
            '/',
            '/about/',
            {
              title: 'Group 1',
              collapsable: false,
              children: [
                '/guide/'
              ]
            }
          ]
          
    }
}