





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-gh9ULwoRC3yvp333u1hrvQ1sqos0ys0zxDVqZXLqaOPk5/OQM2BQvIZ1Q7CKL+rLSieccW2kBnmlojDuV57xpA==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-29f21e31d44fd2c6858f04860799bc74.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-hmA9zaJeKjRxwWD+V6lGS3orAgS/ZCKoKBNVHh1ETqX4H31ADcBXVBt4Tdz3FQE49HCs9Hq/ZbTK/QwLZ2M7WQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-08c0695b372c4d0fadbe37f9e2300ed2.css" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>qrcodejs/qrcode.js at master · davidshimjs/qrcodejs</title>
    <meta name="description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/3103540?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="davidshimjs/qrcodejs" /><meta property="og:url" content="https://github.com/davidshimjs/qrcodejs" /><meta property="og:description" content="qrcodejs - Cross-browser QRCode generator for javascript" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MjIyNTUyODk0OjAzZjNiMGVlZDJhY2ViYzhmNDZjNmMxYzM0OGZmMTZkZmRhMTllNmY0NDhhZjIyZGU5NGRiMmMxMzAxZjBkODM=--6c63f5e8a4d9b7916d070af8a10a77692f59cefb">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="337E:105B:32F6C5:5B9B31:5ACE906D" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="337E:105B:32F6C5:5B9B31:5ACE906D" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="10760189" /><meta name="octolytics-actor-login" content="mariamrf" /><meta name="octolytics-actor-hash" content="1e9868e2f21b9b4534cc183588998effaa0cc8d9dd9ae4592de29fd26f30691f" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="mariamrf">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YTVjM2QwODE1ZDMxYzY4MmJiZjllZTExMTIyOTYyNjA0NDg3MzBkNDc1ZDRjNDgzODFiYTliOTY1N2UzOTA3OHx7InJlbW90ZV9hZGRyZXNzIjoiMTU2LjIxMi42NS4yNSIsInJlcXVlc3RfaWQiOiIzMzdFOjEwNUI6MzJGNkM1OjVCOUIzMTo1QUNFOTA2RCIsInRpbWVzdGFtcCI6MTUyMzQ4Njg0MywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_SELF_SERVE,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="9669b049de9102cc2cbb85ccccc0a3ef2eae21d4">

  <meta http-equiv="x-pjax-version" content="03438d07dbab6f1534ea017081329a17">
  

      <link href="https://github.com/davidshimjs/qrcodejs/commits/master.atom" rel="alternate" title="Recent Commits to qrcodejs:master" type="application/atom+xml">

  <meta name="description" content="qrcodejs - Cross-browser QRCode generator for javascript">
  <meta name="go-import" content="github.com/davidshimjs/qrcodejs git https://github.com/davidshimjs/qrcodejs.git">

  <meta name="octolytics-dimension-user_id" content="3103540" /><meta name="octolytics-dimension-user_login" content="davidshimjs" /><meta name="octolytics-dimension-repository_id" content="7323572" /><meta name="octolytics-dimension-repository_nwo" content="davidshimjs/qrcodejs" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="7323572" /><meta name="octolytics-dimension-repository_network_root_nwo" content="davidshimjs/qrcodejs" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/davidshimjs/qrcodejs/blob/master/qrcode.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex flex-justify-between px-3 container-lg">
    <div class="d-flex flex-justify-between ">
      <div class="">
        <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

      </div>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scoped-search-url="/davidshimjs/qrcodejs/search" data-unscoped-search-url="/search" action="/davidshimjs/qrcodejs/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
    <label class="form-control header-search-wrapper  js-chromeless-input-container">
        <a class="header-search-scope no-underline" href="/davidshimjs/qrcodejs/blob/master/qrcode.js">This repository</a>
      <input type="text"
        class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s,/"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off"
        >
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
                Issues
</a>            </li>
                <li>
                  <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace" href="/marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container">
    <span class="d-inline-block  px-2">
      
    <a aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s  js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:read" data-channel="notification-changed:10760189" href="/notifications">
        <span class="mail-status "></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </span>
  </li>

  <li class="dropdown js-menu-container">
    <details class="dropdown-details details-reset js-dropdown-details d-flex px-2 flex-items-center">
      <summary class="HeaderNavlink"
         aria-label="Create new…"
         data-ga-click="Header, create new, icon:add">
        <svg class="octicon octicon-plus float-left mr-1 mt-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
        <span class="dropdown-caret mt-1"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="davidshimjs/qrcodejs">This repository</span>
  </div>
    <a class="dropdown-item" href="/davidshimjs/qrcodejs/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </details>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details details-reset js-dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name mt-1"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@mariamrf" class="avatar float-left mr-1" src="https://avatars2.githubusercontent.com/u/10760189?s=40&amp;v=4" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">mariamrf</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/mariamrf" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/mariamrf?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="QsuL+/zEIK0TV9iUe4DTB4356k5gpU7FBA63+hReQua+H/s/C2IVVxW8xb3RLVarQYu2DbR0YMIvlGK2dAaZOA==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>



        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="sr-only right-0" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="/mp7uqzDUUw6OIEzsMjTcnZ0pD40doNk+sMjNWBpNiACvgt+W2VktjzTnBoaZVbeugb4feCnrWPRWfZ5ADHt/g==" />
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-autosubmit="true" data-remote="true" class="js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="qxb2TkFuGKNwMztFCR9LbQ8KJeP9AteJuLTMLjkkEF6MoHHgKlO52SP4EA7mm6rwCe7ybvZX1hLtUi5ZtZbPsg==" />      <input type="hidden" name="repository_id" id="repository_id" value="7323572" class="form-control" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/davidshimjs/qrcodejs/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/davidshimjs/qrcodejs/watchers"
            aria-label="229 users are watching this repository">
            229
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_included" value="included" checked="checked" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_subscribed" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input type="radio" name="do" id="do_ignore" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg class="octicon octicon-mute" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/davidshimjs/qrcodejs/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="M63F83VyYla7FlDuJJmRnAKzRT55MkR2lmdMAycqm7ACLK5Wcd8Z0MjA402WACCCUygS/wXISbyHUk0bmVrr/A==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar davidshimjs/qrcodejs"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/davidshimjs/qrcodejs/stargazers"
           aria-label="4844 users starred this repository">
          4,844
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/davidshimjs/qrcodejs/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="sRZJ8E4k9lL6f1/Biooxuf/rXCTZwIBan/FLX26/yg5uFs1WBNvJzP/JyiJumL22ii+agV+6R22WfqyQUZXheg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star davidshimjs/qrcodejs"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/davidshimjs/qrcodejs/stargazers"
           aria-label="4844 users starred this repository">
          4,844
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of davidshimjs/qrcodejs to your account"
              aria-label="Fork your own copy of davidshimjs/qrcodejs to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/davidshimjs/qrcodejs/fork?fragment=1">
              <img alt="Loading" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" height="64" />
            </include-fragment>
          </div>

    <a href="/davidshimjs/qrcodejs/network" class="social-count"
       aria-label="1377 users forked this repository">
      1,377
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/davidshimjs">davidshimjs</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/davidshimjs/qrcodejs">qrcodejs</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /davidshimjs/qrcodejs" href="/davidshimjs/qrcodejs">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /davidshimjs/qrcodejs/issues" href="/davidshimjs/qrcodejs/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">90</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /davidshimjs/qrcodejs/pulls" href="/davidshimjs/qrcodejs/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">32</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /davidshimjs/qrcodejs/projects" href="/davidshimjs/qrcodejs/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /davidshimjs/qrcodejs/wiki" href="/davidshimjs/qrcodejs/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /davidshimjs/qrcodejs/pulse" href="/davidshimjs/qrcodejs/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/davidshimjs/qrcodejs/blob/04f46c6a0708418cb7b96fc563eacae0fbf77674/qrcode.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:2fedcffadbee0bc32bb0f212b6a7076c -->

  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davidshimjs/qrcodejs/blob/gh-pages/qrcode.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/davidshimjs/qrcodejs/blob/master/qrcode.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/davidshimjs/qrcodejs/blob/refactoring/qrcode.js"
               data-name="refactoring"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                refactoring
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/davidshimjs/qrcodejs/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy
            for="blob-path"
            aria-label="Copy file path to clipboard"
            class="btn btn-sm BtnGroup-item tooltipped tooltipped-s"
            copied-label="Copied!">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/davidshimjs/qrcodejs"><span>qrcodejs</span></a></span></span><span class="separator">/</span><strong class="final-path">qrcode.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/davidshimjs/qrcodejs/commit/11d1bdbb8ae50ae6c5f23da47e6492e617427abd" data-pjax>
          11d1bdb
        </a>
        <relative-time datetime="2014-11-19T14:57:57Z">Nov 19, 2014</relative-time>
      </span>
      <div>
        <img alt="@ysangkok" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/284023?s=40&amp;v=4" width="20" />
        <a href="/ysangkok" class="user-mention" rel="contributor">ysangkok</a>
          <a href="/davidshimjs/qrcodejs/commit/11d1bdbb8ae50ae6c5f23da47e6492e617427abd" class="message" data-pjax="true" title="Swap col and row in SVG output so that the display equals the PNG output">Swap col and row in SVG output so that the display equals the PNG output</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>6</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="davidshimjs" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=davidshimjs"><img alt="@davidshimjs" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3103540?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davidcl64" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=davidcl64"><img alt="@davidcl64" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/928988?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ysangkok" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=ysangkok"><img alt="@ysangkok" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/284023?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="taku0" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=taku0"><img alt="@taku0" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/870673?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ghigo" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=ghigo"><img alt="@ghigo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/185571?s=40&amp;v=4" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lukem512" href="/davidshimjs/qrcodejs/commits/master/qrcode.js?author=lukem512"><img alt="@lukem512" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2834976?s=40&amp;v=4" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@davidshimjs" height="24" src="https://avatars3.githubusercontent.com/u/3103540?s=48&amp;v=4" width="24" />
            <a href="/davidshimjs">davidshimjs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davidcl64" height="24" src="https://avatars1.githubusercontent.com/u/928988?s=48&amp;v=4" width="24" />
            <a href="/davidcl64">davidcl64</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ysangkok" height="24" src="https://avatars1.githubusercontent.com/u/284023?s=48&amp;v=4" width="24" />
            <a href="/ysangkok">ysangkok</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@taku0" height="24" src="https://avatars1.githubusercontent.com/u/870673?s=48&amp;v=4" width="24" />
            <a href="/taku0">taku0</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ghigo" height="24" src="https://avatars2.githubusercontent.com/u/185571?s=48&amp;v=4" width="24" />
            <a href="/ghigo">ghigo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lukem512" height="24" src="https://avatars1.githubusercontent.com/u/2834976?s=48&amp;v=4" width="24" />
            <a href="/lukem512">lukem512</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/davidshimjs/qrcodejs/raw/master/qrcode.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/davidshimjs/qrcodejs/blame/master/qrcode.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/davidshimjs/qrcodejs/commits/master/qrcode.js">History</a>
    </div>


          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/davidshimjs/qrcodejs/edit/master/qrcode.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="DDEpT97btCGyJkjsHAErEmNCzAlb8k6ZYUEVWy7st0MK5N1q/VLGJFqXEF3BRJAoQH+i+XYzylGnORQjV6JmLw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
            </button>
