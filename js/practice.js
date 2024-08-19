//practice1
function jumpalt1() {
    alert('謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您https://jsfiddle.net/yuhn5813/fbt63dvm/3/#報價！');
}

function jumpalt2() {
    alert('我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！');

}

function order_info() {
    //practice2 
    var name = document.getElementById('mb_name').value;
    var phone = document.getElementById('mb_phone').value;
    var mail = document.getElementById('mb_mail').value;

    alert(name + '\n您好！謝謝您對我們的衣服有興趣！以下是您的訂購資訊\n電話：' + phone + '\nEmail：' + mail + '\n\n感謝您的訂購！');


    //practice3
    document.getElementById('order_name').textContent = name;
    document.getElementById('order_phone').textContent = phone;
    document.getElementById('order_mail').textContent = mail;

    //practice4
    var prclass_menu = document.getElementById('pr_class');    //先取得選單元素
    var prclass_num = prclass_menu.selectedIndex;    //.selectedIndex屬性，用來表示目前選中的索引(陣列第幾項)
    var prclass_value = prclass_menu.options[prclass_num].value;    //.options屬性，用來表示HTML裡的options元素，並且會是一個陣列
    //這段意思是，利用options屬性取得prclass_menu這個選單元素中的<options>元素，並加上[目前選中的索引]，用.value取得該索引的值(在HTML設定好的value)
    var prclass_text = prclass_menu.options[prclass_num].text;    //.text屬性，用來表示HTML裡的文字內容

    var prtype_menu = document.getElementById('poduct_type');
    var prtype_num = prtype_menu.selectedIndex;
    var prtype_value = prtype_menu.options[prtype_num].value;
    var prtype_text = prtype_menu.options[prtype_num].text;
    document.getElementById('order_class').textContent = prclass_text + prclass_value;
    document.getElementById('order_type').textContent = prtype_text + prtype_value;

    

}

