<template>
    <div class="container p-3" id="my-cv">
        <div class="row">
            <div id="cv-left" class="col-md-3 col-sm-12 white">
                <div class="user-profile">
                    <div class="user-avatar">
                        <img class="level-avatar"
                            src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/level-avatars/User-01.svg?v=3"
                            alt="">
                        <img class="img-user"
                            src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/code-learn/user-default.svg"
                            alt="">
                    </div>
                    <span class="user-name" title="TranHuuLoc">TranHuuLoc</span>
                    <div>
                        <div style="text-align: center">
                            <span class="total-xp-label">EXP: </span>
                            <span id="total-xp" class="total-xp" style="font-size: 14px;"><a
                                    style="color: #ffb600; text-decoration: none;"
                                    href="/userlevel/exphistory/9792102">0</a></span>
                        </div>
                    </div>
                    <div class="level-progress">
                        <div class="current-level-info xp-level-info"><img
                                src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/level-avatars/User-01_mini.svg?v=3"
                                class="mini-level-avatar current-level-avatar">
                        </div>
                        <div class="current-progress">
                            <div class="standard-progress-bar" style="position: relative; overflow: hidden;">
                                <div class="background"
                                    style="overflow: hidden; width: 0%; position: absolute; left: 0px; top: 0px; height: 100%;">
                                    <div class="background-render"
                                        style="background: linear-gradient(to right, rgb(92, 236, 209), rgb(49, 111, 196)); height: 100%; width: 203.4px;">
                                    </div>
                                </div> <span class="text" style="z-index: 1;">0/51</span>
                            </div><span class="level-no text-muted">Cấp độ 1</span>
                        </div>
                        <div class="next-level-info xp-level-info"><img
                                src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/level-avatars/User-02_mini.svg?v=3"
                                class="mini-level-avatar next-level-avatar">
                        </div>
                    </div>

                </div>
                <div class="break-line"></div>
                <div id="infomation">
                    <h3 class="titlte-info">Thông tin</h3>
                    <ul class="user-info-section">
                        <li>
                            <span><font-awesome-icon icon="envelope" /></span>
                            <span> loczw17120@gmail.com</span>
                            <span class="pull-right">
                                <font-awesome-icon style="font-size: small;" icon="lock" />
                                <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                            </span>
                        </li>
                        <li>
                            <span><font-awesome-icon icon="phone" /></span>
                            <span> 0365916243</span>
                            <span class="pull-right">
                                <font-awesome-icon style="font-size: small;" icon="lock" />
                                <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                            </span>
                        </li>
                        <li>
                            <span><font-awesome-icon icon="location-dot" /></span>
                            <span> Đồng Tháp - Vietnam</span>
                            <span class="pull-right">
                                <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                            </span>
                        </li>
                        <li>
                            <span><font-awesome-icon icon="calendar-days" /></span>
                            <span> 2021-07-17</span>
                            <span class="pull-right">
                                <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                            </span>
                        </li>

                    </ul>

                </div>
                <div id="container-user-achievement">
                    <h3 class="titlte-info">Thành Tích
                        <font-awesome-icon style="float: right; font-size: 15px; color: #6166ed; margin-top: 3px;"
                            icon="pen" />
                    </h3>
                </div>
                <div class="break-line"></div>
                <div id="container-user-achievement">
                    <h3 class="titlte-info">Kinh Nghiệm
                        <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                        <font-awesome-icon style="float: right; font-size: 15px; color: #6166ed; margin-top: 3px;"
                            icon="plus" />
                    </h3>
                </div>
                <div class="break-line"></div>
                <div id="container-user-achievement">
                    <h3 class="titlte-info">Học Vấn
                        <font-awesome-icon style="font-size: 15px; margin-left: 12px;" icon="angle-down" />
                        <font-awesome-icon style="float: right; font-size: 15px; color: #6166ed; margin-top: 3px;"
                            icon="plus" />
                    </h3>
                </div>
                <div class="break-line"></div>
                <div id="container-user-achievement">
                    <h3 class="titlte-info">Kỹ Năng
                    </h3>
                </div>
                <div class="break-line"></div>
                <div id="container-user-achievement" style="padding-bottom: 20px;">
                    <h3 class="titlte-info">Chứng Nhận
                    </h3>
                </div>

            </div>
            <div id="cv-right" class="col-md-9 col-sm-12">
                <div id="section-course" class="right-section">
                    <h3 class="right-section-header">Học Tập
                        <span class="total-learn text-muted" style="font-size: 15px;">(2)</span>
                        <select style="margin-left: 16px; outline: none; border-color: white; font-size: 19px;"
                            name="courses" id="courses">
                            <option value="All">Tất Cả</option>
                            <option value="created">Đã Tạo</option>
                            <option value="reg">Đăng Ký</option>
                            <option value="end">Đã kết thúc</option>
                        </select>
                    </h3>
                    <span class="no-items">Không có khóa học nào</span>
                </div>
                <div id="challenges" class="right-section">
                    <h3 class="right-section-header">Luyện tập</h3>
                    <div id="container-challenge">
                        <ul class="d-flex challenges-list ">
                            <li style="position: relative; margin-right: 77px;">
                                <img style="height: 240px;"
                                    src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/cv/badge-created.svg?v=4"
                                    alt="">
                                <div style="position: absolute;top: 83px;left: 46px;">
                                    <span style="color: #2c31cf; font-size: 28px; margin-left: 26px;">0</span> <br>
                                    <span style="font-size: 22px; color: #aebdc1;">Bài tập</span>
                                </div>
                                <div style="top: 30px;position: relative;text-align: center;">
                                    <span style="color: #333; font-size: 20px;">Đã tạo</span>
                                </div>
                            </li>
                            <li style="position: relative;">
                                <img style="height: 180px;"
                                    src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/cv/badge-created.svg?v=4"
                                    alt="">
                                <div class="item-challenges__small">
                                    <span class="total-out__chanllenges">0</span> <br>
                                    <font-awesome-icon
                                        style="color: white; background-color: #ffb600; padding: 5px; border-radius: 15px;"
                                        icon="heart" />
                                </div>
                                <div class="challenges-out">
                                    <span class="sumTotal-runout easy">0 Bài đơn giản</span> <br>
                                    <span class="border-total__outrun">đã làm</span>
                                </div>
                            </li>
                            <li style="position: relative;">
                                <img style="height: 180px;"
                                    src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/cv/badge-created.svg?v=4"
                                    alt="">
                                <div class="item-challenges__small">
                                    <span class="total-out__chanllenges">0</span> <br>
                                    <font-awesome-icon
                                        style="color: white; background-color: #ffb600; padding: 5px; border-radius: 15px;"
                                        icon="heart" />
                                </div>
                                <div class="challenges-out">
                                    <span class="sumTotal-runout medium">0 Bài trung bình</span> <br>
                                    <span class="border-total__outrun">đã làm</span>
                                </div>
                            </li>
                            <li style="position: relative;">
                                <img style="height: 180px;"
                                    src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/cv/badge-created.svg?v=4"
                                    alt="">
                                <div class="item-challenges__small">
                                    <span class="total-out__chanllenges">0</span> <br>
                                    <font-awesome-icon
                                        style="color: white; background-color: #ffb600; padding: 5px; border-radius: 15px;"
                                        icon="heart" />
                                </div>
                                <div class="challenges-out">
                                    <span class="sumTotal-runout hard">0 Bài phức tạp</span> <br>
                                    <span class="border-total__outrun">đã làm</span>
                                </div>
                            </li>
                            <li style="position: relative;">
                                <img style="height: 180px;"
                                    src="https://codelearn.io/Themes/TheCodeCampPro/Resources/Images/cv/badge-total.svg?v=4"
                                    alt="">
                                <div class="item-challenges__small">
                                    <span class="total-out__chanllenges"
                                        style="margin-left: 5px; padding-left: 6px;">0</span> <br>
                                    <font-awesome-icon
                                        style="color: white; background-color: #ffb600; padding: 5px; border-radius: 15px; margin-left: 4px;"
                                        icon="heart" />
                                </div>
                                <div class="challenges-out">
                                    <span class="sumTotal-runout total">Tổng điểm</span> <br>
                                    <span class="border-total__outrun" style="display: none;">đã làm</span>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div class="joined-challenge">
                        <div class="right-section-title">
                            <h4 class="mx-2" style="display: inline-block; font-size: 18px;">Đã tham gia</h4>
                            <span class="view-all-link" style="color: #898989;">(0)</span>

                        </div>
                        <table class="table table-borderless" style="margin-bottom: 0;" id="joined-challenge-table">
                            <tbody>
                                <tr>
                                    <td class="td" style="padding-right: 430px;">Tên bài</td>
                                    <td class="td"><font-awesome-icon style="color: #2c31cf;" icon="code" /></td>
                                    <td class="td" style="padding-left: 90px;color: #f7b100;;"><font-awesome-icon
                                            icon="heart" /></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="discuss col-md-6" style="background-color: #fff;padding: 3px;">
                    <h3 class="right-section-header" style="font-size: 18px;padding: 8px;">Thảo Luận</h3>
                    <div class="d-flex flex-list__discuss" style="flex-wrap: wrap; justify-content: center;" >
                        <div style="background-color: #fdf2f3; height: 113px;width: 47%;">
                            <span style="background-color: #9ac927; padding: 5px; border-radius: 99px; color: white; width: 36px; height: 36px;"><font-awesome-icon icon="plus" /></span>
                            <span style="margin-left: 5px;font-size: 20px;color: #333;height: 50px;">0</span>
                            <span style="color: #898989;font-size: 12px;width: 48px;position: absolute;height: 0;left: 118px;top: 56px;">Chủ Đề</span>
                        </div>
                        <div style="background-color: #fff4d9; height: 113px;width: 47%;">
                            <span style="background-color: #ffc107; padding: 5px; border-radius: 99px; color: white; width: 36px; height: 36px;"><font-awesome-icon icon="check" /></span>
                            <span style="margin-left: 5px;font-size: 20px;color: #333;height: 50px;">0</span>
                            <span style="color: #898989;font-size: 12px;width: 63px;position: absolute;height: 0;left: 118px;top: 56px;">Bỏ Phiếu</span>
                        </div>
                        <div style="background-color: #f4f9e9; height: 113px;width: 47%;">
                            <span style="background-color: #f47d8f; padding: 5px; border-radius: 99px; color: white; width: 36px; height: 36px;"><font-awesome-icon icon="thumbs-up" /></span>
                            <span style="margin-left: 5px;font-size: 20px;color: #333;height: 50px;">0</span>
                            <span style="color: #898989;font-size: 12px;width: 43px;position: absolute;height: 0;left: 118px;top: 56px;">Thích</span>
                        </div>
                        <div style="background-color: #edf4ff; height: 113px;width: 47%;">
                            <span style="background-color: #4d96ff; padding: 5px; border-radius: 99px; color: white; width: 36px; height: 36px;"><font-awesome-icon icon="comment-dots" /></span>
                            <span style="margin-left: 5px;font-size: 20px;color: #333;height: 50px;">0</span>
                            <span style="color: #898989;font-size: 12px;width: 67px;position: absolute;height: 0;left: 118px;top: 56px;">Bình Luận</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<style>
