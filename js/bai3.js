function tienThueCaNhan() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap =Number(document.getElementById("tongThuNhap").value);
    var soNguoi = document.getElementById("soNguoi").value;
    var thanhTien =  thuNhap - 4000000 - (soNguoi * 1600000);
    var thue = 0;

    if (thuNhap >= 8000000 && thuNhap <= 60000000) {
        thue = thanhTien *0.05;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    } else if (thuNhap >= 60000000 && thuNhap <= 120000000) {
        thue = thanhTien * 0.1;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }
    else if (thuNhap >= 120000000 && thuNhap <= 210000000) {
        thue = thanhTien * 0.15;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }else if (thuNhap >= 210000000 && thuNhap <= 384000000) {
        thue = thanhTien * 0.2;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }else if (thuNhap >= 384000000 && thuNhap <= 624000000) {
        thue = thanhTien * 0.25;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }
    else if (thuNhap >= 624000000 && thuNhap <= 960000000) {
        thue = thanhTien * 0.3;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }else if (thuNhap >= 960000000) {
        thue = thanhTien * 0.35;
        document.getElementById("txtTinhThue").innerHTML = "Họ tên : " + hoTen + " ; Tiền thuế thu nhập cá nhân : "+ thue.toLocaleString();
    }else {
        alert("Số tiền thu nhập không hợp lệ")
    }

}