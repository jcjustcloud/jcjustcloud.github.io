---
title: "System Prompt Design"
description: "Mendesain instruksi dasar untuk menjaga perilaku AI tetap konsisten"
category: "intermediate"
date: 2026-05-05
---

## Apa itu System Prompt Design
System prompt design adalah cara menyusun instruksi dasar yang menjadi arah
perilaku AI. Isinya biasanya mencakup role, batasan, prioritas, format output,
dan cara menghadapi input yang ambigu.

## Kapan Dipakai
- Membuat agent atau assistant yang dipakai berulang
- Butuh tone dan format yang konsisten
- Ingin membatasi perilaku agar tetap sesuai tujuan

## Contoh
**Prompt:**
```
Kamu adalah assistant dokumentasi IoT.
Jawab dengan bahasa Indonesia yang natural.
Prioritaskan langkah praktis, sebutkan risiko wiring, dan akhiri dengan checklist.
Jika informasi kurang, tanyakan maksimal 2 pertanyaan.
```

**Output AI:**
AI akan menjawab sebagai dokumentator IoT, menjaga bahasa tetap natural,
mengangkat risiko wiring, dan memberi checklist pada akhir jawaban.

## Kenapa berhasil
Instruksi dasar mengurangi drift. Model tidak perlu menebak gaya kerja setiap
turn karena prioritas dan batasannya sudah ditentukan.
