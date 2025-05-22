import React from 'react';
import { Box, Grid, Typography, Divider, Link } from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  CreditCard,
  LocalShipping,
  CardGiftcard,
  Pets,
  School,
  Spa,
  Hotel,
  LocalHospital,
  Assignment,
  LocalOffer,
  Book,
  Public
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor: '#f5f5f5',
      color: '#333',
      padding: '3rem 2rem',
      marginTop: '4rem'
    }}>
      <Grid container spacing={4} sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Sección Nosotros */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Nosotros
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#" color="inherit" underline="hover">Puppis Colombia</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Sucursales</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Plan de Fidelidad Puppis</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Trabaja con Nosotros</Link></li>
          </Box>
        </Grid>

        {/* Sección Tienda online */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Tienda online
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#" color="inherit" underline="hover">Beneficios</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Orienta</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Tarjeta Regalo</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Formas de Entrega</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Hub de tutoriales</Link></li>
            <li><Link href="#" color="inherit" underline="hover">Envío Programado</Link></li>
          </Box>
        </Grid>

        {/* Sección Servicios */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Servicios
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#" color="inherit" underline="hover"><Pets fontSize="small" /> Adopciones</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><School fontSize="small" /> Colegio y Hotel Canino</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><Spa fontSize="small" /> Baño y Peluquería</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><Hotel fontSize="small" /> Hotel Miau</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><LocalHospital fontSize="small" /> Puppis aliado médico</Link></li>
          </Box>
        </Grid>

        {/* Sección Políticas */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Políticas
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="#" color="inherit" underline="hover"><Assignment fontSize="small" /> Aviso de privacidad</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><LocalShipping fontSize="small" /> Políticas De Envío</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><Assignment fontSize="small" /> Cambios Y Devoluciones</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><LocalOffer fontSize="small" /> Garantías De Productos</Link></li>
            <li><Link href="#" color="inherit" underline="hover"><Book fontSize="small" /> Terminos Y Condiciones</Link></li>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Visita También */}
      <Box textAlign="center" sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Visita También
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link href="#" color="inherit" underline="hover">Puppis Argentina</Link>
          <Link href="#" color="inherit" underline="hover">Blog Puppis</Link>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Medios de pago */}
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Haz tus compras con estos Medios de Pago
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <CreditCard fontSize="large" />
          <CardGiftcard fontSize="large" />
          {/* Agrega más iconos de medios de pago según necesites */}
        </Box>
      </Box>

      {/* Información de contacto */}
      <Box textAlign="center" sx={{ mb: 3 }}>
        <Typography variant="body2" gutterBottom>
          Atención Telefónica 60-1-2193099
        </Typography>
        <Typography variant="body2" gutterBottom>
          Atención Whatsapp +57-305-8182491
        </Typography>
        <Typography variant="body2" gutterBottom>
          Horario de Atención L - S: 8am - 6pm / D - Festivos: 9am - 6pm
        </Typography>
      </Box>

      {/* Información legal */}
      <Box textAlign="center">
        <Typography variant="caption" display="block" gutterBottom>
          SUPPLIES 4 PETS S.A.S | NIT 9009358042
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Dirección y correo para notificación judicial: Carrera 15A # 122.26 Loc 2 / protecciondatos@puppis.com.co
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ mt: 2 }}>
          Copyright © {new Date().getFullYear()} Puppis.com.co. Todos los derechos reservados.
        </Typography>
      </Box>

      {/* Redes sociales */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', mt: 3 }}>
        <Link href="#"><Facebook /></Link>
        <Link href="#"><Instagram /></Link>
        <Link href="#"><Twitter /></Link>
        <Link href="#"><WhatsApp /></Link>
      </Box>
    </Box>
  );
};

export default Footer;