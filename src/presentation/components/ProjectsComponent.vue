
  <script setup>
import CardComponent from "./CardComponent.vue";
import { defineProps, watch, ref } from "vue";
const props = defineProps(["firstObjectOfGamesRef"]);
const game = ref([]);

watch(() => {
  game.value = props.firstObjectOfGamesRef;
});
</script>


<template>
  <div class="projeler-container">
    <div class="projeler-projeler">
      <div class="projeler-example3">
        <div>
          <CardComponent v-bind:key="game.id" :game="game" />
        </div>
      </div>
      <div class="projeler-example5">
        <img
          src="/Assets/image14236-vnm7-400h.png"
          alt="IMAGE14236"
          class="projeler-i-m-a-g-e11"
        />
        <div class="projeler-cta1">
          <button class="projeler-buttonbtnprimarycolorbtnround1">
            <span class="projeler-text22 btnText"
              ><span>Yatırım Yap</span></span
            >
          </button>
        </div>
        <span class="projeler-text24"><span>Lorem İpsum</span></span>
        <div class="projeler-information11">
          <div class="projeler-frame32">
            <span class="projeler-text26"><span>Yıllık getiri</span></span>
            <span class="projeler-text28"><span>Dönem</span></span>
            <span class="projeler-text30">
              <span>Yatırım için kalan süre</span>
            </span>
          </div>
        </div>
        <div class="projeler-information21">
          <div class="projeler-frame33">
            <span class="projeler-text32"><span>%15</span></span>
            <span class="projeler-text34"><span>12 ay</span></span>
            <span class="projeler-text36"><span>60 gün</span></span>
          </div>
        </div>
        <div class="projeler-favbutton11">
          <img
            src="/Assets/ellipse14236-i7e-200h.png"
            alt="Ellipse14236"
            class="projeler-ellipse11"
          />
        </div>
        <div class="projeler-location11">
          <img
            src="/Assets/location4236-nxul.svg"
            alt="location4236"
            class="projeler-location1"
          />
          <span class="projeler-text38"><span>Adana</span></span>
        </div>
        <div class="projeler-investbar11">
          <span class="projeler-text40"><span>₺150.000 yatırım</span></span>
          <span class="projeler-text42"
            ><span>₺450.000 kalan yatırım</span></span
          >
          <div class="projeler-invetsbar11">
            <img
              src="/Assets/rectangle154236-pcm-200h.png"
              alt="Rectangle154236"
              class="projeler-rectangle151"
            />
          </div>
        </div>
        <img
          src="/Assets/image1beyaz4236-lcem-800w.png"
          alt="IMAGE1beyaz4236"
          class="projeler-i-m-a-g-e1beyaz1"
        />
      </div>
      <div class="projeler-example51">
        <img
          src="/Assets/image14236-8zt-400w.png"
          alt="IMAGE14236"
          class="projeler-i-m-a-g-e12"
        />
        <div class="projeler-cta2">
          <button class="projeler-buttonbtnprimarycolorbtnround2">
            <span class="projeler-text44 btnText"
              ><span>Yatırım Yap</span></span
            >
          </button>
        </div>
        <span class="projeler-text46"><span>Lorem İpsum</span></span>
        <div class="projeler-information12">
          <div class="projeler-frame34">
            <span class="projeler-text48"><span>Yıllık getiri</span></span>
            <span class="projeler-text50"><span>Dönem</span></span>
            <span class="projeler-text52">
              <span>Yatırım için kalan süre</span>
            </span>
          </div>
        </div>
        <div class="projeler-information22">
          <div class="projeler-frame35">
            <span class="projeler-text54"><span>%15</span></span>
            <span class="projeler-text56"><span>12 ay</span></span>
            <span class="projeler-text58"><span>60 gün</span></span>
          </div>
        </div>
        <div class="projeler-favbutton12">
          <img
            src="/Assets/ellipse14236-jgkh-200h.png"
            alt="Ellipse14236"
            class="projeler-ellipse12"
          />
        </div>
        <div class="projeler-location12">
          <span class="projeler-text60"><span>Adana</span></span>
        </div>
        <div class="projeler-investbar12">
          <span class="projeler-text62"><span>₺150.000 yatırım</span></span>
          <span class="projeler-text64"
            ><span>₺450.000 kalan yatırım</span></span
          >
          <div class="projeler-invetsbar12">
            <img
              src="/Assets/rectangle154237-7x9v-200h.png"
              alt="Rectangle154237"
              class="projeler-rectangle152"
            />
          </div>
        </div>
        <img
          src="/Assets/image1beyaz4237-hzs-800w.png"
          alt="IMAGE1beyaz4237"
          class="projeler-i-m-a-g-e1beyaz2"
        />
      </div>
      <div class="projeler-projeleroksa">
        <img
          src="/Assets/ellipse14237-nqu-200h.png"
          alt="Ellipse14237"
          class="projeler-ellipse13"
        />
        <img
          src="/Assets/arrowright4237-h6h8.svg"
          alt="arrowright4237"
          class="projeler-arrowright"
        />
      </div>
      <div class="projeler-projeleroksa1">
        <img
          src="/Assets/ellipse14237-nqu-200h.png"
          alt="Ellipse14237"
          class="projeler-ellipse14"
        />
        <img
          src="/Assets/arrowright4237-su3y.svg"
          alt="arrowright4237"
          class="projeler-arrowright1"
        />
      </div>
      <span class="projeler-text66">
        <span>Yatırım yapılabilecek projeler</span>
      </span>
    </div>
  </div>
