<script setup lang="ts">
import { GenderEnum, PopularityEnum, LengthEnum } from '~/interfaces/enum'
import { OptionsState, NameObject } from '~/interfaces'
import { names } from './data';
const options = reactive<OptionsState> ({
  gender: GenderEnum.BOY,
  popularity: PopularityEnum.TREND,
  length: LengthEnum.MEDIUM
});


const findMatchedNames = (options): NameObject[] => {
  return names.map(name => {
    if (
      name.gender === options.gender &&
      name.popularity === options.popularity &&
      name.length === options.length
    ) {
      return name;
    }
  }).filter(x => x);
}

const generateName = () => {
  const matchedNames = findMatchedNames(options);
  const selectedNames = matchedNames.map(x => x.name).filter(x => x);
  if (selectedNames.length === 0) {
    return alert("לא נמצאו שמות");
  }
  alert(selectedNames.join(', '));
}

</script>

<template>
  <div class="container">
    <h1>שם לתינוק</h1>
    <p>
      לבחור שם זה קל... בשביל זה יצרנו את הכלי הזה שיעזור לכם לבחור שם לתינוק שלכם
    </p>
    <div class="options-container">
      <div class="option-container">
        <h4>מין</h4>
        <div class="option-buttons">
          <button
            class="btn-option btn-left"
            :class="GenderEnum.BOY === options.gender && 'btn-option-active'"
            @click="options.gender = GenderEnum.BOY"
          >
          בן
          </button>
          <button
            :class="GenderEnum.UNISEX === options.gender && 'btn-option-active'"
            class="btn-option"
            @click="options.gender = GenderEnum.UNISEX"
          >
          ללא מין
          </button>
          <button
            class="btn-option btn-right"
            @click="options.gender = GenderEnum.GIRL"
            :class="GenderEnum.GIRL === options.gender && 'btn-option-active'"
          >
          בת
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>בחר פופלריות</h4>
        <div class="option-buttons">
          <button
            :class="PopularityEnum.TREND === options.popularity && 'btn-option-active'"
            class="btn-option btn-left"
            @click="options.popularity = PopularityEnum.TREND"
            >
            טרנדי
          </button>
          <button
            :class="PopularityEnum.BIBLICAL === options.popularity && 'btn-option-active'"
            class="btn-option"
            @click="options.popularity = PopularityEnum.BIBLICAL"
          >
            תנכי
          </button>
          <button
            :class="PopularityEnum.UNIQUE === options.popularity && 'btn-option-active'"
            class="btn-option btn-right"
            @click="options.popularity = PopularityEnum.UNIQUE"
            >
              מיוחד
            </button>
        </div>
      </div>
      <div class="option-container">
        <h4>בחר אורך שם</h4>
        <div class="option-buttons">
          <button
            :class="LengthEnum.LONG === options.length && 'btn-option-active'"
            class="btn-option btn-left"
            @click="options.length = LengthEnum.LONG"
          >
            ארוך
          </button>
          <button
            :class="LengthEnum.MEDIUM === options.length && 'btn-option-active'"
            @click="options.length = LengthEnum.MEDIUM"
            class="btn-option"
          >
            בינוני
          </button>
          <button
            :class="LengthEnum.SHORT === options.length && 'btn-option-active'"
            class="btn-option btn-right"
            @click="options.length = LengthEnum.SHORT"
          >
            קצר
          </button>
        </div>
        <div class="generator">
          <button
            class="btn-option btn-generator"
            @click="generateName"
            >
            חפש לי שם
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50re;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}
.option-container {
  margin-bottom: 2rem;
}

.btn-option {
  background: white;
  outline: 0.15rem solid rgb(249, 87,89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 200;
}

.btn-option:hover {
  background: rgb(236, 146, 147);
}

.btn-option-active {
  background: rgb(236, 146, 147);
  color: white;
}
.btn-left {
  border-radius: 1rem 0 0 1rem;
}

.btn-right {
  border-radius: 0 1rem 1rem 0;
}

.generator {

}

.btn-generator {
  margin-top: 4rem;
  border-radius: 1rem;
}
</style>