---
title: "Constraint Based Prompting"
description: "Mengunci batasan output supaya jawaban lebih terarah"
category: "intermediate"
date: 2026-05-05
---

## Apa itu Constraint Based Prompting
Constraint based prompting adalah teknik memberi batasan eksplisit pada output.
Batasan bisa berupa format, panjang jawaban, gaya bahasa, sumber data, atau hal
yang tidak boleh dilakukan.

## Kapan Dipakai
- Output harus punya format tertentu
- Jawaban perlu singkat dan tidak melebar
- Task punya aturan jelas yang harus dipatuhi

## Contoh
**Prompt:**
```
Jelaskan risiko power supply pada project ESP32.
Batasi jawaban menjadi 5 poin, tiap poin maksimal 1 kalimat, dan jangan bahas kode.
```

**Output AI:**
- Drop tegangan bisa menyebabkan brownout.
- Beban WiFi saat transmit butuh arus puncak lebih besar.
- Regulator murah sering panas saat beban tinggi.
- Kabel panjang dapat menambah voltage drop.
- Kapasitor dekat board membantu meredam lonjakan.

## Kenapa berhasil
Constraint membuat model tahu batas mainnya. Hasilnya lebih mudah dipakai karena
format, panjang, dan topik sudah dikunci dari awal.
