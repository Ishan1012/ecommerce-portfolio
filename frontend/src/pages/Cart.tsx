import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="container px-6 py-20 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <Button className="mt-4" asChild>
                <a href="/catalogue">Continue Shopping</a>
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cart.map((item) => (
                  <Card key={item.id} className="flex items-center gap-4 p-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <CardTitle className="text-lg">
                        <a href={`/product/${item.id}`} className="hover:underline">{item.title}</a>
                      </CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <p className="font-semibold mt-1">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="flex justify-between items-center border-t pt-6">
                <div>
                  <p className="text-lg font-semibold">Total: Rs. {total.toFixed(2)}</p>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={clearCart}>
                    Clear Cart
                  </Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;