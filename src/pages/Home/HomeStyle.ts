import styled from 'styled-components'

const HomeStyle = styled.div`

.rs-grid-container {
    .container-fixed();
  
    @media (min-width: @screen-sm) {
      width: @container-sm;
    }
  
    @media (min-width: @screen-md) {
      width: @container-md;
    }
  
    @media (min-width: @screen-lg) {
      width: @container-lg;
    }
  
    @media (min-width: @screen-xl) {
      width: @container-xl;
    }
  
    @media (min-width: @screen-xxl) {
      width: @container-xxl;
    }
  }
  
  // Fluid container
  //
  // Utilizes the mixin meant for fixed width containers, but without any defined
  // width for fluid, full width layouts.
  
  .rs-grid-container-fluid {
    .container-fixed();
  }
  
  // Columns
  //
  // Common styles for small and large grid columns
  .rs-col {
    float: left;
    position: relative;
    // Prevent columns from collapsing when empty
    min-height: 1px;
    // Inner gutter via padding
    padding-left: ceil((@grid-gutter-width / 2));
    padding-right: floor((@grid-gutter-width / 2));
  }
  
  // Extra small grid
  //
  // Columns, offsets, pushes, and pulls for extra small devices like
  // smartphones.
  
  .make-grid(xs);
  
  // Small grid
  //
  // Columns, offsets, pushes, and pulls for the small device range, from phones
  // to tablets / phones.
  
  @media (min-width: @screen-sm) {
    .make-grid(sm);
  }
  
  // Medium grid
  //
  // Columns, offsets, pushes, and pulls for the desktop device range.
  
  @media (min-width: @screen-md) {
    .make-grid(md);
  }
  
  // Large grid
  //
  // Columns, offsets, pushes, and pulls for the large desktop device range.
  
  @media (min-width: @screen-lg) {
    .make-grid(lg);
  }
  
  // Extra Large grid
  //
  // Columns, offsets, pushes, and pulls for the large desktop device range.
  
  @media (min-width: @screen-xl) {
    .make-grid(xl);
  }
  
  // Extra extra Large grid
  //
  // Columns, offsets, pushes, and pulls for the large desktop device range.
  
  @media (min-width: @screen-xxl) {
    .make-grid(xxl);
  }
  
  // Hiddens
  //
  // All hidden styles.
  
  @media (max-width: (@screen-sm - 1)) {
    .hidden(xs);
  }
  
  @media (min-width: @screen-sm) and (max-width: (@screen-md - 1)) {
    .hidden(sm);
  }
  
  @media (min-width: @screen-md) and (max-width: (@screen-lg - 1)) {
    .hidden(md);
  }
  
  @media (min-width: @screen-lg) and (max-width: (@screen-xl - 1)) {
    .hidden(lg);
  }
  
  @media (min-width: @screen-xl) and (max-width: (@screen-xxl - 1)) {
    .hidden(xl);
  }
  
  @media (min-width: @screen-xxl) {
    .hidden(xxl);
  }
  
// Flex-box grid wrapper
.rs-flex-box-grid {
  display: flex;
  flex-flow: row wrap;

  // Flex-box grid item
  &-item {
    flex: 0 0 auto;
  }

  //##==== Alignment (Y-Axis).

  // At the top of the alignment.
  &-top {
    align-items: flex-start;
  }

  // Align center.
  &-middle {
    align-items: center;
  }

  // At the bottom of the alignment.
  &-bottom {
    align-items: flex-end;
  }

  //##==== Layout (X-Axis).

  // Pack items from the start.
  &-start {
    justify-content: flex-start;
  }

  // Pack items around the center.
  &-center {
    justify-content: center;
  }

  // Pack items from the end.
  &-end {
    justify-content: flex-end;
  }

  // Distribute items evenly.
  // The first item is flush with the start, the last is flush with the end.
  &-space-between {
    justify-content: space-between;
  }

  // Distribute items evenly.
  // Items have a half-size space on either end.
  &-space-around {
    justify-content: space-around;
  }
}

// Generate the flex grid.
// Loop to generate flex grid.
each(range(24), {
  // Generate columns styles.
  .rs-flex-box-grid-item-@{value} {
    // Provide positioning for child elements.
    position: relative;
    display: block;
    // To prevent the collapse when column is empty.
    min-height: 1px;
    width: percentage((@value / 24));
  }

  // Generate order styles.
  .rs-flex-box-grid-item-order-@{value} {
    order: @value;
  }
});

// Default Button
.rs-btn {
  display: inline-block;
  margin-bottom: 0; // For input.btn
  font-weight: @btn-font-weight;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  white-space: nowrap;
  transition: @btn-transition;
  // Reset border style in all browser
  border: var(--rs-btn-default-border, none);
  user-select: none;
  text-decoration: none;
  color: var(--rs-btn-default-text);
  background-color: var(--rs-btn-default-bg);
  border-radius: @border-radius;

  .high-contrast-mode({
    transition: none;
  });

  .rs-btn-md();

  .with-focus-ring();

  .button-activated({
    color: var(--rs-btn-default-hover-text);
    background-color: var(--rs-btn-default-hover-bg);
    text-decoration: none;
  });

  .button-pressed({
    color: var(--rs-btn-default-active-text);
    background-color: var(--rs-btn-default-active-bg);
  });

  .button-disabled({
    cursor: @cursor-disabled;
    color: var(--rs-btn-default-disabled-text);
    background-color: var(--rs-btn-default-disabled-bg);
  });

  .with-ripple();
}

// Appearance variants
// --------------------------------------------------

// Primary Button
.rs-btn-primary {
  color: var(--rs-btn-primary-text);
  background-color: var(--rs-btn-primary-bg);
  border: none;

  .button-activated({
    color: var(--rs-btn-primary-text);
    background-color: var(--rs-btn-primary-hover-bg);
  });

  .button-pressed({
    color: var(--rs-btn-primary-text);
    background-color: var(--rs-btn-primary-active-bg);
  });

  .button-disabled({
    color: var(--rs-btn-primary-text);
    background-color: var(--rs-btn-primary-bg);
    opacity: 0.3;
  });
}

// Subtle Button
.rs-btn-subtle {
  color: var(--rs-btn-subtle-text);
  background-color: transparent;
  border: none;

  .button-activated({
    color: var(--rs-btn-subtle-hover-text);
    background-color: var(--rs-btn-subtle-hover-bg);
  });

  .button-pressed({
    color: var(--rs-btn-subtle-active-text);
    background-color: var(--rs-btn-subtle-active-bg);
  });

  .button-disabled({
    color: var(--rs-btn-subtle-disabled-text);
    background: none;
  });
}

// Link buttons
.rs-btn-link {
  color: var(--rs-btn-link-text);
  background-color: transparent;
  border: none;

  .button-activated({
    color: var(--rs-btn-link-hover-text);
    background-color: transparent;
    text-decoration: @link-hover-decoration;
  });

  .button-pressed({
    color: var(--rs-btn-link-active-text);
    background-color: transparent;
  });

  .button-disabled({
    color: var(--rs-btn-link-hover-text);
    background-color: transparent;
    text-decoration: none;
    opacity: 0.3;
  });
}

// Ghost Button
.rs-btn-ghost {
  color: var(--rs-btn-ghost-text);
  background-color: transparent;
  border: @btn-ghost-border-width solid var(--rs-btn-ghost-border);

  .button-activated({
    color: var(--rs-btn-ghost-hover-text);
    background-color: transparent;
    border-color: var(--rs-btn-ghost-hover-border);
  });

  .button-pressed({
    color: var(--rs-btn-ghost-active-text);
    background-color: transparent;
    border-color: var(--rs-btn-ghost-active-border);
  });

  .button-disabled({
    color: var(--rs-btn-ghost-text);
    background-color: transparent;
    opacity: 0.3;
  });
}

// Spectrum buttons
each(@spectrum, .(@color) {
  @C200: var(~'--rs-@{color}-200');
  @C400: var(~'--rs-@{color}-400');
  @C500: var(~'--rs-@{color}-500');
  @C600: var(~'--rs-@{color}-600');
  @C700: var(~'--rs-@{color}-700');
  @C800: var(~'--rs-@{color}-800');
  @C900: var(~'--rs-@{color}-900');

  .rs-btn-@{color} {
    --rs-btn-primary-bg: @C500;
    --rs-btn-primary-hover-bg: @C600;
    --rs-btn-primary-active-bg: @C700;
    --rs-btn-subtle-hover-bg: @C500;
    --rs-btn-subtle-hover-text: #fff;
    --rs-btn-subtle-active-bg: @C600;
    --rs-btn-subtle-active-text: #fff;
    --rs-btn-ghost-border: @C700;
    --rs-btn-ghost-text: @C700;
    --rs-btn-ghost-hover-border: @C800;
    --rs-btn-ghost-hover-text: @C800;
    --rs-btn-ghost-active-border: @C900;
    --rs-btn-ghost-active-text: @C900;
    --rs-btn-link-text: @C700;
    --rs-btn-link-hover-text: @C800;
    --rs-btn-link-active-text: @C900;
    --rs-iconbtn-primary-addon: @C600;
    --rs-iconbtn-primary-activated-addon: @C700;
    --rs-iconbtn-primary-pressed-addon: @C800;

    .dark-mode({
      --rs-btn-primary-bg: @C700;
      --rs-btn-primary-hover-bg: @C600;
      --rs-btn-primary-active-bg: @C400;
      --rs-btn-subtle-hover-bg: @C600;
      --rs-btn-subtle-hover-text: #fff;
      --rs-btn-subtle-active-bg: @C400;
      --rs-btn-subtle-active-text: #fff;
      --rs-btn-ghost-border: @C500;
      --rs-btn-ghost-text: @C500;
      --rs-btn-ghost-hover-border: @C400;
      --rs-btn-ghost-hover-text: @C400;
      --rs-btn-ghost-active-border: @C200;
      --rs-btn-ghost-active-text: @C200;
      --rs-btn-link-text: @C500;
      --rs-btn-link-hover-text: @C400;
      --rs-btn-link-active-text: @C200;
      --rs-iconbtn-primary-addon: @C600;
      --rs-iconbtn-primary-activated-addon: @C500;
      --rs-iconbtn-primary-pressed-addon: @C400;
    });

    .high-contrast-mode({
      --rs-btn-primary-bg: @C700;
      --rs-btn-primary-hover-bg: @C600;
      --rs-btn-primary-active-bg: @C400;
      --rs-btn-subtle-hover-bg: @C600;
      --rs-btn-subtle-hover-text: var(--rs-gray-900);
      --rs-btn-subtle-active-bg: @C400;
      --rs-btn-subtle-active-text: var(--rs-gray-900);
      --rs-btn-ghost-border: @C500;
      --rs-btn-ghost-text: @C500;
      --rs-btn-ghost-hover-border: @C400;
      --rs-btn-ghost-hover-text: @C400;
      --rs-btn-ghost-active-border: @C200;
      --rs-btn-ghost-active-text: @C200;
      --rs-btn-link-text: @C500;
      --rs-btn-link-hover-text: @C400;
      --rs-btn-link-active-text: @C200;
    });
  }
});

// Button Sizes
// --------------------------------------------------

.rs-btn-lg {
  .button-size-lg();
}

.rs-btn-md {
  .button-size-md();
}

.rs-btn-sm {
  .button-size-sm();
}

.rs-btn-xs {
  .button-size-xs();
}

// Block button
// --------------------------------------------------

.rs-btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  & + & {
    margin-top: 5px;
  }
}

// Button Loading state
.rs-btn-loading {
  color: transparent !important;
  position: relative;
  cursor: default;
  pointer-events: none;

  // Spinner
  > .rs-btn-spin {
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: @btn-loading-spin-default-diameter;
      height: @btn-loading-spin-default-diameter;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 50%;
      z-index: 1;

      .rs-btn-xs& {
        width: @btn-loading-spin-xs-diameter;
        height: @btn-loading-spin-xs-diameter;
      }
    }

    &::before {
      border: @btn-loading-spin-ring-wide solid var(--rs-loader-ring);

      .rs-btn-primary& {
        border-color: rgba(248, 247, 250, 0.3);

        .high-contrast-mode({
          border-color: var(--rs-loader-ring-inverse);
        });
      }
    }

    &::after {
      border-width: @btn-loading-spin-ring-wide;
      border-color: var(--rs-loader-rotor) transparent transparent;
      border-style: solid;
      animation: buttonSpin 0.6s infinite linear;

      .rs-btn-primary& {
        border-top-color: #fff;

        .high-contrast-mode({
          border-top-color: var(--rs-loader-rotor-inverse);
        });
      }
    }
  }

  @keyframes buttonSpin {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
}

.btn-error() {
  .rs-btn-subtle();

  --rs-btn-subtle-text: var(--rs-red-500);
  --rs-btn-subtle-hover-bg: var(--rs-red-500);
  --rs-btn-subtle-hover-text: #fff;
  --rs-btn-subtle-active-bg: var(--rs-red-600);
  --rs-btn-subtle-active-text: #fff;

  .dark-mode({
    --rs-btn-subtle-hover-bg: var(--rs-red-600);
    --rs-btn-subtle-active-bg: var(--rs-red-400);
  });
}

.page-home {
    position: relative;
  
    @media (min-width: @media-xs) {
      &.rs-grid-container {
        padding-left: 64px;
      }
    }
    @media (max-width: @media-xs) {
      .footerbar {
        display: none;
      }
      .banner {
        margin-top: 100px;
      }
      .home-page-badge-wrap a {
        display: block;
        line-height: 36px;
      }
      .primary-toolbar {
        margin-bottom: 20px;
      }
    }
  
    .header {
      text-align: right;
      padding-top: 10px;
    }
  
    .banner {
      height: calc(100vh - 56px);
      flex-flow: wrap-reverse;
  
      @media (min-width: @media-xs) {
        flex-flow: nowrap;
      }
  
      @media (max-width: @media-xs) {
        align-items: flex-end;
  
        .react-logo {
          width: 90%;
          margin: 0 auto;
          height: auto;
        }
  
        .logo-react-suite .rsuite-logo {
          margin: 0 auto;
          left: 0;
          right: 0;
          top: calc(50% - 68px);
        }
      }
  
      .logo-react-suite-wrapper {
        pointer-events: none;
      }
  
      .title {
        font-family: 'Raleway', 'Hiragino Sans GB', sans-serif;
        font-weight: bold;
  
        @media (max-width: @media-xs) {
          font-size: 30px;
          line-height: 36px;
        }
      }
  
      .sub-title {
        margin: 20px 0;
        font-size: 14px;
  
        @media (min-width: @media-xs) {
          font-size: 22px;
        }
      }
  
      .rs-btn-toolbar {
        margin-top: 50px;
      }
  
      .section {
        text-align: center;
  
        @media (min-width: @media-xs) {
          padding-left: 60px;
          text-align: left;
        }
      }
    }
  
    .logo-react-suite {
      position: relative;
      .rsuite-logo {
        position: absolute;
        left: 250px;
        top: 182px;
      }
    }
  
    .link-spread {
      display: inline-block;
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px transparent;
      position: relative;
      overflow: hidden;
      &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background-color: var(--rs-primary-500);
        height: 2px;
        transition: left 0.3s ease-out, right 0.3s ease-out;
      }
      & > a::after,
      &::after {
        display: none !important;
      }
      &:hover::before,
      &:focus::before,
      &:active::before {
        left: 0;
        right: 0;
      }
    }
    .footerbar {
      text-align: right;
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 5px 10px;
      a {
        color: #aaa;
      }
    }
  }
  
  .page-heading {
    .page-heading-anchor {
      opacity: 0;
    }
    &:hover {
      .page-heading-anchor {
        opacity: 1;
      }
    }
  }
  

`

export default HomeStyle
