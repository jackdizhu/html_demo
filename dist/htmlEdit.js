// 格式化 粘贴板html标签 dragenter paste
document.getElementById('edit').addEventListener('paste', (e) => {
  let pastedText = undefined;
  if (window.clipboardData && window.clipboardData.getData) { 
    // IE
    pastedText = window.clipboardData.getData('Text');
  } else {
    pastedText = e.clipboardData.getData('Text') || e.clipboardData.getData('text/plain');
  }
  const selectionObj = window.getSelection && window.getSelection();
  if (selectionObj) {
    const range = selectionObj.getRangeAt(0);
    const txtNode = document.createTextNode(pastedText)
    console.log(txtNode);
    range.insertNode(txtNode)
  }
  e.preventDefault();
  e.stopPropagation();
  return false;
})

// 禁止页面元素拖动
<body 
  draggable="false"
  ondragstart="return false" 
  ondragenter="event.dataTransfer.dropEffect='none'; event.stopPropagation(); event.preventDefault();"  
  ondragover="event.dataTransfer.dropEffect='none';event.stopPropagation(); event.preventDefault();"  
  ondrop="event.dataTransfer.dropEffect='none';event.stopPropagation(); event.preventDefault();"
>
// 禁止拖动内容到input
<input ondragenter = "return false"/>
