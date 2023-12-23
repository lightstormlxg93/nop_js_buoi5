
// bài 1 
function tinhDiem() {

    let diemChuan = document.getElementById("diem-chuan").value * 1;
    let doiTuong = document.getElementById("doi-tuong").value * 1;
    let khuVuc = document.getElementById("khu-vuc").value * 1;
    let diemMonThuNhat = document.getElementById("diem-mon-thu-nhat").value * 1;
    let diemMonThuHai = document.getElementById("diem-mon-thu-hai").value * 1;
    let diemMonThuBa = document.getElementById("diem-mon-thu-ba").value * 1;
    let tongDiem = diemMonThuNhat + diemMonThuHai + diemMonThuBa + doiTuong + khuVuc;
    if (doiTuong == 4) {
        alert("Hãy Chọn Loại Đối Tượng");
    }
    else if (khuVuc == 4) {
        alert("Hãy Chọn Loại Khu Vực");
    }
    else if (diemMonThuNhat == 0 || diemMonThuHai == 0 || diemMonThuBa == 0) {
        document.getElementById("ket-qua-b1").innerText = `Bạn đã RỚT---vì có một môn 0 điểm`
    }
    else if (tongDiem < diemChuan) {
        document.getElementById("ket-qua-b1").innerText = `Bạn đã RỚT---vì Tổng điểm của bạn là: ${tongDiem} nhỏ hơn Điểm Chuẩn: ${diemChuan} `
    }
    else {
        document.getElementById("ket-qua-b1").innerText = `Bạn đã TRÚNG TUYỂN---Tổng điểm của bạn là: ${tongDiem}`
    }
}

// bài 2
function tinhTienDien() {

    let ten = document.getElementById("ten").value;
    let soKw = document.getElementById("kw").value * 1;
    let tienDien = 0;
    if (soKw == 0) {
        alert("Số Kw không hợp lệ, hãy chọn lại");
    }
    else if (soKw <= 50) {
        tienDien = soKw * 500;
        document.getElementById("ket-qua-b2").innerText = `Tiền Điện Của Bạn "${ten}" thuộc khung 1---Tổng Tiền là ${new Intl.NumberFormat('ja-JP').format(tienDien)} vnđ`
    }
    else if (soKw <= 100) {
        tienDien = 50 * 500 + ((soKw - 50) * 650);
        document.getElementById("ket-qua-b2").innerText = `Tiền Điện Của Bạn "${ten}" thuộc khung 2---Tổng Tiền là ${new Intl.NumberFormat('ja-JP').format(tienDien)} vnđ`
    }
    else if (soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + ((soKw - 100) * 850);
        document.getElementById("ket-qua-b2").innerText = `Tiền Điện Của Bạn "${ten}" thuộc khung 3---Tổng Tiền là ${new Intl.NumberFormat('ja-JP').format(tienDien)} vnđ`
    }
    else if (soKw <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + ((soKw - 200) * 1100);
        document.getElementById("ket-qua-b2").innerText = `Tiền Điện Của Bạn "${ten}" thuộc khung 4---Tổng Tiền là ${new Intl.NumberFormat('ja-JP').format(tienDien)} vnđ`
    }
    else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + ((soKw - 350) * 1300);
        document.getElementById("ket-qua-b2").innerText = `Tiền Điện Của Bạn "${ten}" thuộc khung 5---Tổng Tiền là ${new Intl.NumberFormat('ja-JP').format(tienDien)} vnđ`
    }
}

// bài 3
function tinhTienThue() {

    let hoTen = document.getElementById("ho-ten").value;
    let tongThuNhap = document.getElementById("tong-thu-nhap").value * 1;
    let soNgPhuThuoc = document.getElementById("so-nguoi").value * 1;
    let thuNhapChiuThue = tongThuNhap - 4000000 - (soNgPhuThuoc * 1600000);
    let thueCaNhan = 0

    if (tongThuNhap<=(4e+6 +(soNgPhuThuoc*16e+5))){
        alert("Số tiền thu nhập không hợp lệ");
    }
    else if (thuNhapChiuThue <= 60000000) {
        thueCaNhan = thuNhapChiuThue * 5 / 100;
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 1---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else if (thuNhapChiuThue <= 120000000) {
        thueCaNhan = 60000000 * 5 / 100 + ((thuNhapChiuThue - 60000000) * 10 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 2---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else if (thuNhapChiuThue <= 210000000) {
        thueCaNhan = 60000000 * 5 / 100 + 60000000 * 10 / 100 + ((thuNhapChiuThue - 120000000) * 15 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 3---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else if (thuNhapChiuThue <= 384000000) {
        thueCaNhan = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + ((thuNhapChiuThue - 210000000) * 20 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 4---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else if (thuNhapChiuThue <= 624000000) {
        thueCaNhan = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + ((thuNhapChiuThue - 384000000) * 25 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 5---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else if (thuNhapChiuThue <= 960000000) {
        thueCaNhan = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + 240000000 * 25 / 100 + ((thuNhapChiuThue - 624000000) * 30 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 6---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
    else {
        thueCaNhan = 60000000 * 5 / 100 + 60000000 * 10 / 100 + 90000000 * 15 / 100 + 174000000 * 20 / 100 + 240000000 * 25 / 100 + 336000000 * 30 / 100 + ((thuNhapChiuThue - 960000000) * 35 / 100);
        document.getElementById("ket-qua-b3").innerText = `Thuế TNCN của bạn "${hoTen}" thuộc khung 7---Số Tiền là ${new Intl.NumberFormat('ja-JP').format(thueCaNhan)} vnđ`
    }
}

// bài 4

function onchangeHandler() {

    var value = document.querySelector("#loai-KH").value;

    // Nếu giá trị của thẻ "#loai-KH" khác Doanh Nghiệp, thì ẩn thẻ "#so-ket-noi"
    if (value != "Doanh Nghiệp") {
        document.getElementById("so-ket-noi").style.display = "none";
    } else {
        // Nếu giá trị của thẻ loai-KH là Doanh Nghiệp, thì hiện thẻ "#so-ket-noi"
        document.getElementById("so-ket-noi").style.display = "inline";
    }
}

function tinhTienCap() {

    let maKH = document.getElementById("ma-KH").value;
    let loaiKH = document.getElementById("loai-KH").value;
    let soKenhCC = document.getElementById("so-kenh-CC").value * 1;
    let soKetNoi = document.getElementById("so-ket-noi").value * 1;
    let tongTien = 0;

    if (loaiKH == "Nhà Dân") {
        let phiHoaDon = 4.5;
        let phiCoBan = 20.5;
        let phiCaoCap = 7.5;
        tongTien = phiHoaDon + phiCoBan + phiCaoCap * soKenhCC;
        document.getElementById("ket-qua-b4").innerText = `Tiền Cap của khác hàng có mãKH  "${maKH}" là: ${new Intl.NumberFormat('ja-JP').format(tongTien)} $`
    }
    else if (loaiKH == "Doanh Nghiệp") {
        let phiHoaDon = 15;
        let phiCaoCap = 50;
        let phiCoBan = 0;
        if (soKetNoi <= 10) {
            phiCoBan = 75;
        }
        else {
            phiCoBan = 75 + ((soKetNoi - 10) * 5);
        }
        tongTien = phiHoaDon + phiCoBan + phiCaoCap * soKenhCC;
        document.getElementById("ket-qua-b4").innerText = `Tiền Cap của khách hàng có mãKH  "${maKH}" là: ${new Intl.NumberFormat('ja-JP').format(tongTien)} $`
    }
    else {
        alert("Hãy Chọn Loại Khách Hàng");
    }

}







