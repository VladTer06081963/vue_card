<script>
import { ref } from 'vue';

export default {
  setup() {
    const cardCount = ref('');
    const cards = ref([]);
    const isLightMode = ref(false);

    const toggleTheme = () => {
      isLightMode.value = !isLightMode.value;
    };

    const generateCards = () => {
      const count = parseInt(cardCount.value, 10);

      if (isNaN(count) || count <= 0) {
        alert('Введите положительное число!');
        return;
      }

      // if (count > 10) {
      //   alert('Можно создать не более 10 карточек!');
      //   return;
      // }

      cards.value = Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        paragraph: `Paragraph ${i + 1}`,
        avatar: `https://picsum.photos/seed/Влад Тер ${i + 1}/64`,
      }));
    };

    return {
      cardCount,
      cards,
      isLightMode,
      toggleTheme,
      generateCards,
    };
  },
};
</script>


<template lang="pug">
section.about
  h2 
    span.red Введите 
    span.green количество 
    span.yellow карточек 
  
  .input-container
    input#cardCountInput(
      v-model="cardCount"
      type="number"
      min="1"
      placeholder="Введите количество карточек"
    )
    button#generateButton(@click="generateCards") Сгенерировать
    button#toggleButton(@click="toggleTheme") Переключить фон

  #cardsContainer(:class="{ light: isLightMode }")
    .card(v-for="card in cards" :key="card.id")
      img.avatar(:src="card.avatar")
      h1 {{ card.title }}
      p {{ card.paragraph }}
</template>


<style lang="sass" scoped>
body
  background-color: black
  font-family: Arial, sans-serif
  margin: 20px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  transition: background-color 0.3s ease // Плавный переход фона
  background-color: black
  color: white // Цвет текста для контраста с чёрным фоном

  &.light
    background-color: white
    color: black 
  // Цвет текста для контраста с белым фоном

button#toggleButton
  padding: 10px 20px
  font-size: 16px
  cursor: pointer
  border: none
  border-radius: 5px
  background-color: #007bff
  color: white
  transition: background-color 0.3s ease
  &:hover
      background-color: #0056b3

h2
  text-align: center
  margin-bottom: 20px
  span
    color: brown
    margin-bottom: 10px
  span.red
    color: red
  span.green
    color: green
  span.yellow
    color: yellow
    margin-bottom: 20px
// p
//   color: blue
  
.input-container
  text-align: center
    display: flex
    gap: 10px
    margin: 20px

  input#cardCountInput
    padding: 10px
    font-size: 16px
    border: 1px solid #ccc
    border-radius: 5px

  button#generateButton
    padding: 10px 20px
    font-size: 16px
    color: #fff
    background-color: #007BFF
    border: none
    border-radius: 5px
    cursor: pointer

    &:hover
      background-color: #0056b3
    

#cardsContainer
  display: flex
  flex-wrap: wrap
  gap: 15px
  justify-content: center
  width: 100%


@property --a
  syntax: '<angle>'
  initial-value: 0deg
  inherits: false

.card
  overflow: hidden
  position: relative
  width: min(12.5em, 80vmin)
  aspect-ratio: 1
  border-radius: 0.5em

  display: flex
  flex-direction: column // Вертикальное размещение текста
  justify-content: center
  align-items: center
  text-align: center
  padding: 1em
  font: clamp(1em, 2vw + 2vh, 1.5em) sans-serif
  // color: #fff 
  // Белый цвет текста для контраста
  
  .avatar
    border-radius: 15px

  h1
    margin: 0 0 0.5em // Отступ снизу для заголовка
    font-size: 1.2em // Размер шрифта заголовка

  p
    margin: 0 // Убираем лишние отступы
    font-size: 1em // Размер шрифта параграфа

  &::before
    position: absolute
    z-index: -1
    inset: -1em
    border: solid 1.25em
    border-image: conic-gradient(from var(--a), #669900, #99cc33, #ccee66, #006699, #3399cc, #990066, #cc3399, #ff6600, #ff9900, #ffcc00, #669900) 1
    filter: blur(0.75em)
    animation: rotate-gradient 4s linear infinite
    content: ''

@keyframes rotate-gradient
  to
    --a: 1turn
</style>
