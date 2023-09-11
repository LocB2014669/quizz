<template>
    <div class="container container-big p-3 d-flex">
        <div id="content-left" class="col-md-3 p-3" style="width: 25%;">
                <div class="item-left">
                    <a class="first-page__info" href="#">Thông tin & liên hệ</a>
                </div>
                <div class="item-left">
                    <a class="second-page__info" href="#">Đổi tên người dùng</a>
                </div>
                <div class="item-left">
                    <a class="third-page__info" style="color: #4d96ff;" href="#">Đổi mật khẩu</a>
                </div>
                <div class="item-left">
                    <a href="#">Quản lý đội</a>
                </div>
        </div>
        <div id="content-right" class="col-md-9 p-5" style="width: 73%; margin-left: 17px;">
                <div class="title-right__info">
                    <h3>Đổi Mật Khẩu</h3>
                </div>
                <div class="container-ChangePass">
                    <div class="form-group">
                        <label for="Input-changePass" class="text-muted view-subject">Mật Khẩu</label>
                        <input  id="Input-changePass" class="w-100 input-changePass" placeholder="Mật Khẩu" type="password">
                    </div>
                    <p><a class="forget-pass" href="#">Quên mật khẩu?</a></p>
                    <div class="form-group">
                        <label for="Input-changePass" class="text-muted view-subject">Mật Khẩu Mới</label>
                        <input  id="Input-changePass" class="w-100 input-changePass" placeholder="Mật Khẩu Mới" type="password">
                    </div>
                    <div class="form-group">
                        <label for="Input-changePass" class="text-muted view-subject">Mật Khẩu Xác Nhận</label>
                        <input  id="Input-changePass" class="w-100 input-changePass" placeholder="Mật Khẩu Xác Nhận" type="password">
                    </div>
                    <button class="btn btn-primary">Thay Đổi</button>
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
.item-left a:not(.third-page__info):hover{
    color: #4d96ff;
    font-weight: bold;
}
#Input-changePass{
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
.container-ChangePass button{
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
    margin-top: 10px;
}
.container-ChangePass button:hover{
    border:1px solid #4d96ff;
    box-shadow: 0 10px 10px 0 #d1e6ff;
    color: #4d96ff !important;
    background: #fff;
}
.input-changePass:focus {
  border-color: #66afe9;
  outline: none!important;;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
}
.forget-pass{
    float: right;
    color: #23527c;
    text-decoration: none;
}
.forget-pass:hover{
    text-decoration: underline;
}
.form-group{
    margin-bottom: 15px;
}
.view-subject{
    font-weight: bold;
}

</style>