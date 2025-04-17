<script setup lang="ts">
const { data: author } = await useAsyncData("author", () => queryCollection("author").first());
</script>

<template>
  <div v-if="author" class="about">
    <TheTitle>About me</TheTitle>
    <h2 class="about__name">{{ author.fullName }}</h2>
    <p class="about__caption">
      <em>{{ author.caption }}</em>
    </p>
    <!-- Personal -->
    <ul>
      <li v-for="item of author.personal" :key="item.label">
        <strong>{{ item.label }}: </strong>{{ item.value }}
      </li>
    </ul>
    <!-- Skills -->
    <h2 class="about__skills-heading">Professional skills</h2>
    <ul>
      <li v-for="item of author.skills" :key="item.category">
        <strong>{{ item.category }}: </strong>{{ item.items.join(", ") }}
      </li>
    </ul>
    <!-- Contact -->
    <h2 class="about__contact-heading">Contact me</h2>
    <p class="contact-sub-heading">Feel free to contact me via</p>
    <ul class="contact-list">
      <li v-for="item of author.contact" :key="item.href">
        <b>{{ item.name }}</b> :
        <a :href="item.href" target="_blank">{{ item.value }}</a>
      </li>
    </ul>
  </div>
  <div v-else>An error occured while fetching author's data</div>
</template>

<style lang="scss" scoped>
.about__caption {
  color: var(--color-sapphire);
  margin-bottom: 10px;
}

.about__skills-heading,
.about__contact-heading {
  margin-top: 2rem;
}

.contact-sub-heading {
  margin-top: 5px;
  margin-bottom: 5px;
}

.contact-list a {
  text-decoration: none;
  color: var(--color-sapphire);
  transition: color 0.4s ease;

  &:hover {
    color: var(--color-red);
  }
}

.about__name {
  margin-top: 10px;
}

.about h2 {
  font-size: $text-lg;
  font-weight: 600;
}

.about ul {
  list-style: none;

  li {
    margin-top: 5px;

    &::before {
      content: "-";
      margin-right: 10px;
      color: var(--color-sapphire);
    }
  }
}
</style>
