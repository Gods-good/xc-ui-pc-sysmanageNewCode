import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
import page_edit from '@/module/cms/page/page_edit.vue';
import page_html from '@/module/cms/page/page_html.vue';
export default [{
  path: '/',
  component: Home,
  name: 'CMS',
  hidden: false,
  children:[
    { path: '/cms/page/list',name:'页面列表', component: page_list,hidden:false },
    { path: '/cms/page/add',name:'新增页面', component: page_add,hidden:true },
    { path: '/cms/page/edit/:pageId',name:'修改页面', component: page_edit,hidden:true },
    { path: '/cms/page/generateHtml/:pageId',name:'静态化页面', component: page_html,hidden:true },
  ]
  // ,
  // redirect: '/home',
  // children: [
  //   {path: 'home', component: Home}
  // ]
}/*,
 {
 path: '/login',
 component: Login,
 name: 'Login',
 hidden: true
 }*/
]
