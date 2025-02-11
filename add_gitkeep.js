const fs = require('fs');
const path = require('path');

// 从命令行参数中获取目标目录路径
const args = process.argv.slice(2); // 获取命令行参数（去掉 node 和脚本名）
const targetDirectory = args[0];

if (!targetDirectory) {
    console.error('请提供目标目录路径作为参数');
    process.exit(1);
}

// 检查目录是否存在
if (fs.existsSync(targetDirectory)) {
    // 检查路径是否为目录
    const stats = fs.statSync(targetDirectory);
    if (!stats.isDirectory()) {
        console.error(`路径 ${targetDirectory} 不是一个目录`);
        process.exit(1);
    }
    
    // 检查目录是否为空
    fs.readdir(targetDirectory, (err, files) => {
        if (err) {
            console.error(`无法读取目录 ${targetDirectory}，错误：${err}`);
            process.exit(1);
        }

        if (files.length === 0) {
            // 如果目录为空，创建 .gitkeep 文件
            const filePath = path.join(targetDirectory, '.gitkeep');
            fs.writeFile(filePath, '', (err) => {
                if (err) {
                    console.error(`无法创建 .gitkeep 文件，错误：${err}`);
                    process.exit(1);
                }
                console.log(`已成功在 ${targetDirectory} 目录中创建 .gitkeep 文件`);
            });
        } else {
            console.log(`目录 ${targetDirectory} 不为空`);
        }
    });
} else {
    console.error(`目录 ${targetDirectory} 不存在`);
    process.exit(1);
}