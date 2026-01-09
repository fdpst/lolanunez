<template>
    <v-container>
        <v-row color="grey lighten-4">
            <v-col
                v-for="item in computedheaders"
                :key="item.text"
                cols="12"
                md="4"
            >
                <div class="my-card">
                    <v-card
                        :to="{ path: item.path }"
                        class="mx-auto justify-center"
                    >
                        <v-card-title class="justify-center">
                            <span
                                class="title font-weight-light grey--text text--darken-1 text-uppercase"
                                >{{ item.text }}</span
                            >
                        </v-card-title>

                        <v-card-text
                            class="headline font-weight-bold justify-center text-center"
                        >
                            <v-icon
                                color="#1d2735"
                                large
                                center
                                justify-center
                                class="justify-center"
                            >
                                {{ item.icon }}
                            </v-icon>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    path: "/citas-peluqueria?tipo=peluqueria",
                    icon: "mdi-calendar",
                    text: "Calendario",
                    user: [1]
                },
                {
                    path: "/lista-empleados-app",
                    icon: "mdi-account",
                    text: "Empleados",
                    user: [1]
                },
                {
                    path: "",
                    icon: "mdi-home",
                    text: "Localizaciones",
                    user: [1]
                },
                {
                    path: "/horario",
                    icon: "mdi-clock",
                    text: "Horario Localizaciones",
                    user: [1]
                },
                {
                    path: "/lista-servicios",
                    icon: "mdi-pencil",
                    text: "Localizaciones",
                    user: [1]
                },
                {
                    path: "/lista-usuarios-app",
                    icon: "mdi-account",
                    text: "Clientes",
                    user: [1]
                }
                /*{
                        path: '/lista-promociones',
                        icon: 'mdi-image',
                        text: 'Promociones',
                        user: [1, 2]
                    }*/
            ]
        };
    },

    computed: {
        user() {
            return this.$store.getters.getuser;
        },
        computedheaders: function() {
            if (this.user.role != 0) {
                return this.items.filter(x => {
                    return x.user.some(userole => userole == this.user.role);
                });
            }
        }
    }
};
</script>

<style>
.my-card {
    transition: all 0.5s;
}

.v-card {
    transition: all 0.5s;
}

.my-card:hover .v-card {
    background-color: #205b4f !important;
}

.my-card:hover .v-card .v-card__text i {
    color: #fff !important;
}

.my-card:hover .v-card .v-card__title span {
    color: #fff !important;
}
</style>
