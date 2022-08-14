function NhanVien(tkNV,tenNV,email,password, ngaylam, chucVu,luongCoBan,gioLamTrongThang,loaiNhanVien){
    //thuộc tính
   this.tkNV = tkNV;
   this.tenNV = tenNV;
   this.email = email;
   this.password = password;
   this.ngaylam = ngaylam;
   this.chucVu = chucVu;
   this.luongCoBan = luongCoBan;
   this.gioLamTrongThang = gioLamTrongThang;
   this.tongLuong = 0;
   this.loaiNhanVien = loaiNhanVien;
    //phương thức
    this.tinhLuong = function(){
        if(this.chucVu=="Giám đốc"){
            this.tongLuong = this.luongCoBan*3
        }else if(this.chucVu=="Trưởng phòng"){
            this.tongLuong = this.luongCoBan*2
        }else {
            this.tongLuong = this.luongCoBan*1
        }
    }
    this.xepLoai =function(){
        if(this.gioLamTrongThang >= 192){
            return "Nhân viên xuất sắc"
        }else if(this.gioLamTrongThang < 192 && this.gioLamTrongThang >= 176){
            return "Nhân viên giỏi"
        }else if(this.gioLamTrongThang < 176 && this.gioLamTrongThang >= 160){
            return "Nhân viên khá"
        }else {
            return "Nhân viên trung bình"
        }
    }
}