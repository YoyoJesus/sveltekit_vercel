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
  import hackerMan from '/mask.webp'
  import blog from '/blog.png'
</script>

<div class="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
  <!-- Concentric "thirds" as larger centered rectangles (decorative, fixed background) -->
  <div class="organic-shape absolute" style="left:5%; top:12%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:95%; top:12%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:5%; top:88%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:95%; top:86%; transform:translate(-50%,-50%);"></div>

  <div class="organic-shape absolute" style="left:18%; top:28%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:82%; top:28%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:18%; top:65%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:82%; top:65%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:35%; top:18%; transform:translate(-50%,-50%);"></div>

  <div class="organic-shape absolute" style="left:65%; top:18%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:35%; top:82%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:65%; top:82%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:12%; top:50%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:88%; top:50%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:50%; top:6%; transform:translate(-50%,-50%);"></div>
  <div class="organic-shape absolute" style="left:50%; top:94%; transform:translate(-50%,-50%);"></div>

  <!-- Outer-edge sparkles (decorative) -->
  <div class="absolute inset-0 pointer-events-none">
  <div class="absolute top-6 left-8"><div class="sparkle w-4 h-4" style="--d:1.6s; --delay:0.2s"></div></div>
  <div class="absolute top-6 left-1/2 transform -translate-x-1/2"><div class="sparkle w-5 h-5" style="--d:2.2s; --delay:0.6s"></div></div>
  <div class="absolute top-6 right-8"><div class="sparkle w-4 h-4" style="--d:1.3s; --delay:0.1s"></div></div>

  <div class="absolute top-1/4 left-12"><div class="sparkle w-3 h-3" style="--d:1.9s; --delay:0.4s"></div></div>
  <div class="absolute top-1/4 right-12"><div class="sparkle w-3 h-3" style="--d:2.6s; --delay:1.1s"></div></div>

  <div class="absolute top-1/2 left-6 transform -translate-y-1/2"><div class="sparkle w-6 h-6" style="--d:2.8s; --delay:0.9s"></div></div>
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><div class="sparkle w-5 h-5" style="--d:1.4s; --delay:0.3s"></div></div>
  <div class="absolute top-1/2 right-6 transform -translate-y-1/2"><div class="sparkle w-6 h-6" style="--d:2.0s; --delay:0.7s"></div></div>

  <div class="absolute top-3/4 left-16"><div class="sparkle w-3 h-3" style="--d:1.7s; --delay:0.5s"></div></div>
  <div class="absolute top-3/4 right-16"><div class="sparkle w-3 h-3" style="--d:2.4s; --delay:1.3s"></div></div>

  <div class="absolute bottom-6 left-10"><div class="sparkle w-4 h-4" style="--d:1.2s; --delay:0.05s"></div></div>
  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2"><div class="sparkle w-5 h-5" style="--d:2.1s; --delay:0.8s"></div></div>
  <div class="absolute bottom-6 right-10"><div class="sparkle w-4 h-4" style="--d:1.6s; --delay:0.25s"></div></div>

  <div class="absolute top-10 left-20"><div class="sparkle w-2 h-2" style="--d:1.3s; --delay:0.15s"></div></div>
  <div class="absolute top-14 left-1/4"><div class="sparkle w-3 h-3" style="--d:2.0s; --delay:0.55s"></div></div>
  <div class="absolute top-20 left-3/4"><div class="sparkle w-2 h-2" style="--d:1.8s; --delay:0.45s"></div></div>
  <div class="absolute top-28 left-10"><div class="sparkle w-4 h-4" style="--d:2.5s; --delay:1.4s"></div></div>
  <div class="absolute top-32 right-14"><div class="sparkle w-3 h-3" style="--d:1.6s; --delay:0.35s"></div></div>

  <div class="absolute" style="top:40%; left:20%;"><div class="sparkle w-3 h-3" style="--d:2.3s; --delay:0.7s"></div></div>
  <div class="absolute" style="top:44%; left:40%;"><div class="sparkle w-2 h-2" style="--d:1.5s; --delay:0.2s"></div></div>
  <div class="absolute" style="top:44%; right:40%;"><div class="sparkle w-2 h-2" style="--d:1.9s; --delay:0.4s"></div></div>
  <div class="absolute" style="top:50%; left:3rem;"><div class="sparkle w-5 h-5" style="--d:2.7s; --delay:1.0s"></div></div>
  <div class="absolute" style="top:52%; right:3rem;"><div class="sparkle w-3 h-3" style="--d:1.4s; --delay:0.12s"></div></div>

  <div class="absolute" style="top:60%; left:33%;"><div class="sparkle w-4 h-4" style="--d:2.2s; --delay:0.6s"></div></div>
  <div class="absolute" style="top:62%; right:33%;"><div class="sparkle w-2 h-2" style="--d:1.7s; --delay:0.28s"></div></div>
  <div class="absolute" style="top:68%; left:2rem;"><div class="sparkle w-3 h-3" style="--d:2.9s; --delay:1.5s"></div></div>
  <div class="absolute" style="top:70%; right:2rem;"><div class="sparkle w-4 h-4" style="--d:1.6s; --delay:0.22s"></div></div>

  <div class="absolute" style="bottom:20%; left:25%;"><div class="sparkle w-3 h-3" style="--d:1.8s; --delay:0.33s"></div></div>
  <div class="absolute" style="bottom:24%; left:37.5%;"><div class="sparkle w-2 h-2" style="--d:2.4s; --delay:1.2s"></div></div>
  <div class="absolute" style="bottom:18%; right:25%;"><div class="sparkle w-3 h-3" style="--d:1.35s; --delay:0.07s"></div></div>
  <div class="absolute" style="bottom:14%; right:37.5%;"><div class="sparkle w-2 h-2" style="--d:2.05s; --delay:0.5s"></div></div>
  </div>
</div>

<main class="container mx-auto p-4 relative z-10">
  <div class="glass mx-auto mb-12 p-12 max-w-7xl">
    <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 my-8">
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
      
      <a href="https://blog.yoyojesus.xyz" target="_blank" rel="noreferrer" class="group relative floating" style="animation-delay: -5s;">
        <div class="glass-button p-3 transition-all duration-300 hover:scale-110 logo-container">
          <span class="absolute inset-0 bg-gradient-to-br from-pink-400 to-indigo-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity rounded-full"></span>
          <img src={blog} class="logo blog w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-lg" alt="Blog Logo" />
        </div>
      </a>    </div>
  </div>

  <h1 class="text-center text-3xl md:text-5xl font-bold my-8 px-4">Explore My Work</h1>

  <div class="text-center mb-12">
    <button
      id="sign_up_btn"
      on:click={() => location.href = "https://github.com/yoyojesus"}
      class="glass-button px-8 py-4 text-lg font-semibold pulse-glow"
    >
      View More of My Work on Github
    </button>
  </div>

  <div class="glass mx-auto mt-8 p-6 max-w-md text-center">
    <div id="additional_info" class="text-sm md:text-base opacity-90">
      <span class="font-light">{new Date().getFullYear()} Austin Sternberg</span>
    </div>
  </div>
</main>