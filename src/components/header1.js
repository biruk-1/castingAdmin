import React from "react";
import '../styles/app.css';
import '../styles/themes/echo.css';
import '../styles/vendors/litepicker.css';
import '../styles/vendors/simplebar.css';
import '../styles/vendors/tiny-slider.css';
import '../styles/vendors/tippy.css';
const Header1 = () => {
    return ( 
        <div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
  <div className="[&.loading-page--before-hide]:h-screen [&.loading-page--before-hide]:relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
    <div className="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
      <div className="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&.close-mobile-menu--mobile-menu-open]:flex hidden">
        <a className="ml-5 mt-5" href="">
          <i
            data-tw-merge=""
            data-lucide="x"
            className="stroke-[1] h-8 w-8 text-white"
          />
        </a>
      </div>
      <div className="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
        <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
          <a
            className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2"
            href=""
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
              <div className="relative h-[16px] w-[16px] -rotate-45 [&_div]:bg-white">
                <div className="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
                <div className="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full" />
                <div className="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
              </div>
            </div>
            <div className="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
              ECHO
            </div>
          </a>
          <a
            className="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex"
            href=""
          >
            <i
              data-tw-merge=""
              data-lucide="arrow-left"
              className="h-3.5 w-3.5 stroke-[1.3]"
            />
          </a>
        </div>
        <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
          <ul className="scrollable">
            {/* BEGIN: First Child */}
            <li className="side-menu__divider">DASHBOARDS</li>
            <li>
              <a
                href="echo-dashboard-overview-1.html"
                className="side-menu__link side-menu__link--active "
              >
                <i
                  data-tw-merge=""
                  data-lucide="gauge-circle"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">E-Commerce</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-2.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="activity-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">CRM</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-3.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="album"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Hospital</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-4.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="book-marked"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Factory</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-5.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="hard-drive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Banking</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-6.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="mouse-pointer-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Cafe</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-7.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="shield-half"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Crypto</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-8.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="building"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Hotel</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">APPS</li>
            <li>
              <a href="echo-inbox.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="gantt-chart-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Inbox</div>
                <div className="side-menu__link__badge">4</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-file-manager-list.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="panel-right-inactive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Manager List</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-file-manager-grid.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="panel-top-close"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Manager Grid</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-point-of-sale.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="panel-top-inactive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Point of Sale</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-chat.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="mail-open"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Chat</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-calendar.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="calendar-range"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Calendar</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">UI WIDGETS</li>
            <li>
              <a href="echo-creative.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="album"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Creative</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-dynamic.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="activity-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Dynamic</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-interactive.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="keyboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Interactive</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">USER MANAGEMENT</li>
            <li>
              <a href="echo-users.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="user-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Users</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-departments.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="cake-slice"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Departments</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-add-user.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="package-plus"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Add User</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">PERSONAL DASHBOARD</li>
            <li>
              <a href="echo-profile-overview.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="presentation"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Profile Overview</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-events.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="calendar-range"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Events</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-achievements.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="medal"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Achievements</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-contacts.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="tablet-smartphone"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Contacts</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-default.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="snail"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Default</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">GENERAL SETTINGS</li>
            <li>
              <a href="echo-settings.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="briefcase"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Profile Info</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-email-settings.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="mail-check"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Email Settings</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-security.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="fingerprint"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Security</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-preferences.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="radar"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Preferences</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-two-factor-authentication.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="door-open"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Two-factor Authentication
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-device-history.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="keyboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Device History</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-notification-settings.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="ticket"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Notification Settings
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-connected-services.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="bus-front"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Connected Services</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-social-media-links.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="podcast"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Social Media Links</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-account-deactivation.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="package-x"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Account Deactivation
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">ACCOUNT</li>
            <li>
              <a href="echo-billing.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="percent-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Billing</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-invoice.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="database-zap"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Invoice</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">E-COMMERCE</li>
            <li>
              <a href="echo-categories.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-marked"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Categories</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-add-product.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="compass"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Add Product</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="table2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Products</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-product-list.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="layout-panel-top"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Product List</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-product-grid.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="layout-panel-left"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Product Grid</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="sigma-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Transactions</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a
                    href="echo-transaction-list.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="divide-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">
                      Transaction List
                    </div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a
                    href="echo-transaction-detail.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="plus-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">
                      Transaction Detail
                    </div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="file-archive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Sellers</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-seller-list.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="file-image"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Seller List</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a
                    href="echo-seller-detail.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="file-box"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Seller Detail</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-reviews.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="goal"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Reviews</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">AUTHENTICATIONS</li>
            <li>
              <a href="echo-login.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-key"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Login</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-register.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-lock"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Register</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">COMPONENTS</li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="layout-panel-left"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Table</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a
                    href="echo-regular-table.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="flip-vertical"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Regular Table</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-tabulator.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="flip-horizontal"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Tabulator</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="memory-stick"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Overlay</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-modal.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="menu-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Modal</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-slideover.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="newspaper"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Slide Over</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-notification.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="panel-bottom"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Notification</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tab.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="package2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tab</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-accordion.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="pocket"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Accordion</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-button.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="plus-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Button</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-alert.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="presentation"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Alert</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-progress-bar.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="shield-ellipsis"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Progress Bar</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tooltip.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="clapperboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tooltip</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-dropdown.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="flip-vertical"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Dropdown</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-typography.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="file-type2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Typography</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-icon.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="aperture"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Icon</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-loading-icon.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="droplets"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Loading Icon</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-regular-form.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="gallery-horizontal-end"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Regular Form</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-datepicker.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="microwave"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Datepicker</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tom-select.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="disc3"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tom Select</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-file-upload.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="sandwich"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Upload</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-wysiwyg-editor.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="hop-off"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Wysiwyg Editor</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-validation.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="clipboard-type"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Validation</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-chart.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="pie-chart"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Chart</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-slider.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="kanban-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Slider</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-image-zoom.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="image"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Image Zoom</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            {/* END: First Child */}
          </ul>
        </div>
      </div>
      <div className="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
        <div className="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
          <div className="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
            <div className="flex items-center gap-1 xl:hidden">
              <a
                className="open-mobile-menu rounded-full p-2 text-white hover:bg-white/5"
                href=""
              >
                <i
                  data-tw-merge=""
                  data-lucide="align-justify"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
              <a
                className="rounded-full p-2 text-white hover:bg-white/5"
                data-tw-toggle="modal"
                data-tw-target="#quick-search"
                href="javascript:;"
              >
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
            </div>
            {/* BEGIN: Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex hidden flex-1 xl:block"
            >
              <ol className="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
                <li className="">
                  <a href="">App</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white">
                  <a href="">Dashboards</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-white/70">
                  <a href="">Analytics</a>
                </li>
              </ol>
            </nav>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div
              className="relative hidden flex-1 justify-center xl:flex"
              data-tw-toggle="modal"
              data-tw-target="#quick-search"
            >
              <div className="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
                <div className="ml-2.5 mr-auto">Quick search...</div>
                <div>⌘K</div>
              </div>
            </div>
            <div
              id="quick-search"
              aria-hidden="true"
              tabIndex={-1}
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.1s]"
            >
              <div className="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                    <i
                      data-tw-merge=""
                      data-lucide="search"
                      className="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"
                    />
                  </div>
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Quick search..."
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"
                  />
                  <div className="absolute inset-y-0 right-0 flex w-14 items-center">
                    <div className="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                      ESC
                    </div>
                  </div>
                </div>
                <div className="global-search global-search--show-result group relative z-10 mt-1 max-h-[468px] overflow-y-auto rounded-lg bg-white pb-1 shadow-lg sm:max-h-[615px]">
                  <div className="flex flex-col items-center justify-center pb-28 pt-20 group-[.global-search--show-result]:hidden">
                    <i
                      data-tw-merge=""
                      data-lucide="search-x"
                      className="h-20 w-20 fill-theme-1/5 stroke-[0.5] text-theme-1/20"
                    />
                    <div className="mt-5 text-xl font-medium">
                      No result found
                    </div>
                    <div className="mt-3 w-2/3 text-center leading-relaxed text-slate-500">
                      No results found for
                      <span className="global-search__keyword font-medium italic" />{" "}
                      . Please try a different search term or check your
                      spelling.
                    </div>
                  </div>
                  <div className="hidden group-[.global-search--show-result]:block">
                    <div className="px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Start your search here...
                        </div>
                      </div>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="users2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Users
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="building2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Departments
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="kanban-square"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Products
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="mail-check"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Mails
                        </a>
                        <div
                          data-tw-merge=""
                          data-tw-placement="bottom-end"
                          className="dropdown relative"
                        >
                          <a
                            data-tw-toggle="dropdown"
                            aria-expanded="false"
                            href="javascript:;"
                            className="cursor-pointer flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          >
                            More
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-down"
                              className="-ml-0.5 h-4 w-4 stroke-[1.3]"
                            />
                          </a>
                          <div
                            data-transition=""
                            data-selector=".show"
                            data-enter="transition-all ease-linear duration-150"
                            data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                            data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                            data-leave="transition-all ease-linear duration-150"
                            data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                            data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                            className="dropdown-menu absolute z-[9999] hidden"
                          >
                            <div
                              data-tw-merge=""
                              className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                            >
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="map"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Locations
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="file-check"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Projects
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="printer"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Devices
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Users
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Denzel Washington
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Atlanta, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user3-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Leonardo DiCaprio
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Chicago, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user2-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Meryl Streep
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Los Angeles, USA
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Departments
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="store"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">Operations</div>
                          <div className="hidden text-slate-500 sm:block">
                            Guyana
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="hotel"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Engineering
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Bulgaria
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="store"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Product Management
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Northern Mariana Islands
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Products
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product8-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Smartphone Charging Dock
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Home &amp; Garden
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product9-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            8-Cup Coffee Maker
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Beauty &amp; Personal Care
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product7-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Wireless Earbuds with Mic
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Furniture
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notification & User Menu */}
            <div className="flex flex-1 items-center">
              <div className="ml-auto flex items-center gap-1">
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#activities-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="layout-grid"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="request-full-screen rounded-full p-2 text-white hover:bg-white/5"
                  href=""
                >
                  <i
                    data-tw-merge=""
                    data-lucide="expand"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#notifications-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="bell"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
              </div>
              <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                className="dropdown relative ml-5"
              >
                <button
                  data-tw-toggle="dropdown"
                  aria-expanded="false"
                  className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"
                >
                  <img
                    src="dist/images/users/user7-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                  />
                </button>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                  data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                  className="dropdown-menu absolute z-[9999] hidden"
                >
                  <div
                    data-tw-merge=""
                    className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-1 w-56"
                  >
                    <a
                      data-tw-toggle="modal"
                      data-tw-target="#switch-account"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="toggle-left"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Switch Account
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                    <a
                      href="echo-settings-connected-services.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="settings"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Connected Services
                    </a>
                    <a
                      href="echo-settings-email-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="inbox"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Email Settings
                    </a>
                    <a
                      href="echo-settings-security.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="lock"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Reset Password
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                    <a
                      href="echo-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="users"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Profile Info
                    </a>
                    <a
                      href="echo-login.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="power"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="activities-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Latest Activities
                    </h2>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-3.5 px-5 py-3">
                      <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:ml-[14px] before:w-px before:bg-slate-200/60 before:content-[''] before:dark:bg-darkmode-400">
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Updated profile picture
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Changed profile photo
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 warning">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Success</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project5-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Oct 2021
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Received a friend request
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Friend request from John
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 warning">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">New</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project4-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project7-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Jul 2020
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Logged out
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Signed out from the dashboard
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 primary">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Info</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project4-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project7-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Wed Jul 2021
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Received 5 new emails
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Inbox updates
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 success">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Info</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation1.pptx
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    5.2MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation2.ppt
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    4.5MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Sat Sep 2020
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Uploaded audio recordings
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Recorded podcast episodes
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 info">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Completed</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    audio1.mp3
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    4.8MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    audio2.wav
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    6.2MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Wed Dec 2021
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="notifications-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Notifications
                    </h2>
                    <button
                      data-tw-merge=""
                      className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="shield-check"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Mark all as read
                    </button>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-0.5 p-3">
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Logged in successfully
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Accessed the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project7-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Fri Sep 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Logged out</div>
                          <div className="mt-0.5 text-slate-500">
                            Signed out from the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project3-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu Apr 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded presentations
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added slides for the team meeting
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Jun 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded images</div>
                          <div className="mt-0.5 text-slate-500">
                            Added project screenshots
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon May 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received a friend request
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Friend request from John
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Tue Aug 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded documents</div>
                          <div className="mt-0.5 text-slate-500">
                            Uploaded important project documents
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Fri Jun 2020
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Added a new contact</div>
                          <div className="mt-0.5 text-slate-500">
                            Added a new contact, Sarah
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Task completed: Review Project Proposal
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Reviewed and provided feedback
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Wed Sep 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Posted a status update
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared thoughts on the project
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sun May 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Updated profile picture
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Changed profile photo
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project2-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project3-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded code files</div>
                          <div className="mt-0.5 text-slate-500">
                            Added new code modules
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Mar 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received 5 new emails
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Inbox updates
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded video files
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared video tutorials
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Nov 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded audio recordings
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Recorded podcast episodes
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Apr 2022
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded a spreadsheet
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added financial data for Q3
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Sep 2020
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-tw-backdrop=""
              aria-hidden="true"
              tabIndex={-1}
              id="switch-account"
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
            >
              <div
                data-tw-merge=""
                className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]"
              >
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                  <h2 className="text-base font-medium">Switch Account</h2>
                </div>
                <div data-tw-merge="" className="p-5 px-2.5 pb-4 pt-3.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user7-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Johnny Depp</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          johnny.depp@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-0"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user10-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Julia Roberts</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          julia.roberts@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-1"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user2-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Meryl Streep</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          meryl.streep@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-2"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user9-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Denzel Washington</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          denzel.washington@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-3"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user4-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Angelina Jolie</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          angelina.jolie@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-4"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400 flex h-14 items-center justify-center text-center">
                  <a className="-mt-1 block text-primary" href="">
                    Login into an Existing Account
                  </a>
                </div>
              </div>
            </div>
            {/* END: Notification & User Menu */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default Header1;
<div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
  <div className="[&.loading-page--before-hide]:h-screen [&.loading-page--before-hide]:relative loading-page loading-page--before-hide [&.loading-page--before-hide]:before:block [&.loading-page--hide]:before:opacity-0 before:content-[''] before:transition-opacity before:duration-300 before:hidden before:inset-0 before:h-screen before:w-screen before:fixed before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:z-[60] [&.loading-page--before-hide]:after:block [&.loading-page--hide]:after:opacity-0 after:content-[''] after:transition-opacity after:duration-300 after:hidden after:h-16 after:w-16 after:animate-pulse after:fixed after:opacity-50 after:inset-0 after:m-auto after:bg-loading-puff after:bg-cover after:z-[61]">
    <div className="side-menu xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 group inset-y-0 xl:py-3.5 xl:pl-3.5 after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden side-menu--collapsed [&.side-menu--mobile-menu-open]:ml-0 [&.side-menu--mobile-menu-open]:after:block -ml-[275px] after:hidden">
      <div className="close-mobile-menu fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50 [&.close-mobile-menu--mobile-menu-open]:flex hidden">
        <a className="ml-5 mt-5" href="">
          <i
            data-tw-merge=""
            data-lucide="x"
            className="stroke-[1] h-8 w-8 text-white"
          />
        </a>
      </div>
      <div className="side-menu__content h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col">
        <div className="flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]">
          <a
            className="flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0 group-[.side-menu--collapsed]:xl:ml-2"
            href=""
          >
            <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180">
              <div className="relative h-[16px] w-[16px] -rotate-45 [&_div]:bg-white">
                <div className="absolute inset-y-0 left-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
                <div className="absolute inset-0 m-auto h-[120%] w-[21%] rounded-full" />
                <div className="absolute inset-y-0 right-0 my-auto h-[75%] w-[21%] rounded-full opacity-50"></div>
              </div>
            </div>
            <div className="ml-3.5 font-medium transition-opacity group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0">
              ECHO
            </div>
          </a>
          <a
            className="toggle-compact-menu ml-auto hidden h-[20px] w-[20px] items-center justify-center rounded-full border border-slate-600/40 transition-[opacity,transform] hover:bg-slate-600/5 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 3xl:flex"
            href=""
          >
            <i
              data-tw-merge=""
              data-lucide="arrow-left"
              className="h-3.5 w-3.5 stroke-[1.3]"
            />
          </a>
        </div>
        <div className="scrollable-ref w-full h-full z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent [&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30">
          <ul className="scrollable">
            {/* BEGIN: First Child */}
            <li className="side-menu__divider">DASHBOARDS</li>
            <li>
              <a
                href="echo-dashboard-overview-1.html"
                className="side-menu__link side-menu__link--active "
              >
                <i
                  data-tw-merge=""
                  data-lucide="gauge-circle"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">E-Commerce</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-2.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="activity-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">CRM</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-3.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="album"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Hospital</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-4.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="book-marked"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Factory</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-5.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="hard-drive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Banking</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-6.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="mouse-pointer-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Cafe</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-7.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="shield-half"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Crypto</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-dashboard-overview-8.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="building"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Hotel</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">APPS</li>
            <li>
              <a href="echo-inbox.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="gantt-chart-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Inbox</div>
                <div className="side-menu__link__badge">4</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-file-manager-list.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="panel-right-inactive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Manager List</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-file-manager-grid.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="panel-top-close"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Manager Grid</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-point-of-sale.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="panel-top-inactive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Point of Sale</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-chat.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="mail-open"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Chat</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-calendar.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="calendar-range"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Calendar</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">UI WIDGETS</li>
            <li>
              <a href="echo-creative.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="album"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Creative</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-dynamic.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="activity-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Dynamic</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-interactive.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="keyboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Interactive</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">USER MANAGEMENT</li>
            <li>
              <a href="echo-users.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="user-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Users</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-departments.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="cake-slice"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Departments</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-add-user.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="package-plus"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Add User</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">PERSONAL DASHBOARD</li>
            <li>
              <a href="echo-profile-overview.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="presentation"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Profile Overview</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-events.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="calendar-range"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Events</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-achievements.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="medal"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Achievements</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-contacts.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="tablet-smartphone"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Contacts</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-profile-overview-default.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="snail"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Default</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">GENERAL SETTINGS</li>
            <li>
              <a href="echo-settings.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="briefcase"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Profile Info</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-email-settings.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="mail-check"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Email Settings</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-security.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="fingerprint"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Security</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-preferences.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="radar"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Preferences</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-two-factor-authentication.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="door-open"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Two-factor Authentication
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-device-history.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="keyboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Device History</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-notification-settings.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="ticket"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Notification Settings
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-connected-services.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="bus-front"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Connected Services</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-social-media-links.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="podcast"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Social Media Links</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a
                href="echo-settings-account-deactivation.html"
                className="side-menu__link "
              >
                <i
                  data-tw-merge=""
                  data-lucide="package-x"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">
                  Account Deactivation
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">ACCOUNT</li>
            <li>
              <a href="echo-billing.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="percent-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Billing</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-invoice.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="database-zap"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Invoice</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">E-COMMERCE</li>
            <li>
              <a href="echo-categories.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-marked"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Categories</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-add-product.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="compass"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Add Product</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="table2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Products</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-product-list.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="layout-panel-top"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Product List</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-product-grid.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="layout-panel-left"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Product Grid</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="sigma-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Transactions</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a
                    href="echo-transaction-list.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="divide-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">
                      Transaction List
                    </div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a
                    href="echo-transaction-detail.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="plus-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">
                      Transaction Detail
                    </div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="file-archive"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Sellers</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-seller-list.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="file-image"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Seller List</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a
                    href="echo-seller-detail.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="file-box"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Seller Detail</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-reviews.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="goal"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Reviews</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">AUTHENTICATIONS</li>
            <li>
              <a href="echo-login.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-key"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Login</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-register.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="book-lock"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Register</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li className="side-menu__divider">COMPONENTS</li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="layout-panel-left"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Table</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a
                    href="echo-regular-table.html"
                    className="side-menu__link "
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="flip-vertical"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Regular Table</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-tabulator.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="flip-horizontal"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Tabulator</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="javascript:;" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="memory-stick"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Overlay</div>
                <i
                  data-tw-merge=""
                  data-lucide="chevron-down"
                  className="stroke-[1] w-5 h-5 side-menu__link__chevron"
                />
              </a>
              {/* BEGIN: Second Child */}
              <ul className="hidden">
                <li>
                  <a href="echo-modal.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="menu-square"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Modal</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-slideover.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="newspaper"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Slide Over</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
                <li>
                  <a href="echo-notification.html" className="side-menu__link ">
                    <i
                      data-tw-merge=""
                      data-lucide="panel-bottom"
                      className="stroke-[1] w-5 h-5 side-menu__link__icon"
                    />
                    <div className="side-menu__link__title">Notification</div>
                  </a>
                  {/* BEGIN: Third Child */}
                  {/* END: Third Child */}
                </li>
              </ul>
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tab.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="package2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tab</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-accordion.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="pocket"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Accordion</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-button.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="plus-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Button</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-alert.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="presentation"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Alert</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-progress-bar.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="shield-ellipsis"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Progress Bar</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tooltip.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="clapperboard"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tooltip</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-dropdown.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="flip-vertical"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Dropdown</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-typography.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="file-type2"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Typography</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-icon.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="aperture"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Icon</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-loading-icon.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="droplets"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Loading Icon</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-regular-form.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="gallery-horizontal-end"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Regular Form</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-datepicker.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="microwave"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Datepicker</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-tom-select.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="disc3"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Tom Select</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-file-upload.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="sandwich"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">File Upload</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-wysiwyg-editor.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="hop-off"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Wysiwyg Editor</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-validation.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="clipboard-type"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Validation</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-chart.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="pie-chart"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Chart</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-slider.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="kanban-square"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Slider</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            <li>
              <a href="echo-image-zoom.html" className="side-menu__link ">
                <i
                  data-tw-merge=""
                  data-lucide="image"
                  className="stroke-[1] w-5 h-5 side-menu__link__icon"
                />
                <div className="side-menu__link__title">Image Zoom</div>
              </a>
              {/* BEGIN: Second Child */}
              {/* END: Second Child */}
            </li>
            {/* END: First Child */}
          </ul>
        </div>
      </div>
      <div className="fixed inset-x-0 top-0 mt-3.5 h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px]">
        <div className="top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur">
          <div className="box group-[.top-bar--active]:box container flex h-full w-full items-center border-transparent bg-transparent shadow-none transition-[padding,background-color,border-color] duration-300 ease-in-out group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2 group-[.top-bar--active]:px-5">
            <div className="flex items-center gap-1 xl:hidden">
              <a
                className="open-mobile-menu rounded-full p-2 text-white hover:bg-white/5"
                href=""
              >
                <i
                  data-tw-merge=""
                  data-lucide="align-justify"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
              <a
                className="rounded-full p-2 text-white hover:bg-white/5"
                data-tw-toggle="modal"
                data-tw-target="#quick-search"
                href="javascript:;"
              >
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
              </a>
            </div>
            {/* BEGIN: Breadcrumb */}
            <nav
              aria-label="breadcrumb"
              className="flex hidden flex-1 xl:block"
            >
              <ol className="flex items-center text-theme-1 dark:text-slate-300 text-white/90">
                <li className="">
                  <a href="">App</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white">
                  <a href="">Dashboards</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-white before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-white/70">
                  <a href="">Analytics</a>
                </li>
              </ol>
            </nav>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div
              className="relative hidden flex-1 justify-center xl:flex"
              data-tw-toggle="modal"
              data-tw-target="#quick-search"
            >
              <div className="flex w-[350px] cursor-pointer items-center rounded-[0.5rem] border border-transparent bg-white/[0.12] px-3.5 py-2 text-white/60 transition-colors duration-300 hover:bg-white/[0.15] hover:duration-100">
                <i
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-[1] h-[18px] w-[18px]"
                />
                <div className="ml-2.5 mr-auto">Quick search...</div>
                <div>⌘K</div>
              </div>
            </div>
            <div
              id="quick-search"
              aria-hidden="true"
              tabIndex={-1}
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 overflow-y-hidden z-[60] [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.1s]"
            >
              <div className="relative mx-auto my-2 w-[95%] scale-95 transition-transform group-[.show]:scale-100 sm:mt-40 sm:w-[600px] lg:w-[700px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-center">
                    <i
                      data-tw-merge=""
                      data-lucide="search"
                      className="stroke-[1] w-5 h-5 -mr-1.5 text-slate-500"
                    />
                  </div>
                  <input
                    data-tw-merge=""
                    type="text"
                    placeholder="Quick search..."
                    className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full border-slate-200 placeholder:text-slate-400/90 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 [&[type='file']]:border file:mr-4 file:py-2 file:px-4 file:rounded-l-md file:border-0 file:border-r-[1px] file:border-slate-100/10 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-500/70 hover:file:bg-200 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-lg border-0 py-3.5 pl-12 pr-14 text-base shadow-lg focus:ring-0"
                  />
                  <div className="absolute inset-y-0 right-0 flex w-14 items-center">
                    <div className="mr-auto rounded-[0.4rem] border bg-slate-100 px-2 py-1 text-xs text-slate-500/80">
                      ESC
                    </div>
                  </div>
                </div>
                <div className="global-search global-search--show-result group relative z-10 mt-1 max-h-[468px] overflow-y-auto rounded-lg bg-white pb-1 shadow-lg sm:max-h-[615px]">
                  <div className="flex flex-col items-center justify-center pb-28 pt-20 group-[.global-search--show-result]:hidden">
                    <i
                      data-tw-merge=""
                      data-lucide="search-x"
                      className="h-20 w-20 fill-theme-1/5 stroke-[0.5] text-theme-1/20"
                    />
                    <div className="mt-5 text-xl font-medium">
                      No result found
                    </div>
                    <div className="mt-3 w-2/3 text-center leading-relaxed text-slate-500">
                      No results found for
                      <span className="global-search__keyword font-medium italic" />{" "}
                      . Please try a different search term or check your
                      spelling.
                    </div>
                  </div>
                  <div className="hidden group-[.global-search--show-result]:block">
                    <div className="px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Start your search here...
                        </div>
                      </div>
                      <div className="mt-3.5 flex flex-wrap gap-2">
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="users2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Users
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="building2"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Departments
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="kanban-square"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Products
                        </a>
                        <a
                          className="flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          href=""
                        >
                          <i
                            data-tw-merge=""
                            data-lucide="mail-check"
                            className="h-4 w-4 stroke-[1.3]"
                          />
                          Mails
                        </a>
                        <div
                          data-tw-merge=""
                          data-tw-placement="bottom-end"
                          className="dropdown relative"
                        >
                          <a
                            data-tw-toggle="dropdown"
                            aria-expanded="false"
                            href="javascript:;"
                            className="cursor-pointer flex items-center gap-x-1.5 rounded-full border border-slate-300/70 px-3 py-0.5 hover:bg-slate-50"
                          >
                            More
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-down"
                              className="-ml-0.5 h-4 w-4 stroke-[1.3]"
                            />
                          </a>
                          <div
                            data-transition=""
                            data-selector=".show"
                            data-enter="transition-all ease-linear duration-150"
                            data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                            data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                            data-leave="transition-all ease-linear duration-150"
                            data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                            data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                            className="dropdown-menu absolute z-[9999] hidden"
                          >
                            <div
                              data-tw-merge=""
                              className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                            >
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="map"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Locations
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="file-check"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Projects
                              </a>
                              <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                <i
                                  data-tw-merge=""
                                  data-lucide="printer"
                                  className="stroke-[1] mr-2 h-4 w-4"
                                />
                                Devices
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Users
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user9-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Denzel Washington
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Atlanta, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user3-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Leonardo DiCaprio
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Chicago, USA
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user2-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Meryl Streep
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Los Angeles, USA
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Departments
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="store"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">Operations</div>
                          <div className="hidden text-slate-500 sm:block">
                            Guyana
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="hotel"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Engineering
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Bulgaria
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="zoom-in box flex h-6 w-6 items-center justify-center overflow-hidden rounded-md border border-theme-1/10 bg-theme-1/10">
                            <i
                              data-tw-merge=""
                              data-lucide="store"
                              className="h-3.5 w-3.5 stroke-[1.3] text-theme-1"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Product Management
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Northern Mariana Islands
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-dashed px-5 py-4">
                      <div className="flex items-center">
                        <div className="text-xs uppercase text-slate-500">
                          Products
                        </div>
                        <a className="ml-auto text-xs text-slate-500" href="">
                          See All
                        </a>
                      </div>
                      <div className="mt-3.5 flex flex-col gap-1">
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product8-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Smartphone Charging Dock
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Home &amp; Garden
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product9-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            8-Cup Coffee Maker
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Beauty &amp; Personal Care
                          </div>
                        </a>
                        <a
                          className="flex items-center gap-2.5 rounded-md border border-transparent p-1 hover:border-slate-100 hover:bg-slate-50/80"
                          href=""
                        >
                          <div className="image-fit zoom-in box h-6 w-6 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/products/product7-400x400.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                          <div className="truncate font-medium">
                            Wireless Earbuds with Mic
                          </div>
                          <div className="hidden text-slate-500 sm:block">
                            Furniture
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notification & User Menu */}
            <div className="flex flex-1 items-center">
              <div className="ml-auto flex items-center gap-1">
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#activities-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="layout-grid"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="request-full-screen rounded-full p-2 text-white hover:bg-white/5"
                  href=""
                >
                  <i
                    data-tw-merge=""
                    data-lucide="expand"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
                <a
                  className="rounded-full p-2 text-white hover:bg-white/5"
                  data-tw-toggle="modal"
                  data-tw-target="#notifications-panel"
                  href="javascript:;"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="bell"
                    className="stroke-[1] h-[18px] w-[18px]"
                  />
                </a>
              </div>
              <div
                data-tw-merge=""
                data-tw-placement="bottom-end"
                className="dropdown relative ml-5"
              >
                <button
                  data-tw-toggle="dropdown"
                  aria-expanded="false"
                  className="cursor-pointer image-fit h-[36px] w-[36px] overflow-hidden rounded-full border-[3px] border-white/[0.15]"
                >
                  <img
                    src="dist/images/users/user7-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                  />
                </button>
                <div
                  data-transition=""
                  data-selector=".show"
                  data-enter="transition-all ease-linear duration-150"
                  data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                  data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                  data-leave="transition-all ease-linear duration-150"
                  data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                  data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                  className="dropdown-menu absolute z-[9999] hidden"
                >
                  <div
                    data-tw-merge=""
                    className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-1 w-56"
                  >
                    <a
                      data-tw-toggle="modal"
                      data-tw-target="#switch-account"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="toggle-left"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Switch Account
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                    <a
                      href="echo-settings-connected-services.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="settings"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Connected Services
                    </a>
                    <a
                      href="echo-settings-email-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="inbox"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Email Settings
                    </a>
                    <a
                      href="echo-settings-security.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="lock"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Reset Password
                    </a>
                    <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400"></div>
                    <a
                      href="echo-settings.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="users"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Profile Info
                    </a>
                    <a
                      href="echo-login.html"
                      className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="power"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="activities-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Latest Activities
                    </h2>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-3.5 px-5 py-3">
                      <div className="relative overflow-hidden before:absolute before:inset-y-0 before:left-0 before:ml-[14px] before:w-px before:bg-slate-200/60 before:content-[''] before:dark:bg-darkmode-400">
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Updated profile picture
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Changed profile photo
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 warning">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Success</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project5-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project9-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Oct 2021
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Received a friend request
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Friend request from John
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 warning">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">New</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project4-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project7-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Tue Jul 2020
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Logged out
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Signed out from the dashboard
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 primary">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Info</span>
                              </span>
                            </div>
                            <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-[80%]">
                              <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project4-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project3-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                                <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-20">
                                  <img
                                    src="dist/images/projects/project7-400x400.jpg"
                                    alt="Tailwise - Admin Dashboard Template"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Wed Jul 2021
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Received 5 new emails
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Inbox updates
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 success">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Info</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation1.pptx
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    5.2MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    presentation2.ppt
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    4.5MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Sat Sep 2020
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 last:mb-0 relative first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0">
                          <div className="px-4 py-3 ml-8 before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10 after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10">
                            <a className="font-medium text-primary" href="">
                              Uploaded audio recordings
                            </a>
                            <div className="mt-1.5 flex flex-col gap-y-1.5 text-[0.8rem] leading-relaxed text-slate-500 sm:flex-row sm:items-center">
                              Recorded podcast episodes
                              <span className="group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0 [&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10 [&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10 [&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10 [&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10 info">
                                <span className="mr-1.5 h-1.5 w-1.5 rounded-full group-[.info]:bg-info/80 group-[.primary]:bg-primary/80 group-[.success]:bg-success/80 group-[.warning]:bg-warning/80" />
                                <span className="-mt-px">Completed</span>
                              </span>
                            </div>
                            <div className="my-3.5 grid grid-cols-1 gap-4">
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    audio1.mp3
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    4.8MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center rounded-[0.6rem] border border-slate-200/80 bg-slate-50/70 py-4 pl-5 pr-2.5">
                                <div className="hidden w-10 sm:block">
                                  <div className="relative block bg-center bg-no-repeat bg-contain before:content-[''] before:pt-[100%] before:w-full before:block bg-file-icon-directory"></div>
                                </div>
                                <div className="mr-auto sm:ml-3.5">
                                  <div className="max-w-[8rem] truncate font-medium text-primary">
                                    audio2.wav
                                  </div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    6.2MB
                                  </div>
                                </div>
                                <div
                                  data-tw-merge=""
                                  data-tw-placement="bottom-end"
                                  className="dropdown relative"
                                >
                                  <button
                                    data-tw-toggle="dropdown"
                                    aria-expanded="false"
                                    className="cursor-pointer h-5 w-5 text-slate-500"
                                  >
                                    <i
                                      data-tw-merge=""
                                      data-lucide="more-vertical"
                                      className="stroke-[1] h-4 w-4"
                                    />
                                  </button>
                                  <div
                                    data-transition=""
                                    data-selector=".show"
                                    data-enter="transition-all ease-linear duration-150"
                                    data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave="transition-all ease-linear duration-150"
                                    data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                    data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                    className="dropdown-menu absolute z-[9999] hidden"
                                  >
                                    <div
                                      data-tw-merge=""
                                      className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                    >
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="copy"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Copy Link
                                      </a>
                                      <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                        <i
                                          data-tw-merge=""
                                          data-lucide="trash"
                                          className="stroke-[1] mr-2 h-4 w-4"
                                        />
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-1.5 text-xs text-slate-500">
                              Wed Dec 2021
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                data-tw-backdrop=""
                aria-hidden="true"
                tabIndex={-1}
                id="notifications-panel"
                className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
              >
                <div
                  data-tw-merge=""
                  className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
                >
                  <a
                    className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
                    data-tw-dismiss="modal"
                    href="javascript:;"
                  >
                    <i
                      data-tw-merge=""
                      data-lucide="x"
                      className="stroke-[1] h-8 w-8"
                    />
                  </a>
                  <div
                    data-tw-merge=""
                    className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-6 py-5"
                  >
                    <h2 className="mr-auto text-base font-medium">
                      Notifications
                    </h2>
                    <button
                      data-tw-merge=""
                      className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 hidden sm:flex"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="shield-check"
                        className="stroke-[1] mr-2 h-4 w-4"
                      />
                      Mark all as read
                    </button>
                  </div>
                  <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
                    <div className="flex flex-col gap-0.5 p-3">
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Logged in successfully
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Accessed the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project7-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Fri Sep 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Logged out</div>
                          <div className="mt-0.5 text-slate-500">
                            Signed out from the dashboard
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project3-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Thu Apr 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded presentations
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added slides for the team meeting
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Jun 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded images</div>
                          <div className="mt-0.5 text-slate-500">
                            Added project screenshots
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project9-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon May 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received a friend request
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Friend request from John
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project10-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Tue Aug 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded documents</div>
                          <div className="mt-0.5 text-slate-500">
                            Uploaded important project documents
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Fri Jun 2020
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Added a new contact</div>
                          <div className="mt-0.5 text-slate-500">
                            Added a new contact, Sarah
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Task completed: Review Project Proposal
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Reviewed and provided feedback
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project1-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project6-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Wed Sep 2021
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Posted a status update
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared thoughts on the project
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sun May 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Updated profile picture
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Changed profile photo
                          </div>
                          <div className="my-3.5 w-40 rounded-[0.6rem] border bg-slate-50/80 p-1 sm:w-56">
                            <div className="grid grid-cols-3 overflow-hidden rounded-[0.6rem]">
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project4-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project2-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                              <div className="image-fit h-12 cursor-pointer overflow-hidden border border-slate-100 saturate-[.6] hover:saturate-100 sm:h-16">
                                <img
                                  src="dist/images/projects/project3-400x400.jpg"
                                  alt="Tailwise - Admin Dashboard Template"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">Uploaded code files</div>
                          <div className="mt-0.5 text-slate-500">
                            Added new code modules
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Mar 2021
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Received 5 new emails
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Inbox updates
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Nov 2020
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded video files
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Shared video tutorials
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Nov 2022
                          </div>
                        </div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded audio recordings
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Recorded podcast episodes
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Sat Apr 2022
                          </div>
                        </div>
                        <div className="ml-auto h-2 w-2 flex-none rounded-full border border-primary/40 bg-primary/40"></div>
                      </a>
                      <a
                        className="flex items-center rounded-xl px-3 py-2.5 hover:bg-slate-100/80"
                        href=""
                      >
                        <div>
                          <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-2 border-slate-200/70">
                            <img
                              src="dist/images/users/user8-50x50.jpg"
                              alt="Tailwise - Admin Dashboard Template"
                            />
                          </div>
                        </div>
                        <div className="sm:ml-5">
                          <div className="font-medium">
                            Uploaded a spreadsheet
                          </div>
                          <div className="mt-0.5 text-slate-500">
                            Added financial data for Q3
                          </div>
                          <div className="mt-1.5 text-xs text-slate-500">
                            Mon Sep 2020
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-tw-backdrop=""
              aria-hidden="true"
              tabIndex={-1}
              id="switch-account"
              className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
            >
              <div
                data-tw-merge=""
                className="w-[90%] mx-auto bg-white relative rounded-md shadow-md transition-[margin-top,transform] duration-[0.4s,0.3s] -mt-16 group-[.show]:mt-16 group-[.modal-static]:scale-[1.05] dark:bg-darkmode-600 sm:w-[460px]"
              >
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400 h-14 justify-center">
                  <h2 className="text-base font-medium">Switch Account</h2>
                </div>
                <div data-tw-merge="" className="p-5 px-2.5 pb-4 pt-3.5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user7-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Johnny Depp</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          johnny.depp@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          defaultChecked=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-0"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user10-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Julia Roberts</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          julia.roberts@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-1"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user2-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Meryl Streep</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          meryl.streep@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-2"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user9-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Denzel Washington</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          denzel.washington@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-3"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-lg px-2.5 py-1 hover:bg-slate-100">
                      <div className="image-fit h-11 w-11 overflow-hidden rounded-full border-[3px] border-slate-200/70">
                        <img
                          src="dist/images/users/user4-50x50.jpg"
                          alt="Tailwise - Admin Dashboard Template"
                        />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">Angelina Jolie</div>
                        <div className="mt-0.5 text-xs text-slate-500">
                          angelina.jolie@left4code.com
                        </div>
                      </div>
                      <div className="relative ml-auto h-7 w-7">
                        <input
                          data-tw-merge=""
                          type="checkbox"
                          className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 peer absolute z-10 h-full w-full opacity-0"
                          id="switch-account-4"
                          defaultValue="switch-account"
                        />
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1 bg-theme-1/80 text-white opacity-0 transition-all peer-checked:opacity-100">
                          <i
                            data-tw-merge=""
                            data-lucide="check"
                            className="h-3 w-3 stroke-[1.5]"
                          />
                        </div>
                        <div className="absolute inset-0 m-auto flex h-6 w-6 items-center justify-center rounded-full border border-theme-1/20 bg-theme-1/5 text-primary transition-all peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 text-right border-t border-slate-200/60 dark:border-darkmode-400 flex h-14 items-center justify-center text-center">
                  <a className="-mt-1 block text-primary" href="">
                    Login into an Existing Account
                  </a>
                </div>
              </div>
            </div>
            {/* END: Notification & User Menu */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
