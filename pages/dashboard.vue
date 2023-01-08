<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Income!</h1>
              <p class="text-lead text-white">Let us Understand your Income!</p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Gross Income / Year </small>
              </div>
              <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
                <form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative class="mb-3" name="Income" :rules="{ required: true }"
                    prepend-icon="fa fa-money" placeholder="Income" v-model="model.income">
                  </base-input>
                  <i class="fa fa-money" aria-hidden="true"></i>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Next</base-button>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'AuthLayout',
  data() {
    return {
      model: {
        income: ''
      }
    };
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    }
  }
};
</script>
