<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  tagline?: string
  logoUrl?: string
  companyLogoUrl?: string
  eyebrow?: string
}>(), {
  description: '',
  tagline: '',
  logoUrl: '',
  companyLogoUrl: '',
  eyebrow: 'Cleanique Mart',
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
        radial-gradient(circle at top right, rgba(67, 160, 71, 0.22), transparent 32%),
        linear-gradient(135deg, #071833 0%, #0a2553 52%, #1565c0 100%);
      color: #ffffff;
      font-family: Outfit, Arial, sans-serif;
    "
  >
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 28px;">
      <div style="display: flex; align-items: center; gap: 18px;">
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
        <div
          style="
            display: flex;
            align-items: center;
            padding: 10px 18px;
            border: 1px solid rgba(255, 255, 255, 0.22);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            font-size: 22px;
            font-weight: 700;
          "
        >
          {{ eyebrow }}
        </div>
      </div>

      <div
        style="
          display: flex;
          align-items: center;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(67, 160, 71, 0.18);
          color: #ccefd3;
          font-size: 22px;
          font-weight: 700;
        "
      >
        {{ tagline }}
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 900px;">
      <div
        style="
          display: flex;
          align-items: center;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #dce9ff;
          font-size: 22px;
          font-weight: 600;
        "
      >
        Peluang Bisnis Sabun Curah Premium
      </div>

      <h1
        style="
          margin: 0;
          font-size: 64px;
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
          max-width: 860px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 28px;
          line-height: 1.5;
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
          Cleanique Mart by PT Indotech Berkah Abadi
        </div>
        <div style="font-size: 18px; color: rgba(204, 239, 211, 0.95);">
          cleaniquemart.vercel.app
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
