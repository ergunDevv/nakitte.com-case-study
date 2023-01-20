<template>
<div>
  
  <div class="example3-container">

    <div class="example3-example3">
      <img
        src="/Assets/image1beyaz4231-849w-800w.png"
        alt="IMAGE1beyaz4231"
        class="example3-i-m-a-g-e1beyaz"
      />
      <img
        :src="`${gameData.background_image}`"
        alt="IMAGE14231"
        class="example3-i-m-a-g-e1"
      />
      <div class="example3-cta">
        <button class="example3-buttonbtnprimarycolorbtnround">
          <span class="example3-text btnText" @click="showProjectCard"
            ><span>Yatırım Yap</span></span
          >
        </button>
      </div>
      <span class="example3-text02"><span>{{gameData.name}}</span></span>
      <div class="example3-information1">
        <div class="example3-frame3">
          <span class="example3-text06"><span>Rating</span></span>
          <span class="example3-text04"><span>Playtime</span></span>
          <span class="example3-text08">
            <span>Metacritic puanı : </span>
          </span>
        </div>
      </div>
      <div class="example3-information2">
        <div class="example3-frame31">
          <span class="example3-text12"><span>{{gameData.rating}}</span></span>
          <span class="example3-text10"><span>{{gameData.playtime}}</span></span>
          <span class="example3-text14"><span>{{gameData.metacritic}}</span></span>
        </div>
      </div>
      <div class="example3-favbutton1">
        <img
          src="/Assets/ellipse14231-8fgai-200h.png"
          alt="Ellipse14231"
          class="example3-ellipse1"
        />
        <img
          src="/Assets/heart4231-kuoe.svg"
          alt="heart4231"
          class="example3-heart"
        />
      </div>
      <div class="example3-location1">
        <img
          src="/Assets/location4231-9wi9.svg"
          alt="location4231"
          class="example3-location"
        />
        <span class="example3-text16"><span>Adana</span></span>
      </div>
      <div class="example3-investbar1">
        <span class="example3-text18"><span>₺150.000 yatırım</span></span>
        <span class="example3-text20"><span>₺450.000 kalan yatırım</span></span>
        <div class="example3-invetsbar1">
          <img
            src="/Assets/rectangle154231-a9w-200h.png"
            alt="Rectangle154231"
            class="example3-rectangle15"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
  <script setup>
import { useRouter } from "vue-router";
import { defineProps,toRaw } from 'vue';


//Getting the data and props of data
const props = defineProps(['game'])


let gameData = toRaw(props.game)
console.log("game DATA : " , gameData)

// Routing to card component
const router = useRouter();
const showProjectCard = () => {
  return router.push(`/projects/card`);
};



</script>
  
  <style scoped>
.example3-container {
  min-height: 100vh;
}
.example3-example3 {
  width: 800px;
  height: 400px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.example3-i-m-a-g-e1beyaz {
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.example3-i-m-a-g-e1 {
  top: 5px;
  left: 5px;
  width: 390px;
  height: 390px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.example3-cta {
  top: 304px;
  left: 523px;
  width: 158px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.example3-buttonbtnprimarycolorbtnround {
  display: flex;
  padding: 10px 36px;
  overflow: hidden;
  position: relative;
  align-items: center;
  border-color: transparent;
  border-radius: 200px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(67, 211, 163, 1);
}
.example3-text {
  color: var(--dl-color-default-lighttextcolor);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 28px;
  margin-right: 0;
  margin-bottom: 0;
}
.example3-text02 {
  top: 45px;
  left: 452px;
  color: rgba(67, 211, 163, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Bold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 12px;
  font-stretch: normal;
  text-decoration: none;
}
.example3-information1 {
  top: 86px;
  left: 452px;
  width: 133px;
  height: 76px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.example3-frame3 {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.example3-text04 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 20px;
  text-decoration: none;
}
.example3-text06 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 20px;
  text-decoration: none;
}
.example3-text08 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.example3-information2 {
  top: 88px;
  left: 709px;
  width: 43px;
  height: 68px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.example3-frame31 {
  top: 0px;
  left: 0px;
  width: 43px;
  height: 68px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.example3-text10 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: right;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 20px;
  text-decoration: none;
}
.example3-text12 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: right;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 20px;
  text-decoration: none;
}
.example3-text14 {
  color: rgba(34, 84, 66, 1);
  height: auto;
  font-size: 12px;
  align-self: stretch;
  font-style: Medium;
  text-align: right;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.example3-favbutton1 {
  top: 13px;
  left: 358px;
  width: 30px;
  height: 30px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.example3-ellipse1 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  position: absolute;
  border-color: transparent;
}
.example3-heart {
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.example3-location1 {
  top: 45px;
  left: 699px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
}
.example3-location {
  width: 16px;
  height: 16px;
  position: relative;
  margin-right: 4px;
}
.example3-text16 {
  color: rgba(67, 211, 163, 1);
  height: auto;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.example3-investbar1 {
  top: 223px;
  left: 452px;
  width: 300px;
  height: 38px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.example3-text18 {
  top: 24px;
  color: rgba(67, 211, 163, 1);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: center;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  text-decoration: none;
}
.example3-text20 {
  top: 26px;
  left: 184px;
  color: rgba(67, 211, 163, 1);
  height: auto;
  position: absolute;
  font-size: 10px;
  align-self: auto;
  font-style: Medium;
  text-align: right;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 12px;
  font-stretch: normal;
  text-decoration: none;
}
.example3-invetsbar1 {
  top: 0px;
  left: 0px;
  width: 300px;
  height: 20px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(137, 255, 216, 1);
}
.example3-rectangle15 {
  top: 0px;
  left: 0px;
  width: 111px;
  height: 20px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}
</style>
  