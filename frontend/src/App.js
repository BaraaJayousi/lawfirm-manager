// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGavel, faUser, faPenToSquare, faAngleDown, faTrash, faCloudArrowUp, faMoneyBill, faUserPlus } from '@fortawesome/free-solid-svg-icons';


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //
library.add(faGavel, faUser, faPenToSquare, faAngleDown, faTrash, faCloudArrowUp, faMoneyBill);
const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
