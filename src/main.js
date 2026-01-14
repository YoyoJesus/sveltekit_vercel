import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import { initEmailForm } from './emailForm'

const app = mount(App, {
  target: document.getElementById('app'),
})

// Initialize email form after app mounts
setTimeout(() => {
  initEmailForm();
}, 100);

export default app
