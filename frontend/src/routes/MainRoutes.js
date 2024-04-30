import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';


// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

//render - customers page
const CustomersPage = Loadable(lazy(() => import('pages/customers')));
const CustomersTypes = Loadable(lazy(() => import('pages/customers-types')));
const CustomerPage = Loadable(lazy(() => import('pages/customer')));
const CustomerCreate = Loadable(lazy(() => import('pages/customer-create')));
const CustomerEdit = Loadable(lazy(() => import('pages/customer-create')));

//render - cases pages
const CasesPage = Loadable(lazy(() => import('pages/cases')));
const CasesTypesPage = Loadable(lazy(() => import('pages/cases-types')));
const CasePage = Loadable(lazy(() => import('pages/case')));
const CreateCasePage = Loadable(lazy(() => import('pages/case-create')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - expenses
const Expenses = Loadable(lazy(()=> import('pages/expenses')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'customers',
      element: <CustomersPage />
    },
    {
      path: 'customers/create',
      element: <CustomerCreate />
    },
    {
      path: 'customers/edit/:id',
      element: <CustomerEdit newCustomer={false} />
    },
    {
      path: 'customers/types',
      element: <CustomersTypes />
    },
    {
      path: `customers/:id`,
      element: <CustomerPage />
    },
    {
      path: `cases`,
      element: <CasesPage />
    },
    {
      path: `cases/types`,
      element: <CasesTypesPage />
    },
    {
      path: `cases/:id`,
      element: <CasePage />
    },
    {
      path: `cases/create`,
      element: <CreateCasePage />
    },
    {
      path: `expenses`,
      element: <Expenses />
    }
  ]
};

export default MainRoutes;
