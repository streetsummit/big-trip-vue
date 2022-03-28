<template>
  <section>
    <h2>Where to go?</h2>
    <ul>
      <li
        class="destination__item"
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link class="destination__link" :to="{ name: 'TableView' }">
          <h3>{{ destination.name }}</h3>
          <p>{{ destination.description }}</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'WhereToGo',
  data() {
    return {
      destinations: [
        {
          name: 'Chamonix',
          description:
            'Chamonix, with crowded streets, full of of cozy canteens where you can try the best coffee in the Middle East.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.06232749089745204',
              description: 'Chamonix biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.008507008588636733',
              description: 'Chamonix park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6011771118008267',
              description: 'Chamonix city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.48364758182996503',
              description: 'Chamonix biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.39512195534733663',
              description: 'Chamonix kindergarten',
            },
          ],
        },
        {
          name: 'Geneva',
          description:
            'Geneva, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.34558098897559764',
              description: 'Geneva street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.478167519447261',
              description: 'Geneva park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.26201721813753065',
              description: 'Geneva biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9657704538477696',
              description: 'Geneva kindergarten',
            },
          ],
        },
        {
          name: 'Amsterdam',
          description:
            'Amsterdam, with a beautiful old town, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.8004203436912767',
              description: 'Amsterdam embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8828575056514734',
              description: 'Amsterdam street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.41043250284808996',
              description: 'Amsterdam park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.09468543392456863',
              description: 'Amsterdam parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.28502023937394383',
              description: 'Amsterdam city centre',
            },
          ],
        },
        {
          name: 'Helsinki',
          description:
            'Helsinki, a true asian pearl, with crowded streets, with a beautiful old town, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.4829739498727619',
              description: 'Helsinki embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.2820034741193196',
              description: 'Helsinki park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6306901703322836',
              description: 'Helsinki embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.566350828833837',
              description: 'Helsinki kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.22966501631187142',
              description: 'Helsinki city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7596354404197576',
              description: 'Helsinki embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8752442038255144',
              description: 'Helsinki zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.1635694923541946',
              description: 'Helsinki park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6399404803415596',
              description: 'Helsinki kindergarten',
            },
          ],
        },
        {
          name: 'Oslo',
          description:
            'Oslo, is a beautiful city, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.37564362651314553',
              description: 'Oslo embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.24301047484701987',
              description: 'Oslo city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4029718070515078',
              description: 'Oslo parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.678647194646335',
              description: 'Oslo embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.2055507709848159',
              description: 'Oslo embankment',
            },
          ],
        },
        {
          name: 'Kopenhagen',
          description:
            'Kopenhagen, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.222943094857182',
              description: 'Kopenhagen embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7710216988851961',
              description: 'Kopenhagen parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.009315769144045305',
              description: 'Kopenhagen park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.46758699403068316',
              description: 'Kopenhagen street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.2431337472700994',
              description: 'Kopenhagen embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8609290305692772',
              description: 'Kopenhagen biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.36762068979447915',
              description: 'Kopenhagen city centre',
            },
          ],
        },
        {
          name: 'Den Haag',
          description:
            'Den Haag, with an embankment of a mighty river as a centre of attraction.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.44009303249102505',
              description: 'Den Haag parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7261782689318355',
              description: 'Den Haag biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.37044416687030357',
              description: 'Den Haag park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6249049309974906',
              description: 'Den Haag city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.09170143317294377',
              description: 'Den Haag city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7911225819341459',
              description: 'Den Haag city centre',
            },
          ],
        },
        {
          name: 'Rotterdam',
          description:
            'Rotterdam, in a middle of Europe, with a beautiful old town.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.2673369479545331',
              description: 'Rotterdam parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6866950312792455',
              description: 'Rotterdam biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3887869869716143',
              description: 'Rotterdam parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6618245937422251',
              description: 'Rotterdam park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.15263088345227827',
              description: 'Rotterdam kindergarten',
            },
          ],
        },
        {
          name: 'Saint Petersburg',
          description: 'Saint Petersburg, is a beautiful city.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.8889214074551379',
              description: 'Saint Petersburg biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.1577671649131953',
              description: 'Saint Petersburg park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.36090837787059127',
              description: 'Saint Petersburg parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9529105616069864',
              description: 'Saint Petersburg zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4396316827579363',
              description: 'Saint Petersburg zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3340387401927123',
              description: 'Saint Petersburg city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5048135798834925',
              description: 'Saint Petersburg embankment',
            },
          ],
        },
        {
          name: 'Moscow',
          description:
            'Moscow, in a middle of Europe, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.21559584198841142',
              description: 'Moscow parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.47487280184113767',
              description: 'Moscow kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5890553596426609',
              description: 'Moscow biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6389609287644282',
              description: 'Moscow parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8761831678152852',
              description: 'Moscow park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7240815671732208',
              description: 'Moscow city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.18391384180551773',
              description: 'Moscow parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7820870292308955',
              description: 'Moscow zoo',
            },
          ],
        },
        {
          name: 'Sochi',
          description:
            'Sochi, is a beautiful city, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.18808756129908533',
              description: 'Sochi zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5258358796504627',
              description: 'Sochi park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6045152472087847',
              description: 'Sochi kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.1632704482585583',
              description: 'Sochi central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8904943135743824',
              description: 'Sochi biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9220560729586158',
              description: 'Sochi parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6720468648321452',
              description: 'Sochi zoo',
            },
          ],
        },
        {
          name: 'Tokio',
          description: 'Tokio, is a beautiful city.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.7666559339977481',
              description: 'Tokio kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.974593526418569',
              description: 'Tokio central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.45062073195517316',
              description: 'Tokio zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6480233812591891',
              description: 'Tokio biggest supermarket',
            },
          ],
        },
        {
          name: 'Kioto',
          description:
            'Kioto, with crowded streets, in a middle of Europe, middle-eastern paradise, a perfect place to stay with a family.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.3532579607637938',
              description: 'Kioto street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8103550676659246',
              description: 'Kioto kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9489417190585776',
              description: 'Kioto city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5215617960299788',
              description: 'Kioto central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.23361120287702497',
              description: 'Kioto kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7252746371143111',
              description: 'Kioto kindergarten',
            },
          ],
        },
        {
          name: 'Nagasaki',
          description:
            'Nagasaki, is a beautiful city, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.22477732667522132',
              description: 'Nagasaki street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.03407485902080487',
              description: 'Nagasaki parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5038453478074627',
              description: 'Nagasaki zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.02702592699505746',
              description: 'Nagasaki biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.92423522534128',
              description: 'Nagasaki street market',
            },
          ],
        },
        {
          name: 'Hiroshima',
          description:
            'Hiroshima, a true asian pearl, for those who value comfort and coziness.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.39756845021898335',
              description: 'Hiroshima kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.04398481064520965',
              description: 'Hiroshima zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5959932942509316',
              description: 'Hiroshima kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.16644610742469856',
              description: 'Hiroshima city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5058992257211852',
              description: 'Hiroshima zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.18018567301430854',
              description: 'Hiroshima kindergarten',
            },
          ],
        },
        {
          name: 'Berlin',
          description:
            'Berlin, is a beautiful city, middle-eastern paradise, a perfect place to stay with a family.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.39981105373122827',
              description: 'Berlin city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.04424579799627071',
              description: 'Berlin biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4582515610223974',
              description: 'Berlin zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.14705332056330178',
              description: 'Berlin city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7692999896519517',
              description: 'Berlin zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9207642283231765',
              description: 'Berlin zoo',
            },
          ],
        },
        {
          name: 'Munich',
          description:
            'Munich, is a beautiful city, with crowded streets, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.8613946131914885',
              description: 'Munich biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.22484326150371814',
              description: 'Munich street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4983813213749839',
              description: 'Munich central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.42763493955186127',
              description: 'Munich embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8429585717696133',
              description: 'Munich park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9567919523833215',
              description: 'Munich biggest supermarket',
            },
          ],
        },
        {
          name: 'Frankfurt',
          description:
            'Frankfurt, a true asian pearl, in a middle of Europe, with a beautiful old town, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.2924867714227739',
              description: 'Frankfurt street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5153789288054793',
              description: 'Frankfurt street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7942301536431275',
              description: 'Frankfurt embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5733455904838785',
              description: 'Frankfurt park',
            },
          ],
        },
        {
          name: 'Vien',
          description:
            'Vien, in a middle of Europe, with a beautiful old town, with an embankment of a mighty river as a centre of attraction.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.536586080001199',
              description: 'Vien city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5388155062765807',
              description: 'Vien kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9150192218932822',
              description: 'Vien kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6728127062170661',
              description: 'Vien embankment',
            },
          ],
        },
        {
          name: 'Rome',
          description: 'Rome, is a beautiful city.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.01924001565853839',
              description: 'Rome park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5608028030029586',
              description: 'Rome zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.42059180479740066',
              description: 'Rome central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.04306607509816285',
              description: 'Rome parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7207430206700338',
              description: 'Rome biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3943266338964093',
              description: 'Rome park',
            },
          ],
        },
        {
          name: 'Naples',
          description: 'Naples, with crowded streets.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.041705168190873554',
              description: 'Naples biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.8557703881115266',
              description: 'Naples parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.57648432804309',
              description: 'Naples park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5194041011743731',
              description: 'Naples biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.48521328407253717',
              description: 'Naples kindergarten',
            },
          ],
        },
        {
          name: 'Venice',
          description:
            'Venice, a true asian pearl, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.2954781164029998',
              description: 'Venice zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4709659910453261',
              description: 'Venice zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.10247968653807105',
              description: 'Venice city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.07548748621742352',
              description: 'Venice parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6584281686869804',
              description: 'Venice zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.1300901605377318',
              description: 'Venice kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5028977416385043',
              description: 'Venice street market',
            },
          ],
        },
        {
          name: 'Milan',
          description:
            'Milan, famous for its crowded street markets with the best street food in Asia.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.538649280220284',
              description: 'Milan parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5271182466766702',
              description: 'Milan city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.44624244069069596',
              description: 'Milan central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7353327757460979',
              description: 'Milan parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3374336503240425',
              description: 'Milan zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.30595599823332886',
              description: 'Milan kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.377057421995173',
              description: 'Milan parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9981322313381591',
              description: 'Milan parliament building',
            },
          ],
        },
        {
          name: 'Monaco',
          description:
            'Monaco, a true asian pearl, with crowded streets, middle-eastern paradise.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.4942333580958904',
              description: 'Monaco city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.9012631889212386',
              description: 'Monaco city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7666784974735628',
              description: 'Monaco park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.16614719617820595',
              description: 'Monaco zoo',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.21618338452058938',
              description: 'Monaco biggest supermarket',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3488482974023783',
              description: 'Monaco street market',
            },
          ],
        },
        {
          name: 'Paris',
          description: 'Paris, with crowded streets, middle-eastern paradise.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.18945740282899037',
              description: 'Paris central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.10791212889986768',
              description: 'Paris street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5793009409968781',
              description: 'Paris city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6465233725777042',
              description: 'Paris embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.004679967170987176',
              description: 'Paris zoo',
            },
          ],
        },
        {
          name: 'Barcelona',
          description:
            'Barcelona, in a middle of Europe, with a beautiful old town, middle-eastern paradise, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.057342054166459766',
              description: 'Barcelona embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.2169378945185998',
              description: 'Barcelona central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4259928764174652',
              description: 'Barcelona city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.947981201224146',
              description: 'Barcelona city centre',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.19261944579560963',
              description: 'Barcelona zoo',
            },
          ],
        },
        {
          name: 'Valencia',
          description:
            'Valencia, a true asian pearl, a perfect place to stay with a family.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.07041868533541629',
              description: 'Valencia park',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.06914178350203293',
              description: 'Valencia parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.1744362329350786',
              description: 'Valencia parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.001102216377738996',
              description: 'Valencia parliament building',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.02386493361865938',
              description: 'Valencia park',
            },
          ],
        },
        {
          name: 'Madrid',
          description:
            'Madrid, with a beautiful old town, for those who value comfort and coziness.',
          pictures: [
            {
              src: 'http://picsum.photos/300/200?r=0.4937494877334603',
              description: 'Madrid embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.94709744122433',
              description: 'Madrid kindergarten',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.3204836386404597',
              description: 'Madrid embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.5124125977593257',
              description: 'Madrid central station',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.7926029549041154',
              description: 'Madrid street market',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.6828327014681037',
              description: 'Madrid embankment',
            },
            {
              src: 'http://picsum.photos/300/200?r=0.4103159513790795',
              description: 'Madrid zoo',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.destination__item {
  position: relative;
  display: block;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 11px 20px rgba(0, 0, 0, 0.04);
}

.destination__item:last-child {
  margin-bottom: 0;
}

.destination__link:after {
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
}

/* .destinations__photos {
  display: flex;
  width: 100%;
  overflow-x: scroll;
} */
</style>
