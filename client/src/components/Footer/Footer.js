import React from 'react';

const loginInfo = localStorage.getItem('id_token');

function Footer() {
  return (
    <>
      {
        loginInfo ? (

          <footer className="bg-gray-900 mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:flex md:items-center justify-center lg:px-8">
              <div className="mt-8 md:order-1 md:mt-0">
                <ul className="flex flex-wrap justify-center text-sm text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">Home</a>
                  </li>
                  <li>
                    <a href="/profile" className="mr-4 hover:underline md:mr-6">Profile</a>
                  </li>
                  <li>
                    <a href="/rewards" className="mr-4 hover:underline md:mr-6">Rewards</a>
                  </li>
                </ul>
                <p className="text-center text-base text-gray-50">&copy; 2022 HOME - All rights reserved.</p>
              </div>
            </div>
          </footer>

        ) :
          <footer className="bg-gray-900 mt-auto">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center justify-center lg:px-8">
              <div className="mt-8 md:order-1 md:mt-0">
                <p className="text-center text-base text-gray-50">HOME &copy; 2022 - All rights reserved.</p>
              </div>
            </div>
          </footer>
      }
    </>
  );
}


export default Footer;





{/* <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>  */}