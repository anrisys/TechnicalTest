import { EllipseVertical, Envelope, QRcode } from "../../assets/Icons";

function HeaderAction() {
  return (
    <div className="flex">
      <QRcode />
      <Envelope />
      <EllipseVertical />
    </div>
  );
}

export default HeaderAction;
