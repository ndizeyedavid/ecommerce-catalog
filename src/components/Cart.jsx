
import { useState } from 'react';
import toast from 'react-hot-toast';

function Cart({ cartItems = [], onClose, setCart }) {
     const [isCheckingOut, setIsCheckingOut] = useState(false);

     const calculateTotal = () => {
          return cartItems.reduce((total, item) => total + item.price, 0).toLocaleString();
     };

     const handleCheckout = () => {
          setIsCheckingOut(true);
          // Simulate checkout process
          setTimeout(() => {
               toast.success('Checkout completed!');
               const updatedCart = [];
               setCart(updatedCart);
               localStorage.setItem('cart', JSON.stringify(updatedCart));
               onClose();
          }, 2000);
     };

     const onRemoveItem = (itemId) => {
          const updatedCart = cartItems.filter((item) => item.id !== itemId);
          setCart(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
     };

     return (
          <div className="fixed h-screen flex items-center justify-center top-0 w-full bg-black/30 z-50">
               <div className="card w-96 bg-base-100 card-xl shadow-sm p-4 max-h-[90vh] flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl font-bold">Your Cart</h2>
                         <button
                              className="btn btn-sm btn-circle"
                              onClick={onClose}
                         >
                              ✕
                         </button>
                    </div>

                    {cartItems.length === 0 ? (
                         <div className="flex-1 flex flex-col items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <p className="mt-4 text-gray-500">Your cart is empty</p>
                              <button
                                   className="btn btn-primary mt-4"
                                   onClick={onClose}
                              >
                                   Continue Shopping
                              </button>
                         </div>
                    ) : (
                         <>
                              <div className="overflow-y-auto flex-1">
                                   {cartItems.map((item) => (
                                        <div key={item.id + Math.random()} className="flex border-b py-4">
                                             <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                                                  <img
                                                       src={item.img}
                                                       alt={item.name}
                                                       className="w-full h-full object-cover"
                                                  />
                                             </div>
                                             <div className="ml-4 flex-1">
                                                  <h3 className="font-medium">{item.name}</h3>
                                                  <p className="text-primary font-bold">{item.price.toLocaleString()} RWF</p>
                                                  <div className="flex items-center mt-2">

                                                       <button
                                                            className="btn btn-xs btn-ghost text-error ml-auto"
                                                            onClick={() => onRemoveItem(item.id)}
                                                       >
                                                            Remove
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              <div className="mt-4">
                                   <div className="flex justify-between font-bold text-lg mb-4">
                                        <span>Total:</span>
                                        <span>{calculateTotal()} RWF</span>
                                   </div>
                                   <button
                                        className="btn btn-primary w-full"
                                        onClick={handleCheckout}
                                        disabled={isCheckingOut}
                                   >
                                        {isCheckingOut && <span className='loading loading-spinner loading-xl'></span>}
                                        {isCheckingOut ? 'Processing...' : 'Checkout'}
                                   </button>
                              </div>
                         </>
                    )}
               </div>
          </div>
     );
}

export default Cart
