<template>
  <div class="flex-1 grid grid-cols-6 md:grid-cols-12 px-2 py-4 overflow-hidden">
    <div
      class="relative col-span-6 col-start-1 md:col-span-10 md:col-start-2 xl:col-span-10 xl:col-start-2 flex flex-col"
      ref="formWrapper">

      <span class="block overflow-hidden flex flex-col items-center text-center pb-10"><span class="relative block">
          <h1 class="heading-1 transition delay-150">Contact Us</h1>
          <p class="text-md font-semibold">
            If you have an enquiry regarding the online shop or a general
            enquiry for our Customer Services department, please contact us
            by completing the form below.
          </p>
        </span></span>
      <div>
        <form class="grid flex-row w-full grid-cols-1 lg:grid-cols-2 md:gap-4 font-semibold" @submit="onSubmit">
          <div class="flex-grow pb-6">
            <div class="relative flex w-full">
              <input id="firstName" name="firstName" type="text"
                class="peer h-10 w-full border-b border-black pl-1 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="First Name" />
              <label for="firstName"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-700 peer-focus:text-sm">First
                Name *</label>

            </div>
          </div>
          <div class="flex-grow pb-6">
            <div class="relative flex w-full">
              <input id="lastName" name="lastName" type="text"
                class="peer h-10 w-full border-b border-black pl-1 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="Last Name" />
              <label for="lastName"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-700 peer-focus:text-sm">Last
                Name</label>
            </div>
          </div>
          <div class="flex-grow pb-6">
            <div class="relative flex w-full">

              <input id="email" name="email" type="text"
                class="peer h-10 w-full border-b border-black pl-1 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="Email Address" />
              <label for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-700 peer-focus:text-sm">Email
                Address *</label>
            </div>
          </div>
          <!--? DROPDOWN MENU WRAPPER -->
          <div class="relative flex-grow pb-6">
            <div class="flex items-center w-full">
              <!---->
              <div class="relative select-input w-full cursor-pointer cursor-pointer">
                <div
                  class="transform absolute w-2 h-2 -translate-y-1/2 right-0.5 top-1/2 transform transform-all ease-ease-1 duration-300"
                  style="width: 10px; height: 10px">
                  <div class="icon" style="">
                  </div>

                </div>
                <select
                  class="text-black w-full bg-transparent border-b border-black h-10 py-2 px-0 outline-none cursor-pointer"
                  type="select">

                  <option class="text-slate-500">Enquiry type *</option>
                  <option value="deliveries">Deliveries</option>
                  <option value="orders">Orders</option>
                  <option value="payments">Payments</option>
                  <option value="product/stock">Product/Stock</option>
                  <option value="returns">Returns</option>
                  <option value="shipping">Shipping</option>
                  <option value="promotion">Promotion</option>
                  <option value="website/technical">Website/Technical</option>

                </select>
                <!--? OPTIONS DROPDOWN - END -->
              </div>
              <!---->
            </div>
            <!---->
          </div>
          <div class="flex-grow lg:col-span-2 pb-6">
            <div class="relative placeholder-colour-fix">
              <textarea placeholder="Write your message here*"
                class="outline-none text-black text-sm border border-solid border-black bg-transparent font-semibold tracking-wide w-full p-2 h-48 placeholder:text-slate-700 resize-none"
                maxlength="10000" ref="textAreaInput"></textarea>
            </div>
          </div>
          <div class="flex-grow pb-6 lg:col-start-2">
            <button
              class="flex items-center transition-all duration-400 ease-1 primary bg-black font-medium text-sm font-medium tracking-wide text-white p-1 py-3 px-2 mx-0 justify-self-end flex-1 w-full justify-between hover:bg-slate-700"
              type="submit" @click="messageDisplay">
              <div class="relative order-1">
                <span class="label whitespace-nowrap" v-if="submitTextIsVisible">Submit</span>
                <span class="motion-reduce:hidden label whitespace-nowrap" viewBox="0 0 24 24"
                  v-if="processingMessageIsVisible">Processing...</span>
              </div>
            </button>
          </div>

        </form>
      </div>
    </div>

    <!--? MESSAGE MODAL -->
    <div
      class="fixed grid place-content-center top-0 left-0 right-0 bottom-0 bg-transparent overflow-hidden shadow-lg shadow-violet-500/50 border-white-400 modal-overlay"
      v-if="modalIsVisible">
      <!--  -->
      <div class="absolute flex justify-between align-content-center col-span-6 col-start-0 top-5 left-10 right-10 bottom-5 md:col-span-2 md:col-start-2 
            xl:col-span-2 xl:col-start-2  flex flex-col text-center w-100 y-100 text-slate-800 bg-violet-100
            animate-slidein modal-inner">
        <div class="pt-8">
          <h1 class="heading-1 mt-4 md:mt-6 invisible animate-modalTitleFadeIn" ref="modalTitle">Thank You!</h1>
          <p class="text-md m-2 invisible animate-modalTextFadeIn" ref="modalText">Our Customer Services department will
            be in
            touch shortly.
          </p>
        </div>
        <div class="lg:col-start-2 w-2/1 md:w-1/2 mx-auto mt-6 z-40">
          <button
            class="transition-all duration-400 ease-1 primary bg-black font-medium text-base font-medium tracking-wide text-white p-1 py-3 px-2 w-full hover:bg-slate-700 invisible animate-modalButtonFadeIn"
            type="submit" @click="closeModal">
            <div class="relative order-1">Place another query</div>
          </button>
        </div>
        <div class="mt-6 mr-6 mb-4 invisible animate-modalLinksFadeIn">
          <p class="uppercase text-right -mb-2 font-bold italic">While you wait why not visit</p>
          <hr />
          <div class="font-medium web-links-wrapper mt-2 text-right">
            <a :href="newArrivalsUrl" class="hover:font-bold transition linear">NEW IN - </a>
            <a :href="mensUrl" class="hover:font-bold transition linear">MENS - </a>
            <a :href="womensUrl" class="hover:font-bold transition linear">WOMENS - </a>
            <a :href="homewareUrl" class="hover:font-bold transition linear">HOME</a>
          </div>




        </div>
      </div>
    </div>
    <!--? MESSAGE MODAL - END -->


  </div>
