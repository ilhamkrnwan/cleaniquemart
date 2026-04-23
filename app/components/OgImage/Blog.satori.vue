<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  category?: string
  author?: string
  publishedLabel?: string
  logoUrl?: string
  companyLogoUrl?: string
}>(), {
  description: '',
  category: 'Artikel',
  author: 'Tim CleaniqueMart',
  publishedLabel: '',
  logoUrl: '',
  companyLogoUrl: '',
})
</script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 54px;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.14), transparent 28%),
        linear-gradient(135deg, #0b2046 0%, #0a2553 46%, #2e7d32 100%);
      color: #ffffff;
      font-family: Outfit, Arial, sans-serif;
    "
  >
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 28px;">
      <div
        style="
          display: flex;
          align-items: center;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 0;
        "
      >
        Cleanique Mart
      </div>

      <div style="display: flex; align-items: center; gap: 14px;">
        <div
          style="
            display: flex;
            align-items: center;
            padding: 10px 18px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.1);
            color: #dce9ff;
            font-size: 22px;
            font-weight: 700;
          "
        >
          Blog Cleanique Mart
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            padding: 10px 18px;
            border-radius: 999px;
            background: rgba(67, 160, 71, 0.2);
            color: #d4f0da;
            font-size: 22px;
            font-weight: 700;
          "
        >
          {{ category }}
        </div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 22px; max-width: 980px;">
      <div
        style="
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          color: rgba(255, 255, 255, 0.82);
          font-size: 22px;
          font-weight: 600;
        "
      >
        <span>{{ author }}</span>
        <span v-if="publishedLabel">/</span>
        <span v-if="publishedLabel">{{ publishedLabel }}</span>
      </div>

      <h1
        style="
          margin: 0;
          font-size: 60px;
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: 0;
        "
      >
        {{ title }}
      </h1>

      <p
        v-if="description"
        style="
          margin: 0;
          max-width: 900px;
          color: rgba(255, 255, 255, 0.84);
          font-size: 28px;
          line-height: 1.48;
        "
      >
        {{ description }}
      </p>
    </div>

    <div
      style="
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        padding-top: 28px;
        border-top: 1px solid rgba(255, 255, 255, 0.16);
      "
    >
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 20px; color: rgba(255, 255, 255, 0.78);">
          Peluang Bisnis 2026
        </div>
        <div style="font-size: 18px; color: rgba(212, 240, 218, 0.95);">
          Cleanique Mart by PT Indotech Berkah Abadi
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.08);
          font-size: 18px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.92);
        "
      >
        PT Indotech Berkah Abadi
      </div>
    </div>
  </div>
</template>
