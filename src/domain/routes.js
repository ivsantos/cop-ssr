import Home from '../components/Home';
import CatGrid from '../components/CatGrid';
import { fetchCats } from '../services/api';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/cats/:tag',
    component: CatGrid,
    fetchInitialData: (path = '') => fetchCats(path.split('/').pop()),
  },
];

export default routes;
