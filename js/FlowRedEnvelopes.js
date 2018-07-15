$(function(){
    //立即转发 按钮事件
    $('.Flow_btn').click(function(){
        $('.flow_tanc').fadeIn();/*Activate关注激活 弹窗淡入*/
    });

    //取消 按钮事件
    $('.quxiao').click(function(){
        $('.flow_tanc').fadeOut();/*Activate关注激活 弹窗淡出*/
    });

    //长按转发 领取流量事件
    $('.an').click(function(){
        $('#phone').fadeIn();/*确认手机号码 淡入*/
        window.location.href="PhoneNumber.html"/*确认手机号码 界面*/
    })


});