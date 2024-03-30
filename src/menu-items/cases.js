// assets

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//icons
const icons = {
    gavel: <FontAwesomeIcon icon="fa-solid fa-gavel" size="lg"/>
};

// ==============================|| MENU ITEMS - Cases ||============================== //

const cases = {
    id: 'group-cases',
    title: 'قسم القضايا',
    type: 'group',
    children: [
        {
            id: 'cases',
            title: 'القضايا',
            type: 'item',
            url: '/cases',
            icon: icons.gavel,
            breadcrumbs: false
        },
        {
            id: 'casesTypes',
            title: 'انواع القضايا',
            type: 'item',
            url: '/cases/types',
            icon: icons.gavel,
            breadcrumbs: false
        }
    ]
};

export default cases;
