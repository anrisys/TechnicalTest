function RedeemPointGallery() {
  return (
    <div className="flex overflow-x-auto justify-between">
      <div>
        <img src="images/alpukat.jpg" alt="" className="w-20 h-20" />
        <p className="font-bold text-xs">Alpukat</p>
        <p className="font-bold text-xs text-orange-500">45 Pts</p>
      </div>
      <div>
        <img src="images/anggurmerah.jpg" alt="" className="w-auto h-20" />
        <p className="font-bold text-xs">Anggur Merah</p>
        <p className="font-bold text-xs text-orange-500">45 Pts</p>
      </div>
      <div>
        <img src="images/buahnaga.jpg" alt="" className="w-auto h-20" />
        <p className="font-bold text-xs">Buah naga</p>
        <p className="font-bold text-xs text-orange-500">45 Pts</p>
      </div>
    </div>
  );
}

export default RedeemPointGallery;
