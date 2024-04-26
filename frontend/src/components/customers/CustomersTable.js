import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, IconButton } from '@mui/material';

// third-party
// import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function createData(idNo, name, phoneNumber, customerStatus, protein) {
  return { idNo, name, phoneNumber, customerStatus, protein };
}

const rows = [
  createData(98764564, 'محمد خالد عايده', '+970 (59) 5322353', 0, 180139),
  createData(84564564, 'ابراهيم عامر عاطف', '+970 (59) 5322353', 2, 40570),
  createData(98756325, 'James Cook', '+970 (59) 5322353', 1, 90989),
  createData(98652366, 'Jon doh', '+970 (59) 5322353', 1, 10239),
  createData(13286564, 'Chris Griffin', '+970 (59) 5322353', 1, 83348),
  createData(86739658, 'Bruce Wayn', '+970 (59) 5322353', 0, 410780),
  createData(13256498, 'خالد محمد حفاصه', '+970 (59) 5322353', 2, 70999),
  createData(98753263, 'جميل قبها', '+970 (59) 5322353', 2, 10570),
  createData(86739658, 'Bruce Wayn', '+970 (59) 5322353', 0, 410780),
  createData(13256498, 'خالد محمد حفاصه', '+970 (59) 5322353', 2, 70999),
  createData(98753263, 'جميل قبها', '+970 (59) 5322353', 2, 10570)
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
    id: 'idNo',
    align: 'left',
    disablePadding: false,
    label: 'الرقم التعريفي'
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
      title = 'تم';
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

const ActionButtons = ({customerID}) => {
  return (
    <>
      <Link component={RouterLink} to={`/customers/${customerID}`}>
        <IconButton color="secondary">
          <FontAwesomeIcon icon={faEye} />
        </IconButton>
      </Link>
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

function CustomersTable(data) {
  const customers = data.data
  const [order] = useState('asc');
  const [orderBy] = useState('idNo');
  const [selected] = useState([]);

  const isSelected = (id) => selected.indexOf(id) !== -1;
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
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(customers, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.id);
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
                    <Link color="secondary" component={RouterLink} to={`/customers/${row.id}`}>
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align="left" >
                    <Link color="primary" component={RouterLink} to={`/customers/${row.id}`}>
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.phone_number}</TableCell>
                  <TableCell align="right">
                    {/* Good component, use for financial reports */}
                    {/* <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" /> */}
                    <ActionButtons customerID={row.id}/>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomersTable;