.right-section {
    padding: 40px;
    padding-top: 20px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 5px 15px 0 #dedede;
    margin-bottom: 30px;
}

.right-section-header {
    height: 30px;
    color: #333;
    font-size: 25px;
    font-weight: bold;
    line-height: 21px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.no-items {
    font-size: 20px;
    font-style: italic;
    color: #b0c4de;
    margin: 10px;
}

.user-avatar {
    position: relative;
    margin-bottom: 40px;
}

.user-profile {
    height: 394px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.white {
    background-color: #fff;
}

.level-avatar {
    width: 130%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40.5%);
}

.img-user {
    height: 136.2px;
    width: 136.2px;
    border-radius: 50%;
}

.user-name {
    height: 30px;
    color: #2c31cf;
    font-size: 26px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    margin: 15px 0;
}

.total-xp-label {
    font-size: 14px;
    color: #333;
}

.level-progress {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 0;
}

.mini-level-avatar {
    width: 30px;
    margin-top: 7px;
}

.standard-progress-bar {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 20px;
    text-shadow: 0 0 2px #316fc4, 0 0 2px #316fc4, 0 0 2px #316fc4, 0 0 2px #316fc4, 0 0 2px #316fc4, 0 0 2px #316fc4, 0 0 2px #316fc4;
    font-size: 11px;
    border: 1px solid #316fc4;
}

.xp-level-info {
    position: relative;
    margin-bottom: 25px;
}

.current-progress {
    width: 100%;
    text-align: center;
}

.next-level-info {
    margin-left: 5px;
}

.current-level-info {
    margin-right: 5px;
}

.break-line {
    height: 2px;
    background-color: #d8d8d8;
    margin: 10px 0 10px 15px;
    clear: both;
    float: left;
    width: 90%;
}

.titlte-info {
    height: 21px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    text-transform: uppercase;
    padding: 20px;
    clear: both;

}

.user-info-section {
    padding: 0 0 0 20px;
}

.user-info-section li {
    margin: 8px;
}

.pull-right {
    float: right;
}

.challenges-list {
    justify-content: space-around;
}

li {
    margin-right: 32px;
}

.item-challenges__small {
    position: absolute;
    top: 48px;
    left: 48px;
}

.total-out__chanllenges {
    color: #ff9f00;
    font-size: 25px;
    margin: 6px;
}

.challenges-out {
    top: 270px;
    position: absolute;
    text-align: center;
    width: 170px;
    margin-left: -26px;
}

.sumTotal-runout {
    color: #333;
    font-size: 20px;
}

.border-total__outrun {
    color: #898989;
    margin-left: 20px;
}

.border-total__outrun::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #eee;
    left: 86px;
    top: -32px;
}

