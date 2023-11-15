import { reactive } from 'vue';
import db from './db.json'

export const store = reactive({
  db: db
})

//'ABOUT','PROJECTS','SERVICES','BLOG','CONTACT'