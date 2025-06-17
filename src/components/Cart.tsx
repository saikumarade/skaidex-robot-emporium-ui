
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
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden bg-black border-green-500/50">
        <CardHeader className="border-b border-green-500/30 bg-black/90">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2 text-green-400 font-mono">
              <Terminal className="w-6 h-6" />
              [CART_SYSTEM] ({getTotalItems()} units)
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-green-400 hover:text-cyan-400 hover:bg-green-500/10">
              <X className="w-6 h-6" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 bg-black/95">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingCart className="w-16 h-16 mx-auto text-green-400 mb-4 animate-pulse" />
              <p className="text-xl text-green-400 mb-2 font-mono">[CART_EMPTY]</p>
              <p className="text-cyan-400 font-mono">Initialize neural units to proceed</p>
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto p-6">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-green-500/30 rounded-lg bg-black/80 hover:border-cyan-500/50 transition-colors">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded border border-green-500/30 filter brightness-75 contrast-125"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-green-400 font-mono">{item.name}</h3>
                        <p className="text-cyan-400 font-bold font-mono">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="border-green-500/50 text-green-400 hover:bg-green-500/10"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-green-400 font-mono">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="border-green-500/50 text-green-400 hover:bg-green-500/10"
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
              
              <div className="border-t border-green-500/30 p-6 bg-black/90">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-green-400 font-mono">TOTAL: ${getTotalPrice()}</span>
                  <span className="text-cyan-400 font-mono">All taxes included</span>
                </div>
                <Button 
                  onClick={handleProceedToPayment}
                  className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-black font-mono border border-green-500"
                  size="lg"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  INITIATE_PAYMENT
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
