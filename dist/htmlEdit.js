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

// 处理光标位置显示问题
// @focus="isLocked = true"
// @blur="isLocked = false"
// 输入法输入 input 事件
// 富文本编辑器 execCommand 指令实现方式
富文本编辑器中主要涉及到Jascript中一个原生的方法：execCommand。
execCommand方法是一个对当前文档、当前选择或给出范围的命令。
execCommand方法常用到的格式是：document.execCommand(参数1,参数2,参数3)。

参数1：指令参数（详见后面的说明）
参数2：交互方式，为布尔值（当设为true时，将显示对话框；当为false时，不显示对话框）
参数3：动态参数，一般为可用值或属性值

富文本编辑器包括是11个常用功能，依次分别是：
回退、前进、加粗、斜体、下划线、删除线、颜色、左缩进、右缩进、无序列表、有序列表。

Commoncontrols: function (e) {
  document.execCommand($(e.currentTarget).data('role'), false, null);
},
ColorControls: function (e) {
  var me = this;
  $(me.el).find("#colorSelect").show();
  $(document).click(function (e) {
      e.stopPropagation();
      var colorType = $(e.target).attr('data-type')
      switch (colorType) {
          case '0': document.execCommand("ForeColor", false, '#e33737'); break;
          case '1': document.execCommand("ForeColor", false, '#e28b41'); break;
          case '2': document.execCommand("ForeColor", false, '#c8a732'); break;
          case '3': document.execCommand("ForeColor", false, '#209361'); break;
          case '4': document.execCommand("ForeColor", false, '#418caf'); break;
          case '5': document.execCommand("ForeColor", false, '#aa8773'); break;
          case '6': document.execCommand("ForeColor", false, '#999'); break;
          case '7': document.execCommand("ForeColor", false, '#333'); break;
      }
      $(me.el).find("#colorSelect").hide();
  });
  e.stopPropagation();
}

var EditorComponents = new EditorComponent();
EditorComponents.setElement(me.$el.find("#editorMenu")).render(
  {
    // 用来配置编辑器的选项
    editorModels: ['undo', 'redo', 'bold', 'italic', 'underline', 'strikeThrough', 'colors', 'indent', 'outdent', 'insertUnorderedList', 'insertOrderedList']
  }
);

指令集如下：
2D-Position 允许通过拖曳移动绝对定位的对象。
AbsolutePosition 设定元素的 position 属性为“absolute”(绝对)。
BackColor 设置或获取当前选中区的背景颜色。
Bold 切换当前选中区的粗体显示与否。
Copy 将当前选中区复制到剪贴板。
CreateBookmark 创建一个书签锚或获取当前选中区或插入点的书签锚的名称。
CreateLink 在当前选中区上插入超级链接，或显示一个对话框允许用户指定要为当前选中区插入的超级链接的 URL。
Cut 将当前选中区复制到剪贴板并删除之。
Delete 删除当前选中区。
FontName 设置或获取当前选中区的字体。
FontSize 设置或获取当前选中区的字体大小。
ForeColor 设置或获取当前选中区的前景(文本)颜色。
FormatBlock 设置当前块格式化标签。
Indent 增加选中文本的缩进。
InsertButton 用按钮控件覆盖当前选中区。
InsertFieldset 用方框覆盖当前选中区。
InsertHorizontalRule 用水平线覆盖当前选中区。
InsertIFrame 用内嵌框架覆盖当前选中区。
InsertImage 用图像覆盖当前选中区。
InsertInputButton 用按钮控件覆盖当前选中区。
InsertInputCheckbox 用复选框控件覆盖当前选中区。
InsertInputFileUpload 用文件上载控件覆盖当前选中区。
InsertInputHidden 插入隐藏控件覆盖当前选中区。
InsertInputImage 用图像控件覆盖当前选中区。
InsertInputPassword 用密码控件覆盖当前选中区。
InsertInputRadio 用单选钮控件覆盖当前选中区。
InsertInputReset 用重置控件覆盖当前选中区。
InsertInputSubmit 用提交控件覆盖当前选中区。
InsertInputText 用文本控件覆盖当前选中区。
InsertMarquee 用空字幕覆盖当前选中区。
InsertOrderedList 切换当前选中区是编号列表还是常规格式化块。
InsertParagraph 用换行覆盖当前选中区。
InsertSelectDropdown 用下拉框控件覆盖当前选中区。
InsertSelectListbox 用列表框控件覆盖当前选中区。
InsertTextArea 用多行文本输入控件覆盖当前选中区。
InsertUnorderedList 切换当前选中区是项目符号列表还是常规格式化块。
Italic 切换当前选中区斜体显示与否。
JustifyCenter 将当前选中区在所在格式化块置中。
JustifyFull  将当前选中区在所在格式化块两端对齐。
JustifyLeft 将当前选中区所在格式化块左对齐。 
JustifyRight 将当前选中区所在格式化块右对齐。 
LiveResize 迫使 MSHTML 编辑器在缩放或移动过程中持续更新元素外观，而不是只在移动或缩放完成后更新。
MultipleSelection 允许当用户按住 Shift 或 Ctrl 键时一次选中多于一个站点可选元素。 
Outdent 减少选中区所在格式化块的缩进。 
OverWrite 切换文本状态的插入和覆盖。 
Paste 用剪贴板内容覆盖当前选中区。  
Print 打开打印对话框以便用户可以打印当前页。 
Redo 重复操作。 
Refresh 刷新当前文档。 
RemoveFormat 从当前选中区中删除格式化标签。 
SaveAs 将当前 Web 页面保存为文件。 
SelectAll 选中整个文档。 
StrikeThrough 添加删除线。 
UnBookmark 从当前选中区中删除全部书签。 
Underline 切换当前选中区的下划线显示与否。 
Undo 回退操作。 
Unlink 从当前选中区中删除全部超级链接。 
Unselect 清除当前选中区的选中状态。
