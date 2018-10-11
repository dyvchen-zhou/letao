NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function() {
    $(this).next().slideToggle();
});


// 检测用户是否登录，如果未登录则跳转至登录页
$.ajax({
    url: '/api/employee/checkRootLogin',
    success: function(info) {
        console.log(info)
        if (info.error) {
            location.href = './login.html?url=' + location.href;
        }
    }
});

// 退出登录
$('.fa-sign-out').on('click', function() {

    // 请求后端接口实现退出登录
    $.ajax({
        url: '/api/employee/employeeLogout',
        success: function(info) {
            if (info.success) {
                location.href = '/mobile';
            }
        }
    })

});