<template>
<h1 :style="`color: #${color};`" >
    <slot></slot>
</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TitleComponent extends Vue {
    @Prop({
        type: String
    })
    color!: string;
}
</script>
