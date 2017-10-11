const express = require('express');
const router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

var url = 'https://momentumdash.com/';

router.get('/getloginbg',(req,res) => {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //返回的body为抓到的网页的html内容
            var $ = cheerio.load(body); //当前的$符相当于拿到了所有的body里面的选择器

            var ulhtml = $('#background').html(); //拿到导航栏的内容
            res.json({message : ulhtml+'sdfs'});

        }else {
            res.json({message:'error'})
        }

    })

});



/*app.get(url, function (res) {
    console.log(res);
    var html = '';
    res.on('data',function (data) {
        html += data;
    });
    res.on('end', function () {
        var loginImg = filterHtml(html);
       console.log(loginImg);
    });
}).on('error', function () {
    console.log('获取数据出错！ ')
});*/

/* 过滤页面信息 */
function filterHtml(html) {
    if(html) {
        var $ = cheerio.load(html);
        var background = $('#background');
        var loginBg = background.find('li').attr('style');
        return loginBg;
    }
    else {
        console.log('没有数据传入！！')
    }
}

module.exports = router;
