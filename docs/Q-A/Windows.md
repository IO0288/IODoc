---
id: Q&A-Windows
title: Q&A-Windows
sidebar_position: 2
sidebar_label: Q&A-Windows
tags: [Note, Q&A, Windows]
---

# Windows

# 端口

## 端口被占用/不可用

端口被占用（不可用）但是 `netstat -aon|findstr “端口”` 没有任何输出？

[查看端口占用——Windows端口占用完美解决方案](https://blog.csdn.net/echaowangzhuan/article/details/106177952)

解决办法：
`netsh int ipv4 show dynamicport tcp` 查看端口范围，以及是否被排除

> 可能是被Hyper-V保留了，试下netsh interface ipv4 show excludedportrange protocol=tcp，如果被保留了，就在打开或关闭功能里把Hyper-V去掉
> 
> ['罪魁祸首'Hyper-V](https://bbs.csdn.net/topics/391900623?list=lz)

## 目录~~大标题~~

# Linux

# 还没有呢


