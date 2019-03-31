<template>
  <v-flex xs12 lg12 mb-3>
    <p class="title">
      {{ work.company }}
    </p>
    <v-data-table
      :headers="headers"
      :items="work.contents"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.from }} - {{ props.item.to }}</td>
        <td class="text-xs-right">
          {{ props.item.title }}
        </td>
        <td class="text-xs-right">
          {{ props.item.description }}
        </td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: () => {
        return ''
      }
    },
    headers: {
      type: Array,
      default: () => {
        return ''
      }
    }
  }
}
</script>
