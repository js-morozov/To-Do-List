<template>
  <div id="app">
    <main class="app-container">
      <aside class="sidebar">
        <div class="sidebar__header">
          <a href="#" class="sidebar__header-logo">
            <img src="@/assets/images/logo.svg" alt="To do list" />
            <span>To Do Manager</span>
          </a>
        </div>
      </aside>
      <section class="contentbar">
        <div class="contentbar__header">
          <h1 class="pagetitle">All Tasks</h1>
          <input type="text" class="search" placeholder="Search..." />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import "reset-css";

export default {
  name: "App",
};
</script>

<style lang="scss">
body {
  background: #f9f9fb;
  padding: 24px;
}
.app-container {
  display: flex;
}
.sidebar {
  width: 300px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
  margin-right: 32px;
  &__header {
    display: flex;
    align-items: center;
    height: 80px;
    padding-left: 24px;
    &-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        font-size: 16px;
        line-height: 1.4;
        color: #120e21;
        font-weight: bold;
        padding: 0 12px;
      }
    }
  }
}
.contentbar {
  flex-grow: 1;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(205, 209, 212, 0.64);
  border-radius: 8px;
  padding: 40px 48px;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.pagetitle {
  font-size: 32px;
  line-height: 1.2;
  color: #120e21;
  font-weight: bold;
}
.search {
  width: 325px;
  height: 40px;
  padding: 0 32px 0 48px;
  background: #ffffff;
  border: 1px solid #d6d6d6;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  background: #ffffff url(./assets/images/search.svg) 16px center no-repeat;
  &:focus {
    outline: none;
  }
}
</style>
