// bài tập tính tiền tiêu thụ điện
const KM_50_DAU = 500;
const KM_50_KE = 650;
const KM_100_KE = 850;
const KM_150_KE = 1100;
const KM_CON_LAI = 1300;

function tienDien() {
    var ten = document.getElementById("tenNguoisd").value;
    var soKM =Number(document.getElementById("soKM").value);
    var thanhTien =Number(0);

    if (soKM <= 50 && soKM > 0) {
        thanhTien = soKM * KM_50_DAU;
        document.getElementById("txtThanhTien").innerHTML = "Xin chào : " + ten + ", " + "Tiền điện : " + thanhTien.toLocaleString();
        console.log("chặn 50");
    }else if (soKM > 50 && soKM <= 100) {
        thanhTien =50 * KM_50_DAU + (soKM - 50) * KM_50_KE;
        document.getElementById("txtThanhTien").innerHTML = "Xin chào : " + ten + ", " + "Tiền điện : " + thanhTien.toLocaleString(); 
        console.log("chặn 100");  
    }else if (soKM > 100 && soKM <= 200) {
        thanhTien = 50 * KM_50_DAU + 50 * KM_50_KE + (soKM - 100) * KM_100_KE ;
        document.getElementById("txtThanhTien").innerHTML = "Xin chào : " + ten + ", " + "Tiền điện : " + thanhTien.toLocaleString();
        console.log("chặn 200");   
    }else if (soKM > 200 && soKM <= 350) {
        thanhTien = 50 * KM_50_DAU + 50 * KM_50_KE + 100 * KM_100_KE + (soKM - 200) * KM_150_KE ;
        document.getElementById("txtThanhTien").innerHTML = "Xin chào : " + ten + ", " + "Tiền điện : " + thanhTien.toLocaleString();   
        console.log("chặn 200");
    }else if (soKM > 350){
        thanhTien = 50 * KM_50_DAU + 50 * KM_50_KE + 100 * KM_100_KE + 150 * KM_150_KE + (soKM - 350) * KM_CON_LAI;
        document.getElementById("txtThanhTien").innerHTML = "Xin chào : " + ten + ", " + "Tiền điện : " + thanhTien.toLocaleString();   
        console.log("chặn 201");
    }else{
        alert("Cần nhập số KM hợp lệ")
    }

}

