<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
            Find us on any of these platforms
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <button
              v-for="(i, key) in social"
              :key="key"
              class="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              @click="gotoUrl(i.url)"
            >
              <i class="fab" :class="'fa-' + i.icon"></i>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://docs.zenchain.co"
                    target="_blank"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://github.com/zenchainprotocol/zenchain"
                    target="_blank"
                  >
                    Source code
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://docs.zenchain.co/network/validators"
                    target="_blank"
                  >
                    Validator
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
              >
                Other Resources
              </span>
              <ul class="list-unstyled">
                <li>
                  <router-link
                    :to="{ path: '/terms-and-conditions' }"
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                  >
                    Terms & Conditions</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ path: '/privacy-policy' }"
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    >Privacy Policy</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} ZenChain Foundation
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import social from '@/assets/social.json'

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      social,
    }
  },
  methods: {
    gotoUrl: function(url) {
      window.open(url)
    },
  },
}
</script>
