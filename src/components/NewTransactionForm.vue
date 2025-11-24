<script setup lang="ts"></script>
<template>
  <div class="mt-6">
    <h2 class="text-lg font-semibold">Adicione uma nova transação</h2>
    <div class="divider my-1"></div>
    <form action="" class="flex flex-col gap-2">
      <fieldset class="fieldset">
        <label class="fieldset-legend">O que você negociou?</label>
        <input type="text" class="input w-full" placeholder="Digite aqui" />
      </fieldset>
      <fieldset class="fieldset">
        <label class="fieldset-legend">Valor (negativo - despesa, positivo- saldo)</label>
        <input type="number" class="input w-full" placeholder="Insira o valor" />
      </fieldset>
      <button class="btn w-full">Adicionar transação</button>
    </form>
  </div>
</template>
