import { ShoppingCart, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Price</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`relative overflow-hidden px-5 py-3 rounded-xl font-semibold text-sm flex items-center space-x-2 transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/30'
            }`}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isAdded ? 360 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </motion.div>
            <span>{isAdded ? 'Added!' : 'Add'}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
