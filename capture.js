/** start settings **/
// authname�Aauthpw�ȂǁA�p�X���[�h���O���ɘR��Ȃ��悤�\�����ӂ��Ă�������
// ���[�J���T�[�o�����ɂ����p��������

var baseurl  = 'http://hogehoge.com/';// ex.)'http://hogehoge.com/'
var isAuth   = false;      //Basic�F�؂�����Ȃ�true�A�Ȃ����false
var authname = 'aaaaaaaaaaa';  //Basic�F�؂̃��[�U��
var authpw   = 'bbbbbbbbbbb'; //Basic�F�؂�PW
var viewW    = '320px';    //SP�T�C�g�ȂǁA�f�o�C�X���ɂ���ăR���e���c�����ς��ꍇ�͎w��
var delay    = 5000;       //�y�[�W���J���Ă���L���v�`�����擾����܂ł̑҂����Ԃ��w��i�~���b�j�y�[�W���̔񓯊������΍�

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
	//page�I�u�W�F�N�g����
	var page = require('webpage').create();
	
	//URL�Ɖ摜���̐ݒ�
	var pagename = sites[captured];
	var targeurl = baseurl + pagename;
	var imgName = "capture/" + pagename.replace(/\.html/ig,".png");
	console.log('will be output image filename : ' + imgName);
	
	//�����_�����O�ݒ�
	if( isAuth ){
		page.settings.userName = authname;
		page.settings.password = authpw;
	}
	page.viewportSize = {width:viewW};//�X�}�z�T�C�g�����̐ݒ�
	
	//�擾URL�̓Y�����X�V
	captured++;
	
	//�����_�����O����
	page.open(targeurl, function() {
		// Ajax���N�G�X�g�΍��delay�����܂���
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

// ���s
capture();

