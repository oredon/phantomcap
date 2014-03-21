/** start settings **/
// authname、authpwなど、パスワードが外部に漏れないよう十分注意してください
// ローカルサーバ向けにご利用ください

var baseurl  = 'http://hogehoge.com/';// ex.)'http://hogehoge.com/'
var isAuth   = false;      //Basic認証があるならtrue、なければfalse
var authname = 'aaaaaaaaaaa';  //Basic認証のユーザ名
var authpw   = 'bbbbbbbbbbb'; //Basic認証のPW
var viewW    = '320px';    //SPサイトなど、デバイス幅によってコンテンツ幅が変わる場合は指定
var delay    = 5000;       //ページを開いてからキャプチャを取得するまでの待ち時間を指定（ミリ秒）ページ内の非同期処理対策

// url list
var sites = [
"index.html",
"hoge.html".
"aa/bb/index.html",
"aa/bb/c.html",
"a.php"
];

/** end settings **/

var captured = 0;
 
function capture() {
	//pageオブジェクト生成
	var page = require('webpage').create();
	
	//URLと画像名の設定
	var pagename = sites[captured];
	var targeurl = baseurl + pagename;
	var imgName = "capture/" + pagename.replace(/\.html/ig,".png");
	console.log('will be output image filename : ' + imgName);
	
	//レンダリング設定
	if( isAuth ){
		page.settings.userName = authname;
		page.settings.password = authpw;
	}
	page.viewportSize = {width:viewW};//スマホサイト向けの設定
	
	//取得URLの添え字更新
	captured++;
	
	//レンダリング処理
	page.open(targeurl, function() {
		// Ajaxリクエスト対策にdelayを噛ませる
		setTimeout(function() {
			page.render(imgName);
			console.log('captured ' + targeurl);
			
			if (captured == sites.length) {
				console.log('complete : ' + captured + ' pages were captured');
				phantom.exit();
			}
			capture();
		}, delay);
	});
}

// 実行
capture();

