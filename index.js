var express = require("express"); // gọi module vào để dùng
var app = express(); // tạo một ứng dụng từ module
var port = process.env.PORT | 5000; // cổng

app.listen(port,function (){   //khởi tại một máy chủ giống như cho máy chủ chạy
    console.log("sever is running ....."); // function để báo máy chủ đang chạy thành công
});
//Cấp quyền truy câp các file static (css.img,jquery,...)
app.use(express.static("public"));
//routing - bo dinh tuyen (là noi tiếp nhận yêu cầu người dùng và định tuyến chức năng)
app.set("view engine","ejs"); // báo rẳng sẽ xử dụng view engine
var count = 0;
var product = [
    {
        id:1,
        name:"HIP PANTS 1",
        images:"images/ass3.1.jpg"
    },
    {
        id:2,
        name:"HIP PANTS 2",
        images:"images/ass3.2.jpg"
    },
    {
        id:3,
        name:"HIP PANTS 3",
        images:"images/ass3.3.jpg"
    },
    {
        id:4,
        name:"HIP PANTS 4",
        images:"images/ass3.4.jpg"
    },
    {
        id:5,
        name:"HIP PANTS 5",
        images:"images/ass3.5.jpg"
    },
    {
        id:6,
        name:"HIP PANTS 6",
        images:"images/ass3.6.jpg"
    },
    {
        id:7,
        name:"HIP PANTS 7",
        images:"images/ass3.7.jpg"
    },
    {
        id:8,
        name:"HIP PANTS 8",
        images:"images/ass3.8.jpg"
    },
];
app.get("/",function (req ,res){ // trong chuỗi là name bắt buộc phải có / là một name mặc định hay còn gọi là trang chủ
   // res.send("Xin chào quý khách......"); // đoạn trả về khi chạy sever
   //  res.sendFile(__dirname+"/public/tintuc.html");  // __dirname >> Xuất cho 1 chuỗi đường dẫn chíc xác trên máy tính (nó thay cho đoạn dẫn từ ổ cứng đến thư mục chứa file cụ thể file này là E:\FPTAPPTECH\nodejs)

    count++;
    res.render("home",{
        count: count
    }); // tự động hiểu để lấy file home.ejs trong forder views
});

app.get("/ke-toan",function (req,res){

    res.send("Xin chào vui lòng nộp tiền...");
});
app.get("/ass3",function (req,res){
    count++;
    res.render("assignment3",{
        product: product
    });
});
app.get("/ass4",function (req,res){
    res.sendFile(__dirname+"/public/assignment4.html");
    count++;
});
app.get("/chi-tiet",function (req,res){
    var masp = req.query.id;
    // khi có id, tìm kiếm theo id trong array
    var p = {};
    for(var i=0; i<product.length; i++){
        if(product[i].id == masp){
            p = product[i];
            break;
        }
    }
    res.render("chitiet",{

        masp:masp,
        p: p
    });
});
app.get("/chi-tiet2/:id",function (req,res){
    var masp = req.params.id;
    var p = {};
    for(var i=0; i<product.length; i++){
        if(product[i].id == masp){
            p = product[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p: p
    });
});