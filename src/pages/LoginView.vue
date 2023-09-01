<template>
    <div class="container p-3 ">
        <h2 class="text-center pb-4">Đăng Nhập</h2>
        <div class="d-flex justify-content-center">
            <form id="loginForm" class="w-25" method="post">
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="fullname">Nhập Tên Đăng Nhập: </label>
                    <input type="text" class="form-control" id="fullname" name="fullname">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="password">Nhập Mật khẩu: </label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <button type="submit" class="btn btn-primary">Đăng Nhập</button>
                <br>
                <a class="text-decoration-none pt-2" href="#">
                    <span>Quên Mật Khẩu?</span>
                </a>
            </form>

        </div>
    </div>
</template>
<style>
.font-weight-bold {
    font-weight: bold;
}
span{
    font-size: 14px;
}
a{
    margin-top: 5px;
}
</style>