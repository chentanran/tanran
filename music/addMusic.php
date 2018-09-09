<?php 
	function music(){
		$data = Array();
		$data['id'] = uniqid();
		if(empty($_POST['name'])){
			echo '请输入用户名';
			return;
		}
		if(empty($_POST['singer'])){
			echo '请输入密码';
			return;
		}

		$data['name'] = $_POST['name'];
		$data['singer'] = $_POST['singer'];

		// array(2) {
  // ["image"]=>
  // array(5) {
  //   ["name"]=>
  //   string(7) "kt4.jpg"
  //   ["type"]=>
  //   string(10) "image/jpeg"
  //   ["tmp_name"]=>
  //   string(45) "C:\Users\21592\AppData\Local\Temp\phpF8FC.tmp"
  //   ["error"]=>
  //   int(0)
  //   ["size"]=>
  //   int(739741)
  // }
		if(empty($_FILES['image'])){
			echo '文件传入失败';
			return;	
		}
		$images = $_FILES['image'];
		// if(strpos($images['type'], "image/") !== 0){
		// 	echo '文件类型不匹配';
		// 	return;	
		// }
		// print_r($_FILES);
		$images_type = array("image/jpg", "image/png", "image/gif", "image/jpeg");
		if(!in_array($images["type"], $images_type)){
			echo '文件类型不匹配';
			return;	
		}

		if($images['error'] !== UPLOAD_ERR_OK){
			echo $images['error'].'image';
			return;	
		}
	

		move_uploaded_file($images['tmp_name'], './image/'.rand(1, 9999).$images['name']);

		$data['image'] = './image/'.$images['name'];
  // ["audio"]=>
  // array(5) {
  //   ["name"]=>
  //   string(0) ""
  //   ["type"]=>
  //   string(0) ""
  //   ["tmp_name"]=>
  //   string(0) ""
  //   ["error"]=>
  //   int(4)
  //   ["size"]=>
  //   int(0)
  // }
		if(empty($_FILES['audio'])){
			echo '音频上传失败';
			return;
		}

		$audios = $_FILES['audio'];


		
		if($audios['error'] !== UPLOAD_ERR_OK){
			echo $audios['error'].'audio';
			return;
		}
	
		// print_r($_FILES);
		move_uploaded_file($audios['tmp_name'], './audio/'.rand(100,9999).'.mp3');

		$data['audio'] = './audio/'.$audios['name'];

		// print_r($data);
		// file_put_contents('musicList.json', json_encode($data));
		$json = file_get_contents('musicList.json');
		$old = json_decode($json, true);
		
		array_push($old, $data);
		// $old[] = $data;
		// print_r($old);
		$new = json_encode($old);
		file_put_contents("musicList.json",$new);

		header("refresh:3;url='musicList.php'"); //三秒钟之后跳转路径

	}

	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		music();
	}
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>添加音乐</title>
	<style>
		* {
			padding: 0;
			margin: 0;
		}
		.musicbox {
			margin: 100px 100px;
		}
		h1 {
			text-align: center;
		}
		p {
			margin: 15px 0;
		}
		input {
			height: 30px;
			width: 300px;
		}
	</style>
</head>
<body>
<div class="musicbox">
	<h1>添加音乐</h1>
	<form action="" method="post" enctype="multipart/form-data">
		<div>
			<p>歌名</p>
			<input type="text" name="name">
		</div>
		<div>
			<p>歌手</p>
			<input type="text" name="singer">
		</div>
		<div>
			<p>图片</p>
			<input type="file" name="image" accept=".jpg,.png,.gif">
		</div>
		<div>
			<p>歌曲</p>
			<input type="file" name="audio" accept=".MP3">
		</div>
		<button>提交</button>
	</form>
</div>
</body>
</html>