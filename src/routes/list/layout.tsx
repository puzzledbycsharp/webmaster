import { component$, Slot } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Breadcrumbs } from "~/components/breadcrumbs/breadcrumbs";
import { CommentsSection } from '~/components/commentssection/commentssection';
import { RightAside } from '~/components/right-aside/right-aside';
import { SubscribeForm } from '~/components/subscribeform/subscribeform';
import { MobileSocialShare } from '~/components/mobilesocialshare/mobilesocialshare';
import  LeftContextMenu  from '~/components/leftcontextmenu/leftcontextmenu';
import Header from '~/components/header/header';
import Footer from '~/components/footer/footer';

export default component$(() => {

  return (
    <main>
            <Header />
      <section class="section relative top-3 md:top-3 lg:top-12" >
        <div class="grid grid-cols-6 lg:gap-6">
          <div class="col-span-6 lg:col-span-1">
            <div class="grid grid-rows-2 mx-3 sticky top-16" id="bread-crumb">
              <div class="row-span-1">
                <div class="items-center hidden lg:flex lg:flex-row" >
                  <LeftContextMenu />
                  <div class="lg:hidden" >
                    <Breadcrumbs />
                  </div>
                </div>
              </div>
              <div class="row-span-1 ">
                <div class="flex flex-row py-3 my-1 border-2 lg:hidden border-customdark1 border-b-customdark3 hover:border-b-customdark2 text-sm justify-start duration-300">
                  <MobileSocialShare />
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-6 lg:col-span-4 duration-300" id="main-body">
            <div class="hidden lg:block lg:visible px-3">
              <Breadcrumbs />
            </div>
            <Slot />
            <div class="block md:hidden py-3 border-2 border-customdark1 border-b-customdark3 border-t-customdark3 hover:border-b-customdark2 hover:border-t-customdark2 duration-300">
              <h6>
                Get Latest Updates
              </h6>
              <SubscribeForm />
            </div>
            <div class="py-3 md:border-2 md:border-customdark1 md:border-t-customdark3 md:hover:border-t-customdark2 duration-300">
              <h6>
                Comments Section
              </h6>
              <CommentsSection />
            </div>
          </div>
          <div class="hidden lg:block md:visible md:col-span-1 ">
            <RightAside />
          </div>
        </div>

      </section>
      <Footer />
    </main>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title}`,
  };
};
