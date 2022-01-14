function ketQua() {
    var khuVuc = document.getElementById("khuVuc");
    var doiTuong = document.getElementById("doiTuong");
    var diemMon1 =Number(document.getElementById("diemMon1").value) ;
    var diemMon2 = Number(document.getElementById("diemMon2").value) ;
    var diemMon3 = Number(document.getElementById("diemMon3").value) ;

    var tongDiem = kiemTraKhuVuc(khuVuc) + kiemTraDoiTuong(doiTuong) +diemMon1 + diemMon2 +diemMon3;
    
    if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        document.getElementById("txtketQua").innerHTML ="Bạn đã đậu với số điểm : " + tongDiem;
    }else {
        document.getElementById("txtketQua").innerHTML ="Bạn đã trượt";
    }

    

}

function kiemTraKhuVuc(khuVuc) {
    var khuVuc1 = 0;
    if (khuVuc.value == "khuA") {
        khuVuc1 = 2;
        
    }else if (khuVuc.value == "khuB") {
        khuVuc1 = 1;

    }else if (khuVuc.value == "khuC") {
        khuVuc1 = 0.5;

    }else {
        khuVuc1 = 0;

    }
    return khuVuc1;
}

function kiemTraDoiTuong(doiTuong) {
    var doiTuong1 = 0;
    if (doiTuong.value == "doiTuong1") {
        doiTuong1 = 2.5;
    }else if(doiTuong.value == "doiTuong2") {
        doiTuong1 = 1.5;
    }else if(doiTuong.value == "doiTuong3") {
        doiTuong1 = 1;
    }else{
        doiTuong1 = 0;
    }
    return doiTuong1;
}