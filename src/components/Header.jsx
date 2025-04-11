import { Search, ShoppingCartIcon } from "lucide-react";
import Cart from "./Cart";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

export default function Header({ cart, setCart }) {

     const [isOpen, setIsOpen] = useState(false);

     return (
          <>
               <div className="flex justify-between items-center p-3 border-b border-b-primary/20 w-full">
                    <div className="size-[60px] rounded-full bg-gradient-to-r from-violet-400 to-purple-300 flex items-center justify-center">
                         <img src="/symbol-no-bg.png" className="size-[40px]" alt="Logo" />
                    </div>

                    <div className="join">
                         <input type="text" placeholder="Search by product name...." className="input input-primary join-item w-[600px]" name="" id="" />
                         <button className="btn btn-primary join-item"><Search /></button>
                    </div>

                    <div className="flex items-center gap-5">

                         {/* <ThemeChanger /> */}

                         <button onClick={() => setIsOpen(true)} className="relative size-[40px] bg-primary text-white flex items-center justify-center rounded-full cursor-pointer">
                              <span className="absolute -top-2 -right-1 bg-warning text-warning-content size-[20px] flex items-center justify-center border border-base-100 rounded-full">{cart.length}</span>
                              <ShoppingCartIcon />
                         </button>
                    </div>

               </div>

               {isOpen && <Cart cartItems={cart} setCart={setCart} onClose={() => setIsOpen(false)} />}

          </>
     )
}
