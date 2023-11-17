<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="root">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content text-start">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue"
import { Modal } from "bootstrap"

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const root = ref(null)
    let modal: Modal

    onMounted(() => {
      const el: Element = root.value!
      modal = new Modal(el)
      el.addEventListener("hidden.bs.modal", () => {
        emit("update:modelValue", false)
      })
    })

    watch(
      () => props.modelValue,
      (value) => {
        if (value) {
          modal?.show()
        } else {
          emit("close")
          modal?.hide()
        }
      }
    )

    return { root }
  },
})
</script>
