
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>音乐列表</title>
	<style>
		* {
			padding: 0;
			margin: 0;
		}
		h1 {
			margin: 100px auto 0;
			text-align: center;
		}
		table {
			margin: 0 auto;
		}
	    .aa {
			display: block;
			height: 50px;
			width: 100px;
			background-color: #ccc;
			margin: 0 305px;
			text-align: center;
			line-height: 50px;
			text-decoration: none;
		}
		thead tr {
			width: 500px;
			height: 50px;
			background-color: #ccc;
		}
		video {
			height: ;
		}
		img {
			height: 50px;
			width: 200px;
		}
	</style>
</head>
<body>
	<h1>音乐列表</h1>
	<form action="" method="post">
	
	<table border=1 cellspacing="0">
	<a href="./addMusic.php" class="aa">添加</a>
	<thead >
		<tr>
			<th>歌名</th>
			<th>歌手</th>
			<th>海报</th>
			<th>音乐</th>
			<th>删除</th>
		</tr>
	</thead>

	<tbody>
		<?php 
		$music = file_get_contents("musicList.json");
		
			$line = json_decode($music, true);

	
		
	 ?>
		<?php foreach($line as $value): ?>
			<tr>
			<td><?php echo $value['name'] ?></td>
			<td><?php echo $value['singer'] ?></td>
			<td><img src="<?php echo $value['image'] ?>" alt=""></td>

			<td><audio src="<?php echo $value['audio'] ?>" controls></audio></td>
			<td><a href="deleteMusic.php?id=<?php echo $value['id'] ?>">删除</a></td>
			</tr>
		<?php endforeach ?>
		
	</tbody>
	</table>
	</form>
</body>
</html>