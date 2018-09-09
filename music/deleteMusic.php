<?php 
	$music = file_get_contents('musicList.json');

	$musicList = json_decode($music, true);

	$id = $_GET['id'];

	foreach ($musicList as $key => $value) {
		if($value['id'] !== $id){
			continue;
		}
		// print_r($value);
		$index = array_search($value,$musicList);
		array_splice($musicList, $index, 1);

		$list = json_encode($musicList);
		file_put_contents('musicList.json',$list);

		header('location:musicList.php'); 
	}
 ?>