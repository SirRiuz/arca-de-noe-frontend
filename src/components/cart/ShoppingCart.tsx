import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
  TextField,
  Badge
} from '@mui/material';
import { Close, Delete, Add, Remove, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems
  } = useCart();

  const handleCheckout = () => {
    toggleCart();
    navigate('/CheckoutPage');
  };

  return (
    <>
      {/* Icono del carrito con contador (para tu Navbar) */}
      <IconButton 
        onClick={toggleCart} 
        color="inherit"
        sx={{ position: 'relative' }}
      >
        <Badge 
          badgeContent={totalItems} 
          color="error"
          overlap="circular"
          invisible={totalItems === 0}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Drawer del carrito */}
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleCart}
        PaperProps={{ sx: { width: { xs: '100%', sm: 400 }, p: 2 } }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="bold">
            Carrito de Compras ({totalItems})
          </Typography>
          <IconButton onClick={toggleCart}>
            <Close />
          </IconButton>
        </Box>

        {cartItems.length === 0 ? (
          <Typography textAlign="center" py={4}>
            Tu carrito está vacío
          </Typography>
        ) : (
          <>
            <List>
              {cartItems.map(item => (
                <React.Fragment key={item.id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={item.image} variant="square" sx={{ width: 60, height: 60, mr: 2 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={`$${item.price.toLocaleString()} x ${item.quantity}`}
                    />
                    <Box display="flex" alignItems="center">
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      <Typography mx={1}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Add fontSize="small" />
                      </IconButton>
                      <IconButton
                        onClick={() => removeFromCart(item.id)}
                        color="error"
                        sx={{ ml: 1 }}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>

            <Box mt={2}>
              <Typography variant="h6" textAlign="right">
                Total: ${subtotal.toLocaleString()}
              </Typography>
              <Box mt={2} display="flex" flexDirection="column" gap={1}>
                <TextField
                  label="Código de descuento"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <Button 
                  variant="contained" 
                  fullWidth  
                  onClick={handleCheckout}
                  sx={{
                    backgroundColor: '#ff5722',
                    '&:hover': { backgroundColor: '#e64a19' }
                  }}
                >
                  Continuar con el pago
                </Button>
              </Box>
            </Box>
          </>
        )}
      </Drawer>
    </>
  );
};