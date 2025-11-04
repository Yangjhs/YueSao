#!/bin/bash
echo "正在启动本地服务器..."
echo ""
echo "服务器地址: http://localhost:8000"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""
python3 -m http.server 8000

