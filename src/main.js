import { createApp } from 'vue'

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
  faUserSecret,
  faUser,
  faCartShopping,
  faSearch,
  faPlay,
  fas,
} from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faCartShopping, faSearch, faPlay, fas, faTwitter, faInstagram, faFacebookF, faLinkedinIn)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
