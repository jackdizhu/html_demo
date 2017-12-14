// 组策略 设置 开机 关机 执行对应文件 [ 运行 gpedit.msc ->  计算机配置 -> 脚本(启动/关机)]
// 开机启动文件夹
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
// bat 文件 不阻塞启动两个bat 文件
cd E:\jackdizhu\mongodb
start mongndb.bat
cd E:\jackdizhu\web\easy-mock
start easy-mock.bat
// bat 删除文件 文件夹 /Q 不提示删除 (up)
cd E:\jackdizhu\web
del /F /S /Q E:\jackdizhu\web\html_demo
rd /S /Q E:\jackdizhu\web\html_demo
ren html_demo.rar html_demo.crx
cd E:\jackdizhu
ren mock.bat mock.ini
// bat 重命名文件 (down)
cd E:\jackdizhu\web
ren html_demo.crx html_demo.rar
cd E:\jackdizhu
ren mock.ini mock.bat
