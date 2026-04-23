<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  location?: string
  address?: string
  imageUrl?: string
  logoUrl?: string
  companyLogoUrl?: string
}>(), {
  description: '',
  location: '',
  address: '',
  imageUrl: '',
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
      padding: 44px;
      gap: 36px;
      background:
        radial-gradient(circle at top left, rgba(67, 160, 71, 0.18), transparent 30%),
        linear-gradient(135deg, #071833 0%, #0a2553 56%, #1565c0 100%);
      color: #ffffff;
      font-family: Outfit, Arial, sans-serif;
    "
  >
    <div style="display: flex; flex: 1 1 0%; flex-direction: column; justify-content: space-between;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 18px;">
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
            border-radius: 999px;
            background: rgba(67, 160, 71, 0.18);
            color: #d4f0da;
            font-size: 22px;
            font-weight: 700;
          "
        >
          Mitra Resmi
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div
          v-if="location"
          style="
            display: flex;
            align-items: center;
            padding: 10px 18px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.12);
            color: #dce9ff;
            font-size: 22px;
            font-weight: 700;
          "
        >
          {{ location }}
        </div>

        <h1
          style="
            margin: 0;
            font-size: 56px;
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
            color: rgba(255, 255, 255, 0.84);
            font-size: 27px;
            line-height: 1.5;
          "
        >
          {{ description }}
        </p>

        <p
          v-if="address"
          style="
            margin: 0;
            color: rgba(204, 239, 211, 0.95);
            font-size: 22px;
            line-height: 1.55;
          "
        >
          {{ address }}
        </p>
      </div>

      <div
        style="
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 18px;
          padding-top: 26px;
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
  </div>
</template>
