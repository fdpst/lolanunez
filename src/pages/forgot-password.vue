<script setup>
import tree1 from "@images/misc/tree1.png";
import authV2ForgotPasswordIllustrationBorderedDark from "@images/pages/auth-v2-forgot-password-illustration-dark-border.png";
import authV2ForgotPasswordIllustrationDark from "@images/pages/auth-v2-forgot-password-illustration-dark.png";
import authV2ForgotPasswordIllustrationBorderedLight from "@images/pages/auth-v2-forgot-password-illustration-light-border.png";
import authV2ForgotPasswordIllustrationLight from "@images/pages/auth-v2-forgot-password-illustration-light.png";
import logo from "@images/pages/logo.png";
import authV2MaskDark from "@images/pages/mask-v2-dark.png";
import authV2MaskLight from "@images/pages/mask-v2-light.png";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import { useRoute, useRouter } from "vue-router";
import { VForm } from "vuetify/components/VForm";

const authThemeImg = useGenerateImageVariant(
    authV2ForgotPasswordIllustrationLight,
    authV2ForgotPasswordIllustrationDark,
    authV2ForgotPasswordIllustrationBorderedLight,
    authV2ForgotPasswordIllustrationBorderedDark,
    true
);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);

definePage({
    meta: {
        layout: "blank",
        unauthenticatedOnly: true
    }
});

const route = useRoute();
const router = useRouter();
const email = ref("");
const refVForm = ref();
const loading = ref(false);

const errors = ref({
    email: undefined
});

const forgotPassword = async () => {
    loading.value = true;
    try {
        const res = await $api("/api/forgot-password", {
            method: "POST",
            body: {
                email: email.value
            },
            onResponseError({ response }) {
                if (response?._data?.error?.email != null) {
                    errors.value.email = response._data.errors.email;
                } else {
                    errors.value.email = response._data.message;
                }
            }
        });

        loading.value = false;
        await nextTick(() => {
            router.replace(route.query.to ? String(route.query.to) : "/");
        });
    } catch (err) {
        loading.value = false;
        console.error(err);
    }
};

const onSubmit = () => {
    refVForm.value?.validate().then(({ valid: isValid }) => {
        if (isValid) forgotPassword();
    });
};
</script>

<template>
    <RouterLink to="/">
        <div class="auth-logo d-flex align-center gap-x-3">
            <VNodeRenderer :nodes="themeConfig.app.logo" />
            <h1 class="auth-title">
                {{ themeConfig.app.title }}
            </h1>
        </div>
    </RouterLink>

    <VRow class="auth-wrapper" no-gutters>
        <VCol md="8" class="d-none d-md-flex position-relative">
            <div
                class="d-flex align-center justify-center w-100 h-100 pa-10 pe-0"
            >
                <VImg max-width="300" :src="logo" class="auth-illustration" />
            </div>

            <img class="auth-footer-mask" height="360" :src="authThemeMask" />

            <!-- <img
                :src="tree1"
                alt="tree image"
                height="140"
                class="auth-footer-tree"
            /> -->
        </VCol>

        <VCol
            cols="12"
            md="4"
            class="auth-card-v2 d-flex align-center justify-center"
            style="background-color: rgb(var(--v-theme-surface));"
        >
            <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
                <VCardText>
                    <h4 class="text-h4 mb-1">
                        ¿Olvidó su contraseña? 🔒
                    </h4>
                    <p class="mb-0">
                        Ingresa tu correo electónico y enviaremos las
                        instrucciones para reestablecer tu contraseña
                    </p>
                </VCardText>

                <VCardText>
                    <VForm ref="refVForm" @submit.prevent="onSubmit">
                        <VRow>
                            <!-- email -->
                            <VCol cols="12">
                                <VTextField
                                    v-model="email"
                                    autofocus
                                    label="Email"
                                    placeholder="johndoe@email.com"
                                    type="email"
                                    :rules="[requiredValidator, emailValidator]"
                                    :error-messages="errors.email"
                                />
                            </VCol>

                            <!-- Reset link -->
                            <VCol cols="12">
                                <VBtn block type="submit" :loading="loading">
                                    Enviar enlace de cambio
                                </VBtn>
                            </VCol>

                            <!-- Volver al inicio de sesión -->
                            <VCol cols="12">
                                <RouterLink
                                    class="d-flex align-center justify-center"
                                    :to="{
                                        name: 'pages-authentication-login-v2'
                                    }"
                                >
                                    <VIcon
                                        icon="ri-arrow-left-s-line"
                                        class="flip-in-rtl"
                                    />
                                    <span>Volver al inicio de sesión</span>
                                </RouterLink>
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VCol>
    </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
