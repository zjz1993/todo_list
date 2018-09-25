/*
   由zhaojunzhe于2018/9/17创建
*/
import Login from '../routes/login/login';
import Index from '../routes/index/Index';
import Create from '../routes/create/Create'
import Todo from '../routes/todo/Todo';
import Done from '../routes/done/Done';
import Edit from '../routes/edit/Create';
export const getRouterData = () => {
  return [
    {path: '/', key: 'index', component: Index, exact: true},
    {path: '/create', key: 'create', component: Create},
    {path: '/edit/:id', key: 'edit', component: Edit},
    {path: '/todo', key: 'todo', component: Todo},
    {path: '/done', key: 'done', component: Done},
  ]
};

