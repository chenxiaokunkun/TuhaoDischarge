$(function(){
    //����ת�� ��ť�¼�
    $('.Flow_btn').click(function(){
        $('.flow_tanc').fadeIn();/*Activate��ע���� ��������*/
    });

    //ȡ�� ��ť�¼�
    $('.quxiao').click(function(){
        $('.flow_tanc').fadeOut();/*Activate��ע���� ��������*/
    });

    //����ת�� ��ȡ�����¼�
    $('.an').click(function(){
        $('#phone').fadeIn();/*ȷ���ֻ����� ����*/
        window.location.href="PhoneNumber.html"/*ȷ���ֻ����� ����*/
    })


});