import os

for root, dirs, files in os.walk("."):
    if ".git" in root:
        continue  # 跳过 .git 目录
    if not files and not dirs:  # 如果是空文件夹
        with open(os.path.join(root, ".gitkeep"), "w") as f:
            pass  # 创建 .gitkeep 文件

print(".gitkeep files added to empty folders.")