</template>

  
  <style scoped>
.projeler-container {
  min-height: 100vh;
}
.projeler-projeler {
  width: 1583px;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.projeler-example3 {
  top: 169px;
  left: 444px;
  width: 800px;
  height: 400px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-i-m-a-g-e1beyaz {
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-i-m-a-g-e1 {
  top: 5px;
  left: 5px;
  width: 390px;
  height: 390px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-cta {
  top: 304px;
  left: 523px;
  width: 158px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
}
.projeler-buttonbtnprimarycolorbtnround {
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
.projeler-text {
  color: var(--dl-color-default-lighttextcolor);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 28px;
  margin-right: 0;
  margin-bottom: 0;
}
.projeler-text02 {
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
.projeler-information1 {
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
.projeler-frame3 {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.projeler-text04 {
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
.projeler-text06 {
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
.projeler-text08 {
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
.projeler-information2 {
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
.projeler-frame31 {
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
.projeler-text10 {
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
.projeler-text12 {
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
.projeler-text14 {
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
.projeler-favbutton1 {
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
.projeler-ellipse1 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  position: absolute;
  border-color: transparent;
}
.projeler-heart {
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  position: absolute;
}
.projeler-location1 {
  top: 45px;
  left: 699px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
}
.projeler-location {
  width: 16px;
  height: 16px;
  position: relative;
  margin-right: 4px;
}
.projeler-text16 {
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
.projeler-investbar1 {
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
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-text18 {
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
.projeler-text20 {
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
.projeler-invetsbar1 {
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
.projeler-rectangle15 {
  top: 0px;
  left: 0px;
  width: 111px;
  height: 20px;
  position: absolute;
  border-color: transparent;
  border-radius: 20px;
}
.projeler-example5 {
  top: 169px;
  left: -416px;
  width: 800px;
  height: 400px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-i-m-a-g-e11 {
  top: 5px;
  left: 5px;
  width: 390px;
  height: 390px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-cta1 {
  top: 304px;
  left: 523px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
}
.projeler-buttonbtnprimarycolorbtnround1 {
  display: flex;
  padding: 10px 36px;
  overflow: hidden;
  position: relative;
  align-items: center;
  border-color: transparent;
  border-radius: 10px;
  flex-direction: column;
  background-color: rgba(67, 211, 163, 1);
}
.projeler-text22 {
  color: var(--dl-color-default-lighttextcolor);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 28px;
  margin-right: 0;
  margin-bottom: 0;
}
.projeler-text24 {
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
.projeler-information11 {
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
.projeler-frame32 {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.projeler-text26 {
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
.projeler-text28 {
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
.projeler-text30 {
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
.projeler-information21 {
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
.projeler-frame33 {
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
.projeler-text32 {
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
.projeler-text34 {
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
.projeler-text36 {
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
.projeler-favbutton11 {
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
.projeler-ellipse11 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  position: absolute;
  border-color: transparent;
}
.projeler-location11 {
  top: 45px;
  left: 699px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
}
.projeler-location1 {
  width: 16px;
  height: 16px;
  position: relative;
  margin-right: 4px;
}
.projeler-text38 {
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
.projeler-investbar11 {
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
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-text40 {
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
.projeler-text42 {
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
.projeler-invetsbar11 {
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
.projeler-rectangle151 {
  top: 0px;
  left: 0px;
  width: 111px;
  height: 20px;
  position: absolute;
  border-color: transparent;
  border-radius: 5px;
}
.projeler-i-m-a-g-e1beyaz1 {
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-example51 {
  top: 169px;
  right: -521px;
  width: 800px;
  height: 400px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-i-m-a-g-e12 {
  top: 5px;
  left: 5px;
  width: 390px;
  height: 390px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-cta2 {
  top: 304px;
  left: 523px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
}
.projeler-buttonbtnprimarycolorbtnround2 {
  display: flex;
  padding: 10px 36px;
  overflow: hidden;
  position: relative;
  align-items: center;
  border-color: transparent;
  border-radius: 10px;
  flex-direction: column;
  background-color: rgba(67, 211, 163, 1);
}
.projeler-text44 {
  color: var(--dl-color-default-lighttextcolor);
  height: auto;
  align-self: auto;
  text-align: center;
  line-height: 28px;
  margin-right: 0;
  margin-bottom: 0;
}
.projeler-text46 {
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
.projeler-information12 {
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
.projeler-frame34 {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}
.projeler-text48 {
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
.projeler-text50 {
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
.projeler-text52 {
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
.projeler-information22 {
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
.projeler-frame35 {
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
.projeler-text54 {
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
.projeler-text56 {
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
.projeler-text58 {
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
.projeler-favbutton12 {
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
.projeler-ellipse12 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  position: absolute;
  border-color: transparent;
}
.projeler-location12 {
  top: 45px;
  left: 699px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
}
.projeler-text60 {
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
.projeler-investbar12 {
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
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-text62 {
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
.projeler-text64 {
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
.projeler-invetsbar12 {
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
.projeler-rectangle152 {
  top: 0px;
  left: 0px;
  width: 111px;
  height: 20px;
  position: absolute;
  border-color: transparent;
  border-radius: 5px;
}
.projeler-i-m-a-g-e1beyaz2 {
  top: 0px;
  left: 0px;
  width: 800px;
  height: 400px;
  position: absolute;
  border-color: transparent;
  border-radius: 10px;
}
.projeler-projeleroksa {
  top: 344px;
  left: 1350px;
  width: 50px;
  height: 50px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-ellipse13 {
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-color: transparent;
}
.projeler-arrowright {
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  position: absolute;
}
.projeler-projeleroksa1 {
  top: 344px;
  left: 275px;
  width: 50px;
  height: 50px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.projeler-ellipse14 {
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  position: absolute;
  border-color: transparent;
}
.projeler-arrowright1 {
  right: 4px;
  width: 40px;
  bottom: 4px;
  height: 40px;
  position: absolute;
}
.projeler-text66 {
  top: 62px;
  left: 461px;
  color: rgba(34, 84, 66, 1);
  height: auto;
  position: absolute;
  font-size: 48px;
  align-self: auto;
  font-style: ExtraBold;
  text-align: left;
  font-family: Montserrat;
  font-weight: 800;
  line-height: 80px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
</style>
  