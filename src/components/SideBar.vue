<template>
  <div>
    <h1 class="is-size-1">LEON WEE</h1>
    <br />
    <ul>
      <li>
        <router-link
          to="/"
          class="is-size-5 has-text-white"
          exact-active-class="has-text-primary"
        >About Me</router-link>
      </li>
      <p class="has-text-grey-light">|</p>
      <li>
        <router-link
          to="/work"
          class="is-size-5 has-text-white"
          exact-active-class="has-text-primary"
        >Work Experience</router-link>
      </li>
      <p class="has-text-grey-light">|</p>
      <li>
        <a href="https://www.medium.com/@leonweecs" target="_blank" class="has-text-white is-size-6">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'medium']" />
          </span>
        </a>
        <a href="https://github.com/leon-sleepinglion" target="_blank" class="has-text-white is-size-6">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/leonweecs/" target="_blank" class="has-text-white is-size-6">
          <span class="icon">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>