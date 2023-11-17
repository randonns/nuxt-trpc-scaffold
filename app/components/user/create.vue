<template>
  <button type="button" class="btn btn-primary" @click="openCreateModal">
    <i class="bi-plus-circle-fill"></i> 새 사용자
  </button>
  <ClientOnly>
    <Modal title="새 사용자" v-model="createModalOpen" @close="createModalClosed">
      <div class="alert alert-danger d-flex align-items-start" role="alert" v-if="errorMessage">
        <i class="bi-exclamation-triangle-fill" style="font-size: 24px"></i>
        <div class="ms-3">
          <h4 class="alert-heading">Server Error</h4>
          <hr />
          <p class="mb-0">{{ errorMessage }}</p>
        </div>
      </div>
      <form @submit.prevent="save">
        <div class="mb-3">
          <label class="form-label">이름</label>
          <input
            type="text"
            name="name"
            class="form-control"
            :class="{
              'is-invalid': (nameMeta.dirty || nameMeta.touched) && !nameMeta.valid,
              'is-valid': (nameMeta.dirty || nameMeta.touched) && nameMeta.valid,
            }"
            placeholder="이름"
            v-model.trim="name"
          />
          <div class="invalid-feedback">{{ errors.name }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">나이</label>
          <input
            type="number"
            name="age"
            class="form-control"
            :class="{
              'is-invalid': (ageMeta.dirty || ageMeta.touched) && !ageMeta.valid,
              'is-valid': (ageMeta.dirty || ageMeta.touched) && ageMeta.valid,
            }"
            placeholder="나이"
            v-model.number="age"
          />
          <div class="invalid-feedback">{{ errors.age }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">부서</label>
          <select class="form-select" v-model.number="deptId" v-if="data">
            <option v-for="dept in data" :key="dept.id" :value="dept.id">{{ dept.name }}</option>
          </select>
        </div>
      </form>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
        <button type="button" class="btn btn-primary" @click="save"><i class="bi-save"></i> 저장</button>
      </template>
    </Modal>
  </ClientOnly>
</template>
import type { loggerLink } from "@trpc/client";

<script lang="ts" setup>
import { useForm, useField } from "vee-validate"
import { toTypedSchema } from "@vee-validate/zod"
import { z } from "zod"

const emit = defineEmits(["create"])
const { $client } = useNuxtApp()
const { data } = await $client.dept.all.useQuery()

const createModalOpen = ref(false)
const errorMessage = ref("")

const { errors, handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      name: z
        .string({ required_error: "이름을 입력하세요." })
        .min(1, { message: "이름을 입력하세요." })
        .max(100, { message: "최대 100자까지 입력할 수 있습니다." }),
      age: z
        .number({ required_error: "나이를 입력하세요." })
        .min(0, { message: "0 이하는 입력할 수 없습니다." })
        .max(150, { message: "150 이상은 입력할 수 없습니다." }),
      deptId: z.number(),
    })
  ),
  initialValues: {
    name: "",
    age: 20,
    // 부서 중 첫번째를 디폴트로 선택
    deptId: 1,
  },
})

const { value: name, meta: nameMeta } = useField("name")
const { value: age, meta: ageMeta } = useField("age")
const { value: deptId } = useField("deptId")

function openCreateModal() {
  createModalOpen.value = true
}

function createModalClosed() {
  resetForm()
}

const save = handleSubmit(async (values) => {
  try {
    await $client.user.create.mutate(values)
    createModalOpen.value = false

    // Vue의 버그로 추정:
    // 1. emit의 이벤트 핸들러에 Promise를 사용한 비동기 작업이 있는 경우
    // 2. emit과 ref 값 수정을 같은 사이클에 실행하면
    // 3. ref 값 수정시 watch 가 실행되지 않는다.
    nextTick(() => {
      emit("create")
    })
  } catch (e) {
    if (e instanceof Error) {
      const payload = JSON.parse(e.message)
      // 특정 필드와 관련된 오류인 경우에는 setFieldError 사용
      errorMessage.value = payload[0].message
    }
  }
})
</script>
