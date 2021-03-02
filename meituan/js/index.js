$.each( newData , function(arrIndex , arrValue){

    var newItem = $(" <a href=void:0></a>");
    // 设置新的.item内容  es6中模板字符串``   模板是允许换行   在``里面可以使用 ${变量名} 解析变量 
    newItem.html(`
    <div class='goods'>
    <div class="goodsLeft">
        <img src=${arrValue.src} >
    </div>
    <div class="goodsRight">
        <p>${arrValue.name}</p>
        <p>${arrValue.location}</p>
        <div class="discount">
            <span>${arrValue.nowPrice} </span><span>门市价</span><span>${arrValue.pastPrice}</span>
            <span>${arrValue.alreadySell}</span>
        </div>
    </div>
    </div>`);

    // 把新的.item追加打.box中
    $(".sell").append( newItem );
})