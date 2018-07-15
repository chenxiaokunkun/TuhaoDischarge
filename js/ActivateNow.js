$(function(){

    //请输入福建移动手机号 挂事件
    $('.phone').keyup(function(){

        var tell=$('.phone').val();//获取值

        if(tell.length==11){
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(myreg.test(tell)){
                $('#hqyzm').attr('disabled',false);/*手机号码 符合 11位数时，获取验证码 亮起*/
            }else{
                $('#hqyzm').attr('disabled',true);/*手机号码 不符合 11位数时，获取验证码 不亮*/
            }
        };

    });

    //手机验证码 事件
    $('#hqyzm').click(function(){

        var phone2=$('.phone').val();/*获取值*/

        if(phone2.length==11){
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(!myreg.test(phone2)){
                alert('请正确输入手机号码');
                return;
            }
        }else{
            alert('请正确输入手机号码');
            return;
        };

        var num=60;

        $('.phone').attr('disabled',true);//输入手机号码框锁定

        //开始倒计时
        var timer=setInterval(function(){
            num--;
            if(num<=0){
                clearInterval(timer);//清除连续
                $('#hqyzm').attr('disabled',false);
                $('.phone').attr('disabled',true);
                num=60;
            }else{
                $('#hqyzm').text(num+'s'+'再次获取验证码').attr('disabled',false);
            }
        },200);

    });


    //请输入验证码
    $('#yzm').keyup(function(){

        var tell2=$('.phone').val();//获取手机号码的值
        var ma2=$('#yzm').val();//获取 请输入验证码的值

        //判断验证是是否为6位数
        if(ma2.length==6){
            $('.now_btn').attr('disabled',false);//立即激活按钮亮起
        }else{
            $('.now_btn').attr('disabled',true);//立即激活按钮不亮
        }

    });


    //立即激活 挂事件
    $('.now_btn').click(function(){
        $('#Act_tanc').fadeIn();//attention 长按关注 淡入
    });


    //取消按钮 挂事件
    $('.quxiao').click(function(){
        $('#Act_tanc').fadeOut();//attention 长按关注 淡出
    });


    //长按关注 挂事件
    $('.now_an').click(function(){
        $('#the').fadeIn();//立即激活（100M流量）淡入
        window.location.href='TheActivation.html'//立即激活（100M流量）界面
    })





});