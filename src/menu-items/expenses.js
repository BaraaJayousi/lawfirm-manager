// assets

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
const icons = {
  gavel: <FontAwesomeIcon icon="fa-solid fa-money-bill" />
};

// ==============================|| MENU ITEMS - Expenses ||============================== //

const expenses = {
  id: 'group-cases',
  title: 'قسم المصروفات',
  type: 'group',
  children: [
    {
      id: 'expenses',
      title: 'المصروفات',
      type: 'item',
      url: '/expenses',
      icon: icons.gavel,
      breadcrumbs: false
    },
    {
      id: 'expensesTypes',
      title: 'انواع المصروفات',
      type: 'item',
      url: '/expenses/types',
      icon: icons.gavel,
      breadcrumbs: false
    }
  ]
};

export default expenses;
