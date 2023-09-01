<template>
    <div class="content">
        <div class="tabs d-flex">
            <h3>Tài khoản của tôi</h3>
            <ul class="d-flex">
                <li class="tab active">
                    <a class="text-decoration-none text-black" href="#">
                        <font-awesome-icon class="text-muted" icon="fa-solid fa-circle-info" />
                        <span>Thông Tin</span>
                    </a>
                </li>
                <li class="tab">
                    <a class="text-decoration-none text-black" href="#">
                        <font-awesome-icon class="text-muted" icon="puzzle-piece" />
                        <span>Đề bài</span>
                    </a>
                </li>
                <li class="tab">
                    <a class="text-decoration-none text-black" href="#">
                        <font-awesome-icon class="text-muted" icon="pen-to-square" />
                        <span>Chỉnh sữa hồ sơ</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="container row">
            <div class="col-lg-4 border mt-3">
                <img class="p-2" src="https://www.gravatar.com/avatar/22254311b73435f6458ae382c7139b94?d=identicon&s=135"
                    alt="">
                <div class="list-left p-2">
                    <div class="item">
                        <b>Email: </b>
                        <span>nben19732@gmail.com</span>
                    </div>
                    <div class="item">
                        <b>Số bài đã giải:</b>
                        <span>0</span>
                    </div>
                    <div class="item">
                        <b>Hạng điểm:</b>
                        <span>#100</span>
                    </div>
                    <div class="item">
                        <b>Tổng điểm:</b>
                        <span>0,00</span>
                    </div>
                    <div class="item">
                        <b>Đóng góp:</b>
                        <span>0</span>
                    </div>
                    <div class="item">
                        <a class="text-info" href="#">Xem các bài nộp</a>
                    </div>
                </div>

            </div>
            <div class="col-lg-8 mt-3">
                <div>
                    <p class="shadow-sm p-3 mb-3 bg-white rounded border">Bạn chưa cung cấp thông tin về bản thân</p>
                </div>
                <div class="border bg-white mb-3">
                    <div class="table-active">
                        <font-awesome-icon icon="trophy" />
                        <b class="px-3">Huy Hiệu</b>
                    </div>
                    <div class="p-2">
                        <span>Nguời dùng này không có huy hiệu nào</span>
                    </div>
                </div>
                <div class="calendar border rounded-top p-2">
                    <font-awesome-icon icon="calendar-days" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.mr-4 {
    margin-right: 50px;
}

.tabs {
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
}


.content {
    margin: 15px auto auto;
    width: 70%;
    height: 100%;
    display: block;
}

ul {
    list-style: none;
    margin-top: 10px;
}

li:not(:last-child) {
    margin-right: 40px;
}

span {
    margin: 0 2px;
}

.tabs .tab.active a {
    border-top-color: #2980b9 !important;
}

.col-lg-4 {
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, .15);
    border: 1px solid rgba(34, 36, 38, .15);
    border-radius: 5px;
}

img {
    border-radius: 60px;
}

.item:not(:last-child) {
    border-bottom: 1px solid #ccc;
}

.table-active {
    background: #F3F4F5;
    padding: 10px;
}
.calendar{
    background: #F3F4F5;

}
</style>