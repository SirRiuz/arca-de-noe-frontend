import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './CartContext';

const CartIcon = () => {
  const { totalItems, toggleCart } = useCart();

  return (
    <Badge badgeContent={totalItems} color="error" overlap="circular">
      <IconButton color="inherit" onClick={toggleCart}>
        <ShoppingCartIcon />
      </IconButton>
    </Badge>
  );
};

export default CartIcon;