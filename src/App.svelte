<script>
  // import custom components
  // import assets (images)
  import myAvatar from '/myAvatar.png'
  import kheLogo from '/khe.ico'
  import hacKSULogo from '/hacksu.svg'
  import CombatLogo from '/Combat.png'
  import puppet from '/puppet.png'
  import organicBlob1 from '/organic-blob1.svg'
  import organicBlob2 from '/organic-blob2.svg'
  import hackerMan from '/hacker.jpg'
</script>

<main class="container mx-auto p-4 relative z-10">
  <!-- Organic floating shapes for background -->
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  <div class="organic-shape"></div>
  
  <!-- Additional floating blobs -->
  <img src={organicBlob1} class="floating-blob" style="width: 180px; height: 180px; top: 15%; right: -20px; animation-delay: -1s;" alt="" />
  <img src={organicBlob2} class="floating-blob" style="width: 140px; height: 140px; bottom: 15%; left: -30px; animation-delay: -3s;" alt="" />
  <img src={organicBlob1} class="floating-blob" style="width: 100px; height: 100px; top: 45%; right: -10px; animation-delay: -5s;" alt="" />
  <img src={organicBlob2} class="floating-blob" style="width: 80px; height: 80px; top: 20%; left: -15px; animation-delay: -2s;" alt="" />
  <img src={organicBlob1} class="floating-blob" style="width: 120px; height: 120px; top: 55%; right: 85%; animation-delay: -4s;" alt="" />
  <img src={organicBlob2} class="floating-blob" style="width: 90px; height: 90px; top: 30%; left: 90%; animation-delay: -6s;" alt="" />
  <img src={organicBlob1} class="floating-blob" style="width: 160px; height: 160px; bottom: 25%; right: -25px; animation-delay: -3.5s;" alt="" />
  
  <!-- Enhanced sparkle effects -->
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  <div class="sparkle"></div>
  
  <!-- Glassmorphism header card -->
  <div class="glass mx-auto mb-12 p-8 max-w-6xl">
    <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 my-8">
      <a href="https://flaskvercel-nine.vercel.app/" target="_blank" rel="noreferrer" class="group relative floating">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={myAvatar} class="logo w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="Flask Vercel Logo" />
        </div>
      </a>
      
      <a href="https://ctf.hacksu.com" target="_blank" rel="noreferrer" class="group relative floating" style="animation-delay: -1s;">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={hackerMan} class="logo w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="My Avatar" />
        </div>
      </a>
      
      <a href="https://khe.io" target="_blank" rel="noreferrer" class="group relative floating" style="animation-delay: -2s;">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={kheLogo} class="logo khe w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="KHE Logo" />
        </div>
      </a>
      
      <a href="https://hacksu.com" target="_blank" rel="noreferrer" class="group relative floating" style="animation-delay: -3s;">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={hacKSULogo} class="logo hacksu w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="HackSU Logo" />
        </div>
      </a>
      
      <a href="https://ksucombat.club" target="_blank" rel="noreferrer" class="group relative floating" style="animation-delay: -4s;">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-blue-400 to-yellow-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={CombatLogo} class="logo combat w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="Combat Logo" />
        </div>
      </a>
    </div>
  </div>

  <h1 class="text-center text-3xl md:text-5xl font-bold my-8 px-4">Explore My Work</h1>

  <div class="text-center mb-12">
    <button
      id="sign_up_btn"
      onclick={() => {
        location.href = "https://github.com/yoyojesus";
      }}
      class="glass-button px-8 py-4 text-lg font-semibold pulse-glow"
    >
      View My Github Projects
    </button>
  </div>

  <div class="glass mx-auto mt-8 p-6 max-w-md text-center">
    <div id="additional_info" class="text-sm md:text-base opacity-90">
      <span class="font-light">✨ 2025 Austin Sternberg ✨</span>
    </div>
  </div>
</main>