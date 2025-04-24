// src/components/cart/CartDrawer.tsx
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  TextField
} from '@mui/material';
import { Close, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../../components/checkout/checkout';

const CartDrawer = () => {
  const { 
    cartItems, 
    cartTotal, 
    isCartOpen, 
    toggleCart, 
    updateQuantity,
    removeFromCart 
  } = useCart();

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={toggleCart}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 400 },
          p: 2
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ShoppingCart /> Carrito
        </Typography>
        <IconButton onClick={toggleCart}>
          <Close />
        </IconButton>
      </Box>

      <Divider />

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body1">Tu carrito está vacío</Typography>
        </Box>
      ) : (
        <>
          <List sx={{ overflowY: 'auto', flexGrow: 1 }}>
            {cartItems.map(item => (
              <ListItem key={item.id} sx={{ py: 2 }}>
                <ListItemAvatar>
                  <Avatar 
                    src={item.image} 
                    alt={item.name} 
                    variant="square"
                    sx={{ width: 60, height: 60, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`$${item.price.toLocaleString()}`}
                />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton 
                    size="small" 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Remove fontSize="small" />
                  </IconButton>
                  <TextField
                    value={item.quantity}
                    size="small"
                    sx={{ width: 60, mx: 1 }}
                    inputProps={{ 
                      style: { textAlign: 'center' },
                      min: 1
                    }}
                    onChange={(e) => 
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                  <IconButton 
                    size="small" 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
                <IconButton 
                  onClick={() => removeFromCart(item.id)}
                  sx={{ ml: 1 }}
                >
                  <Close fontSize="small" />
                </IconButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography>Subtotal:</Typography>
              <Typography>${cartTotal.toLocaleString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Envío:</Typography>
              <Typography>Gratis</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">${cartTotal.toLocaleString()}</Typography>
            </Box>
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ py: 1.5, fontWeight: 'bold' }}
          >
            Finalizar Compra
          </Button>
        </>
      )}
    </Drawer>
  );
};

export default CartDrawer;