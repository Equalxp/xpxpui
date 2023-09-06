export const sidebar = {
  // 写一个路径 '/guild/' ideBar值改成一个对象，对象的key是一个路径 
  // 只有这个路径出现才会有sidebar的出现
  '/guild/': [
    {
      text: '开发指南',
      link: '/guild/',
      items: [
        { text: '指南', link: '/guild/installation' },
        { text: '安装', link: '/guild/install' },
        { text: '快速上手', link: '/guild/quickstart' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      collapsible: true,
      // collapsed:true,
      // link: '/components/',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Link 链接', link: '/components/link' },
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Ellipsis 省略', link: '/components/ellipsis' },
        { text: 'Carousel 轮播图', link: '/components/carousel' },
      ]
    },
    {
      text: 'Form 表单组件',
      // link: '/components/',
      collapsible: true,
      items: [
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'CheckBox 多选框', link: '/components/checkbox' },
        { text: 'Select 选择器', link: '/components/select' },
        { text: 'Switch 开关', link: '/components/switch' },
      ]
    },
    {
      text: '反馈组件',
      collapsible: true,
      // link: '/components/',
      items: [
        { text: 'Alert 提示', link: '/components/alert' },
        { text: 'Dialog 对话框', link: '/components/dialog' },
        { text: 'Message 消息提示', link: '/components/message' },
      ]
    },
    {
      text: '导航组件',
      collapsible: true,
      // link: '/components/',
      items: [
        { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
        { text: 'Tabs 标签页', link: '/components/tabs' },
      ]
    },
    {
      text: '其他组件',
      collapsible: true,
      // link:'/components/',
      items: [
        { text: 'Shake 抖动', link: '/components/shake' },
        { text: 'Upload 上传', link: '/components/upload' },
      ]
    }
  ]
}
