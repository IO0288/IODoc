---
id: ffmpeg
title: ffmpeg操作
sidebar_class_name: green
tags: [note, ffmpeg]
---

```bash
ffmpeg  -i "2024-03-07 18-27-40 1920x1080 H.mkv" 
		-c:v h264_nvenc 
		-preset slow 
		-crf 20 -r 30 
		"2024-03-07 18-27-40 1920x1080 HZ.mkv"
```

`-loglevel error` 日志级别

`-f concat`拼接

`-i` 输入文件

`-c:v h264_nvenc/hevc_nvenc` 编解码器:视频**同等参数下，硬解码率不如软解**

`-codecs` 查看可用编码器

`-preset` 预设

**视频质量(无损0-51最差)**

`-qp` 固定QP量化，研究用途

`-crf` 固定码率因子，动态QP，文件存储，尽可能好的效果

`-b/b:a/b:v` CBR固定码率，同下，流媒体

VBR动态码率，同下，流媒体，动静场景

ABR平均码率，同下，流媒体，阿里云默认

**---**

`-r` fps

`-b/b:a/b:v` bitrate

`eg. -b 4000k -minrate 4000k -maxrate 4000k -bufsize 1835k` 

`-vf/af` 视频/音频过滤器(滤镜)

`-vn/an/sn/dn` 删除视频轨/音轨/字幕/数据流

`-ss 00:00:00` 片段起始位置

`-t 00:00:05` 片段结束位置

`-c` 直接拷贝原始数据(而不是重新编码)

`-y` 在不询问的情况下覆盖输出文件

`-pass 2` 二次编码





## Eg.

### 创建视频缩略图

```bash
ffmpeg -i input.mp4 -vf "fps=1/10,scale=-2:720" thumbnail-%03d.jpg
```

### 添加水印

```bash
ffmpeg -i input.mp4 -i input.jpg -filter_complex "overlay=100:100" output.mp4
```

### 高质量GIF动图

```bash
ffmpeg  -i input.mp4 
		-ss 0 -t 3 
		-filter_complex [0:v]fps=15,scale=-1:256,split[a][b];[a]palettegen[p];[b][p]paletteuse 
		output.gif
```

###  屏幕录制

```bash
ffmpeg  -hide_banner 
		-loglevel error 
		-stats -f gdigrab 
		-framerate 60 
		-offset_x 0 -offset_y 0 
		-video_size 1920x1080 
		-draw_mouse 1 
		-i desktop 
		-c:v h264_nvenc 
		-r 60 -pix_fmt yuv420p 
		-y screen_record.mp4
```





[ffmpeg命令（格式支持）](https://zhuanlan.zhihu.com/p/663671239)

[ffmpeg常用功能](https://blog.csdn.net/suiyueruge1314/article/details/131949399)

[ffmpeg参考文档](https://avmedia.0voice.com/?id=40523)

[FFmpeg 常用选项功能说明](https://blog.csdn.net/weixin_30251829/article/details/97397870)

[ffmpeg官方英文文档](https://ffmpeg.org/documentation.html)

[FFmpeg X264编码参数](https://zhuanlan.zhihu.com/p/485519347)
