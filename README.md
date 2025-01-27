# Github图床仓库

解决的问题：个人博客使用的图片，如果放在博客项目下，不便于文章迁移到掘金、知乎等平台，于是使用本图床仓库获取资源绝对地址。

优势：
- 操作方便，使用网页将图片存入本仓库的指定目录，方便管理复用。
- 图片上传自动压缩，并转为体积更小的 webp 格式。
- 图片资源地址有github自带的CDN加速。

## 1. Github Token

[点此直达](https://github.com/settings/tokens/new)，创建用于授权平台上传图片的Github Token，详细步骤：

1. 填写token名称
2. 设置token有效期，一个月或者永久都可以
3. 必须勾选repo的操作权限
4. 点击Generate token按钮

![image](https://github.com/user-attachments/assets/5083b261-f02f-46cd-9b44-a5a15f12ae35)
![image](https://github.com/user-attachments/assets/5d54ecb4-dafe-49f7-acfe-ef76e336baeb)
![image](https://github.com/user-attachments/assets/b415ec9a-ade4-44e2-b70d-30290b56accf)

## 2. 图床配置

前往 [图床配置页](https://picx.xpoet.cn/#/config?focus=1) 填写Github Token并点击一键配置，平台会在你的github上创建一个名为 ***picx-images-hosting*** 的仓库作为图床使用。

![image](https://github.com/user-attachments/assets/1918d19c-bab7-48ab-a788-8c38e60daa5a)

## 3. 创建目录

选择或创建图片上传到的目录，当前可不设置，后续步骤仍可更改。

![image](https://github.com/user-attachments/assets/c511c49c-0dde-4fab-a618-0645cc2ee13e)

## 4. 上传图片

[点此直达](https://picx.xpoet.cn/#/upload)，这一步将图片上传到图床平台。

![image](https://github.com/user-attachments/assets/690a742e-d1bc-4d0b-a1d7-236d34e7ec60)

上传成功后默认转成webp格式压缩，可自主更改命名

![image](https://github.com/user-attachments/assets/c61b330e-c3fe-4abb-939d-155771790e13)

## 5. 检查目录

这一步是你最后能更改上传目录的时机，确认无误即可点击上传按钮。

![image](https://github.com/user-attachments/assets/97923ef7-f329-4f4d-9b08-a8d7a1b20dbb)

## 6. 上传到仓库

点击上传按钮，将图片上传到自动为你创建的Github图床仓库，上传成功后此时图片还不可访问，但是已经commit提交到你的Github仓库中。

![image](https://github.com/user-attachments/assets/8690750d-defd-483c-a626-06c22b47b8c9)

## 7. 部署Github Pages

点击一键部署，平台会启动Github Pages自动部署脚步，等待执行完成，复制图片链接即可访问到图片资源
![image](https://github.com/user-attachments/assets/56aa65ee-1e2b-4851-b008-6e03a5031c72)

## 8. 图床管理

[点此前往](https://picx.xpoet.cn/#/management)，后续你还可以在图床管理中查看使用上传过的图片，或者删除。

![image](https://github.com/user-attachments/assets/d694d009-c0ac-4f1a-99b9-8ccde9f10106)
