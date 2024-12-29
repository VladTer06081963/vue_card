<template lang="pug">
header.header
  h1 My Nuxt App
  nav
    ul
      li: a(href="/") Home
      li: a(href="/about") About
</template>

<style lang="sass" scoped>
.header
  background: #333
  color: white
  padding: 10px

  ul
    list-style: none
    padding: 0
    display: flex
    gap: 15px

    a
      color: white
      text-decoration: none
      &:hover
        text-decoration: underline
        cursor: pointer
        color: #0070f3
</style>
