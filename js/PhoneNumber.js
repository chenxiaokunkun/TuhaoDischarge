$(function(){

    //请输入福建移动手机号 挂事件
    $('#tell').keyup(function(){

        var ppone=$('#tell').val();/*获取值*/

        if(ppone.length==11){
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(myreg.test(ppone)){
                $('.hqyzm').attr('disabled',false);/*手机号码 符合 11位数时，获取验证码 亮起*/

            }else{
                $('.hqyzm').attr('disabled',true)/*手机号码 不符合 11位数时，获取验证码 不亮*/
            }
        };
    });

    //手机验证码事件
    $('.hqyzm').click(function(){

        var ppone=$('#tell').val();/*获取值*/
        if(ppone.length==11){
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(!myreg.test(ppone)){
                alert('请输入正确的手机号码');
                return;
            };
        }else{
            alert('请输入正确的手机号码');
            return;
        };

        var num=60;/*时间*/

        $('#tell').attr('disabled',true)//锁定手机号码输入框

        //开始倒计时
        timer=setInterval(function(){
            num--;
            if(num<=0){
                clearInterval(timer);//清除连续定时器
                $('.hqyzm').text('获取验证码').attr('disabled',false);
                $('#tell').attr('disabled',true);
                num=60;
            }else{
                $('.hqyzm').text(num+'s'+'再次获取验证码').attr('disabled',true);
            }
        },200);

    });


    //请输入验证码
    $('.yzm').keyup(function(){
        var tel=$('#tell').val();/*获取手机号码的值*/
        var ma=$('.yzm').val();/*获取验证码的值*/

        //判断验证码是否为6位数
        if(ma.length==6){
            $('.phone_btn').attr('disabled',false);//验证码为6位数时：确认我的手机号码 亮起
        }else{
            $('.phone_btn').attr('disabled',true);//验证码不足6位数时：确认我的手机号码 不亮
        }

    });


    //确认我的手机号码 挂事件
    $('.phone_btn').click(function(){

        $('#imm').fadeIn();//immediately 立即领取 淡入
        window.location.href='immediately.html';//immediately 立即领取 界面

    });








});








