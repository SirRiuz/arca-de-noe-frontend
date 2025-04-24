import dog from '../bg/pet_good.png';
import dogGood from '../bg/dog.jpg';
import React, { useRef } from 'react';
import './ecommerce.css';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';

export default function Ecommerce() {
  // Datos para el slider
  const products = [
    { id: 1, name: 'Dog Food Premium', price: '$10',  image: dogGood },
    { id: 2, name: 'Cat Litter', price: '$15',        image: dogGood },
    { id: 3, name: 'Pet Toy Set', price: '$20',       image: dogGood },
    { id: 4, name: 'Pet Bed', price: '$25',           image: dogGood},
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30',      image: dogGood },
  ];

  // Referencia para el slider
  const sliderRef = useRef<HTMLDivElement>(null);

  // Función para desplazar el slider
  const scroll = (direction: 'left' | 'right') => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fff'
    }}>
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Banner con fondo de imagen */}
        <Box
          sx={{
            height: "90vh",
            backgroundImage: `url(${dog})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
            textAlign: "left", 
          }}
        >
          <Typography variant="h2" fontWeight="bold" sx={{ mt: 2, ml: 10 }}>
            Save 50% Off
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, ml: 10 }}>
            Happy Pet, Happy You
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              mt: 3, 
              ml: 10, 
              px: 10, 
              alignSelf: 'flex-start',
              backgroundColor: '#ff5722',
              '&:hover': {
                backgroundColor: '#e64a19'
              }
            }}
          >
            Shop Now
          </Button>
        </Box>

        {/* Categorías */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={3} sx={{ px: 4 }}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                backgroundColor: '#f9f9f9', 
                backgroundImage: `url(${dogGood})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
                color: "#fff",
                textAlign: "left",
                minHeight: '300px'
              }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">Artículos para perros</Typography>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    sx={{ 
                      mt: 1,
                      backgroundColor: '#ff5722',
                      '&:hover': {
                        backgroundColor: '#e64a19'
                      }
                    }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                backgroundColor: '#f9f9f9', 
                backgroundImage: `url(${dogGood})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
                color: "#fff",
                textAlign: "left",
                minHeight: '300px'
              }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">Articulos para gatos</Typography>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    sx={{ 
                      mt: 1,
                      backgroundColor: '#ff5722',
                      '&:hover': {
                        backgroundColor: '#e64a19'
                      }
                    }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                backgroundColor: '#f9f9f9', 
                backgroundImage: `url(${dogGood})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                display: "flex",
                alignItems: "left",
                justifyContent: "center",
                flexDirection: "column",
                color: "#fff",
                textAlign: "left",
                minHeight: '300px'
              }}>
                <CardContent>
                  <Typography variant="h6" color="text.primary">Otros articulos</Typography>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    sx={{ 
                      mt: 1,
                      backgroundColor: '#ff5722',
                      '&:hover': {
                        backgroundColor: '#e64a19'
                      }
                    }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Slider de productos */}
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, color: 'text.primary' }}>
            Featured Products
          </Typography>
          
          <Box sx={{ position: 'relative', px: 4 }}>
            <Button 
              onClick={() => scroll('left')} 
              sx={{ 
                position: 'absolute', 
                left: 10, 
                top: '50%', 
                transform: 'translateY(-50%)', 
                zIndex: 1,
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                color: '#ff5722',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              &lt;
            </Button>
            
            <Box
              ref={sliderRef}
              sx={{
                display: 'flex',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                gap: 3,
                px: 5,
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none'
              }}
            >
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  sx={{ 
                    minWidth: 250, 
                    flexShrink: 0,
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.primary">{product.name}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
                      {product.price}
                    </Typography>
                    <Button 
                      variant="contained" 
                      size="small"
                      sx={{
                        backgroundColor: '#ff5722',
                        '&:hover': {
                          backgroundColor: '#e64a19'
                        }
                      }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
            
            <Button 
              onClick={() => scroll('right')} 
              sx={{ 
                position: 'absolute', 
                right: 10, 
                top: '50%', 
                transform: 'translateY(-50%)', 
                zIndex: 1,
                minWidth: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                color: '#ff5722',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              &gt;
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}