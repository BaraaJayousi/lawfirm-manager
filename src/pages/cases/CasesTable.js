import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function createData(idNo, name, phoneNumber, clientStatus, caseType, protein) {
  return { idNo, name, phoneNumber, clientStatus, caseType, protein };
}

const rows = [
  createData(98764564, 'محمد خالد عايده', '+970 (59) 5322353', 1, 'Minor', 180139),
  createData(98764564, 'محمد خالد عايده', '+970 (59) 5322353', 3, 'Major', 180139),
  createData(98764564, 'محمد خالد عايده', '+970 (59) 5322353', 2, 'Divorce', 180139),
  createData(98764564, 'محمد خالد عايده', '+970 (59) 5322353', 0, 'Civil', 180139)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'CaseId',
    align: 'left',
    disablePadding: false,
    label: 'رقم القضيه'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'اسم العميل'
  },
  {
    id: 'phoneNumber',
    align: 'left',
    disablePadding: false,
    label: 'رقم الهاتف'
  },
  {
    id: 'clientStatus',
    align: 'left',
    disablePadding: false,
    label: 'حاله القضيه'
  },
  {
    id: 'caseType',
    align: 'left',
    disablePadding: false,
    label: 'نوع القضيه'
  },
  {
    id: 'actions',
    align: 'right',
    disablePadding: false,
    label: 'عمليات'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'مراجعه';
      break;
    case 1:
      color = 'success';
      title = 'موافقه';
      break;
    case 2:
      color = 'error';
      title = 'مرفوض';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| CUSTOEMRS TABLE - ACTION BUTTONS ==================== //

const ActionButtons = () => {
  return (
    <>
      <IconButton color="secondary">
        <FontAwesomeIcon icon={faEye} />
      </IconButton>
      <IconButton color="primary">
        <FontAwesomeIcon icon={faPen} />
      </IconButton>
      <IconButton color="error">
        <FontAwesomeIcon icon={faTrashCan} />
      </IconButton>
    </>
  );
};

// ==============================|| ORDER TABLE ||============================== //

const CasesTable = () => {
  const [order] = useState('asc');
  const [orderBy] = useState('idNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': { pl: 2 },
            '& .MuiTableCell-root:last-of-type': { pr: 3 }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.idNo);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="/cases/3">
                      {row.idNo}
                    </Link>
                  </TableCell>
                  <TableCell align="left">
                    <Link color="primary" component={RouterLink} to="/cases/2">
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.phoneNumber}</TableCell>
                  <TableCell align="left">
                    <OrderStatus status={row.clientStatus} />
                  </TableCell>
                  <TableCell>{row.caseType}</TableCell>
                  <TableCell align="right">
                    {/* Good component, use for financial reports */}
                    {/* <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" /> */}
                    <ActionButtons />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
);
};

export default CasesTable;
