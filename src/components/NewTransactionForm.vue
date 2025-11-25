<script setup lang="ts">
import { useTransactionStore } from '@/stores/TrasactionStore' // Corrigi o typo 'Trasaction' se houver
import { reactive } from 'vue'

const transactionStore = useTransactionStore()

const dataForm = reactive({
  title: '',
  value: 0,
})

const handleSubmit = () => {
  const data = { ...dataForm }

  const success = transactionStore.addTransaction(data)

  if (success) {
    clearData()
  }
}

const clearData = () => {
  dataForm.title = ''
  dataForm.value = 0

  transactionStore.clearErrors()
}
</script>

<template>
  <div class="mt-6">
    <h2 class="text-lg font-semibold">Adicione uma nova transação</h2>

    <div class="divider my-1"></div>

    <form
      action=""
      class="flex flex-col gap-2"
      @submit.prevent="handleSubmit"
    >
      <fieldset class="fieldset">
        <label class="fieldset-legend"> O que você negociou? </label>
        <input
          type="text"
          class="input w-full"
          :class="{ 'border-red-500': transactionStore.errors.title }"
          placeholder="Digite aqui"
          v-model="dataForm.title"
        />
        <span
          v-if="transactionStore.errors.title"
          class="text-red-400 text-xs"
        >
          {{ transactionStore.errors.title }}
        </span>
      </fieldset>

      <fieldset class="fieldset">
        <label class="fieldset-legend">
          Valor (negativo - despesa, positivo- saldo)
        </label>
        <input
          type="number"
          class="input w-full"
          :class="{ 'border-red-500': transactionStore.errors.value }"
          step="0.01"
          placeholder="Insira o valor"
          v-model="dataForm.value"
        />
        <span
          v-if="transactionStore.errors.value"
          class="text-red-400 text-xs"
        >
          {{ transactionStore.errors.value }}
        </span>
      </fieldset>

      <button class="btn w-full bg-primary shadow-2xl">
        Adicionar transação
      </button>
    </form>
  </div>
</template>
