'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wisata', [{
      NamaWisata: 'Garuda Wisnu Kencana',
      id_pengelola: 1,
      FotoWisata: 'https://1.bp.blogspot.com/-b-FgG10nD58/X0VUF7UiU4I/AAAAAAAAAq8/hPyE0sfRezIzqkI767T1hyxGqsEpkiOgwCLcBGAsYHQ/s755/gwk.jpg',
      AlamatWisata: 'Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80364',
      Photo360: '-_d_Y1o4L74c/X0XltSuDVPI/AAAAAAAAArw/H41qkmm_CoAsy7pY46xTzolU4o_X93yjwCLcBGAsYHQ/s2000/tiga.jpg'

    }, {
      NamaWisata: 'Pantai Kuta',
      id_pengelola: 1,
      FotoWisata: 'https://1.bp.blogspot.com/-gxRP9wBiBLQ/X0VUF-IEsgI/AAAAAAAAArA/JNU8ExM9IpgDG6xujeQJsNB3lA6M2LCAgCLcBGAsYHQ/s550/kuta.jpg',
      AlamatWisata: 'Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali 80361',
      Photo360: '-8r7hrvEiKqc/X0X46RlwqRI/AAAAAAAAAsg/Vj0xtJKj05MWWKB_vc6m5Znc9ni_hMrcwCLcBGAsYHQ/s1280/maxresdefault.jpg'
    }, {
      NamaWisata: 'Sangeh Monkey Forest',
      id_pengelola: 1,
      FotoWisata: 'https://1.bp.blogspot.com/-eYz1uxnIJvY/X0VUGibVWOI/AAAAAAAAArI/XL7xZndg1DU9p7D8APgyijXmk-i64L5ogCLcBGAsYHQ/s570/sangeh.jpg',
      AlamatWisata: 'Jl. Brahmana, Sangeh, Kec. Abiansemal, Kabupaten Badung, Bali 80353',
      Photo360: '-fnqKZ7_mNAE/X0X46dTMdNI/AAAAAAAAAsc/teNomEQj7cs-wqAsvFIGmA0zcHrbTz2kgCLcBGAsYHQ/s2508/sangeh360.jpg'
    },
    {
      NamaWisata: 'Taman Ayun',
      id_pengelola: 1,
      FotoWisata: 'https://1.bp.blogspot.com/-rypocnvscO4/X0VUGzxthNI/AAAAAAAAArE/CJRBpN66Ie0dQf-7NsSAV1wTfKr_4Zb1ACLcBGAsYHQ/s640/tamanayu.jpg',
      AlamatWisata: 'Jl. Ayodya No.10, Mengwi, Kec. Mengwi, Kabupaten Badung, Bali 80351',
      Photo360: '-3Ue-LdLQGiE/X0X4qQdyk7I/AAAAAAAAAsQ/IrFW2PD52G4A2c9v_uJQ7SutGkhCdX0FwCLcBGAsYHQ/s2508/PK9032.jpg'
    },
    {
      NamaWisata: 'Beach Walk',
      id_pengelola: 1,
      FotoWisata: 'https://1.bp.blogspot.com/-0BTIKK70jvQ/X0VUF7lrIQI/AAAAAAAAAq4/Lb4FteaFtDUz0gwq_cMPu9JCVgKLQpWowCLcBGAsYHQ/s905/beachwalk.jpg',
      AlamatWisata: 'Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali 80361',
      Photo360: '-NkmBdHs_qY0/X0X4qMb7DKI/AAAAAAAAAsM/jttT8d14xKMT1RmzZI0_h3z_NAjLxmdvgCLcBGAsYHQ/s2508/R8C1H1.jpg'
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wisata', null, {})
  }
};
