phantomcap
==========

website capture using PhantomJS


導入
==========

（windowsを例に説明します）

http://phantomjs.org/download.html

ここからPhantomJSをダウンロードし、）C直下などにおいてください。


C:\phantomjs-1.9.1-windows\

上記にcapture.jsをおいてください。


C:\phantomjs-1.9.1-windows\capture.js

上記をエディタで開き、


6,7行目:

var authname = '{BASIC認証のID}';  //Basic認証のユーザ名

var authpw   = '{BASIC認証のPW}'; //Basic認証のPW

を記入します

cmdを開いて

cd C:\phantomjs-1.9.1-windows\

phantomjs.exe capture.js


C:\phantomjs-1.9.1-windows\capture フォルダに画像が格納されます

※結構時間かかります


ページを追加
==========

C:\phantomjs-1.9.1-windows\capture.js

上記ファイルの

var sites = [
～～～割愛～～～
];

ファイル名が列挙してある部分を編集します


また、途中でcmdがクラッシュすることもあります。

その場合はvar sites = [　を途中から記述することで続行できます。

var sites = [

/*

hoge.html,

fuga.html, //ここまでは取得した。

*/ //以下から

a.html,

b.html

];


注意
==========

※このスクリプトを使ったことで生じたいかなる損害やトラブルの責任は一切負いかねますので予めご了承ください。

AT YOUR OWN RISK. I shall not be responsible for any loss, damages and troubles.