
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, CreditCard, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { PaymentGateway } from './PaymentGateway';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  const handleProceedToPayment = () => {
    if (cartItems.length > 0) {
      setShowPayment(true);
    }
  };

  if (showPayment) {
    return (
      <PaymentGateway
        isOpen={true}
        onClose={() => {
          setShowPayment(false);
          onClose();
        }}
        cartItems={cartItems}
        totalAmount={getTotalPrice()}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-gray-800 border-gray-700">
        <CardHeader className="border-b border-gray-700 bg-gray-900">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2 text-white">
              <ShoppingCart className="w-6 h-6" />
              Shopping Cart ({getTotalItems()} items)
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white hover:bg-gray-700">
              <X className="w-6 h-6" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 bg-gray-800">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-white mb-2">Your cart is empty</p>
              <p className="text-gray-400">Add some robots to get started</p>
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto p-6">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-blue-500/50 transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded border border-gray-600"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{item.name}</h3>
                        <p className="text-blue-400 font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="border-gray-600 text-gray-400 hover:bg-gray-700"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-white">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="border-gray-600 text-gray-400 hover:bg-gray-700"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="bg-red-600/20 border-red-500/50 text-red-400 hover:bg-red-500/30"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-700 p-6 bg-gray-900">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-white">Total: ${getTotalPrice()}</span>
                  <span className="text-gray-400">All taxes included</span>
                </div>
                <Button 
                  onClick={handleProceedToPayment}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Proceed to Payment
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
