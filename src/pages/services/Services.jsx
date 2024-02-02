import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Services() {
  return (
    <div>
      <Navbar />
      <div class="bg-gray-200 px-2 py-10">
        <div id="features" class="mx-auto max-w-6xl">
          <p class="text-center text-base font-semibold leading-7 text-primary-500">
            Services
          </p>
          <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Writing has never been so easy
          </h2>
          <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt=""
                class="mx-auto h-10 w-10"
              />
              <h3 class="my-3 font-display font-medium">Powered by ChatGPT</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                the cutting-edge language model that makes interactions a
                breeze. With its user-friendly interface, effortlessly tap into
                the world of AI-generated text.
              </p>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt=""
                class="mx-auto h-10 w-10"
              />
              <h3 class="my-3 font-display font-medium">Easy to use</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                Simply input your subject, click the generate button, and the
                result will appear in seconds just like magick.
              </p>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530444/availability.svg"
                alt=""
                class="mx-auto h-10 w-10"
              />
              <h3 class="my-3 font-display font-medium">Custom settings</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer advanced customization. You can freely combine options
                like roles, languages, publish, tones, lengths, and formats.
              </p>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/pricing" class="group">
                <img
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Free trial
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a free trial service without login. We provide many
                  payment options including pay-as-you-go and subscription.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/templates" class="group">
                <img
                  src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  90+ templates
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer many templates covering areas such as writing,
                  education, lifestyle and creativity to inspire your potential.{" "}
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
              <a href="/download" class="group">
                <img
                  src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                  alt=""
                  class="mx-auto h-10 w-10"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Use Anywhere
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
