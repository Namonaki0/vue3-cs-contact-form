<template>
  <div class="flex-1 grid grid-cols-6 md:grid-cols-12 px-2 py-4">
    <div
      class="relative col-span-6 col-start-1 md:col-span-10 md:col-start-2 xl:col-span-10 xl:col-start-2 flex flex-col"
      v-if="messageDisplay">
      <span class="block overflow-hidden flex flex-col items-center text-center pb-10"><span class="relative block">
          <h1 class="heading-1">Contact Us</h1>
          <p class="text-md">
            If you have an enquiry regarding the online shop or a general
            enquiry for our Customer Services department, please contact us
            either by completing the form below.
          </p>
        </span></span>
      <div>
        <form class="grid flex-row w-full grid-cols-1 lg:grid-cols-2 md:gap-4" @submit="onSubmit">
          <div class="flex-grow pb-6">
            <div class="relative flex w-full">
              <input id="firstName" name="firstName" type="text"
                class="peer h-10 w-full border-b border-black pl-1 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="First Name" />
              <label for="firstName"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-700 peer-focus:text-sm">First
                Name *</label>

            </div>
            <!---->
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
            <!---->
          </div>
          <div class="flex-grow pb-6">
            <div class="relative flex w-full">

              <input id="email" name="email" type="email"
                class="peer h-10 w-full border-b border-black pl-1 bg-transparent text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder="Email Address" />
              <label for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-800 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-slate-700 peer-focus:text-sm">Email
                Address *</label>

            </div>
            <!---->
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
          <!---->
          <div class="flex-grow lg:col-span-2 pb-6">
            <div class="relative placeholder-colour-fix">
              <textarea placeholder="Write your message here*"
                class="outline-none text-black text-sm border border-solid border-black bg-transparent font-medium w-full p-2 h-48 placeholder:text-slate-700 resize-none"
                maxlength="10000"></textarea>
              <!---->
              <!---->
            </div>
          </div>
          <div class="flex-grow pb-6 lg:col-start-2">
            <button
              class="flex items-center transition-all duration-400 ease-1 primary bg-black font-medium text-sm font-medium text-white p-1 py-3 px-2 mx-0 justify-self-end flex-1 w-full justify-between hover:bg-slate-700"
              type="submit" @click="messageDisplay">
              <div class="relative order-1">
                <span class="label whitespace-nowrap" v-if="submitTextIsVisible">Submit</span>
                <span class="motion-reduce:hidden label whitespace-nowrap" viewBox="0 0 24 24"
                  v-if="loadingMessageIsVisible">Processing...</span>
              </div>
              <div class="-rotate-45 order-2">
                <div class="animate-spin-progress">
                  <!---->
                </div>
              </div>
              <!---->
            </button>
          </div>

          <!--? MESSAGE MODAL -->
          <div class="fixed grid place-content-center top-5 left-10 right-10 bottom-10 bg-transparent overflow-hidden"
            v-if="modalIsVisible">

            <div class=" absolute grid place-content-center inset-0 col-span-6 col-start-1 md:col-span-2 md:col-start-2
            xl:col-span-2 xl:col-start-2 px-16 py-10 flex flex-col text-center w-100 text-slate-800 bg-slate-300
            animate-slidein">
              <span class="text-3xl cursor-pointer absolute right-4 top-2" @click="closeModal">X</span>

              <h1 class="heading-1">Thank You!</h1>
              <p class="text-md">Our Customer Services department will be in touch shortly.</p>
              <div class="mt-6">
                <p>While you wait why not visit:</p>
                <div class="font-medium">
                  <a :href="this.newArrivalsUrl">NEW IN - </a>
                  <a :href="this.mensUrl">MENS - </a>
                  <a :href="this.womensUrl">WOMENS - </a>
                  <a :href="this.homewareUrl">HOME</a>
                </div>
              </div>
            </div>
          </div>
          <!--? MESSAGE MODAL - END -->

        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data:() => {
    return {
      // FORM FIELDS
      firstName: "",
      email: "",
      // ACTIONS
      modalIsVisible: false,
      loadingMessageIsVisible: false,
      submitTextIsVisible: true,
      dropdownVisible: false,
      buttonDisabled: false,
      // STYLING
      opacity: 1,
      scroll: "contain",
      // LINKS
      newArrivalsUrl: "https://www.paulsmith.com/uk/new-arrivals",
      mensUrl: "https://www.paulsmith.com/uk/mens",
      womensUrl: "https://www.paulsmith.com/uk/womens",
      homewareUrl: "https://www.paulsmith.com/uk/homeware"
    }
},
methods: {

  onSubmit(e){
    e.preventDefault()
    if (!this.firstName || !this.email) {
      console.log("enter name and email")
    } 

    setTimeout(() => {
      this.submitTextIsVisible = true
      this.loadingMessageIsVisible = false

    }, 3000)
  },
  messageDisplay() {  
    this.submitTextIsVisible = false
    this.loadingMessageIsVisible = true

    setTimeout(() => {
      this.modalIsVisible = true
      this.buttonDisabled = true

      if (this.modalIsVisible) {
        document.body.style.overflowY = "hidden"
        document.body.style.backgroundColor = "black"
      }

    }, 1000)
  },
  closeModal() {
    this.modalIsVisible = false
    if (!this.modalIsVisible) document.body.style.overflowY = "scroll"
  },

}
};
</script>

<style scoped>

*,
:after,
:before {
  --tw-ring-inset: var(--tw-empty);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, .5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
}

*,
:after,
:before {
  --tw-shadow: 0 0 #0000;
}

*,
:after,
:before {
  border-color: currentColor;
}

*,
:after,
:before {
  border: 0 solid;
  box-sizing: border-box;
}

body {
  display: grid;
  color: 
}

body,
h1 {
  margin: 0;
  padding: 0;
  display: block;
  font-size: 2em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: strong;
}
.heading-1 {
  font-size: min(max(42px, 14vw), 86px);
  font-weight: 500;
  letter-spacing: 0.01em;
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
  /* padding-top: 32px; */
}


.flex-1 {
  flex: 1 1 0%;
}

.pb-6 {
  padding-bottom: 48px;
}

.flex-grow {
  flex-grow: 1;
}

/* input,
textarea {
  color: #000000;
  background: inherit;
} */

.border-error,
.border-red {
  --tw-border-opacity: 1;
  border-color: rgba(228, 69, 72, var(--tw-border-opacity));
}


</style>
