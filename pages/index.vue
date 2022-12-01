<template>
  <div>
    <!--Header-->
    <div class="header bg-success pt-5 pb-7">
      <div class="container">
        <div class="header-body">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="pr-5">
                <h1 class="display-2 text-white font-weight-bold mb-0">Are you Struggling Financially?</h1>
                <h2 class="display-4 text-white font-weight-light">Let me tell you that financial planning is the first
                  step to go.</h2>
                <p class="text-white mt-4">Not only does financial planning help you see where the money is being spent
                  but it helps you see the potential you have in making your life better.</p>
                <div class="mt-5">
                  <nuxt-link to="/dashboard" class="btn btn-neutral my-2">Start Planning</nuxt-link>
                  <a href="https://app.blitzbudget.com" class="btn btn-default my-2">Start Actively Managing
                    Finances</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row pt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                        <i class="ni ni-single-02"></i>
                      </div>
                      <h5 class="h3">Privacy</h5>
                      <p class="small">We will not store your data without your authorization, Full Stop. No surprised
                        there!</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                        <i class="ni ni-watch-time"></i>
                      </div>
                      <h5 class="h3">Take Control</h5>
                      <p class="small">Money can take a form of its own and the money has the potential to control you
                        if you are not
                        in control.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-lg-5 pt-4">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                        <i class="ni ni-tag"></i>
                      </div>
                      <h5 class="h3">Free</h5>
                      <p class="small">We believe financial planning should be available to everyone for free.</p>
                    </div>
                  </div>
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                        <i class="ni ni-money-coins"></i>
                      </div>
                      <h5 class="h3">Future Planning</h5>
                      <p class="small">See your Past, Present and Future Financial Life in one page. True data cannot
                        lie.</p>
                    </div>
                  </div>
                </div>
              </div>
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
    <section class="py-6 pb-9 bg-default">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <h2 class="display-3 text-white">Financial Transparency</h2>
          <p class="lead text-white">
            We are completely commited to letting you realize your financial plan to the best of our abilities by
            providing capabilities to understand your expenses, express all your income and start planning for your
            future for you to realize a financial plan.
          </p>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 mt--7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-primary text-white rounded-circle mb-4">
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h4 class="h3 text-primary text-uppercase">Write down your Expenses</h4>
                    <p class="description mt-3">Writing down is pretty important to see everything that is going on.
                      Expense is part behaviour, part necessity.</p>
                    <div>
                      <span class="badge badge-pill badge-primary">Bills</span>
                      <span class="badge badge-pill badge-primary">Mortgages</span>
                      <span class="badge badge-pill badge-primary">Insurance</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-success text-white rounded-circle mb-4">
                      <i class="ni ni-money-coins"></i>
                    </div>
                    <h4 class="h3 text-success text-uppercase">Understanding your Income</h4>
                    <p class="description mt-3">Seeing what you earn in the completeness of one page can be eye opening.
                      Seeing it in conjunction with Expenses is wisdom!</p>
                    <div>
                      <span class="badge badge-pill badge-success">Wages</span>
                      <span class="badge badge-pill badge-success">Investments</span>
                      <span class="badge badge-pill badge-success">Interests</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape bg-gradient-warning text-white rounded-circle mb-4">
                      <i class="ni ni-vector"></i>
                    </div>
                    <h4 class="h3 text-warning text-uppercase">Future Planning</h4>
                    <p class="description mt-3">Plan to save for the one thing that you have always wanted to do, Be it
                      for buying a home, investing for your retirement or travel.</p>
                    <div>
                      <span class="badge badge-pill badge-warning">Travel</span>
                      <span class="badge badge-pill badge-warning">Car</span>
                      <span class="badge badge-pill badge-warning">Home</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/landing-1.png" class="img-fluid" alt="Landing image">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Clean Interface</h1>
              <p>Finances can be confusing, we understand it is complicated. We worked very hard to produce a clean
                interface that works like magic.</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-settings-gear-65"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Fluid interface to help plan</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-html5"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Simple 3 step planning process</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div>
                      <div class="badge badge-circle badge-success mr-3">
                        <i class="ni ni-satisfied"></i>
                      </div>
                    </div>
                    <div>
                      <h4 class="mb-0">Simulation of your plan at the final stage</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <img src="~/static/img/theme/landing-2.png" class="img-fluid" alt="Landing image 2">
          </div>
          <div class="col-md-6">
            <div class="pr-md-5">
              <h1>Simulate your plan</h1>
              <p>After you are done with planning. Simulate your plan and see exactly when you would reach your goal and
                how to achieve them.</p>
              <nuxt-link to="/dashboard" class="font-weight-bold text-info mt-5">Start Planning</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="~/static/img/theme/landing-3.png" class="img-fluid" alt="Landing image 3">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h1>Integrate your plan</h1>
              <p>Planning is not the end but the start of taking control of your finances. If you are happy with your
                plan, integrate your plan with our application to keep track of your progress.</p>
              <a href="https://app.blitzbudget.com" class="font-weight-bold text-warning mt-5">Explore our
                application</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-7 section-nucleo-icons bg-white overflow-hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">Thats it!</h2>
            <p class="lead">
              If you are still curious, check our blogs and learning platforms to know more about finances.
            </p>
            <div class="btn-wrapper">
              <a href="https://blog.blitzbudget.com" class="btn btn-primary">View our blogs</a>
              <a href="https://learn.blitzbudget.com" target="_blank" rel="noopener"
                class="btn btn-default mt-3 mt-md-0">More about finances</a>
            </div>
          </div>
        </div>
        <div class="blur--hover">
          <nuxt-link to="/dashboard">
            <div class="icons-container blur-item mt-5">
              <!-- Center -->
              <i class="icon ni ni-diamond"></i>
              <!-- Right 1 -->
              <i class="icon icon-sm ni ni-album-2"></i>
              <i class="icon icon-sm ni ni-app"></i>
              <i class="icon icon-sm ni ni-atom"></i>
              <!-- Right 2 -->
              <i class="icon ni ni-bag-17"></i>
              <i class="icon ni ni-bell-55"></i>
              <i class="icon ni ni-credit-card"></i>
              <!-- Left 1 -->
              <i class="icon icon-sm ni ni-briefcase-24"></i>
              <i class="icon icon-sm ni ni-building"></i>
              <i class="icon icon-sm ni ni-button-play"></i>
              <!-- Left 2 -->
              <i class="icon ni ni-calendar-grid-58"></i>
              <i class="icon ni ni-camera-compact"></i>
              <i class="icon ni ni-chart-bar-32"></i>
            </div>
            <span class="blur-hidden h5 text-info">Isn't it time to start planning now?</span>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="py-7">
      <div class="container">
        <div class="row row-grid justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="display-3">Do you love this awesome <span class="text-success">financial planner?</span>
            </h2>
            <p class="lead">Cause if you do, then you could also help others fix their financial lifes. You may know a
              friend or two who really needs this right now. Why not share it with them?</p>
            <div class="btn-wrapper">
              <a href="mailto:?subject=Check this out&body=I just found this application, Check this out - https://plan.blitzbudget.com"
                class="btn btn-success btn-icon mb-3 mb-sm-0">
                <span class="btn-inner--icon"><i class="ni ni-email-83"></i></span>
                <span class="btn-inner--text">Share by Email</span>
                <span class="badge badge-md badge-pill badge-floating badge-danger border-white">now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Tooltip } from 'element-ui'
export default {
  layout: 'AuthLayout',
  name: 'home-page',
  components: {
    [Tooltip.name]: Tooltip
  }
};
</script>
