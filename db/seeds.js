var Cookie = require('./schema.js')

Cookie.remove({})
  .then(() => {
    return cookieData
  })

var cookieData = [
  {
    flavor: 'Chocochoco Chip',
    quantity: 7,
    img_url: 'https://www.meals.com/imagesrecipes/105058lrg.jpg'
  },
  {
    flavor: 'Macadamia Nut',
    quantity: 4,
    img_url: 'https://s3.amazonaws.com/lpduncan/recipe/2325/white-chocolate-macadamia-nut-cookies-full.jpg'
  },
  {
    flavor: 'ELFudge',
    quantity: 6,
    img_url: 'http://www.chocolateenmasse.com/choco/enmasse/wp-content/uploads/2014/02/ELFudge.jpg'
  },
  {
    flavor: 'Samoa',
    quantity: 1,
    img_url: 'http://images.huffingtonpost.com/2010-02-24-2009_04_02Samoa.jpg'
  },
  {
    flavor: 'Cookie Monster',
    quantity: 9,
    img_url: 'http://1.bp.blogspot.com/-w-i7-dRn_V0/TeZP9aAxPBI/AAAAAAAAAR4/8E_-JCJlEmQ/s640/Apri2011+055pwm.jpg'
  },
  {
    flavor: 'Coconut Macaroon',
    quantity: 12,
    img_url: 'http://images.meredith.com/bhg/images/recipe/p_R109815.jpg'
  }
]

cookieData.forEach((cookie) => {
  Cookie.create({
    flavor: cookie.flavor,
    quantity: cookie.quantity,
    img_url: cookie.img_url
  })
})
