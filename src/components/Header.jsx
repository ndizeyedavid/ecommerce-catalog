import { Search, ShoppingCartIcon } from "lucide-react";
import Cart from "./Cart";
import { useState } from "react";
import ThemeChanger from "./ThemeChanger";

export default function Header() {

     const [isOpen, setIsOpen] = useState(false);

     return (
          <>
               <div className="flex justify-between items-center p-3 border-b border-b-black/10">
                    <div className="size-[60px] rounded-full bg-gray-500" />

                    <div className="join">
                         <input type="text" placeholder="Search by product name...." className="input input-primary join-item w-[600px]" name="" id="" />
                         <button className="btn btn-primary join-item"><Search /></button>
                    </div>

                    <div className="flex items-center gap-5">

                         <ThemeChanger />

                         <button onClick={() => setIsOpen(true)} className="relative size-[40px] bg-primary text-white flex items-center justify-center rounded-full cursor-pointer">
                              <span className="absolute -top-2 -right-1 bg-warning text-warning-content size-[20px] flex items-center justify-center border border-base-100 rounded-full">3</span>
                              <ShoppingCartIcon />
                         </button>
                    </div>

               </div>

               {isOpen && <Cart cartItems={[{ id: 1, image: "https://t3.ftcdn.net/jpg/05/41/38/96/360_F_541389653_OaqaWUtWEk7A3EkYMtyO1PPnUUr9abJj.jpg", name: "Air Max", price: 12000, quantity: 0 }, { id: 1, image: "https://t3.ftcdn.net/jpg/05/41/38/96/360_F_541389653_OaqaWUtWEk7A3EkYMtyO1PPnUUr9abJj.jpg", name: "Air Max", price: 12000, quantity: 0 }]} onClose={() => setIsOpen(false)} />}

          </>
     )
}
