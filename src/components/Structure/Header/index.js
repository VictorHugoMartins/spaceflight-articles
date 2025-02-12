import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
const Header = () => {
    const theme = useTheme();
    return (_jsx(AppBar, { position: "static", sx: { backgroundColor: theme.palette.primary.main }, children: _jsx(Container, { children: _jsxs(Toolbar, { disableGutters: true, children: [_jsx(Typography, { variant: "h6", component: "div", sx: {
                            flexGrow: 1,
                            color: theme.palette.text.primary,
                        }, children: _jsx(Link, { to: "/", style: { color: 'inherit', textDecoration: 'none' }, children: "Infinity Space" }) }), _jsx(Box, { sx: { display: 'flex', alignItems: 'center' }, children: _jsx(ThemeChanger, {}) })] }) }) }));
};
export default Header;
