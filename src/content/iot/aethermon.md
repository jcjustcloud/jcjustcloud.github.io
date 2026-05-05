---
title: "AetherMon"
description: "Monitoring system berbasis ESP32 S3"
board: "ESP32 S3"
status: "active"
tags: ["esp32", "monitoring", "iot"]
github: "https://github.com/jcjustcloud/aethermon"
date: 2026-05-05
cover: "/images/projects/iot/aethermon/cover.webp"
---

## Tentang Project
AetherMon adalah monitoring system ringan untuk home lab. Targetnya simpel:
baca data lingkungan, kirim status, dan bikin overview cepat tanpa setup ribet.

## Tujuan
- Monitoring data secara real time
- Logging sederhana untuk analisis
- Alert dasar untuk kondisi abnormal

## Hardware yang Dipakai
- ESP32 S3
- Sensor DHT22
- OLED 0.96 inch I2C
- Kabel jumper dan breadboard

## Instalasi
### 1. Clone repo
```bash
git clone https://github.com/jcjustcloud/aethermon
```

### 2. Setup PlatformIO
- Buka project di VS Code
- Pastikan board ESP32 S3 terdeteksi
- Jalankan build dan upload

### 3. Konfigurasi
Update `config.h` untuk SSID dan password WiFi, lalu flash ulang.

## Demo
Screenshot dan foto hardware akan diisi setelah wiring final rapi.
