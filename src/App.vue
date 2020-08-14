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
        <nav class="menu menu--divider">
          <li class="menu__item">
            <a href="#" class="menu__link">
              <i data-feather="grid" class="menu__icon"></i>
              <span class="menu__text">All Tasks</span>
              <span class="menu__count">24</span>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              <i data-feather="star" class="menu__icon"></i>
              <span class="menu__text">Starred</span>
              <span class="menu__count"></span>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              <i data-feather="alert-circle" class="menu__icon"></i>
              <span class="menu__text">Important</span>
              <span class="menu__count">1</span>
            </a>
          </li>
        </nav>
        <nav class="menu">
          <li class="menu__item">
            <a href="#" class="menu__link">
              <i data-feather="check-circle" class="menu__icon"></i>
              <span class="menu__text">Completed</span>
              <span class="menu__count">7</span>
            </a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">
              <i data-feather="trash-2" class="menu__icon"></i>
              <span class="menu__text">Deleted</span>
              <span class="menu__count">16</span>
            </a>
          </li>
        </nav>
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
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  background: #f9f9fb;
  padding: 24px;
}
.app-container {
  display: flex;
}
.sidebar {
  width: 288px;
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

.menu {
  &__item {
    margin-bottom: 4px;
  }
  &__link {
    display: flex;
    align-items: center;
    padding: 8px 0;
    &:hover {
      background: linear-gradient(
        90deg,
        rgba(147, 120, 255, 0.15) 1.31%,
        rgba(249, 249, 251, 0) 99.94%
      );
      box-shadow: inset 4px 0px 0px #9378ff;
      .menu__icon {
        color: #9378ff;
      }
    }
  }
  &__icon {
    color: #47415e;
    margin-left: 24px;
  }
  &__text {
    font-size: 14px;
    line-height: 1.6;
    color: #47415e;
    font-weight: 500;
    padding-left: 12px;
  }
  &__count {
    font-size: 14px;
    line-height: 1.6;
    color: #47415e;
    padding-right: 24px;
    margin-left: auto;
  }
  &--divider {
    padding-bottom: 4px;
    margin-bottom: 8px;
    border-bottom: 1px solid #e9e9e9;
  }
}
</style>
