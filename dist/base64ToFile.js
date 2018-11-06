var img = "data:image/jpeg;base64,/9j/4AAQSk";

// 将base64转换为文件
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

function fileup() {
  var form = document.forms[0];
  var formData = new FormData();
  formData.append("file", dataURLtoFile(img, "test.png"));
  formData.append("key", "value");

  $.ajax({
    url: 'http://127.0.0.1:3000/api/upload',
    type: 'POST',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: function (res) {
      console.log(res);
    },
    error: function (err) {
      console.log(err);
    }
  });
}
