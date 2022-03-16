<template>
  <ul class="trip-events__list">
    <li class="trip-events__item">
      <PointEdit :point="points[0]" />
    </li>
    <li class="trip-events__item" v-for="point in points" :key="point.id">
      <PointComponent :point="point" />
    </li>
  </ul>
</template>

<script>
import PointComponent from "@/components/PointComponent.vue";
import PointEdit from "@/components/PointEdit.vue";

export default {
  name: "TableView",
  data() {
    return {
      points: [
        {
          id: "0",
          type: "sightseeing",
          date_from: "2022-03-10T21:36:42.378Z",
          date_to: "2022-03-11T10:42:19.408Z",
          destination: {
            name: "Monaco",
            description: "Monaco, middle-eastern paradise.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.2546206685138943",
                description: "Monaco park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.30162609073190616",
                description: "Monaco embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.32944157323872236",
                description: "Monaco city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3928747656770275",
                description: "Monaco park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7074361512888576",
                description: "Monaco street market",
              },
            ],
          },
          base_price: 400,
          is_favorite: true,
          offers: [],
        },
        {
          id: "1",
          type: "drive",
          date_from: "2022-03-11T10:42:19.408Z",
          date_to: "2022-03-11T14:40:44.488Z",
          destination: {
            name: "Monaco",
            description:
              "Monaco, is a beautiful city, a true asian pearl, with a beautiful old town.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.8831624501020372",
                description: "Monaco zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.13737298123166797",
                description: "Monaco zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.31741448444445775",
                description: "Monaco embankment",
              },
            ],
          },
          base_price: 500,
          is_favorite: false,
          offers: [
            { title: "Choose comfort class", price: 110 },
            { title: "Choose business class", price: 180 },
          ],
        },
        {
          id: "2",
          type: "ship",
          date_from: "2022-03-11T14:40:44.488Z",
          date_to: "2022-03-12T11:51:08.289Z",
          destination: {
            name: "Berlin",
            description:
              "Berlin, a true asian pearl, with crowded streets, in a middle of Europe.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.9683193673732571",
                description: "Berlin parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8316772470679179",
                description: "Berlin embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.20110389024545716",
                description: "Berlin kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4818303767959107",
                description: "Berlin embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8882225016636844",
                description: "Berlin street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.28885723936920504",
                description: "Berlin biggest supermarket",
              },
            ],
          },
          base_price: 500,
          is_favorite: false,
          offers: [
            { title: "Choose meal", price: 130 },
            { title: "Choose seats", price: 160 },
            { title: "Upgrade to business class", price: 150 },
            { title: "Business lounge", price: 40 },
          ],
        },
        {
          id: "3",
          type: "bus",
          date_from: "2022-03-12T11:51:08.289Z",
          date_to: "2022-03-13T09:14:10.005Z",
          destination: {
            name: "Saint Petersburg",
            description: "Saint Petersburg, in a middle of Europe.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.5619895102361752",
                description: "Saint Petersburg park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7723033630314164",
                description: "Saint Petersburg street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7400130882826108",
                description: "Saint Petersburg biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5836494447238838",
                description: "Saint Petersburg park",
              },
            ],
          },
          base_price: 900,
          is_favorite: false,
          offers: [
            { title: "Infotainment system", price: 50 },
            { title: "Order meal", price: 100 },
            { title: "Choose seats", price: 190 },
          ],
        },
        {
          id: "4",
          type: "flight",
          date_from: "2022-03-13T09:14:10.005Z",
          date_to: "2022-03-14T00:04:23.567Z",
          destination: {
            name: "Paris",
            description:
              "Paris, a true asian pearl, in a middle of Europe, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.31003050061336035",
                description: "Paris park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.31025386726613147",
                description: "Paris embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.20826080182219942",
                description: "Paris embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9240348468359143",
                description: "Paris park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7985263767540767",
                description: "Paris park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9740080555180726",
                description: "Paris parliament building",
              },
            ],
          },
          base_price: 400,
          is_favorite: false,
          offers: [
            { title: "Choose meal", price: 120 },
            { title: "Upgrade to comfort class", price: 120 },
          ],
        },
        {
          id: "5",
          type: "drive",
          date_from: "2022-03-14T00:04:23.567Z",
          date_to: "2022-03-14T14:47:27.202Z",
          destination: {
            name: "Vien",
            description:
              "Vien, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.3931006229935501",
                description: "Vien park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.18096767075429998",
                description: "Vien city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6142386492735092",
                description: "Vien park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9815730007118137",
                description: "Vien park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.07007557293028888",
                description: "Vien biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9940304672000955",
                description: "Vien kindergarten",
              },
            ],
          },
          base_price: 1100,
          is_favorite: true,
          offers: [
            { title: "Choose comfort class", price: 110 },
            { title: "Choose business class", price: 180 },
          ],
        },
        {
          id: "6",
          type: "bus",
          date_from: "2022-03-14T14:47:27.202Z",
          date_to: "2022-03-15T05:57:09.559Z",
          destination: {
            name: "Valencia",
            description:
              "Valencia, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.7612466365337296",
                description: "Valencia street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4372547973401988",
                description: "Valencia street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.29774268079828836",
                description: "Valencia biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.008622715468992403",
                description: "Valencia biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9643739473183885",
                description: "Valencia biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.11406113767359427",
                description: "Valencia central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5841323965818765",
                description: "Valencia biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8103557705304572",
                description: "Valencia embankment",
              },
            ],
          },
          base_price: 900,
          is_favorite: true,
          offers: [
            { title: "Infotainment system", price: 50 },
            { title: "Order meal", price: 100 },
            { title: "Choose seats", price: 190 },
          ],
        },
        {
          id: "7",
          type: "taxi",
          date_from: "2022-03-15T05:57:09.559Z",
          date_to: "2022-03-15T16:00:12.218Z",
          destination: {
            name: "Barcelona",
            description: "Barcelona, with crowded streets.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.7775120403922544",
                description: "Barcelona biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8572826871547101",
                description: "Barcelona zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7477468187090388",
                description: "Barcelona biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.043207185874632126",
                description: "Barcelona kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8710958068241816",
                description: "Barcelona street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7743638419034318",
                description: "Barcelona zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.10255180595980806",
                description: "Barcelona city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.481123504941549",
                description: "Barcelona parliament building",
              },
            ],
          },
          base_price: 1100,
          is_favorite: false,
          offers: [
            { title: "Choose the radio station", price: 30 },
            { title: "Choose temperature", price: 170 },
          ],
        },
        {
          id: "8",
          type: "drive",
          date_from: "2022-03-15T16:00:12.218Z",
          date_to: "2022-03-15T20:04:11.915Z",
          destination: {
            name: "Helsinki",
            description:
              "Helsinki, in a middle of Europe, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.44138204149626925",
                description: "Helsinki kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7186620899330396",
                description: "Helsinki city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.18508852893078975",
                description: "Helsinki parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9379471801131019",
                description: "Helsinki kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.06222467114955221",
                description: "Helsinki city centre",
              },
            ],
          },
          base_price: 500,
          is_favorite: true,
          offers: [
            { title: "Choose comfort class", price: 110 },
            { title: "Choose business class", price: 180 },
          ],
        },
        {
          id: "9",
          type: "flight",
          date_from: "2022-03-15T20:04:11.915Z",
          date_to: "2022-03-16T16:36:22.259Z",
          destination: {
            name: "Monaco",
            description:
              "Monaco, a true asian pearl, with an embankment of a mighty river as a centre of attraction.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.5586437382779097",
                description: "Monaco biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.1981911712959039",
                description: "Monaco kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9940937931726241",
                description: "Monaco zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5837930338106876",
                description: "Monaco embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.27002988777928416",
                description: "Monaco city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.586052754228684",
                description: "Monaco biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4064839952978183",
                description: "Monaco park",
              },
            ],
          },
          base_price: 1100,
          is_favorite: true,
          offers: [
            { title: "Choose meal", price: 120 },
            { title: "Choose seats", price: 90 },
            { title: "Upgrade to business class", price: 120 },
            { title: "Add luggage", price: 170 },
          ],
        },
        {
          id: "10",
          type: "bus",
          date_from: "2022-03-16T16:36:22.259Z",
          date_to: "2022-03-17T00:23:16.546Z",
          destination: {
            name: "Hiroshima",
            description:
              "Hiroshima, is a beautiful city, in a middle of Europe, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.1537947850898298",
                description: "Hiroshima kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6069892092262219",
                description: "Hiroshima embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9447232209192102",
                description: "Hiroshima kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6092461364107711",
                description: "Hiroshima park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4395154018583871",
                description: "Hiroshima central station",
              },
            ],
          },
          base_price: 300,
          is_favorite: false,
          offers: [
            { title: "Infotainment system", price: 50 },
            { title: "Order meal", price: 100 },
            { title: "Choose seats", price: 190 },
          ],
        },
        {
          id: "11",
          type: "bus",
          date_from: "2022-03-17T00:23:16.546Z",
          date_to: "2022-03-17T20:56:09.372Z",
          destination: {
            name: "Valencia",
            description:
              "Valencia, a true asian pearl, middle-eastern paradise.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.9823538692062483",
                description: "Valencia parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5214647240427492",
                description: "Valencia zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5036237627362283",
                description: "Valencia parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.951462407985673",
                description: "Valencia central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3535452479403247",
                description: "Valencia central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7256470014692171",
                description: "Valencia street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8036815888833433",
                description: "Valencia biggest supermarket",
              },
            ],
          },
          base_price: 500,
          is_favorite: true,
          offers: [
            { title: "Infotainment system", price: 50 },
            { title: "Order meal", price: 100 },
            { title: "Choose seats", price: 190 },
          ],
        },
        {
          id: "12",
          type: "check-in",
          date_from: "2022-03-17T20:56:09.372Z",
          date_to: "2022-03-18T14:25:01.264Z",
          destination: {
            name: "Oslo",
            description:
              "Oslo, a true asian pearl, a perfect place to stay with a family.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.3059830958296188",
                description: "Oslo biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.720789291196082",
                description: "Oslo zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7142727698360751",
                description: "Oslo zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4157025739692404",
                description: "Oslo central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3692302471658353",
                description: "Oslo kindergarten",
              },
            ],
          },
          base_price: 900,
          is_favorite: true,
          offers: [
            { title: "Choose the time of check-in", price: 70 },
            { title: "Choose the time of check-out", price: 190 },
            { title: "Add breakfast", price: 110 },
            {
              title: "Order a meal from the restaurant",
              price: 30,
            },
          ],
        },
        {
          id: "13",
          type: "sightseeing",
          date_from: "2022-03-18T14:25:01.264Z",
          date_to: "2022-03-19T08:38:31.961Z",
          destination: {
            name: "Munich",
            description:
              "Munich, with crowded streets, for those who value comfort and coziness.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.1186774019202641",
                description: "Munich zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8516841274181559",
                description: "Munich street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.42029777244799216",
                description: "Munich parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.02978947107632335",
                description: "Munich central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6086737171908858",
                description: "Munich city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8956107449937243",
                description: "Munich embankment",
              },
            ],
          },
          base_price: 400,
          is_favorite: true,
          offers: [],
        },
        {
          id: "14",
          type: "check-in",
          date_from: "2022-03-19T08:38:31.961Z",
          date_to: "2022-03-19T14:09:59.424Z",
          destination: {
            name: "Milan",
            description:
              "Milan, is a beautiful city, with an embankment of a mighty river as a centre of attraction.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.45293970537317074",
                description: "Milan city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6394739146471733",
                description: "Milan zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.023874763333421978",
                description: "Milan parliament building",
              },
              {
                src: "http://picsum.photos/300/200?r=0.11530306288306358",
                description: "Milan city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8813484815405919",
                description: "Milan embankment",
              },
            ],
          },
          base_price: 400,
          is_favorite: true,
          offers: [
            { title: "Add breakfast", price: 110 },
            {
              title: "Order a meal from the restaurant",
              price: 30,
            },
          ],
        },
        {
          id: "15",
          type: "taxi",
          date_from: "2022-03-19T14:09:59.424Z",
          date_to: "2022-03-19T21:51:18.468Z",
          destination: {
            name: "Amsterdam",
            description:
              "Amsterdam, is a beautiful city, in a middle of Europe, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.5133994077523991",
                description: "Amsterdam street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.47956249957335273",
                description: "Amsterdam park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.2448371294810101",
                description: "Amsterdam biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.06849905546375012",
                description: "Amsterdam central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.2539078555504235",
                description: "Amsterdam central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3421582651266466",
                description: "Amsterdam park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.5033846938832118",
                description: "Amsterdam zoo",
              },
            ],
          },
          base_price: 300,
          is_favorite: false,
          offers: [
            { title: "Choose temperature", price: 170 },
            { title: "Drive quickly, I'm in a hurry", price: 100 },
            { title: "Drive slowly", price: 110 },
          ],
        },
        {
          id: "16",
          type: "check-in",
          date_from: "2022-03-19T21:51:18.468Z",
          date_to: "2022-03-20T18:36:31.765Z",
          destination: {
            name: "Sochi",
            description:
              "Sochi, with crowded streets, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.7476149023059964",
                description: "Sochi park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9996428122673437",
                description: "Sochi kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9839753249649097",
                description: "Sochi central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6826544879445702",
                description: "Sochi street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7815200335353047",
                description: "Sochi park",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6370790169420737",
                description: "Sochi zoo",
              },
            ],
          },
          base_price: 600,
          is_favorite: false,
          offers: [
            { title: "Choose the time of check-out", price: 190 },
            { title: "Add breakfast", price: 110 },
            {
              title: "Order a meal from the restaurant",
              price: 30,
            },
          ],
        },
        {
          id: "17",
          type: "sightseeing",
          date_from: "2022-03-20T18:36:31.765Z",
          date_to: "2022-03-20T21:05:54.592Z",
          destination: {
            name: "Frankfurt",
            description:
              "Frankfurt, is a beautiful city, middle-eastern paradise, for those who value comfort and coziness.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.7761366690263711",
                description: "Frankfurt kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.7963361751278208",
                description: "Frankfurt kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3483781203977394",
                description: "Frankfurt central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9976032372763641",
                description: "Frankfurt zoo",
              },
              {
                src: "http://picsum.photos/300/200?r=0.9164729478157405",
                description: "Frankfurt street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8313697949787986",
                description: "Frankfurt embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6891885092878722",
                description: "Frankfurt kindergarten",
              },
            ],
          },
          base_price: 900,
          is_favorite: false,
          offers: [],
        },
        {
          id: "18",
          type: "taxi",
          date_from: "2022-03-20T21:05:54.592Z",
          date_to: "2022-03-21T20:55:34.038Z",
          destination: {
            name: "Geneva",
            description:
              "Geneva, with crowded streets, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.05876403692706922",
                description: "Geneva kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.23462987875318708",
                description: "Geneva embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.44705845761879637",
                description: "Geneva street market",
              },
              {
                src: "http://picsum.photos/300/200?r=0.6299949087547694",
                description: "Geneva central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8624511630400247",
                description: "Geneva embankment",
              },
              {
                src: "http://picsum.photos/300/200?r=0.013486647107870509",
                description: "Geneva biggest supermarket",
              },
            ],
          },
          base_price: 900,
          is_favorite: true,
          offers: [
            { title: "Upgrade to a business class", price: 190 },
            { title: "Drive quickly, I'm in a hurry", price: 100 },
          ],
        },
        {
          id: "19",
          type: "check-in",
          date_from: "2022-03-21T20:55:34.038Z",
          date_to: "2022-03-22T05:05:28.786Z",
          destination: {
            name: "Paris",
            description:
              "Paris, is a beautiful city, a true asian pearl, middle-eastern paradise, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.",
            pictures: [
              {
                src: "http://picsum.photos/300/200?r=0.7964604283488343",
                description: "Paris kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.06015125801358989",
                description: "Paris kindergarten",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3062545369911107",
                description: "Paris central station",
              },
              {
                src: "http://picsum.photos/300/200?r=0.3263686036277227",
                description: "Paris biggest supermarket",
              },
              {
                src: "http://picsum.photos/300/200?r=0.4304663951422163",
                description: "Paris city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.0331922037057637",
                description: "Paris city centre",
              },
              {
                src: "http://picsum.photos/300/200?r=0.8030513350759088",
                description: "Paris park",
              },
            ],
          },
          base_price: 900,
          is_favorite: false,
          offers: [
            { title: "Choose the time of check-in", price: 70 },
            { title: "Choose the time of check-out", price: 190 },
            { title: "Add breakfast", price: 110 },
          ],
        },
      ],
    };
  },
  components: {
    PointComponent,
    PointEdit,
  },
};
</script>

<style>
.trip-events__list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.trip-events__item {
  margin-bottom: 54px;
  margin-left: auto;
}
</style>
