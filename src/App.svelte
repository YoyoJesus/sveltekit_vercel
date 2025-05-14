<script>
  // import custom components
  // import assets (images)
  import myAvatar from '/myAvatar.png'
  import kheLogo from '/khe.ico'
  import hacKSULogo from '/hacksu.svg'
  import CombatLogo from '/Combat.png'
  import designPattern2 from '/circuit.png'
  import designPattern from '/circuit2.png'
  import puppet from '/puppet.png'
</script>

<main class="container mx-auto p-4">
  <!-- Design pattern at top-left and bottom-right -->
  <img src={designPattern2} class="absolute top-0 left-0 w-42 opacity-80" alt="Top Left Design Pattern" />
  <img src={designPattern} class="absolute bottom-0 right-0 w-42 opacity-80" alt="Bottom Right Design Pattern" />

  <div class="flex flex-wrap justify-center items-center gap-6 my-8">
    <a href="https://flaskvercel-nine.vercel.app/" target="_blank" rel="noreferrer" class="group relative">
      <span class="absolute inset-0 bg-gradient-to-br from-white-500 to-black-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity"></span>
      <img src={puppet} class="logo w-40 transition-transform hover:scale-110 relative" alt="Flask Vercel Logo" />
    </a>
    <a href="https://web.cs.kent.edu/~asternb1/" target="_blank" rel="noreferrer" class="group relative">
      <span class="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity"></span>
      <img src={myAvatar} class="logo w-40 transition-transform hover:scale-110 relative" alt="HacKSU Logo" />
    </a>
    <a href="https://khe.io" target="_blank" rel="noreferrer" class="group relative">
      <span class="absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity"></span>
      <img src={kheLogo} class="logo khe w-40 transition-transform hover:scale-110 relative" alt="KHE Logo" />
    </a>
    <a href="https://hacksu.com" target="_blank" rel="noreferrer" class="group relative">
      <span class="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity"></span>
      <img src={hacKSULogo} class="logo hacksu w-40 transition-transform hover:scale-110 relative" alt="HackSU Logo" />
    </a>
    <a href="https://ksucombat.club" target="_blank" rel="noreferrer" class="group relative">
      <span class="absolute inset-0 bg-gradient-to-br from-blue-500 to-yellow-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity"></span>
      <img src={CombatLogo} class="logo combat w-40 transition-transform hover:scale-110 relative" alt="Combat Logo" />
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
    2025 Austin Sternberg
  </div>
</main>