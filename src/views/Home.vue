<template>
  <v-main>
    <section class="banner pb-6">
      <v-carousel cycle hide-delimiters>
        <v-carousel-item
          v-for="(item, index) in carousel"
          :key="index"
          :src="item.background"
        >
          <v-container class="px-16" fill-height>
            <v-row class="d-flex align-center">
              <v-col cols="12" md="7"
                ><div class="slide">
                  <h2 class="animate__animated animate__slideInDown">
                    {{ item.intro }}
                  </h2>
                  <h1
                    :class="[
                      $vuetify.breakpoint.mdAndUp ? 'text-43' : 'text-35',
                      'animate__animated animate__slideInLeft'
                    ]"
                  >
                    {{ item.content }}
                  </h1>
                  <h4 class="animate__animated animate__slideInUp">
                    {{ item.detail }}
                  </h4>
                  <v-btn
                    class="animate__animated animate__slideInRight mt-4 pa-8"
                    color="secondary"
                    height=""
                    depressed
                    >Get Started Now</v-btn
                  >
                </div>
              </v-col>
              <v-col cols="12" md="5" v-show="$vuetify.breakpoint.mdAndUp">
                <div class="slide animate__animated animate__slideInRight">
                  <img :src="item.image" alt="" />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </section>
    <section class="categories py-6">
      <header class="text-center">
        <h2 class="mx-auto">CHOOSE CATEGORY</h2>
      </header>
      <div class="category-list d-flex flex-wrap justify-center mt-6">
        <v-card width="300px" class="mt-md-0 mt-3" flat tile>
          <div class="pa-2 d-flex align-center justify-space-between">
            <div class="category-details">
              <div class="category-title">Product Merchants</div>
              <div>
                Digital Cameras, Photo Accessories, Action Cameras, Osmo Cameras
              </div>
            </div>
            <div>
              <img src="@/assets/img/samsung.jpg" alt="" />
            </div>
          </div>
        </v-card>
        <v-card width="300px" class="mt-md-0 mt-3" flat tile>
          <div class="pa-2 d-flex align-center justify-space-between">
            <div class="category-details">
              <div class="category-title">Service Merchants</div>
              <div>Cleaning, Laundry, Gardening, Data Services</div>
            </div>
            <div>
              <img
                src="/intelligent-innovations/img/slider/laundry.png"
                alt=""
                width="70px"
              />
            </div>
          </div>
        </v-card>
      </div>
    </section>
    <section class="products-list py-6">
      <div class="px-5">
        <v-row>
          <v-col cols="12" md="3">
            <v-carousel cycle :show-arrows="false" hide-delimiters>
              <v-carousel-item
                v-for="(item, index) in productsCarousel"
                :key="index"
                :src="item.background"
              >
                <div class="pa-7 d-flex flex-column ">
                  <div>
                    <h1 class="mt">{{ item.intro }}</h1>
                    <h2 class="mt-4">{{ item.discount }}</h2>
                    <h4>OFF</h4>
                  </div>
                  <div
                    class="d-flex justify-center slide animate__animated animate__slideInRight"
                  >
                    <img
                      class="mt-n16"
                      :src="item.image"
                      alt="product image"
                      width="290px"
                    />
                  </div>
                  <div class="text-center mt-n6">
                    <v-btn
                      class="mb-1"
                      color="secondary"
                      height="40px"
                      depressed
                    >
                      Check Now
                    </v-btn>
                    <br />
                    Hurry up, Limited Offers
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" md="8">
            <v-text-field
              v-model="search"
              color="primary"
              label="Search for a Product"
              v-show="!$vuetify.breakpoint.smAndUp"
            ></v-text-field>
            <v-tabs
              v-model="productTab"
              :grow="!$vuetify.breakpoint.mdAndUp"
              right
            >
              <v-text-field
                v-model="search"
                color="primary"
                label="Search for a Product"
                v-show="$vuetify.breakpoint.smAndUp"
              ></v-text-field>
              <v-tab v-for="(tab, index) in productTabs" :key="index"
                >{{ tab.title }}
              </v-tab>
            </v-tabs>
            <div class="product-list mt-4">
              <v-row v-if="getProducts.length > 0" dense>
                <v-col
                  cols="6"
                  md="3"
                  v-for="(product, index) in getProducts"
                  :key="index"
                >
                  <v-card class="pa-3" wdith="190px" height="370px" flat>
                    <div class="product-title text-center ">
                      <img
                        :src="product.image"
                        alt="product image"
                        width="200px"
                      />
                      <div class="product-name mt-1">
                        {{ product.name }}
                        <br />
                        <span class="text-grey">
                          {{ product.isProduct ? 'Product' : 'Service' }}
                        </span>
                      </div>
                    </div>

                    <div
                      class="product-interactions d-flex align-center justify-space-between py-3"
                    >
                      <div v-if="product.isProduct">
                        <v-btn color="primary" icon
                          ><v-icon class="mx-1"
                            >mdi-heart-outline</v-icon
                          ></v-btn
                        >
                        <v-btn color="primary" icon>
                          <v-icon class="mx-1">mdi-cart-plus</v-icon>
                        </v-btn>
                      </div>
                      <div v-else>
                        <v-btn color="primary" icon
                          ><v-icon class="mx-1">mdi-eye-outline</v-icon></v-btn
                        >
                      </div>
                      <div class="text-danger">
                        {{ product.price }}
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <div
                class="pa-9 d-flex flex-column align-center justify-center text-center"
                v-else
              >
                <img
                  src="@/assets/img/empty.svg"
                  alt="Empty Product"
                  width="200px"
                />
                <h3 class="mt-4">No Product Found</h3>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
    <section class="reviews py-8">
      <header class="text-center">
        <h1>Our happy Merchant's reviews</h1>
        <h3>Check what others think about us</h3>
      </header>
      <div class="testimonial">
        <v-row class="pa-10 pa-md-16">
          <v-col
            cols="12"
            md="4"
            v-for="(user, index) in testimonials"
            :key="index"
          >
            <v-card class="pa-6">
              <img
                class="mt-n13"
                :src="user.image"
                alt="merchant image"
                width="80"
              />
              <div class="testimony">
                {{ user.testimony }}
              </div>
              <div class="merchant-name mt-4">{{ user.name }}</div>
              <div class="merchant-type text-grey">{{ user.type }}</div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      carousel: [
        {
          background: '/intelligent-innovations/img/slider/slide.svg',
          image: '/intelligent-innovations/img/slider/phone.png',
          intro: 'Best Deals of All time on',
          content: 'PRODUCT (GADGETS)',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        },
        {
          background: '/intelligent-innovations/img/slider/slide.svg',
          image: '/intelligent-innovations/img/slider/laundry.png',
          intro: 'Best Deals of All time on',
          content: 'SERVICES (LAUNDRY)',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'
        }
      ],
      productsCarousel: [
        {
          background: '/intelligent-innovations/img/slider/slim-bg.svg',
          image: '/intelligent-innovations/img/slider/sneakers.png',
          intro: 'BEST BRANDS',
          discount: '40%'
        },
        {
          background: '/intelligent-innovations/img/slider/slim-bg.svg',
          image: '/intelligent-innovations/img/slider/mower.png',
          intro: 'Get Services with',
          discount: '60%'
        }
      ],
      search: '',
      productTab: 0,
      productTabs: [
        { title: 'All', value: 'all' },
        { title: 'Service Merchants', value: 'service' },
        { title: 'Products Merchants', value: 'products' }
      ],
      products: [
        {
          image: '/intelligent-innovations/img/products/camera.jpg',
          name: 'DJI Osmo Active Camera',
          isProduct: true,
          price: '$40.90'
        },
        {
          image: '/intelligent-innovations/img/products/phone.jpg',
          name: ' Xiaomi Redmi Note 7',
          isProduct: true,
          price: '$699.99'
        },
        {
          image: '/intelligent-innovations/img/products/watering-can.png',
          name: 'AB Gardening',
          isProduct: false,
          price: '$12.99'
        },
        {
          image: '/intelligent-innovations/img/products/sneakers.jpg',
          name: 'Adidas Pink RapidaRun Trainers',
          isProduct: true,
          price: '$52.00'
        },
        {
          image: '/intelligent-innovations/img/products/laundry.png',
          name: 'AB Laundry',
          isProduct: false,
          price: '$2.99+'
        },
        {
          image: '/intelligent-innovations/img/products/camera.jpg',
          name: 'DJI Osmo Active Camera',
          isProduct: true,
          price: '$40.90'
        }
      ],
      testimonials: [
        {
          image: '/intelligent-innovations/img/users/user-1.png',
          name: 'Adam Sendler',
          type: 'Product Merchant',
          testimony:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
          image: '/intelligent-innovations/img/users/user-2.png',
          name: 'John Doe',
          type: 'Service Merchant',
          testimony:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        },
        {
          image: '/intelligent-innovations/img/users/user-3.png',
          name: 'Jane Doe',
          type: 'Product Merchant',
          testimony:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
        }
      ]
    };
  },
  computed: {
    getProducts() {
      let result = [];
      const selectedCategory = this.productTabs[this.productTab].value;
      if (selectedCategory === 'all') {
        result = this.products;
      }
      if (selectedCategory === 'service') {
        result = this.products.filter((item) => !item.isProduct);
      } else if (selectedCategory === 'products') {
        result = this.products.filter((item) => item.isProduct);
      }
      if (!this.search) return result;
      return result.filter(
        (item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase()) ||
          item.price.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style>
.v-card {
  border: 1px solid #efefef;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  box-sizing: border-box;
}
.category-list .v-card {
  font-size: 12px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px !important;
}
.category-list .v-card::before {
  transition: all 0.5s ease, background-color 0.5s ease;
  content: '';
  display: block;
  margin: auto;
  height: 3px;
  width: 0px;
}
.category-list .v-card:hover .category-title {
  color: #7a50f0;
}
.category-list .v-card:hover::before {
  width: 100%;
  background: #7a50f0;
}
.category-list .v-card .category-title {
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
}
.v-carousel__item .slide .text-43 {
  font-size: 43px;
  font-weight: 900;
}
.v-carousel__item .slide .text-35 {
  font-size: 35px;
  font-weight: 900;
}
.v-carousel__item .slide h4 {
  max-width: 600px;
  font-size: 14px;
}
.v-carousel__item .slide .v-btn,
.products-list .v-carousel__item .v-btn {
  border-radius: 51px !important;
}
.products-list .v-carousel__item div.text-center {
  color: #000 !important;
  font-size: 13px;
}
.products-list .v-carousel__item h1 {
  font-size: 35px;
  line-height: 39px;
  font-weight: 800;
}
.products-list .v-carousel__item h2 {
  font-size: 44px;
  line-height: 35.2px;
  font-weight: 400;
}
.products-list .v-carousel__item h4 {
  font-size: 24px;
  line-height: 35.2px;
  font-weight: 400;
}
.products-list .v-carousel__item img {
  transform: scaleX(-1);
}
.products-list .v-slide-group__wrapper {
  border-bottom: 1px solid #e7e7e7 !important;
}
.product-list .row .v-card {
  box-shadow: 0 5px 23px rgba(188, 207, 219, 0.35) !important;
  cursor: pointer;
}
.product-list .row .v-card:hover {
  margin-top: -10px;
}
.product-list .product-title img {
  max-width: 100%;
  min-height: 11em;
}
.product-interactions {
  border-top: 1px solid #ccc;
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 0;
}
section.reviews {
  background-image: linear-gradient(90deg, #880fc4 0%, #1d39f2 100%);
  color: #fff !important;
}
section.reviews h3 {
  font-size: 16px;
  font-weight: 400;
}
section.reviews .testimonial .v-card {
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
  border: none;
  color: #fff;
  font-size: 16px !important;
  line-height: 28px;
  font-weight: 300;
}
section.reviews .testimonial .v-card img {
  z-index: 10000;
}
section.reviews .testimonial .v-card .merchant-name {
  font-size: 20px;
}
section.reviews .testimonial .v-card .merchant-type {
  font-size: 15px;
}
</style>
