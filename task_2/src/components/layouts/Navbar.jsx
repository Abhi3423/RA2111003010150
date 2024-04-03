import React from "react";

const Navbar = () => {

  return (
    <div className="bg-white z-20 w-full shadow-md" style={{
      WebkitTransition: 'all .5s ease-in-out',
      MozTransition: 'all .5s ease-in-out',
      OTransition: 'all .5s ease-in-out',
      transition: 'all .5s ease-in-out',
      backgroundColor: '#fff',
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      padding: '8px 8px'
    }}>
      <div class="flex items-center justify-center text-xl text-red-500 p-2 w-full">
        GO MART
      </div>

    </div>
  );
};

export default Navbar;
