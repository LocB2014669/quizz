<template>
    <div class="container p-3">
        <h2 class="text-center">Đăng ký</h2>
        <div class="d-flex justify-content-center">
            <form @submit="handleSubmit" id="registerForm" class="w-50" method="post" action>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="fullname">Họ và tên:</label>
                    <input type="text" class="form-control" id="fullname" name="fullname">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="username">Tên đăng nhập:</label>
                    <input type="text" class="form-control" id="username" name="username">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="password">Mật khẩu:</label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="confirmPassword">Xác nhận mật khẩu:</label>
                    <input type="password" class="form-control" id="confirmPassword" name="confirmPassword">
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="timezone">Múi giờ:</label>
                    <select class="form-control" id="timezone" name="timezone">
                        <option value>-- Chọn múi giờ --</option>
                        <option value="GMT-12:00">(GMT-12:00) Quần đảo
                            Baker/Howland</option>
                        <option value="GMT-11:00">(GMT-11:00) Niue</option>
                        <option value="GMT-10:00">(GMT-10:00)
                            Hawaii-Aleutian Standard Time, Cook Islands,
                            Tahiti</option>
                        <!-- Các múi giờ khác -->
                    </select>
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="language">Ngôn ngữ mặc định:</label>
                    <select class="form-control" id="language" name="language">
                        <option value>-- Chọn ngôn ngữ --</option>
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                        <option value="fr">Français</option>
                        <!-- Các ngôn ngữ khác -->
                    </select>
                </div>
                <div class="form-group mb-2">
                    <label class="font-weight-bold" for="organization">Tổ chức đại diện:</label>
                    <input type="text" class="form-control" id="organization" name="organization">
                </div>
                <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        // $(document).ready(function () {
        //     // Validate form
        //     function validateForm() {
        //         var fullname = document.forms["registerForm"]["fullname"].value;
        //         var username = document.forms["registerForm"]["username"].value;
        //         var email = document.forms["registerForm"]["email"].value;
        //         var password = document.forms["registerForm"]["password"].value;
        //         var confirmPassword = document.forms["registerForm"]["confirmPassword"].value;
        //         var timezone = document.forms["registerForm"]["timezone"].value;
        //         var language = document.forms["registerForm"]["language"].value;
        //         var organization = document.forms["registerForm"]["organization"].value;
        //         var isValid = true;

        //         // Reset error messages and success classes
        //         $(".error-message").remove();
        //         $(".form-control").removeClass("error success");

        //         if (fullname == "" || fullname.trim() == "") {
        //             $("#fullname").addClass("error");
        //             $("#fullname").after('<div class="error-message">Vui lòng nhập họ và tên</div>');
        //             isValid = false;
        //         } else {
        //             $("#fullname").addClass("success");
        //         }

        //         if (username.trim() === "" || username.includes(" ")) {
        //             $("#username").addClass("error");
        //             $("#username").after('<div class="error-message">Tên đăng nhập không được chứa khoảng trắng</div>');
        //             isValid = false;
        //         } else {
        //             $("#username").addClass("success");
        //         }

        //         if (email == "" || email.trim() == "") {
        //             $("#email").addClass("error");
        //             $("#email").after('<div class="error-message">Vui lòng nhập địa chỉ email</div>');
        //             isValid = false;
        //         } else if (!validateEmail(email)) {
        //             $("#email").addClass("error");
        //             $("#email").after('<div class="error-message">Địa chỉ email không hợp lệ</div>');
        //             isValid = false;
        //         } else {
        //             $("#email").addClass("success");
        //         }

        //         if (password == "") {
        //             $("#password").addClass("error");
        //             $("#password").after('<div class="error-message">Vui lòng nhập mật khẩu</div>');
        //             isValid = false;
        //         } else {
        //             $("#password").addClass("success");
        //         }

        //         if (confirmPassword == "") {
        //             $("#confirmPassword").addClass("error");
        //             $("#confirmPassword").after('<div class="error-message">Vui lòng xác nhận mật khẩu</div>');
        //             isValid = false;
        //         } else if (confirmPassword !== password) {
        //             $("#confirmPassword").addClass("error");
        //             $("#confirmPassword").after('<div class="error-message">Xác nhận mật khẩu không khớp</div>');
        //             isValid = false;
        //         } else {
        //             $("#confirmPassword").addClass("success");
        //         }

        //         if (timezone == "") {
        //             $("#timezone").addClass("error");
        //             $("#timezone").after('<div class="error-message">Vui lòng chọn múi giờ</div>');
        //             isValid = false;
        //         } else {
        //             $("#timezone").addClass("success");
        //         }

        //         if (language == "") {
        //             $("#language").addClass("error");
        //             $("#language").after('<div class="error-message">Vui lòng chọn ngôn ngữ mặc định</div>');
        //             isValid = false;
        //         } else {
        //             $("#language").addClass("success");
        //         }
        //         if (organization == "" || organization.trim() == "") {
        //             $("#organization").addClass("error");
        //             $("#organization").after('<div class="error-message">Vui lòng nhập tên tổ chức</div>');
        //             isValid = false;
        //         } else {
        //             $("#organization").addClass("success");
        //         }
        //         if (isValid) {
        //             // Kiểm tra nếu tất cả các trường thành công
        //             if (fullname && username && email && password && confirmPassword && timezone && language && organization) {
        //                 // Thực hiện xử lý khi đăng ký thành công
        //                 alert("Đăng ký thành công!");
        //             }
        //         }

        //         return isValid;
        //     }

        //     // Email validation
        //     function validateEmail(email) {
        //         var re = /\S+@\S+\.\S+/;
        //         return re.test(email);
        //     }


        //     $("#registerForm").submit(function (e) {
        //         e.preventDefault();


        //         if (validateForm()) {
        //             $("#registerForm").addClass("success");
        //             $(".form-container").prepend('<div class="alert alert-success">Đăng ký thành công!</div>');
        //         }
        //     });

        //     $(".form-control").on("input", function () {
        //         $(this).removeClass("success");
        //         $(".alert-success").remove();
        //     });
        // });
        // const handleSubmit = () => {

        // }
    }

}
</script>

<style>
    .error {
                border: 1px solid red;
            }
            .error-message {
                color: red;
                margin-top: 5px;
            }
            .success {
            border: 1px solid green;
            }
</style>
