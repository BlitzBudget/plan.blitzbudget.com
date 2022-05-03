
const SidebarStore = {
  showSidebar: true,
  sidebarLinks: [],
  displaySidebar(value) {
    this.showSidebar = value;
  }
};

const SidebarPlugin = {
  install(Vue) {
    let app = new Vue({
      data: {
        sidebarStore: SidebarStore
      }
    });

    Vue.prototype.$sidebar = app.sidebarStore;
  }
};

export default SidebarPlugin;
