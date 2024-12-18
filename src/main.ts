import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faLock, faArrowRight, faGithub);

import "./assets/style.css";

createApp(App).use(router).
component('font-awesome-icon', FontAwesomeIcon).
mount("#app");
