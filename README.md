phantomcap
==========

website capture using PhantomJS


����
==========

�iwindows���ɐ������܂��j

http://phantomjs.org/download.html

��������PhantomJS���_�E�����[�h���A�jC�����Ȃǂɂ����Ă��������B


C:\phantomjs-1.9.1-windows\

��L��capture.js�������Ă��������B


C:\phantomjs-1.9.1-windows\capture.js

��L���G�f�B�^�ŊJ���A


6,7�s��:

var authname = '{BASIC�F�؂�ID}';  //Basic�F�؂̃��[�U��

var authpw   = '{BASIC�F�؂�PW}'; //Basic�F�؂�PW

���L�����܂�

cmd���J����

cd C:\phantomjs-1.9.1-windows\

phantomjs.exe capture.js


C:\phantomjs-1.9.1-windows\capture �t�H���_�ɉ摜���i�[����܂�

�����\���Ԃ�����܂�


�y�[�W��ǉ�
==========

C:\phantomjs-1.9.1-windows\capture.js

��L�t�@�C����

var sites = [
�`�`�`�����`�`�`
];

�t�@�C�������񋓂��Ă��镔����ҏW���܂�


�܂��A�r����cmd���N���b�V�����邱�Ƃ�����܂��B

���̏ꍇ��var sites = [�@��r������L�q���邱�Ƃő��s�ł��܂��B

var sites = [

/*

hoge.html,

fuga.html, //�����܂ł͎擾�����B

*/ //�ȉ�����

a.html,

b.html

];


����
==========

�����̃X�N���v�g���g�������ƂŐ����������Ȃ鑹�Q��g���u���̐ӔC�͈�ؕ������˂܂��̂ŗ\�߂��������������B

AT YOUR OWN RISK. I shall not be responsible for any loss, damages and troubles.