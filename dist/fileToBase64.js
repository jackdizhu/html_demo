// 传入图片URL，返回base64
function getBase64(img) {
  function getBase64Image(img, width, height) {
    // width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
    var canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    return dataURL;
  }
  var image = new Image();
  image.crossOrigin = '';
  if (img) {
    image.src = img;
    image.onload = function () {
      // 将base64返回
      console.log(getBase64Image(image))
    }
  }
}
