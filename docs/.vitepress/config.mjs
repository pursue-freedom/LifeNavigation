import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';
import markdownItTaskCheckbox from 'markdown-it-task-checkbox';

// https://vitepress.dev/reference/site-config
// export default defineConfig({
//   base: '/LifeNavigation/',
//   title: "JuRuoWiki",
//   description: "A VitePress Site",
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     nav: [
//       { text: '首页', link: '/' },
//       // { text: '详细介绍', items: [
//       //     { text: '个人主页', link: '/个人主页' },
//       //     { text: '代办', link: '/代办' },
//       //     { text: 'Markdown Examples', link: '/markdown-examples' },
//       //     { text: 'Runtime API Examples', link: '/api-examples' }
//       //   ] },
//       { text: '资源工具', link: '/' },
//       { text: '生活', items: [
//           { text: '吃饭', link: '/生活/吃饭' },
//           { text: '心理', link: '/生活/心理' },
//         ] },
//       { text: '书籍', link: '/书籍读后感/1.md' }
//     ],

//     // sidebar: [
//     //   {
//     //     text: '详细介绍',
//     //     items: [
//     //       { text: '个人主页', link: '/个人主页' },
//     //       { text: '代办', link: '/代办' },
//     //       { text: 'Markdown Examples', link: '/markdown-examples' },
//     //       { text: 'Runtime API Examples', link: '/api-examples' }
//     //     ], },
//     //     {text: '生活',
//     //     items: [
//     //       { text: '例子一', link: '/生活/1.md' },
//     //     ]

//     //   }
//     // ],
//     // sidebar: generateSidebar({
//     //   // documentRootPath: '/docs', // 你的 md 根目录
//     //   basePath: '/docs',
//     //   // 使用文件夹的index.md
//     //   useFolderTitleFromIndexFile: true,
//     //   // 指向文件夹的链接
//     //   useFolderLinkFromIndexFile: true,
//     //   // 根据md文件的order进行排序
//     //   // sortMenusByFrontmatterOrder: true,
//     //   // 排序之后将不是文件夹的放后面
//     //   sortFolderTo: "top",
//     //   includeRootIndexFile : false,           // 是否把 /docs/index.md 算进来
//     //   // rootGroupLink: ['/生活/吃饭', '/书籍'],        // 最外层分组链接
//     //   // rootGroupCollapsed: true,
//     //   // 菜单展开功能
//     //   collapsed: false,
//     // }),

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/pursue-freedom/LifeNavigation' }
//     ], 
    
//     outlineTitle:" ",
//     outline:[1,6],// 定义标题级别,字符串"deep"相当于是[2,6] 
//   }
// })

/* ====== 1. 原来的 VitePress 配置（除了 sidebar 都可以照写） ====== */
const vitePressOptions = {

  markdown: {
    config: (md) => {
      md.use(markdownItTaskCheckbox) //todo
    },
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
  },
  base: '/LifeNavigation/',
  title: "JuRuoWiki",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/juruo.png',
    siteTitle: false, //标题隐藏
    returnToTopLabel:'返回顶部', 
    nav: [
      { text: '首页', link: '/' },
      // { text: '详细介绍', items: [
      //     { text: '个人主页', link: '/个人主页' },
      //     { text: '代办', link: '/代办' },
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ] },
      { text: '资源工具', link: '/资源工具' },
      { text: '生活', items: [
          { text: '吃饭', link: '/生活/吃饭' },
          { text: '心理', link: '/生活/心理' },
        ] },
      { text: '书籍', items: [
          { text: '心理学', link: '/书籍/心理学' },
          { text: '技术', link: '/书籍/技术' },
        ] },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pursue-freedom/LifeNavigation' }
    ], 
    
    outlineTitle:" ",
    outline:[1,6],// 定义标题级别,字符串"deep"相当于是[2,6] 
  }
}

/* ====== 2. 告诉插件要扫描哪些目录 ====== */
const vitePressSidebarOptions = [
  // 每一个数组项对应“一个前缀 + 一套侧边栏”
  {
    documentRootPath: 'docs',   // 文档根
    scanStartPath: '生活',     // 只扫 docs/guide
    resolvePath: '/生活/',     // 当 URL 以 /guide/ 开头时生效
    collapsed: true,            // 默认折叠
    useTitleFromFileHeading: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: '书籍',
    resolvePath: '/书籍/',
    collapsed: false
  }
]

/* ====== 3. 导出被包装后的配置 ====== */
export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
)