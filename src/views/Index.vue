<template>
  <div>
    <index-navbar />
    <section class="header relative items-center flex h-screen max-h-860-px">
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 pb-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-gray-700">
              Zenchain Protocol
            </h2>
            <p class="mt-4 text-xl leading-relaxed text-gray-600">
              A Dedicated Blockchain That Is Optimized Specifically For DeFi And
              NFTs
            </p>
            <div class="mt-12">
              <a
                href="https://docs.zenchain.co"
                target="_blank"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-green-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/zenchainprotocol"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                target="_blank"
              >
                Github Star
              </a>
            </div>
          </div>
        </div>

        <ImgHeader
          class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"
          alt="..."
        />
      </div>
    </section>

    <section class="pb-40 relative bg-gray-200">
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12 md:w-6/12 lg:w-4/12 px-4 md:px-4 mr-auto ml-auto">
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-600"
            >
              <img
                alt="..."
                src="@/assets/img/wood.png"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-green-600 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">What is ZenChain?</h4>
                <p class="text-md font-light mt-2 text-white">
                  ZenChain is a dedicated blockchain that is optimized
                  specifically for DeFi and NFT applications
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto" data-aos="fade-up">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-sitemap"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Scalable, high-throughput Blockchain
                    </h6>
                    <p class="mb-4 text-gray-600">
                      Proof-of-Stake blockchain, built using the Cosmos SDK
                      which runs on top of the Tendermint Core consensus engine.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto" data-aos="fade-up">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fa fa-link"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">Cross-Chain</h6>
                    <p class="mb-4 text-gray-600">
                      Support cross-chain with bridge solution between Ethereum,
                      Binance smartchain, Tron and more
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto" data-aos="fade-right">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-newspaper"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Built for Defi & NFTs
                    </h6>
                    <p class="mb-4 text-gray-600">
                      With built-in core DApp for Defi & NFTs - ZenChain is
                      ready for Defi & NFTs ecosystem from start
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto" data-aos="fade-left">
                    <div
                      class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-drafting-compass"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Supports smart contracts
                    </h6>
                    <p class="mb-4 text-gray-600">
                      ZenChain supports smart contracts, enabled by CosmWasm,
                      EVM technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-5">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">POWER BY</h2>
          </div>
        </div>
        <div
          class="flex flex-row flex-wrap items-center justify-items-center justify-evenly"
        >
          <div data-aos="fade-right" class="pw w-full sm:w-3/12">
            <img src="@/assets/img/zen/pw-binance.png" />
          </div>
          <div data-aos="fade-right" class="pw w-full sm:w-3/12 mt-5 mb-5">
            <img src="@/assets/img/zen/pw-cosmos.png" />
          </div>
          <div data-aos="fade-down" class="pw w-full sm:w-3/12">
            <img src="@/assets/img/zen/pw-ethereum.png" />
          </div>
          <div data-aos="fade-left" class="pw w-full sm:w-6/12">
            <img src="@/assets/img/zen/pw-polkadot.png" />
          </div>
          <div data-aos="fade-left" class="pw w-full sm:w-6/12 -mt-10">
            <img src="@/assets/img/zen/pw-tron.png" />
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-20 bg-gray-300">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-5">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">PARTNERS</h2>
          </div>
        </div>
        <div
          class="flex flex-row flex-wrap items-center justify-items-center justify-center"
        >
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/venture-matrix.png" />
          </div>
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/venture-sequaoia.png" />
          </div>
          <div data-aos="fade-left" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/venture-sourcecode.png" />
          </div>
          <div data-aos="fade-left" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/venture-yanyuan.png" />
          </div>
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/backed-ico-pantera.jpg" />
          </div>
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/backed-crypto-revolution.jpg" />
          </div>
        </div>
        <div
          class="flex flex-row flex-wrap items-center justify-items-center justify-center"
        >
          <div data-aos="fade-left" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/backed-crypto-revolution-channel.jpg" />
          </div>
          <div data-aos="fade-left" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/slowmist.png" />
          </div>
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/beosin.png" />
          </div>
          <div data-aos="fade-right" class="vt sm:w-6/12">
            <img src="@/assets/img/zen/cryptomansion.jpg" />
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">CORE TEAM</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="(mem, key) in team"
            :key="key"
            class="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4"
            :data-aos="key == 1 ? 'fade-down' : 'fade-up'"
          >
            <div class="px-6">
              <img
                alt="..."
                :src="require('@/assets/img/zen/' + mem.img)"
                class="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">{{ mem.name }}</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  {{ mem.job }}
                </p>
                <div class="mt-6">
                  <button
                    class="bg-green-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    @click="gotoUrl(mem.linkedin)"
                  >
                    <i class="fab fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-20 pb-20 bg-gray-300">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">FAQ</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="container mx-auto my-5">
            <Accordion :contents="faq"></Accordion>
          </div>
        </div>
      </div>
    </section>

    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from '@/components/Navbars/IndexNavbar.vue'
import FooterComponent from '@/components/Footers/Footer.vue'

import ImgHeader from '@/components/Headers/Image.vue'

import Accordion from '@/components/Accordion.vue'
import faq from '@/assets/faq.json'
import features from '@/assets/features.json'
import team from '@/assets/team.json'

export default {
  data() {
    return {
      faq,
      team,
      features,
    }
  },
  components: {
    IndexNavbar,
    FooterComponent,
    ImgHeader,
    Accordion,
  },
  methods: {
    gotoUrl: function(url) {
      window.open(url)
    },
  },
}
</script>
<style scoped>
.pw {
  filter: brightness(0);
}
.pw {
  width: 200px;
}
.vt {
  width: 150px;
}
.vt img {
  width: 80%;
  margin: 10px;
  border-radius: 10px;
}
.vt {
  transition: all 1s ease;
  filter: grayscale(1);
}
.vt:hover {
  transform: scale(1.1);
  filter: grayscale(0);
}
</style>