</template>

<script>

import { ref, onMounted } from 'vue'

export default {

    setup() {
    
    // REFS
    const formWrapper = ref(null)
    const textAreaInput = ref(null)
    let modalIsVisible = ref(false)
    let processingMessageIsVisible = ref(false)
    let submitTextIsVisible = ref(true)
    let dropdownIsVisible = ref(false)
    let formSubmitEffect = ref(false)

    // MODAL CTA LINKS
    const newArrivalsUrl = "https://www.paulsmith.com/uk/new-arrivals";
    const mensUrl = "https://www.paulsmith.com/uk/mens";
    const womensUrl ="https://www.paulsmith.com/uk/womens";
    const homewareUrl = "https://www.paulsmith.com/uk/homeware";

    // FORM FADE IN WHEN MOUNTED
    onMounted(() => {
      formFadeInOnPageLoad()
    })

    const formFadeInOnPageLoad = () => {
      formWrapper.value.classList.add("animate-formFadeIn")
    } 
   // FORM FADE IN WHEN MOUNTED - END

  const onSubmit = (e) => {
    e.preventDefault()

    processingMessageIsVisible.value = true
    submitTextIsVisible.value = false
    formSubmitEffect.value = true

    setTimeout(() => {
      formWrapper.value.classList.remove("animate-formFadeIn");
      formWrapper.value.classList.add("animate-formSubmitEffect");

    }, 1800)
  }

  // ACKNOWLEDGEMENT MESSAGE MODAL DISPLAY
  const messageDisplay = () => {  

    setTimeout(() => {
      modalIsVisible.value = true

      if (modalIsVisible.value) {
        document.body.style.overflowY = "hidden"
      }

    }, 3000)
  }
   // ACKNOWLEDGEMENT MESSAGE MODAL DISPLAY - END

  const closeModal = () => {
    modalIsVisible.value = false
    processingMessageIsVisible.value = false
    submitTextIsVisible.value = true
    formWrapper.value.classList.remove("animate-formSubmitEffect");
    formWrapper.value.classList.add("animate-formFadeIn");
    document.body.style.overflowY = "scroll"
    textAreaInput.value.value = ""
  }

    return { formWrapper, textAreaInput, modalIsVisible, processingMessageIsVisible, submitTextIsVisible, dropdownIsVisible, formSubmitEffect, formFadeInOnPageLoad, onSubmit, messageDisplay, closeModal, newArrivalsUrl, mensUrl, womensUrl, homewareUrl }
  }

};
</script>

<style scoped>

:root {
  --delay: "1s";
  --duration: "150ms"
}

body,
h1 {
  margin: 0;
  padding: 0;
  display: block;
  font-size: 2em;
}

hr {
height: 5px;
background: linear-gradient(to left, #EDE9FE 1%, #C1AADD 20% );
margin-top: 5px;
}

.heading-1 {
  font-size: clamp(42px, 10vw, 86px);
  font-weight: 500;
}

.text-md {
  font-size: 20px;
}

.font-medium {
  font-weight: 500;
}

.px-2 {
  padding-left: 16px;
  padding-right: 16px;
}

.py-4 {
  padding-bottom: 32px;
}

.mt-8 {
  margin-top: 3rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.pb-6 {
  padding-bottom: 48px;
}

.modal-overlay {
  background: #C1AADD;
}

.modal-inner {
  overflow: hidden;
}

.web-links-wrapper {
  text-transform: uppercase;
}

textarea {
  padding: 10px;
}

input, textarea {
  letter-spacing: .5px;
}

</style>
