
import React, { useState } from 'react';
import { CreditCard, X, CheckCircle, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface PaymentGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalAmount: number;
}

export const PaymentGateway = ({ isOpen, onClose, cartItems, totalAmount }: PaymentGatewayProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    zipCode: ''
  });
  
  const { toast } = useToast();
  const { clearCart } = useCart();

  if (!isOpen) return null;

  const generatePaymentReference = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `SKR-${timestamp}-${random}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const reference = generatePaymentReference();
      setPaymentReference(reference);
      setPaymentSuccess(true);
      setIsProcessing(false);
      
      // Send confirmation email simulation
      console.log('Payment Details:', {
        reference,
        amount: totalAmount,
        items: cartItems,
        customer: formData,
        merchantEmail: 'saikumarade55@gmail.com'
      });

      toast({
        title: "Payment Successful!",
        description: `Payment processed successfully. Reference: ${reference}`,
      });

      // Clear cart after successful payment
      setTimeout(() => {
        clearCart();
      }, 3000);
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Thank you for your purchase</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600">Payment Reference ID:</p>
              <p className="font-mono text-lg font-bold text-blue-600">{paymentReference}</p>
            </div>
            
            <div className="text-left space-y-2 mb-6">
              <p className="text-sm"><strong>Amount Paid:</strong> ${totalAmount}</p>
              <p className="text-sm"><strong>Items:</strong> {cartItems.length} robot(s)</p>
              <p className="text-sm flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <strong>Support:</strong> saikumarade55@gmail.com
              </p>
            </div>
            
            <Button onClick={onClose} className="w-full">
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Secure Payment Gateway
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-6 h-6" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handlePayment} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="space-y-1">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
                <div className="border-t pt-1 mt-2 font-bold flex justify-between">
                  <span>Total Amount:</span>
                  <span>${totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number *</label>
                  <Input
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                    <Input
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV *</label>
                    <Input
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Billing Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Address *</label>
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="123 Main Street"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">City *</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">ZIP Code *</label>
                  <Input
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>For support and inquiries: <strong>saikumarade55@gmail.com</strong></span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              size="lg"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Payment...
                </div>
              ) : (
                `Pay $${totalAmount} Securely`
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
