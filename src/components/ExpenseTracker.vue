<script setup lang="ts">
import BalanceResume from './BalanceResume.vue'
import History from './History.vue'
import NewTransactionForm from './NewTransactionForm.vue'
</script>

<template>
  <div class="my-10 mx-auto max-w-lg px-6">
    <h1 class="text-3xl mb-4 font-semibold">Despesas</h1>

    <BalanceResume />
    <History />
    <NewTransactionForm />
  </div>
</template>
