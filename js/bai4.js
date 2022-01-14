const PHI_HOA_DON_ND = 4.5;
const PHI_DICH_VU_CO_BAN_ND = 20.5;
const THUE_KENH_CAO_CAP_ND = 7.5;

const PHI_HOA_DON_DN = 15;
const PHI_DICH_VU_CO_BAN_DN = 75;
const THUE_KENH_CAO_CAP_DN = 50;






function myFunction() {
    if (mySelect.value == "Mercedes") {
        document.getElementById("soKetNoi").style.display="block";
    }else {
        document.getElementById("soKetNoi").style.display="none";
        
    }

}

function tienCap() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh =Number(document.getElementById("soKenh").value);
    var soKetNoi =Number(document.getElementById("soKetNoi").value);
    var thanhTien =Number(0);



    if (mySelect.value == "BMW") {
        thanhTien = PHI_HOA_DON_ND + PHI_DICH_VU_CO_BAN_ND + (soKenh *THUE_KENH_CAO_CAP_ND);
        document.getElementById("txtTienCap").innerHTML = "Mã khách hàng : " + maKhachHang + " ; Tiền cáp : $ " + thanhTien.toLocaleString();
    } else if (mySelect.value == "Mercedes") {
        if (soKetNoi > 10){

            thanhTien = PHI_HOA_DON_DN + PHI_DICH_VU_CO_BAN_DN + (soKenh *THUE_KENH_CAO_CAP_DN) + (soKetNoi - 10) * 5;
            document.getElementById("txtTienCap").innerHTML = "Mã khách hàng : " + maKhachHang + " ; Tiền cáp : $" + thanhTien.toLocaleString();
        }else{
            thanhTien = PHI_HOA_DON_DN + PHI_DICH_VU_CO_BAN_DN + (soKenh *THUE_KENH_CAO_CAP_DN);
            document.getElementById("txtTienCap").innerHTML = "Mã khách hàng : " + maKhachHang + " ; Tiền cáp : $ " + thanhTien.toLocaleString();
        }
    }
}