.sumTotal-runout::before {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    top: -50px;
    left: 55%;
    transform: translateX(-50%);
    z-index: 8;
}

.sumTotal-runout.easy::before {
    background-image: radial-gradient(circle, #7bc043 0%, #7bc043 17%, rgba(123, 192, 67, .5) 20%, rgba(123, 192, 67, .5) 37%, rgba(123, 192, 67, .2) 40%, rgba(123, 192, 67, .2) 57%, transparent 60%);
}

.sumTotal-runout.medium::before {
    background-image: radial-gradient(circle, #f69046 0%, #f69046 17%, rgba(246, 144, 70, .5) 20%, rgba(246, 144, 70, .5) 37%, rgba(246, 144, 70, .2) 40%, rgba(246, 144, 70, .2) 57%, transparent 60%);

}

.sumTotal-runout.hard::before {
    background-image: radial-gradient(circle, #ee4035 0%, #ee4035 17%, rgba(238, 64, 53, .5) 20%, rgba(238, 64, 53, .5) 37%, rgba(238, 64, 53, .2) 40%, rgba(238, 64, 53, .2) 57%, transparent 60%);
}

.sumTotal-runout.total::before {
    background-image: radial-gradient(circle, #ff9f00 0%, #ff9f00 17%, rgba(255, 159, 0, .5) 20%, rgba(255, 159, 0, .5) 37%, rgba(255, 159, 0, .2) 40%, rgba(255, 159, 0, .2) 57%, transparent 60%);

}

#container-challenge {
    border: 1px solid #c8c8c8;
    padding: 31px 0px;
}

.joined-challenge {
    border: 1px solid #c8c8c8;
    padding: 5px 12px;
    margin-top: 17px;
}

.table {
    border-top: 1px dotted #898989;
    margin-bottom: 0;
}
.flex-list__discuss div{
    margin: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
}
</style>