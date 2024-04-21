import PropTypes from 'prop-types';
import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';

// third-party
// import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function createData(idNo, paymentName, amount, paymentStatus, paymentMethod, createdAt) {
  return { idNo, paymentName, amount, paymentStatus, paymentMethod, createdAt };
}

const rows = [
  createData(1, 'مقدم القضيه', '2000.00', 1, 'Cash', '14/02/2023'),
  createData(2, 'قسط رقم 2', '4000.00', 0, 'Bank Transfer', '31/02/2023'),
  createData(4, 'قسط رقم 3', '1500.00', 2, 'Cheque', '14/04/2023')
];

const handlePrint = () => {
  console.log('Generating pdf');
};
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
    label: 'رقم الدفعه'
  },
  {
    id: 'paymentName',
    align: 'left',
    disablePadding: true,
    label: 'اسم الدفعه'
  },
  {
    id: 'amount',
    align: 'left',
    disablePadding: false,
    label: 'المبلغ المدفوع'
  },
  {
    id: 'paymentMethod',
    align: 'left',
    disablePadding: false,
    label: 'طريقة الدفع'
  },
  {
    id: 'paymentStatus',
    align: 'left',
    disablePadding: false,
    label: 'حالة الدفعه'
  },
  {
    id: 'createdAt',
    align: 'left',
    disablePadding: false,
    label: 'تاريخ الدفع'
  },
  {
    id: 'actions',
    align: 'center',
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

// ==============================|| CUSTOMERS TABLE - ACTION BUTTONS ==================== //

const ActionButtons = () => {
  return (
    <>
      <IconButton color="primary">
        <FontAwesomeIcon icon={faPen} />
      </IconButton>
      <IconButton color="error">
        <FontAwesomeIcon icon={faTrashCan} />
      </IconButton>
      <IconButton color="secondary" onClick={handlePrint}>
        <FontAwesomeIcon icon={faPrint} />
      </IconButton>
    </>
  );
};

// ==============================|| ORDER TABLE ||============================== //

const PaymentsTable = () => {
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
                    {row.idNo}
                  </TableCell>
                  <TableCell align="left">{row.paymentName}</TableCell>
                  <TableCell align="left">{row.amount}</TableCell>
                  <TableCell align="left">{row.paymentMethod}</TableCell>
                  <TableCell align="left">
                    <OrderStatus status={row.paymentStatus} />
                  </TableCell>
                  <TableCell>{row.createdAt}</TableCell>
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

export default PaymentsTable;
