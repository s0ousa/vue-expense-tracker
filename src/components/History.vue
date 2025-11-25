<script setup lang="ts">
import { useTransactionStore } from '@/stores/TrasactionStore'
import TransactionCard from './TransactionCard.vue'

const transactionStore = useTransactionStore()
</script>
<template>
  <div class="mt-6">
    <h2 class="text-xl font-semibold">Histórico</h2>
    <div class="divider mt-1"></div>
    <div>
      <TransactionCard
        v-for="(transaction, id) in transactionStore.transactions"
        :key="id"
        :title="transaction.title"
        :value="transaction.value"
      />
    </div>
  </div>
</template>
