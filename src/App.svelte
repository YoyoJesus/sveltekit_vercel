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

<main class="container mx-auto p-4">
  <!-- Design pattern at top-left and bottom-right -->
  <img src={designPattern2} class="absolute top-0 left-0 w-32 opacity-80" alt="Top Left Design Pattern" />
  <img src={designPattern} class="absolute bottom-0 right-0 w-32 opacity-80" alt="Bottom Right Design Pattern" />

  <div class="flex flex-wrap justify-center items-center gap-6 my-8">
    <a href="https://web.cs.kent.edu/~asternb1/" target="_blank" rel="noreferrer">
      <img src={myAvatar} class="logo w-24 transition-transform hover:scale-110" alt="HacKSU Logo" />
    </a>
    <a href="https://khe.io" target="_blank" rel="noreferrer">
      <img src={kheLogo} class="logo khe w-24 transition-transform hover:scale-110" alt="KHE Logo" />
    </a>
    <a href="https://hacksu.com" target="_blank" rel="noreferrer">
      <img src={hacKSULogo} class="logo hacksu w-24 transition-transform hover:scale-110" alt="HackSU Logo" />
    </a>
    <a href="https://ksucombat.club" target="_blank" rel="noreferrer">
      <img src={CombatLogo} class="logo combat w-24 transition-transform hover:scale-110" alt="Combat Logo" />
    </a>
  </div>

  <h1 class="text-center text-2xl md:text-4xl font-bold my-5">Explore My Work</h1>

  <div class="text-center">
    <button
      id="sign_up_btn"
      onclick={() => {
        location.href = "https://github.com/yoyojesus";
      }}
      class="btn bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
    >
      View My Github Projects
    </button>
  </div>

  <div id="additional_info" class="text-center text-sm md:text-base mt-4">
    Test Site For Learning SvelteKit.
  </div>

  <footer class="text-center mt-8 text-gray-600">
    Austin Sternberg
  </footer>
</main>