</form>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/davidshimjs/qrcodejs/delete/master/qrcode.js" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="n3V4vuqFFKOuy4lTI+zAU/ptpJfbWBS1pYIKNiPfR/VVDhkYiCXCq+dbl4cwgZ2ihixoh7SStBbU7brIjb49WA==" />
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      615 lines (541 sloc)
      <span class="file-info-divider"></span>
    32.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@fileoverview</span></span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * - Using the &#39;QRCode for Javascript library&#39;</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * - Fixed dataset of &#39;QRCode for Javascript library&#39; for support full-spec.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * - this library has no dependencies.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@author</span> <span class="pl-en">davidshimjs</span></span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@see</span> <span class="pl-en">&lt;a</span> href=&quot;http://www.d-project.com/&quot; target=&quot;_blank&quot;&gt;http://www.d-project.com/&lt;/a&gt;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * <span class="pl-k">@see</span> <span class="pl-en">&lt;a</span> href=&quot;http://jeromeetienne.github.com/jquery-qrcode/&quot; target=&quot;_blank&quot;&gt;http://jeromeetienne.github.com/jquery-qrcode/&lt;/a&gt;</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> QRCode;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>---------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> QRCode for JavaScript</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Copyright (c) 2009 Kazuhiko Arase</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> URL: http://www.d-project.com/</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Licensed under the MIT license:</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>   http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> The word &quot;QR Code&quot; is registered trademark of </span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> DENSO WAVE INCORPORATED</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>   http://www.denso-wave.com/qrcode/faqpatent-e.html</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>---------------------------------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">QR8bitByte</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">mode</span> <span class="pl-k">=</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_8BIT_BYTE</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> data;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Added to support UTF-8 Characters</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">data</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> byteArray <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> code <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">data</span>.<span class="pl-c1">charCodeAt</span>(i);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (code <span class="pl-k">&gt;</span> <span class="pl-c1">0x10000</span>) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-c1">0xF0</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0x1C0000</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">18</span>);</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3F000</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0xFC0</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">3</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">&gt;</span> <span class="pl-c1">0x800</span>) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-c1">0xE0</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0xF000</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">12</span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0xFC0</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">2</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> (code <span class="pl-k">&gt;</span> <span class="pl-c1">0x80</span>) {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-c1">0xC0</span> <span class="pl-k">|</span> ((code <span class="pl-k">&amp;</span> <span class="pl-c1">0x7C0</span>) <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">6</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-c1">0x80</span> <span class="pl-k">|</span> (code <span class="pl-k">&amp;</span> <span class="pl-c1">0x3F</span>);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">				byteArray[<span class="pl-c1">0</span>] <span class="pl-k">=</span> code;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">push</span>(byteArray);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span> <span class="pl-k">=</span> <span class="pl-c1">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">concat</span>.<span class="pl-c1">apply</span>([], <span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">length</span> <span class="pl-k">!=</span> <span class="pl-c1">this</span>.<span class="pl-c1">data</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">unshift</span>(<span class="pl-c1">191</span>);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">unshift</span>(<span class="pl-c1">187</span>);</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">unshift</span>(<span class="pl-c1">239</span>);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QR8bitByte</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getLength</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">buffer</span>) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">write</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">buffer</span>) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, l <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> l; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-c1">this</span>.<span class="pl-smi">parsedData</span>[i], <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">QRCodeModel</span>(<span class="pl-smi">typeNumber</span>, <span class="pl-smi">errorCorrectLevel</span>) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span> <span class="pl-k">=</span> typeNumber;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">errorCorrectLevel</span> <span class="pl-k">=</span> errorCorrectLevel;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">modules</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">dataList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRCodeModel</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">addData</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">data</span>){<span class="pl-k">var</span> newData<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QR8bitByte</span>(data);<span class="pl-c1">this</span>.<span class="pl-smi">dataList</span>.<span class="pl-c1">push</span>(newData);<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span><span class="pl-k">=</span><span class="pl-c1">null</span>;},<span class="pl-en">isDark</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">row</span>,<span class="pl-smi">col</span>){<span class="pl-k">if</span>(row<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">&lt;=</span>row<span class="pl-k">||</span>col<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">&lt;=</span>col){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(row<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>col);}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col];},<span class="pl-en">getModuleCount</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span>;},<span class="pl-en">make</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-c1">this</span>.<span class="pl-en">makeImpl</span>(<span class="pl-c1">false</span>,<span class="pl-c1">this</span>.<span class="pl-en">getBestMaskPattern</span>());},<span class="pl-en">makeImpl</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">test</span>,<span class="pl-smi">maskPattern</span>){<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span><span class="pl-k">*</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">17</span>;<span class="pl-c1">this</span>.<span class="pl-smi">modules</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span>;row<span class="pl-k">++</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row]<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span>;col<span class="pl-k">++</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col]<span class="pl-k">=</span><span class="pl-c1">null</span>;}}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">setupPositionProbePattern</span>(<span class="pl-c1">0</span>,<span class="pl-c1">0</span>);<span class="pl-c1">this</span>.<span class="pl-en">setupPositionProbePattern</span>(<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">7</span>,<span class="pl-c1">0</span>);<span class="pl-c1">this</span>.<span class="pl-en">setupPositionProbePattern</span>(<span class="pl-c1">0</span>,<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">7</span>);<span class="pl-c1">this</span>.<span class="pl-en">setupPositionAdjustPattern</span>();<span class="pl-c1">this</span>.<span class="pl-en">setupTimingPattern</span>();<span class="pl-c1">this</span>.<span class="pl-en">setupTypeInfo</span>(test,maskPattern);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span><span class="pl-k">&gt;=</span><span class="pl-c1">7</span>){<span class="pl-c1">this</span>.<span class="pl-en">setupTypeNumber</span>(test);}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span><span class="pl-k">==</span><span class="pl-c1">null</span>){<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span><span class="pl-k">=</span><span class="pl-smi">QRCodeModel</span>.<span class="pl-en">createData</span>(<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span>,<span class="pl-c1">this</span>.<span class="pl-smi">errorCorrectLevel</span>,<span class="pl-c1">this</span>.<span class="pl-smi">dataList</span>);}</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-en">mapData</span>(<span class="pl-c1">this</span>.<span class="pl-smi">dataCache</span>,maskPattern);},<span class="pl-en">setupPositionProbePattern</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">row</span>,<span class="pl-smi">col</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;r<span class="pl-k">&lt;=</span><span class="pl-c1">7</span>;r<span class="pl-k">++</span>){<span class="pl-k">if</span>(row<span class="pl-k">+</span>r<span class="pl-k">&lt;=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">&lt;=</span>row<span class="pl-k">+</span>r)<span class="pl-k">continue</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;c<span class="pl-k">&lt;=</span><span class="pl-c1">7</span>;c<span class="pl-k">++</span>){<span class="pl-k">if</span>(col<span class="pl-k">+</span>c<span class="pl-k">&lt;=</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">&lt;=</span>col<span class="pl-k">+</span>c)<span class="pl-k">continue</span>;<span class="pl-k">if</span>((<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>r<span class="pl-k">&amp;&amp;</span>r<span class="pl-k">&lt;=</span><span class="pl-c1">6</span><span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">||</span>c<span class="pl-k">==</span><span class="pl-c1">6</span>))<span class="pl-k">||</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>c<span class="pl-k">&amp;&amp;</span>c<span class="pl-k">&lt;=</span><span class="pl-c1">6</span><span class="pl-k">&amp;&amp;</span>(r<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">||</span>r<span class="pl-k">==</span><span class="pl-c1">6</span>))<span class="pl-k">||</span>(<span class="pl-c1">2</span><span class="pl-k">&lt;=</span>r<span class="pl-k">&amp;&amp;</span>r<span class="pl-k">&lt;=</span><span class="pl-c1">4</span><span class="pl-k">&amp;&amp;</span><span class="pl-c1">2</span><span class="pl-k">&lt;=</span>c<span class="pl-k">&amp;&amp;</span>c<span class="pl-k">&lt;=</span><span class="pl-c1">4</span>)){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row<span class="pl-k">+</span>r][col<span class="pl-k">+</span>c]<span class="pl-k">=</span><span class="pl-c1">true</span>;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row<span class="pl-k">+</span>r][col<span class="pl-k">+</span>c]<span class="pl-k">=</span><span class="pl-c1">false</span>;}}}},<span class="pl-en">getBestMaskPattern</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> minLostPoint<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> pattern<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">8</span>;i<span class="pl-k">++</span>){<span class="pl-c1">this</span>.<span class="pl-en">makeImpl</span>(<span class="pl-c1">true</span>,i);<span class="pl-k">var</span> lostPoint<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getLostPoint</span>(<span class="pl-c1">this</span>);<span class="pl-k">if</span>(i<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">||</span>minLostPoint<span class="pl-k">&gt;</span>lostPoint){minLostPoint<span class="pl-k">=</span>lostPoint;pattern<span class="pl-k">=</span>i;}}</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> pattern;},<span class="pl-en">createMovieClip</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">target_mc</span>,<span class="pl-smi">instance_name</span>,<span class="pl-smi">depth</span>){<span class="pl-k">var</span> qr_mc<span class="pl-k">=</span><span class="pl-smi">target_mc</span>.<span class="pl-en">createEmptyMovieClip</span>(instance_name,depth);<span class="pl-k">var</span> cs<span class="pl-k">=</span><span class="pl-c1">1</span>;<span class="pl-c1">this</span>.<span class="pl-en">make</span>();<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">modules</span>.<span class="pl-c1">length</span>;row<span class="pl-k">++</span>){<span class="pl-k">var</span> y<span class="pl-k">=</span>row<span class="pl-k">*</span>cs;<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row].<span class="pl-c1">length</span>;col<span class="pl-k">++</span>){<span class="pl-k">var</span> x<span class="pl-k">=</span>col<span class="pl-k">*</span>cs;<span class="pl-k">var</span> dark<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col];<span class="pl-k">if</span>(dark){<span class="pl-smi">qr_mc</span>.<span class="pl-en">beginFill</span>(<span class="pl-c1">0</span>,<span class="pl-c1">100</span>);<span class="pl-smi">qr_mc</span>.<span class="pl-c1">moveTo</span>(x,y);<span class="pl-smi">qr_mc</span>.<span class="pl-en">lineTo</span>(x<span class="pl-k">+</span>cs,y);<span class="pl-smi">qr_mc</span>.<span class="pl-en">lineTo</span>(x<span class="pl-k">+</span>cs,y<span class="pl-k">+</span>cs);<span class="pl-smi">qr_mc</span>.<span class="pl-en">lineTo</span>(x,y<span class="pl-k">+</span>cs);<span class="pl-smi">qr_mc</span>.<span class="pl-en">endFill</span>();}}}</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> qr_mc;},<span class="pl-en">setupTimingPattern</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">8</span>;r<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">8</span>;r<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[r][<span class="pl-c1">6</span>]<span class="pl-k">!=</span><span class="pl-c1">null</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[r][<span class="pl-c1">6</span>]<span class="pl-k">=</span>(r<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>);}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">8</span>;c<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">8</span>;c<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">6</span>][c]<span class="pl-k">!=</span><span class="pl-c1">null</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">6</span>][c]<span class="pl-k">=</span>(c<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>);}},<span class="pl-en">setupPositionAdjustPattern</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">var</span> pos<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getPatternPosition</span>(<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">pos</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">pos</span>.<span class="pl-c1">length</span>;j<span class="pl-k">++</span>){<span class="pl-k">var</span> row<span class="pl-k">=</span>pos[i];<span class="pl-k">var</span> col<span class="pl-k">=</span>pos[j];<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col]<span class="pl-k">!=</span><span class="pl-c1">null</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">2</span>;r<span class="pl-k">&lt;=</span><span class="pl-c1">2</span>;r<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">2</span>;c<span class="pl-k">&lt;=</span><span class="pl-c1">2</span>;c<span class="pl-k">++</span>){<span class="pl-k">if</span>(r<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">2</span><span class="pl-k">||</span>r<span class="pl-k">==</span><span class="pl-c1">2</span><span class="pl-k">||</span>c<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">2</span><span class="pl-k">||</span>c<span class="pl-k">==</span><span class="pl-c1">2</span><span class="pl-k">||</span>(r<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;</span>c<span class="pl-k">==</span><span class="pl-c1">0</span>)){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row<span class="pl-k">+</span>r][col<span class="pl-k">+</span>c]<span class="pl-k">=</span><span class="pl-c1">true</span>;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row<span class="pl-k">+</span>r][col<span class="pl-k">+</span>c]<span class="pl-k">=</span><span class="pl-c1">false</span>;}}}}}},<span class="pl-en">setupTypeNumber</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">test</span>){<span class="pl-k">var</span> bits<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHTypeNumber</span>(<span class="pl-c1">this</span>.<span class="pl-smi">typeNumber</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">18</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> mod<span class="pl-k">=</span>(<span class="pl-k">!</span>test<span class="pl-k">&amp;&amp;</span>((bits<span class="pl-k">&gt;&gt;</span>i)<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(i<span class="pl-k">/</span><span class="pl-c1">3</span>)][i<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">-</span><span class="pl-c1">3</span>]<span class="pl-k">=</span>mod;}</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">18</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> mod<span class="pl-k">=</span>(<span class="pl-k">!</span>test<span class="pl-k">&amp;&amp;</span>((bits<span class="pl-k">&gt;&gt;</span>i)<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[i<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">8</span><span class="pl-k">-</span><span class="pl-c1">3</span>][<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(i<span class="pl-k">/</span><span class="pl-c1">3</span>)]<span class="pl-k">=</span>mod;}},<span class="pl-en">setupTypeInfo</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">test</span>,<span class="pl-smi">maskPattern</span>){<span class="pl-k">var</span> data<span class="pl-k">=</span>(<span class="pl-c1">this</span>.<span class="pl-smi">errorCorrectLevel</span><span class="pl-k">&lt;&lt;</span><span class="pl-c1">3</span>)<span class="pl-k">|</span>maskPattern;<span class="pl-k">var</span> bits<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHTypeInfo</span>(data);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">15</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> mod<span class="pl-k">=</span>(<span class="pl-k">!</span>test<span class="pl-k">&amp;&amp;</span>((bits<span class="pl-k">&gt;&gt;</span>i)<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);<span class="pl-k">if</span>(i<span class="pl-k">&lt;</span><span class="pl-c1">6</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[i][<span class="pl-c1">8</span>]<span class="pl-k">=</span>mod;}<span class="pl-k">else</span> <span class="pl-k">if</span>(i<span class="pl-k">&lt;</span><span class="pl-c1">8</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[i<span class="pl-k">+</span><span class="pl-c1">1</span>][<span class="pl-c1">8</span>]<span class="pl-k">=</span>mod;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">15</span><span class="pl-k">+</span>i][<span class="pl-c1">8</span>]<span class="pl-k">=</span>mod;}}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">15</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> mod<span class="pl-k">=</span>(<span class="pl-k">!</span>test<span class="pl-k">&amp;&amp;</span>((bits<span class="pl-k">&gt;&gt;</span>i)<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);<span class="pl-k">if</span>(i<span class="pl-k">&lt;</span><span class="pl-c1">8</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">8</span>][<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span>i<span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>mod;}<span class="pl-k">else</span> <span class="pl-k">if</span>(i<span class="pl-k">&lt;</span><span class="pl-c1">9</span>){<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">8</span>][<span class="pl-c1">15</span><span class="pl-k">-</span>i<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">+</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>mod;}<span class="pl-k">else</span>{<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">8</span>][<span class="pl-c1">15</span><span class="pl-k">-</span>i<span class="pl-k">-</span><span class="pl-c1">1</span>]<span class="pl-k">=</span>mod;}}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[<span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">8</span>][<span class="pl-c1">8</span>]<span class="pl-k">=</span>(<span class="pl-k">!</span>test);},<span class="pl-en">mapData</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">data</span>,<span class="pl-smi">maskPattern</span>){<span class="pl-k">var</span> inc<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">var</span> bitIndex<span class="pl-k">=</span><span class="pl-c1">7</span>;<span class="pl-k">var</span> byteIndex<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">-</span><span class="pl-c1">1</span>;col<span class="pl-k">&gt;</span><span class="pl-c1">0</span>;col<span class="pl-k">-=</span><span class="pl-c1">2</span>){<span class="pl-k">if</span>(col<span class="pl-k">==</span><span class="pl-c1">6</span>)col<span class="pl-k">--</span>;<span class="pl-k">while</span>(<span class="pl-c1">true</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span><span class="pl-c1">2</span>;c<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col<span class="pl-k">-</span>c]<span class="pl-k">==</span><span class="pl-c1">null</span>){<span class="pl-k">var</span> dark<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">if</span>(byteIndex<span class="pl-k">&lt;</span><span class="pl-smi">data</span>.<span class="pl-c1">length</span>){dark<span class="pl-k">=</span>(((data[byteIndex]<span class="pl-k">&gt;&gt;&gt;</span>bitIndex)<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);}</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> mask<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getMask</span>(maskPattern,row,col<span class="pl-k">-</span>c);<span class="pl-k">if</span>(mask){dark<span class="pl-k">=</span><span class="pl-k">!</span>dark;}</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">modules</span>[row][col<span class="pl-k">-</span>c]<span class="pl-k">=</span>dark;bitIndex<span class="pl-k">--</span>;<span class="pl-k">if</span>(bitIndex<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">1</span>){byteIndex<span class="pl-k">++</span>;bitIndex<span class="pl-k">=</span><span class="pl-c1">7</span>;}}}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	row<span class="pl-k">+=</span>inc;<span class="pl-k">if</span>(row<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span><span class="pl-c1">this</span>.<span class="pl-smi">moduleCount</span><span class="pl-k">&lt;=</span>row){row<span class="pl-k">-=</span>inc;inc<span class="pl-k">=</span><span class="pl-k">-</span>inc;<span class="pl-k">break</span>;}}}}};<span class="pl-smi">QRCodeModel</span>.<span class="pl-c1">PAD0</span><span class="pl-k">=</span><span class="pl-c1">0xEC</span>;<span class="pl-smi">QRCodeModel</span>.<span class="pl-c1">PAD1</span><span class="pl-k">=</span><span class="pl-c1">0x11</span>;<span class="pl-smi">QRCodeModel</span>.<span class="pl-en">createData</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">typeNumber</span>,<span class="pl-smi">errorCorrectLevel</span>,<span class="pl-smi">dataList</span>){<span class="pl-k">var</span> rsBlocks<span class="pl-k">=</span><span class="pl-smi">QRRSBlock</span>.<span class="pl-en">getRSBlocks</span>(typeNumber,errorCorrectLevel);<span class="pl-k">var</span> buffer<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QRBitBuffer</span>();<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">dataList</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> data<span class="pl-k">=</span>dataList[i];<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-smi">data</span>.<span class="pl-smi">mode</span>,<span class="pl-c1">4</span>);<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-smi">data</span>.<span class="pl-en">getLength</span>(),<span class="pl-smi">QRUtil</span>.<span class="pl-en">getLengthInBits</span>(<span class="pl-smi">data</span>.<span class="pl-smi">mode</span>,typeNumber));<span class="pl-smi">data</span>.<span class="pl-c1">write</span>(buffer);}</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> totalDataCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){totalDataCount<span class="pl-k">+=</span>rsBlocks[i].<span class="pl-smi">dataCount</span>;}</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()<span class="pl-k">&gt;</span>totalDataCount<span class="pl-k">*</span><span class="pl-c1">8</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>code length overflow. (<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">+</span><span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">+</span>totalDataCount<span class="pl-k">*</span><span class="pl-c1">8</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()<span class="pl-k">+</span><span class="pl-c1">4</span><span class="pl-k">&lt;=</span>totalDataCount<span class="pl-k">*</span><span class="pl-c1">8</span>){<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-c1">0</span>,<span class="pl-c1">4</span>);}</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">while</span>(<span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()<span class="pl-k">%</span><span class="pl-c1">8</span><span class="pl-k">!=</span><span class="pl-c1">0</span>){<span class="pl-smi">buffer</span>.<span class="pl-en">putBit</span>(<span class="pl-c1">false</span>);}</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">while</span>(<span class="pl-c1">true</span>){<span class="pl-k">if</span>(<span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()<span class="pl-k">&gt;=</span>totalDataCount<span class="pl-k">*</span><span class="pl-c1">8</span>){<span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-smi">QRCodeModel</span>.<span class="pl-c1">PAD0</span>,<span class="pl-c1">8</span>);<span class="pl-k">if</span>(<span class="pl-smi">buffer</span>.<span class="pl-en">getLengthInBits</span>()<span class="pl-k">&gt;=</span>totalDataCount<span class="pl-k">*</span><span class="pl-c1">8</span>){<span class="pl-k">break</span>;}</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">buffer</span>.<span class="pl-en">put</span>(<span class="pl-smi">QRCodeModel</span>.<span class="pl-c1">PAD1</span>,<span class="pl-c1">8</span>);}</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-smi">QRCodeModel</span>.<span class="pl-en">createBytes</span>(buffer,rsBlocks);};<span class="pl-smi">QRCodeModel</span>.<span class="pl-en">createBytes</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">buffer</span>,<span class="pl-smi">rsBlocks</span>){<span class="pl-k">var</span> offset<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> maxDcCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> maxEcCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> dcdata<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>);<span class="pl-k">var</span> ecdata<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">0</span>;r<span class="pl-k">&lt;</span><span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>;r<span class="pl-k">++</span>){<span class="pl-k">var</span> dcCount<span class="pl-k">=</span>rsBlocks[r].<span class="pl-smi">dataCount</span>;<span class="pl-k">var</span> ecCount<span class="pl-k">=</span>rsBlocks[r].<span class="pl-smi">totalCount</span><span class="pl-k">-</span>dcCount;maxDcCount<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(maxDcCount,dcCount);maxEcCount<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">max</span>(maxEcCount,ecCount);dcdata[r]<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(dcCount);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>dcdata[r].<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){dcdata[r][i]<span class="pl-k">=</span><span class="pl-c1">0xff</span><span class="pl-k">&amp;</span><span class="pl-smi">buffer</span>.<span class="pl-smi">buffer</span>[i<span class="pl-k">+</span>offset];}</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">	offset<span class="pl-k">+=</span>dcCount;<span class="pl-k">var</span> rsPoly<span class="pl-k">=</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getErrorCorrectPolynomial</span>(ecCount);<span class="pl-k">var</span> rawPoly<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QRPolynomial</span>(dcdata[r],<span class="pl-smi">rsPoly</span>.<span class="pl-en">getLength</span>()<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">var</span> modPoly<span class="pl-k">=</span><span class="pl-smi">rawPoly</span>.<span class="pl-en">mod</span>(rsPoly);ecdata[r]<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">rsPoly</span>.<span class="pl-en">getLength</span>()<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>ecdata[r].<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){<span class="pl-k">var</span> modIndex<span class="pl-k">=</span>i<span class="pl-k">+</span><span class="pl-smi">modPoly</span>.<span class="pl-en">getLength</span>()<span class="pl-k">-</span>ecdata[r].<span class="pl-c1">length</span>;ecdata[r][i]<span class="pl-k">=</span>(modIndex<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>)<span class="pl-k">?</span><span class="pl-smi">modPoly</span>.<span class="pl-c1">get</span>(modIndex)<span class="pl-k">:</span><span class="pl-c1">0</span>;}}</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> totalCodeCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>;i<span class="pl-k">++</span>){totalCodeCount<span class="pl-k">+=</span>rsBlocks[i].<span class="pl-smi">totalCount</span>;}</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> data<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(totalCodeCount);<span class="pl-k">var</span> index<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>maxDcCount;i<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">0</span>;r<span class="pl-k">&lt;</span><span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>;r<span class="pl-k">++</span>){<span class="pl-k">if</span>(i<span class="pl-k">&lt;</span>dcdata[r].<span class="pl-c1">length</span>){data[index<span class="pl-k">++</span>]<span class="pl-k">=</span>dcdata[r][i];}}}</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>maxEcCount;i<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-c1">0</span>;r<span class="pl-k">&lt;</span><span class="pl-smi">rsBlocks</span>.<span class="pl-c1">length</span>;r<span class="pl-k">++</span>){<span class="pl-k">if</span>(i<span class="pl-k">&lt;</span>ecdata[r].<span class="pl-c1">length</span>){data[index<span class="pl-k">++</span>]<span class="pl-k">=</span>ecdata[r][i];}}}</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">	return data;};var QRMode={MODE_NUMBER:1&lt;&lt;0,MODE_ALPHA_NUM:1&lt;&lt;1,MODE_8BIT_BYTE:1&lt;&lt;2,MODE_KANJI:1&lt;&lt;3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1&lt;&lt;10)|(1&lt;&lt;8)|(1&lt;&lt;5)|(1&lt;&lt;4)|(1&lt;&lt;2)|(1&lt;&lt;1)|(1&lt;&lt;0),G18:(1&lt;&lt;12)|(1&lt;&lt;11)|(1&lt;&lt;10)|(1&lt;&lt;9)|(1&lt;&lt;8)|(1&lt;&lt;5)|(1&lt;&lt;2)|(1&lt;&lt;0),G15_MASK:(1&lt;&lt;14)|(1&lt;&lt;12)|(1&lt;&lt;10)|(1&lt;&lt;4)|(1&lt;&lt;1),getBCHTypeInfo:function(data){var d=data&lt;&lt;10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)&gt;=0){d^=(QRUtil.G15&lt;&lt;(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span>((data<span class="pl-k">&lt;&lt;</span><span class="pl-c1">10</span>)<span class="pl-k">|</span>d)<span class="pl-k">^</span><span class="pl-smi">QRUtil</span>.<span class="pl-c1">G15_MASK</span>;},<span class="pl-en">getBCHTypeNumber</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">data</span>){<span class="pl-k">var</span> d<span class="pl-k">=</span>data<span class="pl-k">&lt;&lt;</span><span class="pl-c1">12</span>;<span class="pl-k">while</span>(<span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHDigit</span>(d)<span class="pl-k">-</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHDigit</span>(<span class="pl-smi">QRUtil</span>.<span class="pl-c1">G18</span>)<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>){d<span class="pl-k">^=</span>(<span class="pl-smi">QRUtil</span>.<span class="pl-c1">G18</span><span class="pl-k">&lt;&lt;</span>(<span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHDigit</span>(d)<span class="pl-k">-</span><span class="pl-smi">QRUtil</span>.<span class="pl-en">getBCHDigit</span>(<span class="pl-smi">QRUtil</span>.<span class="pl-c1">G18</span>)));}</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span>(data<span class="pl-k">&lt;&lt;</span><span class="pl-c1">12</span>)<span class="pl-k">|</span>d;},<span class="pl-en">getBCHDigit</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">data</span>){<span class="pl-k">var</span> digit<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">while</span>(data<span class="pl-k">!=</span><span class="pl-c1">0</span>){digit<span class="pl-k">++</span>;data<span class="pl-k">&gt;&gt;&gt;=</span><span class="pl-c1">1</span>;}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> digit;},<span class="pl-en">getPatternPosition</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">typeNumber</span>){<span class="pl-k">return</span> <span class="pl-smi">QRUtil</span>.<span class="pl-c1">PATTERN_POSITION_TABLE</span>[typeNumber<span class="pl-k">-</span><span class="pl-c1">1</span>];},<span class="pl-en">getMask</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">maskPattern</span>,<span class="pl-smi">i</span>,<span class="pl-smi">j</span>){<span class="pl-k">switch</span>(maskPattern){<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN000</span>:<span class="pl-k">return</span>(i<span class="pl-k">+</span>j)<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN001</span>:<span class="pl-k">return</span> i<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN010</span>:<span class="pl-k">return</span> j<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN011</span>:<span class="pl-k">return</span>(i<span class="pl-k">+</span>j)<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN100</span>:<span class="pl-k">return</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(i<span class="pl-k">/</span><span class="pl-c1">2</span>)<span class="pl-k">+</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(j<span class="pl-k">/</span><span class="pl-c1">3</span>))<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN101</span>:<span class="pl-k">return</span>(i<span class="pl-k">*</span>j)<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">+</span>(i<span class="pl-k">*</span>j)<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN110</span>:<span class="pl-k">return</span>((i<span class="pl-k">*</span>j)<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">+</span>(i<span class="pl-k">*</span>j)<span class="pl-k">%</span><span class="pl-c1">3</span>)<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMaskPattern</span>.<span class="pl-c1">PATTERN111</span>:<span class="pl-k">return</span>((i<span class="pl-k">*</span>j)<span class="pl-k">%</span><span class="pl-c1">3</span><span class="pl-k">+</span>(i<span class="pl-k">+</span>j)<span class="pl-k">%</span><span class="pl-c1">2</span>)<span class="pl-k">%</span><span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-c1">0</span>;<span class="pl-k">default</span>:<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>bad maskPattern:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>maskPattern);}},<span class="pl-en">getErrorCorrectPolynomial</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">errorCorrectLength</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">QRPolynomial</span>([<span class="pl-c1">1</span>],<span class="pl-c1">0</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>errorCorrectLength;i<span class="pl-k">++</span>){a<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-en">multiply</span>(<span class="pl-k">new</span> <span class="pl-en">QRPolynomial</span>([<span class="pl-c1">1</span>,<span class="pl-smi">QRMath</span>.<span class="pl-en">gexp</span>(i)],<span class="pl-c1">0</span>));}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> a;},<span class="pl-en">getLengthInBits</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">mode</span>,<span class="pl-smi">type</span>){<span class="pl-k">if</span>(<span class="pl-c1">1</span><span class="pl-k">&lt;=</span>type<span class="pl-k">&amp;&amp;</span>type<span class="pl-k">&lt;</span><span class="pl-c1">10</span>){<span class="pl-k">switch</span>(mode){<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_NUMBER</span>:<span class="pl-k">return</span> <span class="pl-c1">10</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_ALPHA_NUM</span>:<span class="pl-k">return</span> <span class="pl-c1">9</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_8BIT_BYTE</span>:<span class="pl-k">return</span> <span class="pl-c1">8</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_KANJI</span>:<span class="pl-k">return</span> <span class="pl-c1">8</span>;<span class="pl-k">default</span>:<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mode:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>mode);}}<span class="pl-k">else</span> <span class="pl-k">if</span>(type<span class="pl-k">&lt;</span><span class="pl-c1">27</span>){<span class="pl-k">switch</span>(mode){<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_NUMBER</span>:<span class="pl-k">return</span> <span class="pl-c1">12</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_ALPHA_NUM</span>:<span class="pl-k">return</span> <span class="pl-c1">11</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_8BIT_BYTE</span>:<span class="pl-k">return</span> <span class="pl-c1">16</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_KANJI</span>:<span class="pl-k">return</span> <span class="pl-c1">10</span>;<span class="pl-k">default</span>:<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mode:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>mode);}}<span class="pl-k">else</span> <span class="pl-k">if</span>(type<span class="pl-k">&lt;</span><span class="pl-c1">41</span>){<span class="pl-k">switch</span>(mode){<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_NUMBER</span>:<span class="pl-k">return</span> <span class="pl-c1">14</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_ALPHA_NUM</span>:<span class="pl-k">return</span> <span class="pl-c1">13</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_8BIT_BYTE</span>:<span class="pl-k">return</span> <span class="pl-c1">16</span>;<span class="pl-k">case</span> <span class="pl-smi">QRMode</span>.<span class="pl-c1">MODE_KANJI</span>:<span class="pl-k">return</span> <span class="pl-c1">12</span>;<span class="pl-k">default</span>:<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mode:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>mode);}}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>type:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>type);}},<span class="pl-en">getLostPoint</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">qrCode</span>){<span class="pl-k">var</span> moduleCount<span class="pl-k">=</span><span class="pl-smi">qrCode</span>.<span class="pl-en">getModuleCount</span>();<span class="pl-k">var</span> lostPoint<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span>moduleCount;row<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span>moduleCount;col<span class="pl-k">++</span>){<span class="pl-k">var</span> sameCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">var</span> dark<span class="pl-k">=</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col);<span class="pl-k">for</span>(<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;r<span class="pl-k">&lt;=</span><span class="pl-c1">1</span>;r<span class="pl-k">++</span>){<span class="pl-k">if</span>(row<span class="pl-k">+</span>r<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span>moduleCount<span class="pl-k">&lt;=</span>row<span class="pl-k">+</span>r){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-k">-</span><span class="pl-c1">1</span>;c<span class="pl-k">&lt;=</span><span class="pl-c1">1</span>;c<span class="pl-k">++</span>){<span class="pl-k">if</span>(col<span class="pl-k">+</span>c<span class="pl-k">&lt;</span><span class="pl-c1">0</span><span class="pl-k">||</span>moduleCount<span class="pl-k">&lt;=</span>col<span class="pl-k">+</span>c){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(r<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">&amp;&amp;</span>c<span class="pl-k">==</span><span class="pl-c1">0</span>){<span class="pl-k">continue</span>;}</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(dark<span class="pl-k">==</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span>r,col<span class="pl-k">+</span>c)){sameCount<span class="pl-k">++</span>;}}}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(sameCount<span class="pl-k">&gt;</span><span class="pl-c1">5</span>){lostPoint<span class="pl-k">+=</span>(<span class="pl-c1">3</span><span class="pl-k">+</span>sameCount<span class="pl-k">-</span><span class="pl-c1">5</span>);}}}</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span>moduleCount<span class="pl-k">-</span><span class="pl-c1">1</span>;row<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span>moduleCount<span class="pl-k">-</span><span class="pl-c1">1</span>;col<span class="pl-k">++</span>){<span class="pl-k">var</span> count<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col))count<span class="pl-k">++</span>;<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">1</span>,col))count<span class="pl-k">++</span>;<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">1</span>))count<span class="pl-k">++</span>;<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">1</span>,col<span class="pl-k">+</span><span class="pl-c1">1</span>))count<span class="pl-k">++</span>;<span class="pl-k">if</span>(count<span class="pl-k">==</span><span class="pl-c1">0</span><span class="pl-k">||</span>count<span class="pl-k">==</span><span class="pl-c1">4</span>){lostPoint<span class="pl-k">+=</span><span class="pl-c1">3</span>;}}}</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span>moduleCount;row<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span>moduleCount<span class="pl-k">-</span><span class="pl-c1">6</span>;col<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col)<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">2</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">3</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">4</span>)<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">5</span>)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col<span class="pl-k">+</span><span class="pl-c1">6</span>)){lostPoint<span class="pl-k">+=</span><span class="pl-c1">40</span>;}}}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span>moduleCount;col<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span>moduleCount<span class="pl-k">-</span><span class="pl-c1">6</span>;row<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col)<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">1</span>,col)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">2</span>,col)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">3</span>,col)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">4</span>,col)<span class="pl-k">&amp;&amp;!</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">5</span>,col)<span class="pl-k">&amp;&amp;</span><span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row<span class="pl-k">+</span><span class="pl-c1">6</span>,col)){lostPoint<span class="pl-k">+=</span><span class="pl-c1">40</span>;}}}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> darkCount<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(<span class="pl-k">var</span> col<span class="pl-k">=</span><span class="pl-c1">0</span>;col<span class="pl-k">&lt;</span>moduleCount;col<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> row<span class="pl-k">=</span><span class="pl-c1">0</span>;row<span class="pl-k">&lt;</span>moduleCount;row<span class="pl-k">++</span>){<span class="pl-k">if</span>(<span class="pl-smi">qrCode</span>.<span class="pl-en">isDark</span>(row,col)){darkCount<span class="pl-k">++</span>;}}}</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ratio<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-c1">100</span><span class="pl-k">*</span>darkCount<span class="pl-k">/</span>moduleCount<span class="pl-k">/</span>moduleCount<span class="pl-k">-</span><span class="pl-c1">50</span>)<span class="pl-k">/</span><span class="pl-c1">5</span>;lostPoint<span class="pl-k">+=</span>ratio<span class="pl-k">*</span><span class="pl-c1">10</span>;<span class="pl-k">return</span> lostPoint;}};<span class="pl-k">var</span> QRMath<span class="pl-k">=</span>{<span class="pl-en">glog</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">if</span>(n<span class="pl-k">&lt;</span><span class="pl-c1">1</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>glog(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>n<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);}</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-smi">QRMath</span>.<span class="pl-c1">LOG_TABLE</span>[n];},<span class="pl-en">gexp</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">n</span>){<span class="pl-k">while</span>(n<span class="pl-k">&lt;</span><span class="pl-c1">0</span>){n<span class="pl-k">+=</span><span class="pl-c1">255</span>;}</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">while</span>(n<span class="pl-k">&gt;=</span><span class="pl-c1">256</span>){n<span class="pl-k">-=</span><span class="pl-c1">255</span>;}</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[n];},<span class="pl-c1">EXP_TABLE</span><span class="pl-k">:</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">256</span>),<span class="pl-c1">LOG_TABLE</span><span class="pl-k">:</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">256</span>)};<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">8</span>;i<span class="pl-k">++</span>){<span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i]<span class="pl-k">=</span><span class="pl-c1">1</span><span class="pl-k">&lt;&lt;</span>i;}</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">8</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">256</span>;i<span class="pl-k">++</span>){<span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i]<span class="pl-k">=</span><span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i<span class="pl-k">-</span><span class="pl-c1">4</span>]<span class="pl-k">^</span><span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i<span class="pl-k">-</span><span class="pl-c1">5</span>]<span class="pl-k">^</span><span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i<span class="pl-k">-</span><span class="pl-c1">6</span>]<span class="pl-k">^</span><span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i<span class="pl-k">-</span><span class="pl-c1">8</span>];}</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">255</span>;i<span class="pl-k">++</span>){<span class="pl-smi">QRMath</span>.<span class="pl-c1">LOG_TABLE</span>[<span class="pl-smi">QRMath</span>.<span class="pl-c1">EXP_TABLE</span>[i]]<span class="pl-k">=</span>i;}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">QRPolynomial</span>(<span class="pl-smi">num</span>,<span class="pl-smi">shift</span>){<span class="pl-k">if</span>(<span class="pl-smi">num</span>.<span class="pl-c1">length</span><span class="pl-k">==</span><span class="pl-c1">undefined</span>){<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-smi">num</span>.<span class="pl-c1">length</span><span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>/<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>shift);}</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> offset<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">while</span>(offset<span class="pl-k">&lt;</span><span class="pl-smi">num</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>num[offset]<span class="pl-k">==</span><span class="pl-c1">0</span>){offset<span class="pl-k">++</span>;}</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-smi">num</span><span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-smi">num</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>offset<span class="pl-k">+</span>shift);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">num</span>.<span class="pl-c1">length</span><span class="pl-k">-</span>offset;i<span class="pl-k">++</span>){<span class="pl-c1">this</span>.<span class="pl-smi">num</span>[i]<span class="pl-k">=</span>num[i<span class="pl-k">+</span>offset];}}</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRPolynomial</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">index</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">num</span>[index];},<span class="pl-en">getLength</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">num</span>.<span class="pl-c1">length</span>;},<span class="pl-en">multiply</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">var</span> num<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">this</span>.<span class="pl-en">getLength</span>()<span class="pl-k">+</span><span class="pl-smi">e</span>.<span class="pl-en">getLength</span>()<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-en">getLength</span>();i<span class="pl-k">++</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span><span class="pl-smi">e</span>.<span class="pl-en">getLength</span>();j<span class="pl-k">++</span>){num[i<span class="pl-k">+</span>j]<span class="pl-k">^=</span><span class="pl-smi">QRMath</span>.<span class="pl-en">gexp</span>(<span class="pl-smi">QRMath</span>.<span class="pl-en">glog</span>(<span class="pl-c1">this</span>.<span class="pl-c1">get</span>(i))<span class="pl-k">+</span><span class="pl-smi">QRMath</span>.<span class="pl-en">glog</span>(<span class="pl-smi">e</span>.<span class="pl-c1">get</span>(j)));}}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">QRPolynomial</span>(num,<span class="pl-c1">0</span>);},<span class="pl-en">mod</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-en">getLength</span>()<span class="pl-k">-</span><span class="pl-smi">e</span>.<span class="pl-en">getLength</span>()<span class="pl-k">&lt;</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-c1">this</span>;}</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ratio<span class="pl-k">=</span><span class="pl-smi">QRMath</span>.<span class="pl-en">glog</span>(<span class="pl-c1">this</span>.<span class="pl-c1">get</span>(<span class="pl-c1">0</span>))<span class="pl-k">-</span><span class="pl-smi">QRMath</span>.<span class="pl-en">glog</span>(<span class="pl-smi">e</span>.<span class="pl-c1">get</span>(<span class="pl-c1">0</span>));<span class="pl-k">var</span> num<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-c1">this</span>.<span class="pl-en">getLength</span>());<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-en">getLength</span>();i<span class="pl-k">++</span>){num[i]<span class="pl-k">=</span><span class="pl-c1">this</span>.<span class="pl-c1">get</span>(i);}</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span><span class="pl-smi">e</span>.<span class="pl-en">getLength</span>();i<span class="pl-k">++</span>){num[i]<span class="pl-k">^=</span><span class="pl-smi">QRMath</span>.<span class="pl-en">gexp</span>(<span class="pl-smi">QRMath</span>.<span class="pl-en">glog</span>(<span class="pl-smi">e</span>.<span class="pl-c1">get</span>(i))<span class="pl-k">+</span>ratio);}</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">QRPolynomial</span>(num,<span class="pl-c1">0</span>).<span class="pl-en">mod</span>(e);}};<span class="pl-k">function</span> <span class="pl-en">QRRSBlock</span>(<span class="pl-smi">totalCount</span>,<span class="pl-smi">dataCount</span>){<span class="pl-c1">this</span>.<span class="pl-smi">totalCount</span><span class="pl-k">=</span>totalCount;<span class="pl-c1">this</span>.<span class="pl-smi">dataCount</span><span class="pl-k">=</span>dataCount;}</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error(&quot;bad rs block @ typeNumber:&quot;+typeNumber+&quot;/errorCorrectLevel:&quot;+errorCorrectLevel);}</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> length<span class="pl-k">=</span><span class="pl-smi">rsBlock</span>.<span class="pl-c1">length</span><span class="pl-k">/</span><span class="pl-c1">3</span>;<span class="pl-k">var</span> list<span class="pl-k">=</span>[];<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>length;i<span class="pl-k">++</span>){<span class="pl-k">var</span> count<span class="pl-k">=</span>rsBlock[i<span class="pl-k">*</span><span class="pl-c1">3</span><span class="pl-k">+</span><span class="pl-c1">0</span>];<span class="pl-k">var</span> totalCount<span class="pl-k">=</span>rsBlock[i<span class="pl-k">*</span><span class="pl-c1">3</span><span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">var</span> dataCount<span class="pl-k">=</span>rsBlock[i<span class="pl-k">*</span><span class="pl-c1">3</span><span class="pl-k">+</span><span class="pl-c1">2</span>];<span class="pl-k">for</span>(<span class="pl-k">var</span> j<span class="pl-k">=</span><span class="pl-c1">0</span>;j<span class="pl-k">&lt;</span>count;j<span class="pl-k">++</span>){<span class="pl-smi">list</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">QRRSBlock</span>(totalCount,dataCount));}}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> list;};<span class="pl-smi">QRRSBlock</span>.<span class="pl-en">getRsBlockTable</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">typeNumber</span>,<span class="pl-smi">errorCorrectLevel</span>){<span class="pl-k">switch</span>(errorCorrectLevel){<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">L</span>:<span class="pl-k">return</span> <span class="pl-smi">QRRSBlock</span>.<span class="pl-c1">RS_BLOCK_TABLE</span>[(typeNumber<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">*</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">0</span>];<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">M</span>:<span class="pl-k">return</span> <span class="pl-smi">QRRSBlock</span>.<span class="pl-c1">RS_BLOCK_TABLE</span>[(typeNumber<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">*</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">1</span>];<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">Q</span>:<span class="pl-k">return</span> <span class="pl-smi">QRRSBlock</span>.<span class="pl-c1">RS_BLOCK_TABLE</span>[(typeNumber<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">*</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">2</span>];<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">H</span>:<span class="pl-k">return</span> <span class="pl-smi">QRRSBlock</span>.<span class="pl-c1">RS_BLOCK_TABLE</span>[(typeNumber<span class="pl-k">-</span><span class="pl-c1">1</span>)<span class="pl-k">*</span><span class="pl-c1">4</span><span class="pl-k">+</span><span class="pl-c1">3</span>];<span class="pl-k">default</span>:<span class="pl-k">return</span> <span class="pl-c1">undefined</span>;}};<span class="pl-k">function</span> <span class="pl-en">QRBitBuffer</span>(){<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span><span class="pl-k">=</span>[];<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">=</span><span class="pl-c1">0</span>;}</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRBitBuffer</span>.<span class="pl-c1">prototype</span><span class="pl-k">=</span>{<span class="pl-en">get</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">index</span>){<span class="pl-k">var</span> bufIndex<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(index<span class="pl-k">/</span><span class="pl-c1">8</span>);<span class="pl-k">return</span>((<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>[bufIndex]<span class="pl-k">&gt;&gt;&gt;</span>(<span class="pl-c1">7</span><span class="pl-k">-</span>index<span class="pl-k">%</span><span class="pl-c1">8</span>))<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>;},<span class="pl-en">put</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">num</span>,<span class="pl-smi">length</span>){<span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>length;i<span class="pl-k">++</span>){<span class="pl-c1">this</span>.<span class="pl-en">putBit</span>(((num<span class="pl-k">&gt;&gt;&gt;</span>(length<span class="pl-k">-</span>i<span class="pl-k">-</span><span class="pl-c1">1</span>))<span class="pl-k">&amp;</span><span class="pl-c1">1</span>)<span class="pl-k">==</span><span class="pl-c1">1</span>);}},<span class="pl-en">getLengthInBits</span><span class="pl-k">:</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">length</span>;},<span class="pl-en">putBit</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">bit</span>){<span class="pl-k">var</span> bufIndex<span class="pl-k">=</span><span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">/</span><span class="pl-c1">8</span>);<span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;=</span>bufIndex){<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>.<span class="pl-c1">push</span>(<span class="pl-c1">0</span>);}</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(bit){<span class="pl-c1">this</span>.<span class="pl-smi">buffer</span>[bufIndex]<span class="pl-k">|=</span>(<span class="pl-c1">0x80</span><span class="pl-k">&gt;&gt;&gt;</span>(<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">%</span><span class="pl-c1">8</span>));}</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">this</span>.<span class="pl-c1">length</span><span class="pl-k">++</span>;}};<span class="pl-k">var</span> QRCodeLimitLength<span class="pl-k">=</span>[[<span class="pl-c1">17</span>,<span class="pl-c1">14</span>,<span class="pl-c1">11</span>,<span class="pl-c1">7</span>],[<span class="pl-c1">32</span>,<span class="pl-c1">26</span>,<span class="pl-c1">20</span>,<span class="pl-c1">14</span>],[<span class="pl-c1">53</span>,<span class="pl-c1">42</span>,<span class="pl-c1">32</span>,<span class="pl-c1">24</span>],[<span class="pl-c1">78</span>,<span class="pl-c1">62</span>,<span class="pl-c1">46</span>,<span class="pl-c1">34</span>],[<span class="pl-c1">106</span>,<span class="pl-c1">84</span>,<span class="pl-c1">60</span>,<span class="pl-c1">44</span>],[<span class="pl-c1">134</span>,<span class="pl-c1">106</span>,<span class="pl-c1">74</span>,<span class="pl-c1">58</span>],[<span class="pl-c1">154</span>,<span class="pl-c1">122</span>,<span class="pl-c1">86</span>,<span class="pl-c1">64</span>],[<span class="pl-c1">192</span>,<span class="pl-c1">152</span>,<span class="pl-c1">108</span>,<span class="pl-c1">84</span>],[<span class="pl-c1">230</span>,<span class="pl-c1">180</span>,<span class="pl-c1">130</span>,<span class="pl-c1">98</span>],[<span class="pl-c1">271</span>,<span class="pl-c1">213</span>,<span class="pl-c1">151</span>,<span class="pl-c1">119</span>],[<span class="pl-c1">321</span>,<span class="pl-c1">251</span>,<span class="pl-c1">177</span>,<span class="pl-c1">137</span>],[<span class="pl-c1">367</span>,<span class="pl-c1">287</span>,<span class="pl-c1">203</span>,<span class="pl-c1">155</span>],[<span class="pl-c1">425</span>,<span class="pl-c1">331</span>,<span class="pl-c1">241</span>,<span class="pl-c1">177</span>],[<span class="pl-c1">458</span>,<span class="pl-c1">362</span>,<span class="pl-c1">258</span>,<span class="pl-c1">194</span>],[<span class="pl-c1">520</span>,<span class="pl-c1">412</span>,<span class="pl-c1">292</span>,<span class="pl-c1">220</span>],[<span class="pl-c1">586</span>,<span class="pl-c1">450</span>,<span class="pl-c1">322</span>,<span class="pl-c1">250</span>],[<span class="pl-c1">644</span>,<span class="pl-c1">504</span>,<span class="pl-c1">364</span>,<span class="pl-c1">280</span>],[<span class="pl-c1">718</span>,<span class="pl-c1">560</span>,<span class="pl-c1">394</span>,<span class="pl-c1">310</span>],[<span class="pl-c1">792</span>,<span class="pl-c1">624</span>,<span class="pl-c1">442</span>,<span class="pl-c1">338</span>],[<span class="pl-c1">858</span>,<span class="pl-c1">666</span>,<span class="pl-c1">482</span>,<span class="pl-c1">382</span>],[<span class="pl-c1">929</span>,<span class="pl-c1">711</span>,<span class="pl-c1">509</span>,<span class="pl-c1">403</span>],[<span class="pl-c1">1003</span>,<span class="pl-c1">779</span>,<span class="pl-c1">565</span>,<span class="pl-c1">439</span>],[<span class="pl-c1">1091</span>,<span class="pl-c1">857</span>,<span class="pl-c1">611</span>,<span class="pl-c1">461</span>],[<span class="pl-c1">1171</span>,<span class="pl-c1">911</span>,<span class="pl-c1">661</span>,<span class="pl-c1">511</span>],[<span class="pl-c1">1273</span>,<span class="pl-c1">997</span>,<span class="pl-c1">715</span>,<span class="pl-c1">535</span>],[<span class="pl-c1">1367</span>,<span class="pl-c1">1059</span>,<span class="pl-c1">751</span>,<span class="pl-c1">593</span>],[<span class="pl-c1">1465</span>,<span class="pl-c1">1125</span>,<span class="pl-c1">805</span>,<span class="pl-c1">625</span>],[<span class="pl-c1">1528</span>,<span class="pl-c1">1190</span>,<span class="pl-c1">868</span>,<span class="pl-c1">658</span>],[<span class="pl-c1">1628</span>,<span class="pl-c1">1264</span>,<span class="pl-c1">908</span>,<span class="pl-c1">698</span>],[<span class="pl-c1">1732</span>,<span class="pl-c1">1370</span>,<span class="pl-c1">982</span>,<span class="pl-c1">742</span>],[<span class="pl-c1">1840</span>,<span class="pl-c1">1452</span>,<span class="pl-c1">1030</span>,<span class="pl-c1">790</span>],[<span class="pl-c1">1952</span>,<span class="pl-c1">1538</span>,<span class="pl-c1">1112</span>,<span class="pl-c1">842</span>],[<span class="pl-c1">2068</span>,<span class="pl-c1">1628</span>,<span class="pl-c1">1168</span>,<span class="pl-c1">898</span>],[<span class="pl-c1">2188</span>,<span class="pl-c1">1722</span>,<span class="pl-c1">1228</span>,<span class="pl-c1">958</span>],[<span class="pl-c1">2303</span>,<span class="pl-c1">1809</span>,<span class="pl-c1">1283</span>,<span class="pl-c1">983</span>],[<span class="pl-c1">2431</span>,<span class="pl-c1">1911</span>,<span class="pl-c1">1351</span>,<span class="pl-c1">1051</span>],[<span class="pl-c1">2563</span>,<span class="pl-c1">1989</span>,<span class="pl-c1">1423</span>,<span class="pl-c1">1093</span>],[<span class="pl-c1">2699</span>,<span class="pl-c1">2099</span>,<span class="pl-c1">1499</span>,<span class="pl-c1">1139</span>],[<span class="pl-c1">2809</span>,<span class="pl-c1">2213</span>,<span class="pl-c1">1579</span>,<span class="pl-c1">1219</span>],[<span class="pl-c1">2953</span>,<span class="pl-c1">2331</span>,<span class="pl-c1">1663</span>,<span class="pl-c1">1273</span>]];</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">_isSupportCanvas</span>() {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-k">typeof</span> <span class="pl-c1">CanvasRenderingContext2D</span> <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> android 2.x doesn&#39;t support Data-URI spec</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">_getAndroid</span>() {</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> android <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> sAgent <span class="pl-k">=</span> <span class="pl-c1">navigator</span>.<span class="pl-c1">userAgent</span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-sr"><span class="pl-pds">/</span>android<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(sAgent)) { <span class="pl-c"><span class="pl-c">//</span> android</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			android <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> aMat <span class="pl-k">=</span> <span class="pl-smi">sAgent</span>.<span class="pl-c1">toString</span>().<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>android (<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-cce">\.</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span>)<span class="pl-pds">/</span>i</span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (aMat <span class="pl-k">&amp;&amp;</span> aMat[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">				android <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(aMat[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> android;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> svgDrawer <span class="pl-k">=</span> (<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-en">Drawing</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">el</span>, <span class="pl-smi">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_el</span> <span class="pl-k">=</span> el;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span> <span class="pl-k">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">draw</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _htOption <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> _el <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_el</span>;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nCount <span class="pl-k">=</span> <span class="pl-smi">oQRCode</span>.<span class="pl-en">getModuleCount</span>();</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nWidth <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-smi">_htOption</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> nCount);</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nHeight <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-smi">_htOption</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> nCount);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">makeSVG</span>(<span class="pl-smi">tag</span>, <span class="pl-smi">attrs</span>) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElementNS</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>http://www.w3.org/2000/svg<span class="pl-pds">&#39;</span></span>, tag);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> k <span class="pl-k">in</span> attrs)</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">attrs</span>.<span class="pl-en">hasOwnProperty</span>(k)) <span class="pl-smi">el</span>.<span class="pl-c1">setAttribute</span>(k, attrs[k]);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> el;</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-en">makeSVG</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>svg<span class="pl-pds">&quot;</span></span> , {<span class="pl-s"><span class="pl-pds">&#39;</span>viewBox<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0 0 <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">String</span>(nCount) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">String</span>(nCount), <span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>fill<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorLight</span>});</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">svg</span>.<span class="pl-c1">setAttributeNS</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>http://www.w3.org/2000/xmlns/<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>xmlns:xlink<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>http://www.w3.org/1999/xlink<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">_el</span>.<span class="pl-c1">appendChild</span>(svg);</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">svg</span>.<span class="pl-c1">appendChild</span>(<span class="pl-en">makeSVG</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>rect<span class="pl-pds">&quot;</span></span>, {<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorLight</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>100%<span class="pl-pds">&quot;</span></span>}));</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">svg</span>.<span class="pl-c1">appendChild</span>(<span class="pl-en">makeSVG</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>rect<span class="pl-pds">&quot;</span></span>, {<span class="pl-s"><span class="pl-pds">&quot;</span>fill<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorDark</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>1<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>template<span class="pl-pds">&quot;</span></span>}));</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> row <span class="pl-k">=</span> <span class="pl-c1">0</span>; row <span class="pl-k">&lt;</span> nCount; row<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> col <span class="pl-k">=</span> <span class="pl-c1">0</span>; col <span class="pl-k">&lt;</span> nCount; col<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">oQRCode</span>.<span class="pl-en">isDark</span>(row, col)) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> child <span class="pl-k">=</span> <span class="pl-en">makeSVG</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>use<span class="pl-pds">&quot;</span></span>, {<span class="pl-s"><span class="pl-pds">&quot;</span>x<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">String</span>(col), <span class="pl-s"><span class="pl-pds">&quot;</span>y<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-c1">String</span>(row)});</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">child</span>.<span class="pl-c1">setAttributeNS</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>http://www.w3.org/1999/xlink<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>href<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>#template<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">svg</span>.<span class="pl-c1">appendChild</span>(child);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clear</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-c1">hasChildNodes</span>())</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-c1">removeChild</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-c1">lastChild</span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> useSVG <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">documentElement</span>.<span class="pl-c1">tagName</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>svg<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Drawing in DOM by using Table tag</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> Drawing <span class="pl-k">=</span> useSVG <span class="pl-k">?</span> svgDrawer <span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-en">_isSupportCanvas</span>() <span class="pl-k">?</span> (<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-en">Drawing</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">el</span>, <span class="pl-smi">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_el</span> <span class="pl-k">=</span> el;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span> <span class="pl-k">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Draw the QRCode</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{QRCode}</span> <span class="pl-smi">oQRCode</span></span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">draw</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> _htOption <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> _el <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_el</span>;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nCount <span class="pl-k">=</span> <span class="pl-smi">oQRCode</span>.<span class="pl-en">getModuleCount</span>();</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nWidth <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-smi">_htOption</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> nCount);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nHeight <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-smi">_htOption</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> nCount);</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> aHTML <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;table style=&quot;border:0;border-collapse:collapse;&quot;&gt;<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> row <span class="pl-k">=</span> <span class="pl-c1">0</span>; row <span class="pl-k">&lt;</span> nCount; row<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">aHTML</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;tr&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> col <span class="pl-k">=</span> <span class="pl-c1">0</span>; col <span class="pl-k">&lt;</span> nCount; col<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">aHTML</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;td style=&quot;border:0;border-collapse:collapse;padding:0;margin:0;width:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> nWidth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px;height:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> nHeight <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px;background-color:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">oQRCode</span>.<span class="pl-en">isDark</span>(row, col) <span class="pl-k">?</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorDark</span> <span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorLight</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>;&quot;&gt;&lt;/td&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">aHTML</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/tr&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">aHTML</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/table&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">_el</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">aHTML</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Fix the margin values as real size.</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> elTable <span class="pl-k">=</span> <span class="pl-smi">_el</span>.<span class="pl-c1">childNodes</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nLeftMarginTable <span class="pl-k">=</span> (<span class="pl-smi">_htOption</span>.<span class="pl-c1">width</span> <span class="pl-k">-</span> <span class="pl-smi">elTable</span>.<span class="pl-smi">offsetWidth</span>) <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nTopMarginTable <span class="pl-k">=</span> (<span class="pl-smi">_htOption</span>.<span class="pl-c1">height</span> <span class="pl-k">-</span> <span class="pl-smi">elTable</span>.<span class="pl-smi">offsetHeight</span>) <span class="pl-k">/</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (nLeftMarginTable <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> nTopMarginTable <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">elTable</span>.<span class="pl-c1">style</span>.<span class="pl-smi">margin</span> <span class="pl-k">=</span> nTopMarginTable <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> nLeftMarginTable <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>px<span class="pl-pds">&quot;</span></span>;	</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clear</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">	})() <span class="pl-k">:</span> (<span class="pl-k">function</span> () { <span class="pl-c"><span class="pl-c">//</span> Drawing in Canvas</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">_onMakeImage</span>() {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">toDataURL</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>image/png<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;			</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Android 2.1 bug workaround</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> http://code.google.com/p/android/issues/detail?id=5141</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">&lt;=</span> <span class="pl-c1">2.1</span>) {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">	    	<span class="pl-k">var</span> factor <span class="pl-k">=</span> <span class="pl-c1">1</span> <span class="pl-k">/</span> <span class="pl-c1">window</span>.<span class="pl-smi">devicePixelRatio</span>;</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">	        <span class="pl-k">var</span> drawImage <span class="pl-k">=</span> <span class="pl-c1">CanvasRenderingContext2D</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">drawImage</span>; </td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">	    	<span class="pl-c1">CanvasRenderingContext2D</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">drawImage</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">image</span>, <span class="pl-smi">sx</span>, <span class="pl-smi">sy</span>, <span class="pl-smi">sw</span>, <span class="pl-smi">sh</span>, <span class="pl-smi">dx</span>, <span class="pl-smi">dy</span>, <span class="pl-smi">dw</span>, <span class="pl-smi">dh</span>) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">	    		<span class="pl-k">if</span> ((<span class="pl-s"><span class="pl-pds">&quot;</span>nodeName<span class="pl-pds">&quot;</span></span> <span class="pl-k">in</span> image) <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span>img<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>(<span class="pl-smi">image</span>.<span class="pl-c1">nodeName</span>)) {</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">		        	<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; i <span class="pl-k">&gt;=</span> <span class="pl-c1">1</span>; i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		            	<span class="pl-c1">arguments</span>[i] <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[i] <span class="pl-k">*</span> factor;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">		        	}</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">	    		} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> dw <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">	    			<span class="pl-c1">arguments</span>[<span class="pl-c1">1</span>] <span class="pl-k">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">	    			<span class="pl-c1">arguments</span>[<span class="pl-c1">2</span>] <span class="pl-k">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">	    			<span class="pl-c1">arguments</span>[<span class="pl-c1">3</span>] <span class="pl-k">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">	    			<span class="pl-c1">arguments</span>[<span class="pl-c1">4</span>] <span class="pl-k">*=</span> factor;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">	    		}</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">	    		</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">	        	<span class="pl-smi">drawImage</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">this</span>, <span class="pl-c1">arguments</span>); </td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">	    	};</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Check whether the user&#39;s browser supports Data URI or not</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@private</span></span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">fSuccess</span> Occurs if it supports Data URI</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">fFail</span> Occurs if it doesn&#39;t support Data URI</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">_safeSetDataURI</span>(<span class="pl-smi">fSuccess</span>, <span class="pl-smi">fFail</span>) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-smi">_fFail</span> <span class="pl-k">=</span> fFail;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-smi">_fSuccess</span> <span class="pl-k">=</span> fSuccess;</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Check it just once</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> <span class="pl-en">fOnError</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">self</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">_fFail</span>) {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">self</span>.<span class="pl-smi">_fFail</span>.<span class="pl-c1">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> <span class="pl-en">fOnSuccess</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">self</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">_fSuccess</span>) {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">                        <span class="pl-smi">self</span>.<span class="pl-smi">_fSuccess</span>.<span class="pl-c1">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">el</span>.<span class="pl-smi">onabort</span> <span class="pl-k">=</span> fOnError;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">el</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> fOnError;</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">el</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> fOnSuccess;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">el</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==<span class="pl-pds">&quot;</span></span>; <span class="pl-c"><span class="pl-c">//</span> the Image contains 1px data.</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">self</span>.<span class="pl-smi">_fSuccess</span>) {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">self</span>.<span class="pl-smi">_fSuccess</span>.<span class="pl-c1">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">self</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">self</span>.<span class="pl-smi">_fFail</span>) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">self</span>.<span class="pl-smi">_fFail</span>.<span class="pl-c1">call</span>(self);</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Drawing QRCode by using canvas</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@constructor</span></span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{HTMLElement}</span> <span class="pl-smi">el</span></span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">htOption</span> QRCode Options </span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> <span class="pl-en">Drawing</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">el</span>, <span class="pl-smi">htOption</span>) {</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">    		<span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">    		<span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">=</span> <span class="pl-en">_getAndroid</span>();</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span> <span class="pl-k">=</span> htOption;</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span> <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>canvas<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-smi">htOption</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">htOption</span>.<span class="pl-c1">height</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">el</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_el</span> <span class="pl-k">=</span> el;</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_oContext</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">getContext</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>2d<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span> <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>.<span class="pl-c1">alt</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Scan me!<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>);</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_bSupportDataURI</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Draw the QRCode</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{QRCode}</span> <span class="pl-smi">oQRCode</span> </span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">draw</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">oQRCode</span>) {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> _elImage <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_elImage</span>;</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> _oContext <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_oContext</span>;</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> _htOption <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">            </td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nCount <span class="pl-k">=</span> <span class="pl-smi">oQRCode</span>.<span class="pl-en">getModuleCount</span>();</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nWidth <span class="pl-k">=</span> <span class="pl-smi">_htOption</span>.<span class="pl-c1">width</span> <span class="pl-k">/</span> nCount;</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nHeight <span class="pl-k">=</span> <span class="pl-smi">_htOption</span>.<span class="pl-c1">height</span> <span class="pl-k">/</span> nCount;</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nRoundedWidth <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(nWidth);</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nRoundedHeight <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">round</span>(nHeight);</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">_elImage</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> row <span class="pl-k">=</span> <span class="pl-c1">0</span>; row <span class="pl-k">&lt;</span> nCount; row<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">var</span> col <span class="pl-k">=</span> <span class="pl-c1">0</span>; col <span class="pl-k">&lt;</span> nCount; col<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> bIsDark <span class="pl-k">=</span> <span class="pl-smi">oQRCode</span>.<span class="pl-en">isDark</span>(row, col);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> nLeft <span class="pl-k">=</span> col <span class="pl-k">*</span> nWidth;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> nTop <span class="pl-k">=</span> row <span class="pl-k">*</span> nHeight;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-smi">strokeStyle</span> <span class="pl-k">=</span> bIsDark <span class="pl-k">?</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorDark</span> <span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorLight</span>;</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-smi">lineWidth</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-smi">fillStyle</span> <span class="pl-k">=</span> bIsDark <span class="pl-k">?</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorDark</span> <span class="pl-k">:</span> <span class="pl-smi">_htOption</span>.<span class="pl-smi">colorLight</span>;					</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-en">fillRect</span>(nLeft, nTop, nWidth, nHeight);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> 안티 앨리어싱 방지 처리</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-en">strokeRect</span>(</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(nLeft) <span class="pl-k">+</span> <span class="pl-c1">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(nTop) <span class="pl-k">+</span> <span class="pl-c1">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">						nRoundedWidth,</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">						nRoundedHeight</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">					</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">_oContext</span>.<span class="pl-en">strokeRect</span>(</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>(nLeft) <span class="pl-k">-</span> <span class="pl-c1">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>(nTop) <span class="pl-k">-</span> <span class="pl-c1">0.5</span>,</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">						nRoundedWidth,</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">						nRoundedHeight</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">					);</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Make the image from Canvas if the browser supports Data URI.</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">makeImage</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span>) {</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">_safeSetDataURI</span>.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>, _onMakeImage);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Return whether the QRCode is painted or not</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * </span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@return</span> <span class="pl-en">{Boolean}</span></span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">isPainted</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span>;</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clear</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_oContext</span>.<span class="pl-en">clearRect</span>(<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">width</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_elCanvas</span>.<span class="pl-c1">height</span>);</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_bIsPainted</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@private</span></span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">nNumber</span></span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">Drawing</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">round</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">nNumber</span>) {</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>nNumber) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> nNumber;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(nNumber <span class="pl-k">*</span> <span class="pl-c1">1000</span>) <span class="pl-k">/</span> <span class="pl-c1">1000</span>;</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> Drawing;</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">	})();</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Get the type by string length</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * </span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@private</span></span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">sText</span></span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">nCorrectLevel</span></span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@return</span> <span class="pl-en">{Number}</span> type</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">_getTypeNumber</span>(<span class="pl-smi">sText</span>, <span class="pl-smi">nCorrectLevel</span>) {			</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> nType <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> length <span class="pl-k">=</span> <span class="pl-en">_getUTF8Length</span>(sText);</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">QRCodeLimitLength</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;=</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> nLimit <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">switch</span> (nCorrectLevel) {</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">L</span> :</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">					nLimit <span class="pl-k">=</span> QRCodeLimitLength[i][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">M</span> :</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">					nLimit <span class="pl-k">=</span> QRCodeLimitLength[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">Q</span> :</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">					nLimit <span class="pl-k">=</span> QRCodeLimitLength[i][<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">case</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">H</span> :</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">					nLimit <span class="pl-k">=</span> QRCodeLimitLength[i][<span class="pl-c1">3</span>];</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">			</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (length <span class="pl-k">&lt;=</span> nLimit) {</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">				nType<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (nType <span class="pl-k">&gt;</span> <span class="pl-smi">QRCodeLimitLength</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Too long data<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> nType;</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">function</span> <span class="pl-en">_getUTF8Length</span>(<span class="pl-smi">sText</span>) {</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> replacedText <span class="pl-k">=</span> <span class="pl-c1">encodeURI</span>(sText).<span class="pl-c1">toString</span>().<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\%</span><span class="pl-c1">[<span class="pl-c1">0-9a-fA-F</span>]</span><span class="pl-k">{2}</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-smi">replacedText</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> (<span class="pl-smi">replacedText</span>.<span class="pl-c1">length</span> <span class="pl-k">!=</span> sText <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@class</span> QRCode</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@constructor</span></span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@example</span> </span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-s1"><span class="pl-k">new</span> <span class="pl-en">QRCode</span>(<span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>test<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&quot;</span>http://jindo.dev.naver.com/collie<span class="pl-pds">&quot;</span></span>);</span></span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@example</span></span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-s1"><span class="pl-k">var</span> oQRCode <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">QRCode</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>test<span class="pl-pds">&quot;</span></span>, {</span></span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *    <span class="pl-s1">text <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>http://naver.com<span class="pl-pds">&quot;</span></span>,</span></span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *    <span class="pl-s1">width <span class="pl-k">:</span> <span class="pl-c1">128</span>,</span></span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *    <span class="pl-s1">height <span class="pl-k">:</span> <span class="pl-c1">128</span></span></span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-s1">});</span></span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * </span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-s1"><span class="pl-smi">oQRCode</span>.<span class="pl-c1">clear</span>(); <span class="pl-c"><span class="pl-c">//</span> Clear the QRCode.</span></span></span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-s1"><span class="pl-smi">oQRCode</span>.<span class="pl-en">makeCode</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>http://map.naver.com<span class="pl-pds">&quot;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Re-create the QRCode.</span></span></span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 *</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{HTMLElement|String}</span> <span class="pl-smi">el</span> target element or &#39;id&#39; attribute of element.</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{Object|String}</span> <span class="pl-smi">vOption</span></span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">vOption.text</span> QRCode link data</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">[vOption.width<span class="pl-k">=</span><span class="pl-s1"><span class="pl-c1">256</span></span>]</span></span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{Number}</span> <span class="pl-smi">[vOption.height<span class="pl-k">=</span><span class="pl-s1"><span class="pl-c1">256</span></span>]</span></span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">[vOption.colorDark<span class="pl-k">=</span><span class="pl-s1"><span class="pl-s"><span class="pl-pds">&quot;</span>#000000<span class="pl-pds">&quot;</span></span></span>]</span></span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">[vOption.colorLight<span class="pl-k">=</span><span class="pl-s1"><span class="pl-s"><span class="pl-pds">&quot;</span>#ffffff<span class="pl-pds">&quot;</span></span></span>]</span></span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{QRCode.CorrectLevel}</span> <span class="pl-smi">[vOption.correctLevel<span class="pl-k">=</span><span class="pl-s1"><span class="pl-smi">QRCode</span>.<span class="pl-smi">CorrectLevel</span>.<span class="pl-c1">H</span></span>]</span> [L|M|Q|H] </span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">	<span class="pl-en">QRCode</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">el</span>, <span class="pl-smi">vOption</span>) {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">			width <span class="pl-k">:</span> <span class="pl-c1">256</span>, </td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">			height <span class="pl-k">:</span> <span class="pl-c1">256</span>,</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">			typeNumber <span class="pl-k">:</span> <span class="pl-c1">4</span>,</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">			colorDark <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#000000<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">			colorLight <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>#ffffff<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">			correctLevel <span class="pl-k">:</span> <span class="pl-smi">QRErrorCorrectLevel</span>.<span class="pl-c1">H</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> vOption <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">			vOption	<span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">				text <span class="pl-k">:</span> vOption</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Overwrites options</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (vOption) {</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> vOption) {</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>[i] <span class="pl-k">=</span> vOption[i];</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> el <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">			el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(el);</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>.<span class="pl-smi">useSVG</span>) {</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">			Drawing <span class="pl-k">=</span> svgDrawer;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">=</span> <span class="pl-en">_getAndroid</span>();</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_el</span> <span class="pl-k">=</span> el;</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oQRCode</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oDrawing</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Drawing</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>, <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>);</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">		</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>.<span class="pl-c1">text</span>) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">makeCode</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>.<span class="pl-c1">text</span>);	</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Make the QRCode</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * </span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@param</span> <span class="pl-en">{String}</span> <span class="pl-smi">sText</span> link data</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRCode</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">makeCode</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">sText</span>) {</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oQRCode</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">QRCodeModel</span>(<span class="pl-en">_getTypeNumber</span>(sText, <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>.<span class="pl-smi">correctLevel</span>), <span class="pl-c1">this</span>.<span class="pl-smi">_htOption</span>.<span class="pl-smi">correctLevel</span>);</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oQRCode</span>.<span class="pl-en">addData</span>(sText);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oQRCode</span>.<span class="pl-en">make</span>();</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_el</span>.<span class="pl-c1">title</span> <span class="pl-k">=</span> sText;</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oDrawing</span>.<span class="pl-en">draw</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_oQRCode</span>);			</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-en">makeImage</span>();</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Make the Image from Canvas element</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * - It occurs automatically</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * - Android below 3 doesn&#39;t support Data-URI spec.</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * </span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@private</span></span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRCode</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">makeImage</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">this</span>.<span class="pl-smi">_oDrawing</span>.<span class="pl-smi">makeImage</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-smi">_android</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">3</span>)) {</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_oDrawing</span>.<span class="pl-en">makeImage</span>();</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * Clear the QRCode</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRCode</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">clear</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">this</span>.<span class="pl-smi">_oDrawing</span>.<span class="pl-c1">clear</span>();</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">	</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 * <span class="pl-k">@name</span> <span class="pl-en">QRCode.CorrectLevel</span></span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">QRCode</span>.<span class="pl-smi">CorrectLevel</span> <span class="pl-k">=</span> QRErrorCorrectLevel;</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/davidshimjs/qrcodejs/blame/04f46c6a0708418cb7b96fc563eacae0fbf77674/qrcode.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/davidshimjs/qrcodejs/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.25344s from unicorn-429938047-7w5g2">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-ZJLxhPfYuYU0MapbzqjNhwg2if/JrVmKZ1SdP+YwUlvCysCk9Up5KSnz49XzMIHFe9SAVGUbKJeFRug2Ne8R3w==" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-413dd2a0695c3dfaf7de158468a91646.js"></script>
    <script crossorigin="anonymous" integrity="sha512-u4Y5gGhnCqTaB3+I2hYPllCmPERZ2E2KVEcebns/qC34VfBjqfqZvzZlltyN0O+hlInSD2S6BnrQRF50gtsKeQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-f2d2015a790169684fdc14f1bb2a7a19.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-LVHaP7zzbdq/Dq4lgxQM+EYx8s2h3+kdifAvFVvHB3aUyOQEkOdTlGs10vU7y+2q011+DClBua6AMdZlVXrUUQ==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-683b7dfaa058eed3ab827e1372c38947.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

