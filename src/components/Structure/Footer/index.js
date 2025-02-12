import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Box, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const Footer = () => {
    const theme = useTheme();
    return (_jsxs(Box, { component: "footer", sx: {
            display: 'flex',
            alignItems: 'center',
            height: '15vh',
            minHeight: '120px',
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            mt: '80px',
            justifyContent: 'space-between',
            px: 2,
            '@media only screen and (max-width: 850px)': {
                flexDirection: 'column',
                justifyContent: 'center',
                height: 'auto',
                mt: '40px',
            },
        }, children: [_jsx(Typography, { variant: "h6", sx: {
                    fontWeight: 'bold',
                    ml: 2,
                    '@media only screen and (max-width: 850px)': {
                        textAlign: 'center', // centralizando para telas menores
                    },
                }, children: "Developed by Victor Hugo Martins" }), _jsxs(Box, { id: "contato", sx: {
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '180px',
                    fontSize: '30px',
                    position: 'relative',
                    '@media only screen and (max-width: 850px)': {
                        position: 'unset',
                        mt: 2,
                    },
                }, children: [_jsx(IconButton, { component: "a", href: "https://github.com/VictorHugoMartins/", target: "_blank", rel: "noopener noreferrer", sx: { color: theme.palette.text.primary }, children: _jsx(FaGithub, {}) }), _jsx(IconButton, { component: "a", href: "mailto:vhmartins.contato@gmail.com", sx: { color: theme.palette.text.primary }, children: _jsx(FaEnvelope, {}) }), _jsx(IconButton, { component: "a", href: "https://api.whatsapp.com/send?phone=55[31997436379]&text=Oi,%20Victor!", target: "_blank", rel: "noopener noreferrer", sx: { color: theme.palette.text.primary }, children: _jsx(FaWhatsapp, {}) })] })] }));
};
export default Footer;
