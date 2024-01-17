import PrivilegeGallery from "../molecules/PrivilegeGallery";
import PrivilegeTop from "../molecules/PrivilegeTop";

function Privileges() {
  return (
    <div className="p-2 mx-3 w-100">
      <PrivilegeTop />
      <PrivilegeGallery />
    </div>
  );
}

export default Privileges;
