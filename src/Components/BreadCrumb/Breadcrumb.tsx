
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Typography, Button, Box, useTheme } from '@mui/material';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatPathname = (pathname: string) => {
    return pathname
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link to="/" style={{ color: theme.palette.text.secondary }}>Home</Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={to} color="textPrimary">
              {formatPathname(value)}
            </Typography>
          ) : (
            <Link key={to} to={to} style={{ color: theme.palette.text.secondary }}>
              {formatPathname(value)}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
