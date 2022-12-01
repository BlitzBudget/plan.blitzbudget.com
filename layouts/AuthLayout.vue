<template>
  <div :class="layoutClass" class="auth-layout">
    <base-nav v-model="showMenu" type="light" :transparent="true" menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main" expand="lg">
      <div slot="brand" class="navbar-wrapper">
        <nuxt-link class="navbar-brand" to="/">
          <h1 class="logo-header">BlitzBudget</h1>
        </nuxt-link>
      </div>

      <template>
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <h1 class="logo-header">BlitzBudget</h1>
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" @click="showMenu = false">
                <span>Start Planning</span>
                <span>Start Actively Managing Finances</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="d-lg-none">
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <nuxt-link to="/dashboard" class="btn btn-neutral btn-icon" rel="noopener" aria-label="Start Planning">
              <span class="btn-inner--icon">
                <i class="ni ni-chart-pie-35 mr-2"></i>
              </span>
              <span class="nav-link-inner--text">Start Planning</span>
            </nuxt-link>
          </li>
        </ul>
      </template>
    </base-nav>

    <div class="main-content">
      <nuxt></nuxt>
    </div>

    <footer class="py-5" id="footer-main">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-lg-left text-muted">
              © {{ year }} <a href="https://blitzbudget.com" class="font-weight-bold ml-1" target="_blank"
                rel="noopener">BlitzBudget</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a href="https://blitzbudget.com/privacy" class="nav-link" target="_blank" rel="noopener">Privacy Policy</a>
              </li>
              <li class="nav-item">
                <a href="https://blitzbudget.com/terms" class="nav-link" target="_blank"
                  rel="noopener">Terms of Service</a>
              </li>
              <li class="nav-item">
                <a href="https://blog.blitzbudget.com" class="nav-link" target="_blank" rel="noopener">Blog</a>
              </li>
              <li class="nav-item">
                <a href="https://blitzbudget.com/alexa" class="nav-link" target="_blank"
                  rel="noopener">Alexa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import BaseNav from '~/components/argon-core/Navbar/BaseNav.vue';

export default {
  components: {
    BaseNav,
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      year: new Date().getFullYear(),
      pageClass: 'login-page',
    };
  },
  computed: {
    title() {
      return `${this.$route.name} Page`;
    },
    layoutClass() {
      let exceptions = ['index', 'home']
      if (!exceptions.includes(this.$route.name)) {
        return 'bg-default'
      } else {
        return ''
      }
    }
  },
  methods: {
    closeMenu() {
      document.body.classList.remove('nav-open');
      this.showMenu = false;
    },
  },
  watch: {
    '$route.path'() {
      if (this.showMenu) {
        this.closeMenu();
      }
    }
  }
};
</script>
<style lang="scss">
.auth-layout {
  min-height: 100vh;
}

.logo-header {
  color: white;
  text-transform: capitalize;
}
</style>
