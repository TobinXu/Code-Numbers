# -everthing-
编程训练，代码量需要大大的提升
2020年05月27日 徐强国你听着奥。以后git要是报错说 refusing to merge unrelated histories
那绝对是你在github上面建立了一个库，并且还自动初始化了它的readme，但是你本地并没有进行这个操作
所以会被git认为是俩不认识的事务
解决方案

1、现在本地给你远程库添加个名字practice便于操作(想叫啥你随意)
git remote add practice  https://github.com/TobinXu/---everthing-.git
2、把远程库内容拉取下来并让它和本地分支合并，使用pull操作，pull相当于fetch加merge  
相当于和事佬，人家打架呢，他又拉又劝
git pull practice master -allow-unrelated-histories
3、最后一步了，推上去，前提是你commit了，你add了
git push practice master:master
