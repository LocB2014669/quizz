<template>
    <header class="p-2 bg-dark text-white">
            <div class="container-fluid">
                <div
                    class="d-flex flex-wrap align-items-center justify-content-around">
                    <a href="/"
                        class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img width="100" height="50"
                            src="https://dmoj.ctu.edu.vn/static/icons/logo.svg"
                            alt>
                    </a>

                    <ul
                        class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" class="nav-link px-2 text-secondary">Danh
                                Sách Bài</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Các Bài
                                Nộp</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Thành
                                Viên</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Các Kỳ
                                Thi</a></li>
                        <li><a href="#" class="nav-link px-2 text-white">Thông
                                Tin</a></li>
                    </ul>

                    <span id="user-links">
                        <a href="#"
                            style="margin-right: 5px; padding-top: 10px;">
                            <i class="fa fa-exclamation-triangle"
                                style="color: yellow;"></i>
                        </a>
                        <a id="flag_vi" href="#"
                            onclick="submmit_language('vi')"
                            style="margin-right: 5px; margin-top: 4px;">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/555/555515.png"
                                alt="VI"
                                height="24">
                        </a>
                        <a id="flag_en" href="#"
                            onclick="submmit_language('en')"
                            style="margin-right: 5px; margin-top: 4px;">
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/555/555417.png"
                                alt="EN"
                                height="24">
                        </a>
                        <span class="anon">
                            <a class="text-decoration-none text-white" href="#"><b>Đăng
                                    nhập</b></a>
                            &nbsp;hoặc&nbsp;
                            <a class="text-decoration-none text-white" href="#"><b>Đăng
                                    ký</b></a>
                        </span>
                    </span>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    
}
</script>

<style>
</style>