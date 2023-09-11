<template>
    <div class="container container-big p-3 d-flex">
        <div id="content-left" class="col-md-3 p-3" style="width: 25%;">
                <div class="item-left">
                    <a class="first-page__info" href="#">Thông tin & liên hệ</a>
                </div>
                <div class="item-left">
                    <a class="second-page__info"  style="color: #4d96ff;" href="#">Đổi tên người dùng</a>
                </div>
                <div class="item-left">
                    <a href="#">Đổi mật khẩu</a>
                </div>
                <div class="item-left">
                    <a href="#">Quản lý đội</a>
                </div>
        </div>
        <div id="content-right" class="col-md-9 p-3" style="width: 73%; margin-left: 17px;">
                <div class="title-right__info">
                    <h3>Đổi Tên Người Dùng</h3>
                </div>
                <div class="container-ChangeName">
                    <p>Sau khi cập nhật tên người dùng, tên hiển thị của bạn trên hệ thống sẽ được đổi thành tên mới, số lần còn lại <span style="color: red;">1/3</span>.</p>
                    <div class="col-md-6">
                        <label for="Input-changeName" class="text-muted view-subject">Tên tài khoản</label>
                        <input  id="Input-changeName" class="w-100 input-changeName" type="text">
                    </div>
                    <button class="btn btn-primary">Lưu</button>
                </div>
        </div>        
    </div>
</template>
<style scoped>
#content-right{
    background-color: #fff;
    height: 750px;

}
.item-left a {
    text-decoration: none;
    color: black;
}
.item-left{
    margin-bottom: 20px;

}
#content-left{
    background-color: #fff;

}
h3{
    padding: 0;
    margin: 0;
    color: #4d96ff;
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 20px;
}
h2{
    padding: 0;
    margin: 0;
    color: #4d96ff;
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 20px;
}
.item-left a:not(.second-page__info):hover{
    color: #4d96ff;
    font-weight: bold;
}
#Input-changeName{
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.container-ChangeName button{
    height: 45px;
    width: 167px;
    border-radius: 31.5px;
    background-color: #4d96ff;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 34px;
    text-align: center;
    outline: none;
    float: right;
}
.container-ChangeName button:hover{
    border:1px solid #4d96ff;
    box-shadow: 0 10px 10px 0 #d1e6ff;
    color: #4d96ff !important;
    background: #fff;
}
.input-changeName:focus {
  border-color: #66afe9;
  outline: none!important;;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}
.view-subject::after{
    content: "*";
    color: red;
    padding: 0px 5px;
    display: inline-block;
}

</style>