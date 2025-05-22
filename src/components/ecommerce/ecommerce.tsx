import dog from '../bg/pet_good.png';
import dogGood from '../bg/dog.jpg';
import { useRef } from 'react';
import './ecommerce.css';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { useSearch } from "../SearchContext/SearchContext";
import data from "../../data/dogProduct.json";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export default function Ecommerce() {
  const navigate = useNavigate();
  const { searchTerm, searchResults } = useSearch();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Datos para el slider
  const displayedProducts = searchTerm ? searchResults : [
    { id: 1, name: 'Dog Food Premium', price: '$10', image: dogGood },
    { id: 2, name: 'Cat Litter', price: '$15', image: dogGood },
    { id: 3, name: 'Pet Toy Set', price: '$20', image: dogGood },
    { id: 4, name: 'Pet Bed', price: '$25', image: dogGood },
    { id: 5, name: 'Grooming Kit', price: '$30', image: dogGood },
  ];

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
    <>
      <GlobalStyle />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#ffff'
      }}>
        <Navbar />
        
        <Box sx={{ flexGrow: 1 }}>
          {/* Mostrar resultados de búsqueda si hay un término de búsqueda */}
          {searchTerm && (
            <Box sx={{ py: 4, px: 4 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Resultados de búsqueda para "{searchTerm}"
              </Typography>
              
              {searchResults.length > 0 ? (
                <Grid container spacing={3}>
                  {searchResults.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={product.image}
                          alt={product.name}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="h2">
                            {product.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {product.brand} - {product.category}
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                            ${product.price}
                            {product.discountPrice && (
                              <Typography variant="body2" color="error" component="span" sx={{ ml: 1, textDecoration: 'line-through' }}>
                                ${product.discountPrice}
                              </Typography>
                            )}
                          </Typography>
                          <Button 
                            variant="contained" 
                            fullWidth
                            sx={{
                              backgroundColor: '#ff5722',
                              '&:hover': {
                                backgroundColor: '#e64a19'
                              }
                            }}
                          >
                            Añadir al carrito
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Typography variant="body1">
                  No se encontraron resultados para "{searchTerm}"
                </Typography>
              )}
            </Box>
          )}

          {/* Resto del contenido normal cuando no hay búsqueda */}
          {!searchTerm && (
            <>
              {/* Banner con fondo de imagen */}
              <Box
                sx={{
                  height: "100vh",
                  width: "100vw",
                  backgroundImage: `url(${dog})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "#fff",
                  textAlign: "left", 
                  margin: 0,
                  padding: 0
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
                          onClick={() => {
                            navigate("/Productos-perros");
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
                          onClick={() => {
                            navigate("/Productos-gatos");
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
                          onClick={() => {
                            navigate("/Otros-productos");
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
                    {displayedProducts.map((product) => (
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
            </>
          )}
        </Box>
      </Box>
    </>
  );
}