import LaravelLogo from "./assets/laravel logo.png";
import InertiaLogo from "./assets/inertia logo.png";
import ReactLogo from "./assets/react logo.png";
import TsLogo from "./assets/ts logo.png";

import SsConf from "./assets/ss conf.png";
import SsZad from "./assets/ss zad.png";
import LogoKotak from "./assets/logo kotak.png";
import LogoFikriRpFull from "./assets/logo.png";
import FikriPhoto from "./assets/fikri.jpeg";
import CpanelLogo from "./assets/cpanel logo.png";
import LinuxLogo from "./assets/linux logo.png";
import MikroTikLogo from "./assets/mikrotik logo.png";
import AzureLogo from "./assets/azure logo.png";
import ProxmoxLogo from "./assets/proxmox logo.png";
import DockerLogo from "./assets/docker logo.png";
import NginxLogo from "./assets/nginx logo.png";

import {
  Bars3Icon,
  BookOpenIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ServerStackIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

function App() {
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  return (
    <div className="min-h-screen bg-gray-300 scroll-smooth">
      <header className="sticky top-0">
        <nav className="bg-gradient-to-l from-violet-700 to-blue-500 shadow-md py-2 px-7 flex place-content-between">
          <div className="flex items-center gap-3 font-semibold text-lg text-gray-600">
            <img
              src={LogoKotak}
              className="h-10 bg-white p-0.5 rounded-md shadow-sm"
            />
            <span className="text-white">friansh's Page</span>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setShowTableOfContents(!showTableOfContents)}
            >
              <Bars3Icon className="block my-auto text-white h-9 w-9 border p-1 rounded-sm" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-white font-semibold">
            <a
              href="https://github.com/friansh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:bg-violet-400 hover:rounded-sm px-2 py-2"
            >
              <GlobeAltIcon className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/friansh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:bg-violet-400 hover:rounded-sm px-2 py-2"
            >
              <GlobeAltIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="mailto:aku@fikrirp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:bg-violet-400 hover:rounded-sm px-2 py-2"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Email
            </a>
          </div>
        </nav>
      </header>

      <div className="flex lg:flex-row flex-col">
        <aside
          className={`${
            showTableOfContents ? "max-h-screen" : "max-h-0"
          } lg:min-h-screen transition-all duration-300 ease-in-out lg:fixed lg:t-0 w-full font-semibold lg:w-80 overflow-y-hidden bg-white shadow-md bg-gradient-to-r from-cyan-700 to-sky-800 text-white`}
        >
          <div className="m-5">
            <span className="top-0 block font-semibold text-lg tracking-wide mb-3 pb-2 ps-2 border-b-2 border-white/50 flex items-center gap-1">
              <BookOpenIcon className="h-5 w-5 inline" />
              Daftar Isi
            </span>
            <ul className="ps-2 leading-8 text-white/90 underline-offset-3 tracking-wide">
              <li>
                <a href="#top">Profil</a>
              </li>
              <li>
                Portfolio
                <ul className="list-disc text-sm list-inside ps-2 leading-6 font-normal">
                  <li>Zadulilmi Academic Portal</li>
                  <li>AJT Events</li>
                  <li>Security Risk Assessment</li>
                  <li>Pertamina Water Tools</li>
                  <li>Pertamina PSAIMS Audit Tools</li>
                  <li>General Smart Farming Portal</li>
                  <li>Smart Electrocardiogram Portal</li>
                  <li>Smart Farming Hydroponic Portal</li>
                  <li>Akinov Letter Generator</li>
                  <li>Loakarya Web Page</li>
                  <li>Sistem Antrean Publikasi Medfo Akinov</li>
                </ul>
              </li>
              <li>
                Academic Publication
                <ul className="list-disc text-sm list-inside ps-2 leading-6 font-normal">
                  <li>
                    Design of Smart Farming Communication and Web Interface
                    using MQTT and Node.js
                  </li>
                  <li>
                    Development and Implementation of Smart Irigation for
                    Precision Farming
                  </li>
                  <li>
                    Design of Arrhythmia Early Detection Interface Using Laravel
                    Framework
                  </li>
                </ul>
              </li>
              <li>
                <a href="#deployment">Server Operational Experiences</a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="px-4 lg:px-0 lg:ms-80 overflow-y-auto pb-24 pt-4 lg:pt-10 flex flex-col gap-5 lg:gap-10 w-full">
          <section className="max-w-4xl mx-auto 2xl:max-w-7xl">
            <div className="flex-col gap-10 lg:gap-0 lg:flex-col mx-auto flex place-content-between p-5 lg:px-12 bg-gradient-to-br from-blue-400 to-blue-900 py-6 rounded-lg shadow-md">
              <div className="flex gap-7 flex-col lg:flex-row">
                <img
                  src={FikriPhoto}
                  className="h-32 w-32 my-auto rounded-full border-2 border-white/50 shadow-sm"
                />
                <div className="flex flex-col gap-2 justify-center">
                  <h1 className="text-2xl font-bold tracking-wider text-white/90 border-b-4 pb-3 mb-1 border-white/40">
                    Fikri Rida Pebriansyah, S.T.
                  </h1>
                  <h2 className="text-lg font-semibold tracking-wide text-white/80">
                    S1 Teknik Elektro Universitas Padjadjaran
                  </h2>
                  <h3 className="text-sm text-white/70">
                    A Full Stack Web Developer, Desktop App Developer, Embedded
                    System Firmware Programmer, and Electrical Engineer.
                  </h3>
                </div>
              </div>
              <img
                src={LogoKotak}
                alt=""
                className="hidden lg:blockh-32 w-32 mx-auto"
              />
            </div>
          </section>

          <section className="flex flex-col gap-10 max-w-4xl mx-auto 2xl:max-w-7xl">
            <article className="bg-white p-6 border rounded-lg shadow-md">
              <h4 className="font-bold pb-2 border-b mb-5 text-xl text-gray-700 flex items-center gap-1">
                <ComputerDesktopIcon className="h-5 w-5 text-gray-600" />
                Zad Islamic Playschool Academic Portal
              </h4>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="basis-1/2">
                  <img
                    src={SsZad}
                    alt=""
                    className="border shadow-sm rounded-sm"
                  />
                </div>
                <div className="basis-1/2 flex flex-col place-content-between gap-10">
                  <div>
                    <p className="leading-7">
                      Web ini bertujuan sebagai portal akademik sekolah secara
                      umum.
                    </p>
                    <span className="block mt-3">
                      Fitur-fitur dari web ini antara lain:
                    </span>
                    <ul className="list-decimal list-inside">
                      <li>Perekaman dan laporan absensi.</li>
                      <li>Manajemen admin, guru, dan siswa.</li>
                      <li>
                        Portal siswa, termasuk didalamnya profil, pembayaran
                        biaya pendaftaran sekolah (integrasi dengan Midtrans),
                        student assessment form, dan data interview.
                      </li>
                      <li>
                        Log masuk menggunakan Google Account untuk siswa dan
                        Microsoft Account (Microsoft Entra Id) untuk guru.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="mb-4 pb-1 border-b block font-semibold text-lg text-center">
                      Technology Stack
                    </span>
                    <div className="grid grid-cols-4 gap-5">
                      <img src={TsLogo} alt="" className="max-h-12 mx-auto" />
                      <img
                        src={LaravelLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                      <img
                        src={ReactLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                      <img
                        src={InertiaLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-white p-6 border rounded-lg shadow-md">
              <h4 className="font-bold text-xl text-gray-700 leading-7 pb-2 border-b mb-5 flex items-center gap-1">
                <ComputerDesktopIcon className="h-5 w-5 text-gray-600" />
                Conference Events and Digital Journal Catalog and Publishing
                Management Portal
              </h4>

              <div className="flex flex-col lg:flex-row gap-6 cl mt-3">
                <div className="basis-1/2">
                  <img
                    src={SsConf}
                    alt=""
                    className="border shadow-sm rounded-sm"
                  />
                </div>
                <div className="basis-1/2 flex flex-col place-content-between gap-10">
                  <div>
                    <p className="leading-7">
                      Web ini memiliki 2 tujuan utama, antara lain sebagai
                      katalog acara-acara, misalnya konferensi
                      nasional/internasional atau lokakarya, dan pustaka dari
                      makalah-makalah yang dikumpulkan pada acara tersebut.
                    </p>
                    <span className="block mt-3">
                      Fitur-fitur dari web ini antara lain:
                    </span>
                    <ul className="list-decimal list-inside">
                      <li>
                        Manajemen acara (buat acara, manajemen event chair,
                        event reviewer, dsb.)
                      </li>
                      <li>Pengumpulan dokumen</li>
                      <li>
                        Review dokumen dengan template penilaian yang telah
                        disediakan.
                      </li>
                      <li>
                        Pembayaran terintegrasi Midtrans dengan biaya registrasi
                        berdasarkan pada jadwal daftar yang telah di-input.
                      </li>
                      <li>
                        Content Management Service (CMS) untuk web page acara.
                      </li>
                      <li>
                        Manajemen pengguna dengan roles: general admin, event
                        chair, reviewer, dan author.
                      </li>
                      <li>
                        Pustaka dokumen yang di-publish berdasarkan volume
                        terbit.
                      </li>
                      <li>
                        Portal multi bahasa, Bahasa Indonesia dan Engllish
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span className="mb-4 pb-1 border-b block font-semibold text-lg text-center">
                      Technology Stack
                    </span>
                    <div className="grid grid-cols-4 gap-5">
                      <img src={TsLogo} alt="" className="max-h-12 mx-auto" />
                      <img
                        src={LaravelLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                      <img
                        src={ReactLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                      <img
                        src={InertiaLogo}
                        alt=""
                        className="max-h-12 mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <div
            className="bg-white max-w-4xl mx-auto p-6 border rounded-lg shadow-md "
            id="deployment"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-3 pb-3 border-b-2 flex items-center gap-1">
              <ServerStackIcon className="h-5 w-5 text-gray-600" />
              Server Operational Experiences
            </h4>
            <div className="grid grid-cols-3 gap-6 mt-5 gap-7">
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={LinuxLogo} className="h-24 mx-auto" />
                <span className="text-center block">
                  Deployment on Debian (Ubuntu) and RHEL (AlmaLinux) based
                  Virtual Private Server
                </span>
              </div>
              <div className="flex justify-center flex-col gap-3  border p-4 rounded-lg shadow-sm">
                <img src={CpanelLogo} className="h-10 mx-auto" />
                <span className="text-center block">
                  Deployment on Shared Hosting using CPanel
                </span>
              </div>
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={DockerLogo} className="h-24 mx-auto" />
                <span className="text-center block">Docker Configuration</span>
              </div>
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={NginxLogo} className="h-24 mx-auto" />
                <span className="text-center block">
                  Configuring Basic Web Server Package using Nginx,
                  MariaDB/MySQL, PHP, JavaScript, Python, PM2 Supervisor (not
                  XAMPP)
                </span>
              </div>
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={ProxmoxLogo} className="h-24 mx-auto" />
                <span className="text-center block">
                  Creating Home Lab Server using Proxmox Hypervisor
                </span>
              </div>
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={MikroTikLogo} className="h-10 mx-auto" />
                <span className="text-center block">Basic Network Set Up.</span>
              </div>
              <div className="flex justify-center flex-col gap-3 border p-4 rounded-lg shadow-sm">
                <img src={AzureLogo} className="h-24 mx-auto" />
                <span className="text-center block">
                  Deployment on Microsoft Azure
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="flex gap-y-10 lg:gap-y-0 flex-col lg:flex-row shadow-inner items-center bg-sky-700 text-white py-6 px-10 place-content-between relative">
        <div>
          <span className="leading-7 border-b-2 border-white/50 border-white block mb-2 pb-1 ps-1 font-semibold text-white/80">
            Useful Links
          </span>
          <div className="flex gap-10 text-white/80">
            <ul className="text-xs leading-5 list-disc list-inside">
              <li>friansh.github.io</li>
              <li>portfolio.fikrirp.com</li>
            </ul>
            <ul className="text-xs leading-5 list-disc list-inside">
              <li>fikrirp.com</li>
              <li>fsh.my.id</li>
            </ul>
          </div>
        </div>

        <img src={LogoFikriRpFull} className="h-12" />

        <div className="flex flex-col items-center lg:items-end gap-2">
          <span className="text-sm">Fikri Rida Pebriansyah - 2024</span>
          <span className="text-xs text-white/70">
            Created with React and Tailwind CSS
          </span>
          <span className="text-xs text-white/70">
            Deployed on GitHub Pages
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
