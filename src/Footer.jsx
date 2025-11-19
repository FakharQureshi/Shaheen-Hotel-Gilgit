
const Footer = () => {
  return (
    <footer>
      <div className="upper-footer flex justify-between p-10 lg:p-20 items-start bg-black h-auto w-full text-white">
        <div className="space-y-2">
            logo logo
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Contact Info</h1>
          <p>Tel: +1-325-33-345</p>
          <p>Fax: +1-573-23-66</p>
          <p>Email: reserve@techflame.com</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Address</h1>
          <p> Airport road  Kashrote, Gilgit, Pakistan</p>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-semibold">Awards</h1>
          <p>Best Hotel 2020</p>
          <p>Top Hospitality 2021</p>
        </div>
      </div>
      <div className="lower-footer flex justify-between items-center h-[50px] w-full px-10 lg:px-20 border-t-2 border-slate-700 bg-black text-white">
        <div className="text-sm">&copy; 2019, All Rights Reserved @ Shaheen Hotel design and developed by fakhar uddin </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
