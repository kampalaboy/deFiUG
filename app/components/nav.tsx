import React from "react";

const Nav:React.FC = () => {
    return (
        <div className="flex flex-row top-0 sticky justify-between items-center w-full h-[50px] border-b bg-blue-500 border-blue-500 shadow-sm overflow-visible  z-50">
        <div className="flex-0 m-5 text-white cursor-pointer">
            <a href="/">DEFI</a>
        </div>
        <div className=" flex m-5 text-white">
            <p className="m-3 cursor-pointer"><a href="/lendborrowStats">Lend/Borrow</a></p>
            <p className="m-3 cursor-pointer"><a href="/mint">Mint</a></p>
            <p className="m-3 cursor-pointer"><a href="/swap">Swap</a></p>
        </div>
        <div className="m-3 float-end text-green-900 flex-2 cursor-pointer"> Connect Wallet</div>
    </div>
    
    );
  }
export default Nav;
