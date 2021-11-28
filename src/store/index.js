import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    users: [
      { id: 0, name: 'João Pedro'},
      { id: 1, name: 'Maria Silva'},
      { id: 2, name: 'Lucas Santos'},
      { id: 3, name: 'Matheus Pereira'},
      { id: 4, name: 'Italo Carvalho'},
      { id: 5, name: 'Leonardo Jośe'},
      { id: 6, name: 'Gustavo Lima'},
      { id: 7, name: 'Henrique Agostinho'},
    ],
    products: [
      { id: 0, name: 'Fone Gamer', img: 'https://images2.kabum.com.br/produtos/fotos/81132/81132_index_m.jpg', price: 'R$229,90' },
      { id: 1, name: 'Smart Tv', img: 'https://images5.kabum.com.br/produtos/fotos/158885/smart-tv-lg-43-4k-uhd-43up7500-com-wifi-e-bluetooth-hdr-thinqai-compativel-com-inteligencia-artificial-43up7500psf_1623677620_m.jpg', price: 'R$1229,90' },
      { id: 3, name: 'Processador', img: 'https://images8.kabum.com.br/produtos/fotos/181088/processador-amd-ryzen-5-5600g-3-9ghz-4-4ghz-max-turbo-am4-video-integrado-6-nucleos-100-100000252box_1627588230_m.jpg', price: 'R$1729,80' },
      { id: 4, name: 'Cadeira Gamer', img: 'https://images0.kabum.com.br/produtos/fotos/134180/cadeira-gamer-tempest-husky-gaming-black-500_1619706678_m.jpg', price: 'R$1000,10' },
      { id: 5, name: 'SmartPhone', img: 'https://images9.kabum.com.br/produtos/fotos/149559/smartphone-samsung-galaxy-a32-128gb-4gb-ram-octa-core-camera-quadrupla-azul-sm-a325mzbrzto_1624879873_m.jpg', price: 'R$1220,90' },
      { id: 6, name: 'Monitor Gamer', img: 'https://images1.kabum.com.br/produtos/fotos/96741/96741_1548270162_index_m.jpg', price: 'R$3400,55' },
      { id: 7, name: 'Pc Gamer', img: 'https://images7.kabum.com.br/produtos/fotos/271867/pc-gamer-concordia-amd-ryzen-5-3400g-rgb-8gb-ddr4-ssd-240gb-rgb-linux-preto-31724_1637670855_m.jpg', price: 'R$2899,99' },
    ],
  }
})
