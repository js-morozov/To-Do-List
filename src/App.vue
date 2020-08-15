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
          <ul class="menu__list">
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
          </ul>
        </nav>
        <div class="category">
          <div class="category__add">
            <span class="category__add-title">Categories</span>
            <button class="category__button">
              <i data-feather="plus" class="category__button-icon"></i>
            </button>
          </div>
          <nav class="category-menu">
            <ul class="category-menu__list">
              <li class="category-menu__item">
                <a href="#" class="category-menu__link">
                  <span class="category-menu__label category-menu__label--blue"></span>
                  <span class="category-menu__text">Work</span>
                  <span class="category__button category-menu__button">
                    <i data-feather="more-horizontal" class="category__button-icon"></i>
                  </span>
                </a>
              </li>
              <li class="category-menu__item">
                <a href="#" class="category-menu__link">
                  <span class="category-menu__label category-menu__label--orange"></span>
                  <span class="category-menu__text">Personal</span>
                  <span class="category__button category-menu__button">
                    <i data-feather="more-horizontal" class="category__button-icon"></i>
                  </span>
                </a>
              </li>
              <li class="category-menu__item">
                <a href="#" class="category-menu__link">
                  <span class="category-menu__label category-menu__label--red"></span>
                  <span class="category-menu__text">Shopping</span>
                  <span class="category__button category-menu__button">
                    <i data-feather="more-horizontal" class="category__button-icon"></i>
                  </span>
                </a>
              </li>
              <li class="category-menu__item">
                <a href="#" class="category-menu__link">
                  <span class="category-menu__label category-menu__label--green"></span>
                  <span class="category-menu__text">Education</span>
                  <span class="category__button category-menu__button">
                    <i data-feather="more-horizontal" class="category__button-icon"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex-center">
          <base-button />
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
import BaseButton from "@/components/controls/BaseButton";

export default {
  name: "App",
  components: {
    BaseButton,
  },
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
  padding-bottom: 32px;
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

.category {
  padding: 20px 0 16px;
  &__add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px 4px 24px;
    &-title {
      font-size: 12px;
      line-height: 1.4;
      color: #808080;
      font-weight: 500;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  }
  &__button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    background: none;
    user-select: none;
    &:focus {
      outline: none;
    }
    &-icon {
      font-size: 24px;
      color: #b3b3b3;
    }
  }

  &-menu {
    &__list {
    }
    &__item {
    }
    &__link {
      display: flex;
      align-items: center;
      padding: 8px 24px 8px 30px;
      &:hover {
        background-color: #f9f9fb;
        .category-menu__button {
          opacity: 1;
          visibility: visible;
        }
      }
    }
    &__label {
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 18px;
      &--blue {
        background-color: #007eff;
      }
      &--orange {
        background-color: #faa948;
      }
      &--red {
        background-color: #ff5b5b;
      }
      &--green {
        background-color: #15b371;
      }
    }
    &__text {
      font-size: 14px;
      line-height: 1.6;
      color: #47415e;
      font-weight: 500;
    }
    &__button {
      opacity: 0;
      visibility: hidden;
      margin-left: auto;
      transition: all ease-in 0.2s;
    }
  }
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
