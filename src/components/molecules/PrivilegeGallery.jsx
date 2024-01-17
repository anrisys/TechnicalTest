function PrivilegeGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
      <div className="border border-gray-300 rounded-lg">
        <img src="images/1.jpg" alt="" className="w-auto h-40" />
        <p className="font-bold text-xs p-1.5">PLATINUM Member</p>
        <p className="font-light text-xs px-1.5 pb-1.5 text-gray-400">
          Exp. 31 Dec. 2024
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <img src="images/2.jpg" alt="" className="w-auto h-40" />
        <p className="font-bold text-xs p-1.5">Gold Member</p>
        <p className="font-light text-xs px-1.5 pb-1.5 text-gray-400">
          Exp. 31 Dec. 2024
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <img src="images/3.jpg" alt="" className="w-auto h-40" />
        <p className="font-bold text-xs p-1.5">Birthday Reward</p>
        <p className="font-light text-xs px-1.5 pb-1.5 text-gray-400">
          Exp. 31 Dec. 2024
        </p>
      </div>
      <div className="border border-gray-300 rounded-lg">
        <img src="images/4.jpg" alt="" className="w-auto h-40" />
        <p className="font-bold text-xs p-1.5">Redeem Point</p>
        <p className="font-light text-xs px-1.5 pb-1.5 text-gray-400">
          Exp. 31 Dec. 2024
        </p>
      </div>
    </div>
  );
}

export default PrivilegeGallery;
