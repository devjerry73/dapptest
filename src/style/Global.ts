import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }

html,
body {
  padding: 0;
  margin: 0;

 font-family: SFRounded, ui-rounded, "SF Pro Rounded", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

.dropdown {
 display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

header {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #212529;
}

.nav-area {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}

.logo {
  text-decoration: none;
  font-size: 25px;
  color: inherit;
  margin-right: 20px;
}

.menus {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
}

.menu-items {
  position: relative;
  font-size: 14px;
}

.menu-items a {
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
}

.menu-items button {
  display: flex;
  align-items: center;
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 100%;
}

button span {
  margin-left: 3px;
}

.menu-items > a, .menu-items button {
  text-align: left;
  padding: 0.7rem 1rem;
}

.menu-items a:hover,
.menu-items button:hover {
  background-color: #f2f2f2;
}

.arrow::after {
  content: "";
  display: inline-block;
  margin-left: 0.28em;
  vertical-align: 0.09em;
  border-top: 0.42em solid;
  border-right: 0.32em solid transparent;
  border-left: 0.32em solid transparent;
}

.dropdown {
  position: absolute;
  right: 0;
  left: auto;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
  font-size: 0.875rem;
  z-index: 9999;
  min-width: 10rem;
  padding: 0.5rem 0;
  list-style: none;
  background-color: #fff;
  border-radius: 0.5rem;
  display: none;
}

.dropdown.show {
  display: block;
}

.dropdown .dropdown-submenu {
  position: absolute;
  left: 100%;
  top: -7px;
}

/* content */

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 20px;
}

.content h2 {
  margin-bottom: 1rem;
}

.content a {
  color: #cc3852;
  margin-right: 10px;
}

`

export default GlobalStyle
