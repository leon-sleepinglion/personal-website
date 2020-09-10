<template>
  <div>
    <vue-typed-js :strings="['Python', 'JavaScript', 'PHP', 'Bash']" :loop="true">
      <h1 class="is-size-2">
        Hey, I speak
        <span class="typing has-background-link"></span>
      </h1>
    </vue-typed-js>
    <br />
    <p
      class="is-size-4"
    >Kia ora! I am a systems developer and a tech-savvy who is hungry for knowledge. Kinda active in local tech meetups, you'd probably find me in Auckland's Python or AWS meetups. Having a dream of getting involved in the next big things.</p>
    <hr />
    <p
      class="is-size-4"
    >Originally hailing from Malaysia, I am currently living and working in New Zealand, enjoying life at my new home. I usually kill my spare time playing Dota2 or joining local hiking group.</p>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>