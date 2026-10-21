#!/usr/bin/env bash
if ! output=$(nvidia-smi --query-gpu=utilization.gpu,temperature.gpu,memory.used,memory.total,name --format=csv,noheader,nounits 2>/dev/null); then
  echo '{"text": "x%", "tooltip": "GPU: not detected"}'
  exit 0
fi
IFS=',' read -r util temp mem mem_total gpu_name <<< "$output"
util="${util// /}"
temp="${temp// /}"
mem="${mem// /}"
mem_total="${mem_total// /}"
gpu_name="${gpu_name# }"
echo "{\"text\": \"${util}%\", \"tooltip\": \"GPU: ${gpu_name}\nUsage: ${util}%\nTemperature: ${temp}°C\nMemory: ${mem}MiB / ${mem_total}MiB\"}"
