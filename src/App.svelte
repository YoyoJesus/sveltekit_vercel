<script>
  // import custom components
  // import assets (images)
  import myAvatar from '/myAvatar.png'
  import kheLogo from '/khe.ico'
  import hacKSULogo from '/hacksu.svg'
  import CombatLogo from '/Combat.png'
  import designPattern2 from '/circuit.png'
  import designPattern from '/circuit2.png'
</script>

<style>
  /* In-Line CSS Style */
  main {
    padding: 2rem;
  }

  div {
    padding: 10px;
  }

  #sign_up_btn {
    font-size: 24px;
  }
  #additional_info {
    font-size: 18px;
  }
  
  .logo {
    height: 6em;
    padding-left: 3em;
    padding-right: 3em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #f87400ad);
  }
  .logo.khe:hover {
    filter: drop-shadow(0 0 2em #ebe7c1c8);
  }
  .logo.hacksu:hover {
    filter: drop-shadow(0 0 2em #00ff00a1);
  }
  .logo.combat:hover {
    filter: drop-shadow(0 0 2em #ffe600a1);
  }
  .button:hover {
    filter: drop-shadow(0 0 2em #00ddff9f);
  }

  /* Absolute positioning for designPattern */
  .top-left, .bottom-right {
    opacity: 0.8;
    position: absolute;
    width: 300px;
    height: auto;
  }

  .top-left {
    top: 0;
    left: 0;
  }

  .bottom-right {
    bottom: 0;
    right: 0;
  }
</style>

<main class="container">
  <!-- Design pattern at top-left and bottom-right -->
  <img src={designPattern2} class="top-left" alt="Top Left Design Pattern" />
  <img src={designPattern} class="bottom-right" alt="Bottom Right Design Pattern" />

  <div>
    <a href="https://web.cs.kent.edu/~asternb1/" target="_blank" rel="noreferrer">
      <img src={myAvatar} class="logo" alt="HacKSU Logo" />
    </a>
    <a href="https://khe.io" target="_blank" rel="noreferrer">
      <img src={kheLogo} class="logo khe" alt="KHE Logo" />
    </a>
    <a href="https://hacksu.com" target="_blank" rel="noreferrer">
      <img src={hacKSULogo} class="logo hacksu" alt="HackSU Logo" />
    </a>
    <a href="https://ksucombat.club" target="_blank" rel="noreferrer">
      <img src={CombatLogo} class="logo combat" alt="Combat Logo" />
    </a>
  </div>

  <h1 class="text-center my-5">Explore My Work</h1>

  <div class="text-center">
    <button id="sign_up_btn" onclick={() => {
      // redirect the user to the desired Google Form URL
      location.href = "https://github.com/yoyojesus";
    }} class="btn btn-primary button"> View My Github Projects </button>
  </div>

  <div id="additional_info" class="text-center">
    Test Site For Learning SvelteKit.
  </div>

  <footer>
    Austin Sternberg
  </footer>
</main>