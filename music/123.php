<?php 
//json格式数据
$data = '[{ "F_ModuleId": "1" "F_ParentId": "0" "F_EnCode": "SysManage",}]';
//转换成数组
$arr = json_decode($data,true);
//输出
var_dump($arr);
 ?>
