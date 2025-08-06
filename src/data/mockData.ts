
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  tags: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Health & Beauty'
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear sound quality.',
    price: 199.99,
    originalPrice: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500&h=500&fit=crop'
    ],
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    featured: true,
    tags: ['wireless', 'bluetooth', 'noise-cancelling']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and 7-day battery life.',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500&h=500&fit=crop'
    ],
    rating: 4.6,
    reviews: 850,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smartwatch', 'health']
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    description: 'Soft, comfortable premium cotton t-shirt with perfect fit and lasting quality.',
    price: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=500&fit=crop'
    ],
    rating: 4.4,
    reviews: 320,
    inStock: true,
    featured: false,
    tags: ['cotton', 'casual', 'comfortable']
  },
  {
    id: '4',
    name: 'Modern LED Desk Lamp',
    description: 'Adjustable LED desk lamp with touch controls and USB charging port.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop'
    ],
    rating: 4.7,
    reviews: 450,
    inStock: true,
    featured: true,
    tags: ['LED', 'desk', 'adjustable', 'modern']
  },
  {
    id: '5',
    name: 'Yoga Mat Pro',
    description: 'Non-slip premium yoga mat with extra cushioning and eco-friendly materials.',
    price: 49.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop'
    ],
    rating: 4.5,
    reviews: 280,
    inStock: true,
    featured: false,
    tags: ['yoga', 'exercise', 'eco-friendly']
  },
  {
    id: '6',
    name: 'Classic Novel Collection',
    description: 'Beautiful hardcover collection of classic literature with gold-embossed covers.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop'
    ],
    rating: 4.9,
    reviews: 150,
    inStock: true,
    featured: false,
    tags: ['books', 'literature', 'hardcover']
  },
  {
    id: '7',
    name: 'Organic Skincare Set',
    description: 'Complete organic skincare routine with natural ingredients for all skin types.',
    price: 69.99,
    category: 'Health & Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
    ],
    rating: 4.3,
    reviews: 520,
    inStock: true,
    featured: true,
    tags: ['organic', 'skincare', 'natural']
  },
  {
    id: '8',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with tactile switches and programmable keys.',
    price: 149.99,
    originalPrice: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop'
    ],
    rating: 4.6,
    reviews: 680,
    inStock: true,
    featured: true,
    tags: ['gaming', 'mechanical', 'RGB', 'keyboard']
  }
];

// In-memory cart database
export class CartDatabase {
  private cart: CartItem[] = [];

  addItem(productId: string, product: Product, quantity: number = 1): void {
    const existingItem = this.cart.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        id: Date.now().toString(),
        productId,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image
      });
    }
  }

  removeItem(id: string): void {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  updateQuantity(id: string, quantity: number): void {
    const item = this.cart.find(item => item.id === id);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(id);
      } else {
        item.quantity = quantity;
      }
    }
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  clear(): void {
    this.cart = [];
  }
}

export const cartDB = new CartDatabase();
