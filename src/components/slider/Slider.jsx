import { register } from 'swiper/element/bundle';
register();

export const Slider = () => {
  return (
    <main className="px-12 w-full h-auto my-12 2xl:px-[12%]">
      <swiper-container
        pagination-clickable="true"
        pagination-dynamic-bullets="true"
        autoplay-delay="2000"
        autoplay-disable-on-interaction="false"
        grab-cursor="true"
        style={
          {
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-bullet-size": "15px",
          }
      }>
        <swiper-slide>
          <img src="https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE" alt="dummy" className="w-full h-96" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://source.unsplash.com/macbook-y0_vFxOHayg" alt="dummy" className="w-full h-96" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://source.unsplash.com/black-macbook-near-black-iphone-7-plus-and-black-apple-watch-HY3l4IeOc3E" alt="dummy" className="w-full h-96" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY" alt="dummy" className="w-full h-96" />
        </swiper-slide>
      </swiper-container>
    </main>
  )
}
