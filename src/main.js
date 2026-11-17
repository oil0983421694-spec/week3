import './style.css'
import heroImg from './assets/hero.png'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="flex min-h-screen items-start justify-center bg-slate-100 px-4 pt-10">
    <div class="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg">
      <h2 class="text-xl font-bold text-slate-900">
        สวัสดี Tailwind
      </h2>
      <p class="mt-2 text-slate-600">
        การ์ดใบแรกของฉัน
      </p>
      <button id="counter" class="mt-4 rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800">
        เริ่มเลย
      </button>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))