import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export type Transaction = {
  id?: string
  title: string
  value: number
}

export const useTransactionStore = defineStore('transactions', () => {
  const transactions = ref<Transaction[]>([])
  const errors = reactive({
    title: ``,
    value: ``,
  })

  const balance = computed(() => {
    return transactions.value.reduce((acumulador, transaction) => {
      return acumulador + transaction.value
    }, 0)
  })

  const addTransaction = (transaction: Transaction) => {
    if (validateTransaction(transaction)) {
      transaction.id = crypto.randomUUID()
      transactions.value.push(transaction)
      console.log(transactions.value)
      return `ok`
    }
  }

  const validateTransaction = (transaction: Transaction) => {
    clearErrors()
    let isValid = true

    transaction.value = Number(transaction.value)

    if (transaction.title.trim() == '') {
      isValid = false
      errors.title = `Insira um titúlo válido`
    }

    if (!transaction.value || transaction.value == 0) {
      isValid = false
      errors.value = `Insira um valor válido`
    }

    return isValid
  }

  const clearErrors = () => {
    for (const key in errors) {
      errors[key as keyof typeof errors] = ``
    }
  }

  const doubleCount = computed(() => {})

  function increment() {}

  return {
    balance,
    transactions,
    errors,
    addTransaction,
    clearErrors,
  }
})
