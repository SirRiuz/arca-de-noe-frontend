import  { useState } from 'react';
import { 
  Box, Typography, Button, TextField, Radio, RadioGroup, 
  FormControlLabel, FormControl, FormLabel, Divider, 
  Paper, Snackbar, Alert, Card, Dialog, DialogContent,
  DialogActions, IconButton
} from "@mui/material";
import { AlertProps } from '@mui/material/Alert';
import { useCart } from '../cart/CartContext';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PayPalIcon from '@mui/icons-material/Payment';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';
import { QRCodeSVG } from 'qrcode.react';

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart();
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<AlertProps['severity']>('success');
  const [showTicket, setShowTicket] = useState(false);
  const [showNequiDialog, setShowNequiDialog] = useState(false);
  const [showPaypalDialog, setShowPaypalDialog] = useState(false);

  const handlePayment = () => {
    if (cartItems.length === 0) {
      showError('No hay productos en el carrito');
      return;
    }

    if (deliveryOption === 'delivery' && !address) {
      showError('Por favor ingrese su dirección');
      return;
    }

    if (!paymentMethod) {
      showError('Seleccione un método de pago');
      return;
    }

    processPayment();
  };

  const handleNequiPayment = () => {
    setShowNequiDialog(true);
  };

  const handlePaypalPayment = () => {
    setShowPaypalDialog(true);
  };

  const showError = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarSeverity('error');
    setOpenSnackbar(true);
  };

  const processPayment = () => {
    setSnackbarMessage('Procesando pago...');
    setSnackbarSeverity('info');
    setOpenSnackbar(true);

    setTimeout(() => {
      setSnackbarMessage('Pago exitoso!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setShowTicket(true);
      clearCart();
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const NequiPaymentDialog = () => {
    const nequiQrCode = `00020101021126170013Cr 54 # 38-095204729953031705802CO5925JHORJAN SNEYDER MARTINEZ 6015BARRANCABERMEJA6221021031047871550703CEL64350002ES0125JHORJAN SNEYDER MARTINEZ 92290012co.com.nequi0109P2P.NEQUI630423FA`;
    const nequiPhoneNumber = '3104787155';
    const whatsappMessage = `Quiero pagar $${subtotal} por productos para mascotas`;

    return (
      <Dialog open={showNequiDialog} onClose={() => setShowNequiDialog(false)} maxWidth="sm" fullWidth>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" fontWeight="bold">
              <SmartphoneIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
              Pago con Nequi
            </Typography>
            <IconButton onClick={() => setShowNequiDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Paso 1: Escanea este código QR
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              p: 2,
              backgroundColor: 'white',
              borderRadius: 1,
              border: '1px solid #ddd',
              mb: 2
            }}>
              <QRCodeSVG
                value={nequiQrCode}
                size={200}
                level="H"
                includeMargin={true}
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              onClick={() => window.open('nequi://scanqr/', '_blank')}
              startIcon={<SmartphoneIcon />}
            >
              Abrir Nequi para escanear
            </Button>
          </Box>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Paso 2: O realiza transferencia manual
            </Typography>
            <Box sx={{
              backgroundColor: '#f5f5f5',
              p: 2,
              borderRadius: 1,
              mb: 2
            }}>
              <Typography><strong>Número Nequi:</strong> {nequiPhoneNumber}</Typography>
              <Typography><strong>Nombre:</strong> JHORJAN SNEYDER MARTINEZ</Typography>
              <Typography><strong>Valor a pagar:</strong> ${subtotal.toLocaleString()}</Typography>
            </Box>
            
            <Button
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              onClick={() => window.open(`https://api.whatsapp.com/send?phone=57${nequiPhoneNumber}&text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              Contactar por WhatsApp
            </Button>
          </Box>

          <Box sx={{ backgroundColor: '#e8f5e9', p: 2, borderRadius: 1 }}>
            <Typography variant="body2">
              Después de realizar el pago, por favor envía el comprobante a nuestro WhatsApp para confirmar tu pedido.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowNequiDialog(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const PaypalPaymentDialog = () => {
    return (
      <Dialog open={showPaypalDialog} onClose={() => setShowPaypalDialog(false)} maxWidth="sm" fullWidth>
        <DialogContent>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h5" fontWeight="bold">
              <PayPalIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
              Pago con PayPal/PSE
            </Typography>
            <IconButton onClick={() => setShowPaypalDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Seleccione método de pago
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <RadioGroup
                defaultValue="paypal"
                name="payment-option"
              >
                <FormControlLabel 
                  value="paypal" 
                  control={<Radio />} 
                  label={
                    <Box display="flex" alignItems="center">
                      <PayPalIcon sx={{ mr: 1 }} />
                      Pagar con PayPal
                    </Box>
                  } 
                />
                <FormControlLabel 
                  value="pse" 
                  control={<Radio />} 
                  label={
                    <Box display="flex" alignItems="center">
                      <AccountBalanceIcon sx={{ mr: 1 }} />
                      Pagar con PSE
                    </Box>
                  } 
                />
              </RadioGroup>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                setShowPaypalDialog(false);
                window.open('https://www.paypal.com/checkoutnow?token=TU_TOKEN_DE_PAGO', '_blank');
              }}
            >
              Continuar al pago
            </Button>
          </Box>

          <Box sx={{ backgroundColor: '#e3f2fd', p: 2, borderRadius: 1 }}>
            <Typography variant="body2">
              Serás redirigido a la plataforma de PayPal para completar tu pago de manera segura.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPaypalDialog(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderPaymentMethodForm = () => {
    switch (paymentMethod) {
      case 'card':
        return (
          <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <CreditCardIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Tarjeta de Crédito/Débito</Typography>
            </Box>
            <TextField
              fullWidth
              label="Número de tarjeta"
              variant="outlined"
              margin="normal"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
              placeholder="1234 5678 9012 3456"
            />
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                label="Vencimiento (MM/AA)"
                variant="outlined"
                margin="normal"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="MM/AA"
              />
              <TextField
                fullWidth
                label="CVC"
                variant="outlined"
                margin="normal"
                value={cardCvc}
                onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                placeholder="123"
              />
            </Box>
          </Card>
        );
      
      case 'nequi':
        return (
          <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <SmartphoneIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Pago con Nequi</Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Escanea el código QR o envía el pago al número 310 4787155
            </Typography>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              onClick={handleNequiPayment}
            >
              Ver instrucciones de pago
            </Button>
          </Card>
        );
      
      case 'paypal':
        return (
          <Card variant="outlined" sx={{ p: 2, mt: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <PayPalIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Pago con PayPal/PSE</Typography>
            </Box>
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              onClick={handlePaypalPayment}
            >
              Seleccionar método de pago
            </Button>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>Finalizar Compra</Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>Resumen de tu pedido</Typography>
        {cartItems.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>{item.name} x {item.quantity}</Typography>
            <Typography>${(item.price * item.quantity).toLocaleString()}</Typography>
          </Box>
        ))}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">${subtotal.toLocaleString()}</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Método de entrega</FormLabel>
          <RadioGroup 
            value={deliveryOption} 
            onChange={(e) => setDeliveryOption(e.target.value)}
          >
            <FormControlLabel 
              value="delivery" 
              control={<Radio />} 
              label="Envío a domicilio" 
            />
            <FormControlLabel 
              value="pickup" 
              control={<Radio />} 
              label="Recoger en tienda" 
            />
          </RadioGroup>
        </FormControl>

        {deliveryOption === 'delivery' && (
          <TextField
            fullWidth
            label="Dirección de envío"
            variant="outlined"
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        )}
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Método de pago</FormLabel>
          <RadioGroup 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel 
              value="card" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center">
                  <CreditCardIcon sx={{ mr: 1 }} />
                  Tarjeta de crédito/débito
                </Box>
              } 
            />
            <FormControlLabel 
              value="nequi" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center">
                  <SmartphoneIcon sx={{ mr: 1 }} />
                  Nequi
                </Box>
              } 
            />
            <FormControlLabel 
              value="paypal" 
              control={<Radio />} 
              label={
                <Box display="flex" alignItems="center">
                  <PayPalIcon sx={{ mr: 1 }} />
                  PayPal/PSE
                </Box>
              } 
            />
          </RadioGroup>
        </FormControl>

        {renderPaymentMethodForm()}
      </Paper>

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{ 
          backgroundColor: '#ff5722',
          '&:hover': { backgroundColor: '#e64a19' },
          py: 2,
          mb: 3
        }}
        onClick={handlePayment}
      >
        CONFIRMAR PAGO
      </Button>

      <NequiPaymentDialog />
      <PaypalPaymentDialog />

      {showTicket && (
        <Paper elevation={3} sx={{ p: 3, mt: 3, borderLeft: '4px solid #ff5722' }}>
          <Typography variant="h5" gutterBottom>¡Gracias por tu compra!</Typography>
          <Typography variant="subtitle1" gutterBottom>Resumen de tu pedido:</Typography>
          
          <Box sx={{ mb: 2 }}>
            {cartItems.map((item) => (
              <Box key={item.id}>
                <Typography><strong>Producto:</strong> {item.name}</Typography>
                <Typography><strong>Cantidad:</strong> {item.quantity}</Typography>
                <Typography><strong>Precio:</strong> ${item.price.toLocaleString()} c/u</Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))}
            <Typography><strong>Total:</strong> ${subtotal.toLocaleString()}</Typography>
            <Typography><strong>Método de entrega:</strong> {deliveryOption === 'delivery' ? 'Envío a domicilio' : 'Recoger en tienda'}</Typography>
            {deliveryOption === 'delivery' && <Typography><strong>Dirección:</strong> {address}</Typography>}
            <Typography><strong>Método de pago:</strong> 
              {paymentMethod === 'card' && ' Tarjeta de crédito/débito'}
              {paymentMethod === 'nequi' && ' Nequi'}
              {paymentMethod === 'paypal' && ' PayPal/PSE'}
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            Hemos enviado los detalles a tu correo electrónico. 
            {deliveryOption === 'delivery' ? ' Tu pedido llegará en 2-3 días hábiles.' : ' Puedes recoger tu pedido en nuestra tienda.'}
          </Typography>
        </Paper>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}