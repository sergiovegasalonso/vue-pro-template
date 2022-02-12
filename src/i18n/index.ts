import { createI18n } from "vue-i18n";
import HelloWorldi18nEn from "@/components/hello-world/i18n/HelloWorld.i18n.en";
import HelloWorldi18nEs from "@/components/hello-world/i18n/HelloWorld.i18n.es";

export default createI18n({
    locale: "es",
    messages: {
        en: {
            ...HelloWorldi18nEn,
        },
        es: {
            ...HelloWorldi18nEs,
        },
    },
});