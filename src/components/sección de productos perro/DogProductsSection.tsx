import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Chip,
  Divider,
  IconButton,
  Collapse,
  Zoom,
  Container,
} from '@mui/material';
import {
  Add,
  Remove,
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder,
  Favorite,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useCart } from '../cart/CartContext'; // Importación añadida

// Importar datos desde JSON
import dogProducts from '../../data/dogProduct.json';
import { red } from '@mui/material/colors';

// Definir tipo para los productos
interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  discountPrice?: number;
  image: string;
  tags: string[];
  description: string;
}

const ProductCard = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

const DogsProductsPage = () => {
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Hook del carrito
  const { addToCart } = useCart();

  // Convertir datos JSON al tipo Product
  const products: Product[] = dogProducts;

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, newQuantity)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 0;
    if (quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }, quantity);
      // Opcional: resetear la cantidad después de agregar al carrito
      handleQuantityChange(product.id, 0);
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleExpand = (productId: number) => {
    setExpandedProduct(prev => prev === productId ? null : productId);
  };

  // Filtrar productos por categoría si está seleccionada
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category.includes(selectedCategory))
    : products;

  // Extraer categorías únicas para los filtros
  const categories = [...new Set(products.map(product => product.category))];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200;
      const newPosition = direction === 'right' 
        ? scrollPosition + scrollAmount
        : scrollPosition - scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <>
      <CssBaseline /> 
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 4, backgroundColor: '#fafafa' }}>
        {/* Encabezado */}
        <Box sx={{ 
          mb: 2, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
          // borderRadius: 2,boxShadow: 1        
        }}>
          <Typography variant="h3" component="h1" sx={{ 
            fontWeight: 'bold', 
            color: 'red',
            mb: 1
          }}>
            Productos para Perros
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Los mejores productos para el cuidado de tu mascota
          </Typography>
        </Box>

        {/* Filtros y contador */}
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
          position: 'relative',
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%',
            position: 'relative',
            paddingBottom:'10PX',
            paddingTop:'10px',
            bgcolor:'#FF5722'
          }}>
            <IconButton 
              onClick={() => handleScroll('left')}
              sx={{ 
                position: 'absolute', 
                left: -16, 
                zIndex: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText'
                }
              }}
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft />
            </IconButton>

            <Box 
              ref={scrollContainerRef}
              sx={{ 
                display: 'flex', 
                overflowX: 'auto', 
                gap: 1, 
                flexGrow: 1,
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                px: 1,
                mx: 4
              }}
            >
              {['Todos', ...categories].map(category => (
                <Chip
                  key={category}
                  label={category}
                  clickable
                  onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
                  sx={{
                    px: 3,
                    py: 1,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                    backgroundColor: selectedCategory === category || (category === 'Todos' && !selectedCategory) 
                      ? 'primary.main' 
                      : 'background.paper',
                    color: selectedCategory === category || (category === 'Todos' && !selectedCategory)
                      ? 'primary.contrastText'
                      : 'text.primary',
                    boxShadow: 1,
                    '&:hover': {
                      backgroundColor: selectedCategory === category 
                        ? 'primary.dark' 
                        : 'primary.light',
                      color: 'primary.contrastText'
                    }
                  }}
                />
              ))}
            </Box>

            <IconButton 
              onClick={() => handleScroll('right')}
              sx={{ 
                position: 'absolute', 
                right: -16, 
                zIndex: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText'
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          <Chip 
            label={`${filteredProducts.length} productos encontrados`} 
            color="secondary" 
            sx={{ 
              fontSize: '0.9rem', 
              p: 1.5,
              fontWeight: 'bold',
              mt: 2,
              mx: 'auto'
            }}
          />
        </Box>

        {/* Lista de productos */}
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Zoom in timeout={600} style={{ transitionDelay: `${product.id * 50}ms` }}>
                <ProductCard sx={{ backgroundColor: 'background.paper' }}>
                  {/* Imagen del producto */}
                  <Box sx={{ position: 'relative', height: 200, display: 'flex', justifyContent: 'center' }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.name}
                      sx={{ 
                        objectFit: 'contain',
                        width: 'auto',
                        maxHeight: '100%',
                        p: 2
                      }}
                    />
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,1)',
                        }
                      }}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      {favorites.includes(product.id) ? (
                        <Favorite color="error" />
                      ) : (
                        <FavoriteBorder color="action" />
                      )}
                    </IconButton>
                  </Box>

                  <CardContent>
                    {/* Marca y categoría */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Chip 
                        label={product.brand} 
                        size="small" 
                        color="primary" 
                        sx={{ 
                          fontWeight: 'bold',
                          backgroundColor: alpha('#1976d2', 0.1)
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {product.category}
                      </Typography>
                    </Box>

                    {/* Nombre del producto */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        minHeight: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': { color: 'primary.main' }
                      }}
                      onClick={() => toggleExpand(product.id)}
                    >
                      {product.name}
                    </Typography>

                    {/* Precios */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                        ${product.price.toLocaleString()}
                      </Typography>
                      {product.discountPrice && (
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                          ${product.discountPrice.toLocaleString()}
                        </Typography>
                      )}
                    </Box>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                      {product.tags.map(tag => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small" 
                          sx={{ 
                            backgroundColor: alpha('#1976d2', 0.1),
                            color: 'primary.dark',
                            fontSize: '0.7rem'
                          }} 
                        />
                      ))}
                    </Box>

                    {/* Selector de cantidad */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        backgroundColor: '#fff'
                      }}>
                        <IconButton 
                          size="small" 
                          onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) - 1)}
                          disabled={!quantities[product.id] || quantities[product.id] <= 0}
                          sx={{
                            '&:hover': {
                              backgroundColor: alpha('#1976d2', 0.1)
                            }
                          }}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography sx={{ px: 1, minWidth: '20px', textAlign: 'center' }}>
                          {quantities[product.id] || 0}
                        </Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => handleQuantityChange(product.id, (quantities[product.id] || 0) + 1)}
                          sx={{
                            '&:hover': {
                              backgroundColor: alpha('#1976d2', 0.1)
                            }
                          }}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>

                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ShoppingCartIcon />}
                        disabled={!quantities[product.id] || quantities[product.id] <= 0}
                        onClick={() => handleAddToCart(product)}
                        sx={{ 
                          flexGrow: 1,
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                      >
                        Añadir
                      </Button>
                    </Box>

                    {/* Descripción expandible */}
                    <Collapse in={expandedProduct === product.id} timeout="auto" unmountOnExit>
                      <Divider sx={{ my: 1 }} />
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {product.description}
                      </Typography>
                      <Button
                        size="small"
                        endIcon={<ExpandLess />}
                        onClick={() => toggleExpand(product.id)}
                        sx={{ 
                          mt: 1,
                          color: 'primary.main'
                        }}
                      >
                        Ver menos
                      </Button>
                    </Collapse>

                    {expandedProduct !== product.id && (
                      <Button
                        size="small"
                        endIcon={<ExpandMore />}
                        onClick={() => toggleExpand(product.id)}
                        sx={{ 
                          mt: 1,
                          color: 'primary.main'
                        }}
                      >
                        Ver más
                      </Button>
                    )}
                  </CardContent>
                </ProductCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
     
    </>
  );
};

export default DogsProductsPage;