<script setup>
import miscMaskDark from "@images/misc/misc-mask-dark.png";
import miscMaskLight from "@images/misc/misc-mask-light.png";
import tree1 from "@images/misc/tree1.png";
import tree3 from "@images/misc/tree3.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { ofetch } from "ofetch";
import { useRoute, useRouter } from "vue-router";
import { VSnackbar } from "vuetify/lib/components/index.mjs";

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark);

definePage({
    meta: {
        layout: "blank",
        unauthenticatedOnly: true
    }
});

const form = ref({
    newPassword: "",
    confirmPassword: ""
});

const route = useRoute();
const router = useRouter();

const refVForm = ref();
const isPasswordVisible = ref(false);
const isConfirmPasswordVisible = ref(false);
const isSnackbarVisible = ref(false);
const message = ref("");

console.log("qlq", csrf_token);

const resetPassword = async () => {
    try {
        const res = await ofetch("/api/update-password", {
            method: "POST",
            body: {
                _token: csrf_token,
                email: route.query.email,
                password: form.value.newPassword,
                password_confirmation: form.value.confirmPassword,
                token: route.query.token
            },
            onResponseError({ response }) {
                if (response?._data?.error?.password != null) {
                    message.value = response._data.errors.password;
                } else {
                    message.value = response._data.message;
                }
                isSnackbarVisible.value = true;
            }
        });

        if (res != "passwords.reset") {
            message.value =
                "La sesion ha expirado, debe volver a pedir un cambio de contraseña";
            isSnackbarVisible.value = true;
        } else {
            await nextTick(() => {
                router.replace(route.query.to ? String(route.query.to) : "/");
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const onSubmit = () => {
    refVForm.value?.validate().then(({ valid: isValid }) => {
        if (isValid) resetPassword();
    });
};
</script>

<template>
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
        <VCard class="auth-card pa-sm-4 pa-md-7 pa-0" max-width="460">
            <VCardText>
                <div class="d-flex align-center gap-x-3 justify-center mb-6">
                    <VNodeRenderer :nodes="themeConfig.app.logo" />

                    <h1 class="auth-title">
                        {{ themeConfig.app.title }}
                    </h1>
                </div>

                <h4 class="text-h4 mb-1">
                    Restablecer Contraseña 🔒
                </h4>
                <p class="mb-0">
                    Escribe tu nueva contraseña y asegúrese de cumplir con los
                    requerimientos.
                </p>
                <p>
                    Al confirmar se redirigirá a la página de inicio de sesión.
                </p>
            </VCardText>

            <VCardText>
                <VForm ref="refVForm" @submit.prevent="onSubmit">
                    <VRow>
                        <!-- password -->
                        <VCol cols="12">
                            <VTextField
                                v-model="form.newPassword"
                                autofocus
                                label="Nueva contraseña"
                                placeholder="············"
                                :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="
                                    isPasswordVisible
                                        ? 'ri-eye-off-line'
                                        : 'ri-eye-line'
                                "
                                @click:append-inner="
                                    isPasswordVisible = !isPasswordVisible
                                "
                                :rules="[passwordValidator, requiredValidator]"
                            />
                        </VCol>

                        <!-- Confirm Password -->
                        <VCol cols="12">
                            <VTextField
                                v-model="form.confirmPassword"
                                label="Confirmar contraseña"
                                placeholder="············"
                                :type="
                                    isConfirmPasswordVisible
                                        ? 'text'
                                        : 'password'
                                "
                                :append-inner-icon="
                                    isConfirmPasswordVisible
                                        ? 'ri-eye-off-line'
                                        : 'ri-eye-line'
                                "
                                @click:append-inner="
                                    isConfirmPasswordVisible = !isConfirmPasswordVisible
                                "
                                :rules="[
                                    passwordValidator,
                                    requiredValidator,
                                    confirmedValidator(
                                        form.confirmPassword,
                                        form.newPassword
                                    )
                                ]"
                            />
                        </VCol>

                        <!-- reset password -->
                        <VCol cols="12">
                            <VBtn block type="submit">
                                Confirmar
                            </VBtn>
                        </VCol>

                        <!-- Volver al inicio de sesión -->
                        <VCol>
                            <div class="d-flex align-center justify-center">
                                <RouterLink :to="{ name: 'login' }">
                                    <VIcon
                                        icon="ri-arrow-left-s-line"
                                        size="20"
                                        class="flip-in-rtl me-2"
                                    />
                                    <span>Volver al inicio de sesión</span>
                                </RouterLink>
                            </div>
                        </VCol>
                    </VRow>
                </VForm>
            </VCardText>
        </VCard>

        <!-- <div class="d-flex gap-x-2 auth-footer-start-tree">
            <img class="d-none d-md-block" :src="tree3" :height="120" :width="67">
            <img class="d-none d-md-block align-self-end" :src="tree3" :height="70" :width="40">
        </div>

        <img :src="tree1" class="auth-footer-end-tree d-none d-md-block" :width="97" :height="210"> -->

        <!-- bg img -->
        <img
            class="auth-footer-mask d-none d-md-block"
            :src="authThemeMask"
            height="172"
        />
    </div>

    <VSnackbar v-model="isSnackbarVisible" location="top end" color="error">
        {{ message }}
    </VSnackbar>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
