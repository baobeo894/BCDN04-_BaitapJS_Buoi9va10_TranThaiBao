var dsnv = new DanhSachNhanVien();

function getELE(id) {
    return document.getElementById(id);
}

function setLocalStorage(){
    //localStorage : đối tượng có sẵn của JS giúp thao tác về local storage của browsers
    //JSON: đối tượng có có sẵn của JS giúp chuỗi JSON
    //dữ liệu lưu trữ ở localStorage là kiểu JSON
    //chuyển từ Array => JSON

    //Khi mangSV thay đổi => gọi hàm setLocalStorage để cập nhật cho local
    localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV));
}

function getLocalStorage(){

    // getItem => trả về dữ liệu JSON
    // JSON => Array
    //localStorage chỉ lưu ở trình duyệt đang chạy ứng dụng
    //! => nếu không kiểm tra (nếu không có local storage) => mangSV sẽ bị gán giá trị undefined => mangSV bị đổi kiểu dữ liệu sang undefined => không dùng được các chức năng của Array
    if(localStorage.getItem("DSNV") != undefined){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    }
    
    hienThiDS(dsnv.mangNV);
    
}

getLocalStorage();
//Thêm Nhân Viên
function themNhanVien() {
    var tkNV = getELE("tknv").value;
    var tenNV = getELE("name").value;
    var email = getELE("email").value;
    var password = getELE("password").value;
    var ngaylam = getELE("datepicker").value;
    var chucVu = getELE("chucvu").value;
    var luongCoBan = getELE("luongCB").value;
    var gioLamTrongThang = getELE("gioLam").value;
    var loaiNhanVien = getELE("searchName").value;

    console.log(tkNV, tenNV, email, password, ngaylam, chucVu, luongCoBan, gioLamTrongThang, loaiNhanVien);



    var nv = new NhanVien(tkNV, tenNV, email, password, ngaylam, chucVu, Number(luongCoBan), Number(gioLamTrongThang), loaiNhanVien);
    nv.tinhLuong();
    nv.xepLoai();
    console.log(nv);

    //thêm sv vào mangSV
    dsnv.themNV(nv);
    console.log(dsnv.mangNV);
    setLocalStorage();

}



function hienThiDS(mangNV) {
    console.log("Mảng cần hiển thị", mangNV);
    //? map(): hàm giúp duyệt mảng => lấy ra từng phần tử của mảng (cú pháp ngắn gọn)
    //?ham1(ham2()) => callback function
    //?function(){} => hàm ẩn danh Anonymous function
    //?map(phần tử của mảng, vị trí của phần tử)
    //sau khi duyệt mảng => content = "<tr></tr><tr></tr><tr></tr>"


    var content = "";// giá trị ban đầu
    mangNV.map(function (nv, index) {
        console.log(nv);
        // string template (template literal), ``
        //${}: truyền biến vào cho chuỗi string template 
        // var trELE=`....`
        content += `
            <tr>
                <td>${nv.tkNV}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.loaiNhanVien}</td>

                <td>
                    <button class="btn btn-info" onclick="xemChiTiet('${nv.tkNV}')" >Xem</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nv.tkNV}')"  >Xóa</button>
                </td>
            </tr>
        `;


    });

    // console.log(content);
    getELE("tableDanhSach").innerHTML = content;

}

function xoaNhanVien(tk) {
    console.log(tk);
    dsnv.xoaNV(tk);
    hienThiDS(dsnv.mangNV);
    setLocalStorage(dsnv.mangNV);
}





function xemChiTiet(tk) {
    console.log("xem", tk);
    var viTri = dsnv.timViTri(tk);
    if (viTri > -1) {
        //tìm thấy
        var nvTim = dsnv.mangNV[viTri];
        console.log(nvTim);

        getELE("tknv").value = nvTim.tkNV;
        getELE("tknv").disabled = true;
        getELE("name").value = nvTim.tenNV;
        getELE("email").value = nvTim.email;
        getELE("password").value = nvTim.password;
        getELE("datepicker").value = nvTim.ngayLam;
        getELE("chucvu").value = nvTim.chucVu;
        getELE("luongCB").value = nvTim.luongCoBan;
        getELE("gioLam").value = nvTim.gioLamTrongThang;
        getELE("searchName").value = nvTim.loaiNhanVien;
    }
}