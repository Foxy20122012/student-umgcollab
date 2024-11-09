import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  BookOutlined,
  TeamOutlined,
  FileTextOutlined,
  SettingOutlined,
  ReadOutlined,
  TagsOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  BarChartOutlined,
  IdcardOutlined,
  QuestionCircleOutlined 
} from '@ant-design/icons';

const menuItems = [
  {
    key: '/admin/dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/admin/post',
    icon: <FileTextOutlined />, // Icono para representar publicaciones o posts
    label: 'Post',
    children: [
      {
        key: '/admin/views/viewPost',
        label: 'Post Visibles',
      },
      {
        key: '/admin/post',
        label: 'Publicar Post',
      },
      {
        key: '/admin/views/viewNews',
        label: 'Noticias',
      },
      {
        key: '/admin/post/news',
        label: 'Publicar Noticias',
      },
      {
        key: '/admin/views/viewEvents',
        label: 'Eventos',
      },
      {
        key: '/admin/post/events',
        label: 'Publicar Eventos',
      },
    ],
  },
  {
    key: '/admin/about',
    icon: <QuestionCircleOutlined />, 
    label: 'acerca de',
  },
];

export default menuItems;
