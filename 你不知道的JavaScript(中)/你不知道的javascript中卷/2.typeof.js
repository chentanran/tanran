
function doSomethingCool() {
  var helper = (typeof FeatureXYZ !== 'undefined') ? FeatureXYZ : function() {
    // default feature;
    // 判断一个函数是否存在
  };
  var val = helper();
}