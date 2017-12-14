// 组策略 设置 开机 关机 执行对应文件 [ 运行 gpedit.msc ->  计算机配置 -> 脚本(启动/关机)]
// 开机启动文件夹
C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp
// bat 文件 不阻塞启动两个bat 文件
cd E:\jackdizhu\mongodb
start mongndb.bat
cd E:\jackdizhu\web\easy-mock
start easy-mock.bat
