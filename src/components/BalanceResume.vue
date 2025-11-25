<script setup lang="ts">
import { useTransactionStore } from '@/stores/TrasactionStore'

const transactionStore = useTransactionStore()
</script>

<template>
  <h2 class="uppercase">Seu saldo</h2>
  <p class="text-3xl font-semibold">R$ {{ transactionStore.balance }}</p>
  <div class="flex justify-center mt-4">
    <div class="stats bg-base-100 border-base-300 border">
      <div class="stat">
        <div class="stat-title">Recebeu</div>
        <div class="stat-value font-semibold text-green-700">R$ 89,400</div>
        <div class="stat-actions"></div>
      </div>

      <div class="stat">
        <div class="stat-title">Gastou</div>
        <div class="stat-value font-semibold text-red-700">$ 89,400</div>
        <div class="stat-actions"></div>
      </div>
    </div>
  </div>
</template>
