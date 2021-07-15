var express = require("express"); // gọi module vào để dùng
var app = express(); // tạo một ứng dụng từ module
var port = 5000; // cổng

app.listen(port,function (){   //khởi tại một máy chủ giống như cho máy chủ chạy
    console.log("sever is running ....."); // function để báo máy chủ đang chạy thành công
});
//Cấp quyền truy câp các file static (css.img,jquery,...)
app.use(express.static("public"));
//routing - bo dinh tuyen (là noi tiếp nhận yêu cầu người dùng và định tuyến chức năng)
app.get("/",function (req ,res){ // trong chuỗi là name bắt buộc phải có / là một name mặc định hay còn gọi là trang chủ
   // res.send("Xin chào quý khách......"); // đoạn trả về khi chạy sever
    res.sendFile(__dirname+"/public/tintuc.html");  // __dirname >> Xuất cho 1 chuỗi đường dẫn chíc xác trên máy tính (nó thay cho đoạn dẫn từ ổ cứng đến thư mục chứa file cụ thể file này là E:\FPTAPPTECH\nodejs)

});

app.get("/ke-toan",function (req,res){
    res.send("Xin chào vui lòng nộp tiền...");
});
app.get("/ass3",function (req,res){
    res.sendFile(__dirname+"/public/assignment3.html");
});
app.get("/ass4",function (req,res){
    res.sendFile(__dirname+"/public/assignment4.html");
});