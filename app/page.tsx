import { Icon } from '@iconify/react'

export default function main()
{
  return (
    <>
  <aside className="sidebar">
    <button type="button" className="sidebar-close-btn">
      <Icon icon="radix-icons:cross-2" />
    </button>
    <div>
      <a href="index.html" className="sidebar-logo">
        <img
          src="assets/images/logo.png"
          alt="site logo"
          className="light-logo"
        />
        <img
          src="assets/images/logo-light.png"
          alt="site logo"
          className="dark-logo"
        />
        <img
          src="assets/images/logo-icon.png"
          alt="site logo"
          className="logo-icon"
        />
      </a>
    </div>
    <div className="sidebar-menu-area">
      <ul className="sidebar-menu" id="sidebar-menu">
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="solar:home-smile-angle-outline"
              className="menu-icon"
            />
            <span>Dashboard</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="index.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                AI
              </a>
            </li>
            <li>
              <a href="index-2.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                CRM
              </a>
            </li>
            <li>
              <a href="index-3.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                eCommerce
              </a>
            </li>
            <li>
              <a href="index-4.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Cryptocurrency
              </a>
            </li>
            <li>
              <a href="index-5.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Investment
              </a>
            </li>
            <li>
              <a href="index-6.html">
                <i className="ri-circle-fill circle-icon text-purple w-auto" />{" "}
                LMS
              </a>
            </li>
            <li>
              <a href="index-7.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                NFT &amp; Gaming
              </a>
            </li>
            <li>
              <a href="index-8.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Medical
              </a>
            </li>
            <li>
              <a href="index-9.html">
                <i className="ri-circle-fill circle-icon text-purple w-auto" />{" "}
                Analytics
              </a>
            </li>
            <li>
              <a href="index-10.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                POS &amp; Inventory{" "}
              </a>
            </li>
          </ul>
        </li>
        <li className="sidebar-menu-group-title">Application</li>
        <li>
          <a href="email.html">
            <Icon icon="mage:email" className="menu-icon" />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href="chat-message.html">
            <Icon icon="bi:chat-dots" className="menu-icon" />
            <span>Chat</span>
          </a>
        </li>
        <li>
          <a href="calendar-main.html">
            <Icon icon="solar:calendar-outline" className="menu-icon" />
            <span>Calendar</span>
          </a>
        </li>
        <li>
          <a href="kanban.html">
            <Icon
              icon="material-symbols:map-outline"
              className="menu-icon"
            />
            <span>Kanban</span>
          </a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon icon="hugeicons:invoice-03" className="menu-icon" />
            <span>Invoice</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="invoice-list.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                List
              </a>
            </li>
            <li>
              <a href="invoice-preview.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Preview
              </a>
            </li>
            <li>
              <a href="invoice-add.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Add new
              </a>
            </li>
            <li>
              <a href="invoice-edit.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Edit
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <i className="ri-robot-2-line text-xl me-6 d-flex w-auto" />
            <span>Ai Application</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="text-generator.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Text Generator
              </a>
            </li>
            <li>
              <a href="code-generator.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Code Generator
              </a>
            </li>
            <li>
              <a href="image-generator.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Image Generator
              </a>
            </li>
            <li>
              <a href="voice-generator.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Voice Generator
              </a>
            </li>
            <li>
              <a href="video-generator.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Video Generator
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <i className="ri-btc-line text-xl me-6 d-flex w-auto" />
            <span>Crypto Currency</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="wallet.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Wallet
              </a>
            </li>
            <li>
              <a href="marketplace.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Marketplace
              </a>
            </li>
            <li>
              <a href="marketplace-details.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Marketplace Details
              </a>
            </li>
            <li>
              <a href="portfolio.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Portfolios
              </a>
            </li>
          </ul>
        </li>
        <li className="sidebar-menu-group-title">UI Elements</li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="solar:document-text-outline"
              className="menu-icon"
            />
            <span>Components</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="typography.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Typography
              </a>
            </li>
            <li>
              <a href="colors.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Colors
              </a>
            </li>
            <li>
              <a href="button.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Button
              </a>
            </li>
            <li>
              <a href="dropdown.html">
                <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" />{" "}
                Dropdown
              </a>
            </li>
            <li>
              <a href="alert.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Alerts
              </a>
            </li>
            <li>
              <a href="card.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Card
              </a>
            </li>
            <li>
              <a href="carousel.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Carousel
              </a>
            </li>
            <li>
              <a href="avatar.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Avatars
              </a>
            </li>
            <li>
              <a href="progress.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Progress bar
              </a>
            </li>
            <li>
              <a href="tabs.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Tab &amp; Accordion
              </a>
            </li>
            <li>
              <a href="pagination.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Pagination
              </a>
            </li>
            <li>
              <a href="badges.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Badges
              </a>
            </li>
            <li>
              <a href="tooltip.html">
                <i className="ri-circle-fill circle-icon text-lilac-600 w-auto" />{" "}
                Tooltip &amp; Popover
              </a>
            </li>
            <li>
              <a href="videos.html">
                <i className="ri-circle-fill circle-icon text-cyan w-auto" />{" "}
                Videos
              </a>
            </li>
            <li>
              <a href="star-rating.html">
                <i className="ri-circle-fill circle-icon text-indigo w-auto" />{" "}
                Star Ratings
              </a>
            </li>
            <li>
              <a href="tags.html">
                <i className="ri-circle-fill circle-icon text-purple w-auto" />{" "}
                Tags
              </a>
            </li>
            <li>
              <a href="list.html">
                <i className="ri-circle-fill circle-icon text-red w-auto" />{" "}
                List
              </a>
            </li>
            <li>
              <a href="calendar.html">
                <i className="ri-circle-fill circle-icon text-yellow w-auto" />{" "}
                Calendar
              </a>
            </li>
            <li>
              <a href="radio.html">
                <i className="ri-circle-fill circle-icon text-orange w-auto" />{" "}
                Radio
              </a>
            </li>
            <li>
              <a href="switch.html">
                <i className="ri-circle-fill circle-icon text-pink w-auto" />{" "}
                Switch
              </a>
            </li>
            <li>
              <a href="image-upload.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Upload
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon icon="heroicons:document" className="menu-icon" />
            <span>Forms</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="form.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Input Forms
              </a>
            </li>
            <li>
              <a href="form-layout.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Input Layout
              </a>
            </li>
            <li>
              <a href="form-validation.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Form Validation
              </a>
            </li>
            <li>
              <a href="wizard.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Form Wizard
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon icon="mingcute:storage-line" className="menu-icon" />
            <span>Table</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="table-basic.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Basic Table
              </a>
            </li>
            <li>
              <a href="table-data.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Data Table
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="solar:pie-chart-outline"
              className="menu-icon"
            />
            <span>Chart</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="line-chart.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Line Chart
              </a>
            </li>
            <li>
              <a href="column-chart.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Column Chart
              </a>
            </li>
            <li>
              <a href="pie-chart.html">
                <i className="ri-circle-fill circle-icon text-success-main w-auto" />{" "}
                Pie Chart
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="widgets.html">
            <Icon icon="fe:vector" className="menu-icon" />
            <span>Widgets</span>
          </a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="flowbite:users-group-outline"
              className="menu-icon"
            />
            <span>Users</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="users-list.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Users List
              </a>
            </li>
            <li>
              <a href="users-grid.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Users Grid
              </a>
            </li>
            <li>
              <a href="add-user.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Add User
              </a>
            </li>
            <li>
              <a href="view-profile.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                View Profile
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <i className="ri-user-settings-line text-xl me-6 d-flex w-auto" />
            <span>Role &amp; Access</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="role-access.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Role &amp; Access
              </a>
            </li>
            <li>
              <a href="assign-role.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Assign Role
              </a>
            </li>
          </ul>
        </li>
        <li className="sidebar-menu-group-title">Application</li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="simple-line-icons:vector"
              className="menu-icon"
            />
            <span>Authentication</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="sign-in.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Sign In
              </a>
            </li>
            <li>
              <a href="sign-up.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Sign Up
              </a>
            </li>
            <li>
              <a href="forgot-password.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Forgot Password
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="gallery.html">
            <Icon
              icon="solar:gallery-wide-linear"
              className="menu-icon"
            />
            <span>Gallery</span>
          </a>
        </li>
        <li>
          <a href="pricing.html">
            <Icon
              icon="hugeicons:money-send-square"
              className="menu-icon"
            />
            <span>Pricing</span>
          </a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <i className="ri-news-line text-xl me-6 d-flex w-auto" />
            <span>Blog</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="blog.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Blog
              </a>
            </li>
            <li>
              <a href="blog-details.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Blog Details
              </a>
            </li>
            <li>
              <a href="add-blog.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Add Blog
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="testimonials.html">
            <i className="ri-star-line text-xl me-6 d-flex w-auto" />
            <span>Testimonial</span>
          </a>
        </li>
        <li>
          <a href="faq.html">
            <Icon
              icon="mage:message-question-mark-round"
              className="menu-icon"
            />
            <span>FAQs</span>
          </a>
        </li>
        <li>
          <a href="error.html">
            <Icon
              icon="streamline:straight-face"
              className="menu-icon"
            />
            <span>404</span>
          </a>
        </li>
        <li>
          <a href="terms-condition.html">
            <Icon icon="octicon:info-24" className="menu-icon" />
            <span>Terms &amp; Conditions</span>
          </a>
        </li>
        <li>
          <a href="coming-soon.html">
            <i className="ri-rocket-line text-xl me-6 d-flex w-auto" />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a href="maintenance.html">
            <i className="ri-hammer-line text-xl me-6 d-flex w-auto" />
            <span>Maintenance</span>
          </a>
        </li>
        <li>
          <a href="blank-page.html">
            <i className="ri-checkbox-multiple-blank-line text-xl me-6 d-flex w-auto" />
            <span>Blank Page</span>
          </a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)">
            <Icon
              icon="icon-park-outline:setting-two"
              className="menu-icon"
            />
            <span>Settings</span>
          </a>
          <ul className="sidebar-submenu">
            <li>
              <a href="company.html">
                <i className="ri-circle-fill circle-icon text-primary-600 w-auto" />{" "}
                Company
              </a>
            </li>
            <li>
              <a href="notification.html">
                <i className="ri-circle-fill circle-icon text-warning-main w-auto" />{" "}
                Notification
              </a>
            </li>
            <li>
              <a href="notification-alert.html">
                <i className="ri-circle-fill circle-icon text-info-main w-auto" />{" "}
                Notification Alert
              </a>
            </li>
            <li>
              <a href="theme.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Theme
              </a>
            </li>
            <li>
              <a href="currencies.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Currencies
              </a>
            </li>
            <li>
              <a href="language.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Languages
              </a>
            </li>
            <li>
              <a href="payment-gateway.html">
                <i className="ri-circle-fill circle-icon text-danger-main w-auto" />{" "}
                Payment Gateway
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <main className="dashboard-main">
    <div className="navbar-header">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto">
          <div className="d-flex flex-wrap align-items-center gap-4">
            <button type="button" className="sidebar-toggle">
              <Icon
                icon="heroicons:bars-3-solid"
                className="icon text-2xl non-active"
              />
              <Icon
                icon="iconoir:arrow-right"
                className="icon text-2xl active"
              />
            </button>
            <button type="button" className="sidebar-mobile-toggle">
              <Icon icon="heroicons:bars-3-solid" className="icon" />
            </button>
            <form className="navbar-search">
              <input type="text" name="search" placeholder="Search" />
              <Icon icon="ion:search-outline" className="icon" />
            </form>
          </div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-wrap align-items-center gap-3">
            <button
              type="button"
              data-theme-toggle=""
              className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
            />
            <div className="dropdown d-none d-sm-inline-block">
              <button
                className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/images/lang-flag.png"
                  alt="image"
                  className="w-24 h-24 object-fit-cover rounded-circle"
                />
              </button>
              <div className="dropdown-menu to-top dropdown-menu-sm">
                <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                  <div>
                    <h6 className="text-lg text-primary-light fw-semibold mb-0">
                      Choose Your Language
                    </h6>
                  </div>
                </div>
                <div className="max-h-400-px overflow-y-auto scroll-sm pe-8">
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="english"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag1.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">
                          English
                        </span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="english"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="japan"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag2.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">Japan</span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="japan"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="france"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag3.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">France</span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="france"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="germany"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag4.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">
                          Germany
                        </span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="germany"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="korea"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag5.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">
                          South Korea
                        </span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="korea"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="bangladesh"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag6.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">
                          Bangladesh
                        </span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="bangladesh"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between mb-16">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="india"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag7.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">India</span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="india"
                    />
                  </div>
                  <div className="form-check style-check d-flex align-items-center justify-content-between">
                    <label
                      className="form-check-label line-height-1 fw-medium text-secondary-light"
                      htmlFor="canada"
                    >
                      <span className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                        <img
                          src="assets/images/flags/flag8.png"
                          alt=""
                          className="w-36-px h-36-px bg-success-subtle text-success-main rounded-circle flex-shrink-0"
                        />
                        <span className="text-md fw-semibold mb-0">Canada</span>
                      </span>
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="crypto"
                      id="canada"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Language dropdown end */}
            <div className="dropdown">
              <button
                className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <Icon
                  icon="mage:email"
                  className="text-primary-light text-xl"
                />
              </button>
              <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                  <div>
                    <h6 className="text-lg text-primary-light fw-semibold mb-0">
                      Message
                    </h6>
                  </div>
                  <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                    05
                  </span>
                </div>
                <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                        <img
                          src="assets/images/notification/profile-3.png"
                          alt=""
                        />
                        <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Kathryn Murphy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                          hey! there i’m...
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-sm text-secondary-light flex-shrink-0">
                        12:30 PM
                      </span>
                      <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                        8
                      </span>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                        <img
                          src="assets/images/notification/profile-4.png"
                          alt=""
                        />
                        <span className="w-8-px h-8-px  bg-neutral-300 rounded-circle position-absolute end-0 bottom-0" />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Kathryn Murphy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                          hey! there i’m...
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-sm text-secondary-light flex-shrink-0">
                        12:30 PM
                      </span>
                      <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                        2
                      </span>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                        <img
                          src="assets/images/notification/profile-5.png"
                          alt=""
                        />
                        <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Kathryn Murphy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                          hey! there i’m...
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-sm text-secondary-light flex-shrink-0">
                        12:30 PM
                      </span>
                      <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">
                        0
                      </span>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                        <img
                          src="assets/images/notification/profile-6.png"
                          alt=""
                        />
                        <span className="w-8-px h-8-px bg-neutral-300 rounded-circle position-absolute end-0 bottom-0" />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Kathryn Murphy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                          hey! there i’m...
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-sm text-secondary-light flex-shrink-0">
                        12:30 PM
                      </span>
                      <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-neutral-400 rounded-circle">
                        0
                      </span>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-40-px h-40-px rounded-circle flex-shrink-0 position-relative">
                        <img
                          src="assets/images/notification/profile-7.png"
                          alt=""
                        />
                        <span className="w-8-px h-8-px bg-success-main rounded-circle position-absolute end-0 bottom-0" />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Kathryn Murphy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-100-px">
                          hey! there i’m...
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="text-sm text-secondary-light flex-shrink-0">
                        12:30 PM
                      </span>
                      <span className="mt-4 text-xs text-base w-16-px h-16-px d-flex justify-content-center align-items-center bg-warning-main rounded-circle">
                        8
                      </span>
                    </div>
                  </a>
                </div>
                <div className="text-center py-12 px-16">
                  <a
                    href="javascript:void(0)"
                    className="text-primary-600 fw-semibold text-md"
                  >
                    See All Message
                  </a>
                </div>
              </div>
            </div>
            {/* Message dropdown end */}
            <div className="dropdown">
              <button
                className="has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                type="button"
                data-bs-toggle="dropdown"
              >
                <Icon
                  icon="iconoir:bell"
                  className="text-primary-light text-xl"
                />
              </button>
              <div className="dropdown-menu to-top dropdown-menu-lg p-0">
                <div className="m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                  <div>
                    <h6 className="text-lg text-primary-light fw-semibold mb-0">
                      Notifications
                    </h6>
                  </div>
                  <span className="text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center">
                    05
                  </span>
                </div>
                <div className="max-h-400-px overflow-y-auto scroll-sm pe-4">
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                        <Icon
                          icon="bitcoin-icons:verify-outline"
                          className="icon text-xxl"
                        />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Congratulations
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                          Your profile has been Verified. Your profile has been
                          Verified
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-secondary-light flex-shrink-0">
                      23 Mins ago
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                        <img
                          src="assets/images/notification/profile-1.png"
                          alt=""
                        />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Ronald Richards
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                          You can stitch between artboards
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-secondary-light flex-shrink-0">
                      23 Mins ago
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                        AM
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Arlene McCoy
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                          Invite you to prototyping
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-secondary-light flex-shrink-0">
                      23 Mins ago
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                        <img
                          src="assets/images/notification/profile-2.png"
                          alt=""
                        />
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Annette Black
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                          Invite you to prototyping
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-secondary-light flex-shrink-0">
                      23 Mins ago
                    </span>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between"
                  >
                    <div className="text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3">
                      <span className="w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0">
                        DR
                      </span>
                      <div>
                        <h6 className="text-md fw-semibold mb-4">
                          Darlene Robertson
                        </h6>
                        <p className="mb-0 text-sm text-secondary-light text-w-200-px">
                          Invite you to prototyping
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-secondary-light flex-shrink-0">
                      23 Mins ago
                    </span>
                  </a>
                </div>
                <div className="text-center py-12 px-16">
                  <a
                    href="javascript:void(0)"
                    className="text-primary-600 fw-semibold text-md"
                  >
                    See All Notification
                  </a>
                </div>
              </div>
            </div>
            {/* Notification dropdown end */}
            <div className="dropdown">
              <button
                className="d-flex justify-content-center align-items-center rounded-circle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/images/user.png"
                  alt="image"
                  className="w-40-px h-40-px object-fit-cover rounded-circle"
                />
              </button>
              <div className="dropdown-menu to-top dropdown-menu-sm">
                <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                  <div>
                    <h6 className="text-lg text-primary-light fw-semibold mb-2">
                      Shaidul Islam
                    </h6>
                    <span className="text-secondary-light fw-medium text-sm">
                      Admin
                    </span>
                  </div>
                  <button type="button" className="hover-text-danger">
                    <Icon
                      icon="radix-icons:cross-1"
                      className="icon text-xl"
                    />
                  </button>
                </div>
                <ul className="to-top-list">
                  <li>
                    <a
                      className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                      href="view-profile.html"
                    >
                      <Icon
                        icon="solar:user-linear"
                        className="icon text-xl"
                      />{" "}
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                      href="email.html"
                    >
                      <Icon
                        icon="tabler:message-check"
                        className="icon text-xl"
                      />{" "}
                      Inbox
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3"
                      href="company.html"
                    >
                      <Icon
                        icon="icon-park-outline:setting-two"
                        className="icon text-xl"
                      />{" "}
                      Setting
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                      href="javascript:void(0)"
                    >
                      <Icon
                        icon="lucide:power"
                        className="icon text-xl"
                      />{" "}
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Profile dropdown end */}
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-main-body">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
        <h6 className="fw-semibold mb-0">Dashboard</h6>
        <ul className="d-flex align-items-center gap-2">
          <li className="fw-medium">
            <a
              href="index.html"
              className="d-flex align-items-center gap-1 hover-text-primary"
            >
              <Icon
                icon="solar:home-smile-angle-outline"
                className="icon text-lg"
              />
              Dashboard
            </a>
          </li>
          <li>-</li>
          <li className="fw-medium">CRM</li>
        </ul>
      </div>
      <div className="row gy-4">
        <div className="col-xxl-8">
          <div className="row gy-4">
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-1">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                        <Icon
                          icon="mingcute:user-follow-fill"
                          className="icon"
                        />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          New Users
                        </span>
                        <h6 className="fw-semibold">15,000</h6>
                      </div>
                    </div>
                    <div
                      id="new-user-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-2">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-success-main flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6">
                        <Icon
                          icon="mingcute:user-follow-fill"
                          className="icon"
                        />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          Active Users
                        </span>
                        <h6 className="fw-semibold">8,000</h6>
                      </div>
                    </div>
                    <div
                      id="active-user-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +200
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-3">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-yellow text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                        <Icon
                          icon="iconamoon:discount-fill"
                          className="icon"
                        />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          Total Sales
                        </span>
                        <h6 className="fw-semibold">$5,00,000</h6>
                      </div>
                    </div>
                    <div
                      id="total-sales-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-danger-focus px-1 rounded-2 fw-medium text-danger-main text-sm">
                      -$10k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-4">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-purple text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                        <Icon
                          icon="mdi:message-text"
                          className="icon"
                        />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          Conversion
                        </span>
                        <h6 className="fw-semibold">25%</h6>
                      </div>
                    </div>
                    <div
                      id="conversion-user-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +5%
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-5">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-pink text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                        <Icon icon="mdi:leads" className="icon" />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          Leads
                        </span>
                        <h6 className="fw-semibold">250</h6>
                      </div>
                    </div>
                    <div
                      id="leads-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +20
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-sm-6">
              <div className="card p-3 shadow-2 radius-8 border input-form-light h-100 bg-gradient-end-6">
                <div className="card-body p-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-8">
                    <div className="d-flex align-items-center gap-2">
                      <span className="mb-0 w-48-px h-48-px bg-cyan text-white flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle h6">
                        <Icon
                          icon="streamline:bag-dollar-solid"
                          className="icon"
                        />
                      </span>
                      <div>
                        <span className="mb-2 fw-medium text-secondary-light text-sm">
                          Total Profit
                        </span>
                        <h6 className="fw-semibold">$3,00,700</h6>
                      </div>
                    </div>
                    <div
                      id="total-profit-chart"
                      className="remove-tooltip-title rounded-tooltip-value"
                    />
                  </div>
                  <p className="text-sm mb-0">
                    Increase by{" "}
                    <span className="bg-success-focus px-1 rounded-2 fw-medium text-success-main text-sm">
                      +$15k
                    </span>{" "}
                    this week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Revenue Growth start */}
        <div className="col-xxl-4">
          <div className="card h-100 radius-8 border">
            <div className="card-body p-24">
              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                <div>
                  <h6 className="mb-2 fw-bold text-lg">Revenue Growth</h6>
                  <span className="text-sm fw-medium text-secondary-light">
                    Weekly Report
                  </span>
                </div>
                <div className="text-end">
                  <h6 className="mb-2 fw-bold text-lg">$50,000.00</h6>
                  <span className="bg-success-focus ps-12 pe-12 pt-2 pb-2 rounded-2 fw-medium text-success-main text-sm">
                    $10k
                  </span>
                </div>
              </div>
              <div id="revenue-chart" className="mt-28" />
            </div>
          </div>
        </div>
        {/* Revenue Growth End */}
        {/* Earning Static start */}
        <div className="col-xxl-8">
          <div className="card h-100 radius-8 border-0">
            <div className="card-body p-24">
              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                <div>
                  <h6 className="mb-2 fw-bold text-lg">Earning Statistic</h6>
                  <span className="text-sm fw-medium text-secondary-light">
                    Yearly earning overview
                  </span>
                </div>
                <div className="">
                  <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                    <option>Yearly</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Today</option>
                  </select>
                </div>
              </div>
              <div className="mt-20 d-flex justify-content-center flex-wrap gap-3">
                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                  <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                    <Icon
                      icon="fluent:cart-16-filled"
                      className="icon"
                    />
                  </span>
                  <div>
                    <span className="text-secondary-light text-sm fw-medium">
                      Sales
                    </span>
                    <h6 className="text-md fw-semibold mb-0">$200k</h6>
                  </div>
                </div>
                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                  <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                    <Icon icon="uis:chart" className="icon" />
                  </span>
                  <div>
                    <span className="text-secondary-light text-sm fw-medium">
                      Income
                    </span>
                    <h6 className="text-md fw-semibold mb-0">$200k</h6>
                  </div>
                </div>
                <div className="d-inline-flex align-items-center gap-2 p-2 radius-8 border pe-36 br-hover-primary group-item">
                  <span className="bg-neutral-100 w-44-px h-44-px text-xxl radius-8 d-flex justify-content-center align-items-center text-secondary-light group-hover:bg-primary-600 group-hover:text-white">
                    <Icon
                      icon="ph:arrow-fat-up-fill"
                      className="icon"
                    />
                  </span>
                  <div>
                    <span className="text-secondary-light text-sm fw-medium">
                      Profit
                    </span>
                    <h6 className="text-md fw-semibold mb-0">$200k</h6>
                  </div>
                </div>
              </div>
              <div id="barChart" className="barChart" />
            </div>
          </div>
        </div>
        {/* Earning Static End */}
        {/* Campaign Static start */}
        <div className="col-xxl-4">
          <div className="row gy-4">
            <div className="col-xxl-12 col-sm-6">
              <div className="card h-100 radius-8 border-0">
                <div className="card-body p-24">
                  <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="mb-2 fw-bold text-lg">Campaigns</h6>
                    <div className="">
                      <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                        <option>Yearly</option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Today</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12">
                      <div className="d-flex align-items-center">
                        <span className="text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-orange">
                          <Icon
                            icon="majesticons:mail"
                            className="icon"
                          />
                        </span>
                        <span className="text-primary-light fw-medium text-sm ps-12">
                          Email
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <div className="w-100 max-w-66 ms-auto">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-orange rounded-pill"
                              style={{ width: "80%" }}
                            />
                          </div>
                        </div>
                        <span className="text-secondary-light font-xs fw-semibold">
                          80%
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12">
                      <div className="d-flex align-items-center">
                        <span className="text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-success-main">
                          <Icon
                            icon="eva:globe-2-fill"
                            className="icon"
                          />
                        </span>
                        <span className="text-primary-light fw-medium text-sm ps-12">
                          Website
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <div className="w-100 max-w-66 ms-auto">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-success-main rounded-pill"
                              style={{ width: "60%" }}
                            />
                          </div>
                        </div>
                        <span className="text-secondary-light font-xs fw-semibold">
                          60%
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-12">
                      <div className="d-flex align-items-center">
                        <span className="text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-info-main">
                          <Icon
                            icon="fa6-brands:square-facebook"
                            className="icon"
                          />
                        </span>
                        <span className="text-primary-light fw-medium text-sm ps-12">
                          Facebook
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <div className="w-100 max-w-66 ms-auto">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-info-main rounded-pill"
                              style={{ width: "49%" }}
                            />
                          </div>
                        </div>
                        <span className="text-secondary-light font-xs fw-semibold">
                          49%
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3">
                      <div className="d-flex align-items-center">
                        <span className="text-xxl line-height-1 d-flex align-content-center flex-shrink-0 text-indigo">
                          <Icon
                            icon="fluent:location-off-20-filled"
                            className="icon"
                          />
                        </span>
                        <span className="text-primary-light fw-medium text-sm ps-12">
                          Email
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <div className="w-100 max-w-66 ms-auto">
                          <div
                            className="progress progress-sm rounded-pill"
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-indigo rounded-pill"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                        <span className="text-secondary-light font-xs fw-semibold">
                          70%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 col-sm-6">
              <div className="card h-100 radius-8 border-0 overflow-hidden">
                <div className="card-body p-24">
                  <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="mb-2 fw-bold text-lg">Customer Overview</h6>
                    <div className="">
                      <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                        <option>Yearly</option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Today</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center mt-3">
                    <ul className="flex-shrink-0">
                      <li className="d-flex align-items-center gap-2 mb-28">
                        <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                        <span className="text-secondary-light text-sm fw-medium">
                          Total: 500
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 mb-28">
                        <span className="w-12-px h-12-px rounded-circle bg-warning-main" />
                        <span className="text-secondary-light text-sm fw-medium">
                          New: 500
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="w-12-px h-12-px rounded-circle bg-primary-600" />
                        <span className="text-secondary-light text-sm fw-medium">
                          Active: 1500
                        </span>
                      </li>
                    </ul>
                    <div
                      id="donutChart"
                      className="flex-grow-1 apexcharts-tooltip-z-none title-style circle-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Campaign Static End */}
        {/* Client Payment Status Start */}
        <div className="col-xxl-4 col-sm-6">
          <div className="card h-100 radius-8 border-0">
            <div className="card-body p-24">
              <h6 className="mb-2 fw-bold text-lg">Client Payment Status</h6>
              <span className="text-sm fw-medium text-secondary-light">
                Weekly Report
              </span>
              <ul className="d-flex flex-wrap align-items-center justify-content-center mt-32">
                <li className="d-flex align-items-center gap-2 me-28">
                  <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                  <span className="text-secondary-light text-sm fw-medium">
                    Paid: 500
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 me-28">
                  <span className="w-12-px h-12-px rounded-circle bg-info-main" />
                  <span className="text-secondary-light text-sm fw-medium">
                    Pending: 500
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <span className="w-12-px h-12-px rounded-circle bg-warning-main" />
                  <span className="text-secondary-light text-sm fw-medium">
                    Overdue: 1500
                  </span>
                </li>
              </ul>
              <div className="mt-40">
                <div id="paymentStatusChart" className="margin-16-minus" />
              </div>
            </div>
          </div>
        </div>
        {/* Client Payment Status End */}
        {/* Country Status Start */}
        <div className="col-xxl-4 col-sm-6">
          <div className="card radius-8 border-0">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                <h6 className="mb-2 fw-bold text-lg">Countries Status</h6>
                <div className="">
                  <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
                    <option>Yearly</option>
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Today</option>
                  </select>
                </div>
              </div>
            </div>
            <div id="world-map" />
            <div className="card-body p-24 max-h-266-px scroll-sm overflow-y-auto">
              <div className="">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 pb-2">
                  <div className="d-flex align-items-center w-100">
                    <img
                      src="assets/images/flags/flag1.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-sm mb-0">USA</h6>
                      <span className="text-xs text-secondary-light fw-medium">
                        1,240 Users
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100">
                    <div className="w-100 max-w-66 ms-auto">
                      <div
                        className="progress progress-sm rounded-pill"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-primary-600 rounded-pill"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs fw-semibold">
                      80%
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 pb-2">
                  <div className="d-flex align-items-center w-100">
                    <img
                      src="assets/images/flags/flag2.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-sm mb-0">Japan</h6>
                      <span className="text-xs text-secondary-light fw-medium">
                        1,240 Users
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100">
                    <div className="w-100 max-w-66 ms-auto">
                      <div
                        className="progress progress-sm rounded-pill"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-orange rounded-pill"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs fw-semibold">
                      60%
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3 pb-2">
                  <div className="d-flex align-items-center w-100">
                    <img
                      src="assets/images/flags/flag3.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-sm mb-0">France</h6>
                      <span className="text-xs text-secondary-light fw-medium">
                        1,240 Users
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100">
                    <div className="w-100 max-w-66 ms-auto">
                      <div
                        className="progress progress-sm rounded-pill"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-yellow rounded-pill"
                          style={{ width: "49%" }}
                        />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs fw-semibold">
                      49%
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="d-flex align-items-center w-100">
                    <img
                      src="assets/images/flags/flag4.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-sm mb-0">Germany</h6>
                      <span className="text-xs text-secondary-light fw-medium">
                        1,240 Users
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 w-100">
                    <div className="w-100 max-w-66 ms-auto">
                      <div
                        className="progress progress-sm rounded-pill"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-success-main rounded-pill"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <span className="text-secondary-light font-xs fw-semibold">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Country Status End */}
        {/* Top performance Start */}
        <div className="col-xxl-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                <h6 className="mb-2 fw-bold text-lg mb-0">Top Performer</h6>
                <a
                  href="javascript:void(0)"
                  className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                >
                  View All
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    className="icon"
                  />
                </a>
              </div>
              <div className="mt-32">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user1.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Dianne Russell</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    60/80
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user2.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Wade Warren</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    50/70
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user3.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Albert Flores</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    55/75
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user4.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Bessie Cooper</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    60/80
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user5.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Arlene McCoy</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    55/75
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="d-flex align-items-center">
                    <img
                      src="assets/images/users/user1.png"
                      alt=""
                      className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                    />
                    <div className="flex-grow-1">
                      <h6 className="text-md mb-0">Arlene McCoy</h6>
                      <span className="text-sm text-secondary-light fw-medium">
                        Agent ID: 36254
                      </span>
                    </div>
                  </div>
                  <span className="text-primary-light text-md fw-medium">
                    50/70
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top performance End */}
        {/* Latest Performance Start */}
        <div className="col-xxl-6">
          <div className="card h-100">
            <div className="card-header border-bottom bg-base ps-0 py-0 pe-24 d-flex align-items-center justify-content-between">
              <ul
                className="nav bordered-tab nav-pills mb-0"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-to-do-list-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-to-do-list"
                    type="button"
                    role="tab"
                    aria-controls="pills-to-do-list"
                    aria-selected="true"
                  >
                    All Item
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-recent-leads-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-recent-leads"
                    type="button"
                    role="tab"
                    aria-controls="pills-recent-leads"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Best Match
                  </button>
                </li>
              </ul>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="card-body p-24">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-to-do-list"
                  role="tabpanel"
                  aria-labelledby="pills-to-do-list-tab"
                  tabIndex={0}
                >
                  <div className="table-responsive scroll-sm">
                    <table className="table bordered-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Task Name </th>
                          <th scope="col">Assigned To </th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Kathryn Murphy</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Darlene Robertson</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Courtney Henry</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Jenny Wilson</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Leslie Alexander</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-recent-leads"
                  role="tabpanel"
                  aria-labelledby="pills-recent-leads-tab"
                  tabIndex={0}
                >
                  <div className="table-responsive scroll-sm">
                    <table className="table bordered-table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Task Name </th>
                          <th scope="col">Assigned To </th>
                          <th scope="col">Due Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Kathryn Murphy</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Darlene Robertson</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Courtney Henry</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Jenny Wilson</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <span className="text-md d-block line-height-1 fw-medium text-primary-light text-w-200-px">
                                Hotel Management System
                              </span>
                              <span className="text-sm d-block fw-normal text-secondary-light">
                                #5632
                              </span>
                            </div>
                          </td>
                          <td>Leslie Alexander</td>
                          <td>27 Mar 2024</td>
                          <td>
                            {" "}
                            <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                              Active
                            </span>{" "}
                          </td>
                          <td className="text-center text-neutral-700 text-xl">
                            <div className="dropdown">
                              <button
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <Icon
                                  icon="ph:dots-three-outline-vertical-fill"
                                  className="icon"
                                />
                              </button>
                              <ul className="dropdown-menu p-12 border bg-base shadow">
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900"
                                    href="javascript:void(0)"
                                  >
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="card h-100">
            <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between">
              <h6 className="text-lg fw-semibold mb-0">Last Transaction</h6>
              <a
                href="javascript:void(0)"
                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
              >
                View All
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  className="icon"
                />
              </a>
            </div>
            <div className="card-body p-24">
              <div className="table-responsive scroll-sm">
                <table className="table bordered-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Transaction ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5986124445445</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className="bg-warning-focus text-warning-main px-24 py-4 rounded-pill fw-medium text-sm">
                          Pending
                        </span>{" "}
                      </td>
                      <td>$20,000.00</td>
                    </tr>
                    <tr>
                      <td>5986124445445</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className="bg-danger-focus text-danger-main px-24 py-4 rounded-pill fw-medium text-sm">
                          Rejected
                        </span>{" "}
                      </td>
                      <td>$20,000.00</td>
                    </tr>
                    <tr>
                      <td>5986124445445</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                          Completed
                        </span>{" "}
                      </td>
                      <td>$20,000.00</td>
                    </tr>
                    <tr>
                      <td>5986124445445</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                          Completed
                        </span>{" "}
                      </td>
                      <td>$20,000.00</td>
                    </tr>
                    <tr>
                      <td>5986124445445</td>
                      <td>27 Mar 2024</td>
                      <td>
                        {" "}
                        <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">
                          Completed
                        </span>{" "}
                      </td>
                      <td>$20,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Latest Performance End */}
      </div>
    </div>
    <footer className="d-footer">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto">
          <p className="mb-0">© 2024 WowDash. All Rights Reserved.</p>
        </div>
        <div className="col-auto">
          <p className="mb-0">
            Made by <span className="text-primary-600">wowtheme7</span>
          </p>
        </div>
      </div>
    </footer>
  </main>
</>

  )
}