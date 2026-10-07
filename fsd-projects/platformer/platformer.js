$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 600, 100, 140, "hotpink");
createPlatform(200,700, 200, 40, "blue");
createPlatform(600, 600, 200, 140, "orange");
createPlatform(800, 500, 200, 240, "purple");
createPlatform(1100, 500, 200, 240, "green");
createFakePlatform(500, 600, 100, 140, "hotpink");
createFakePlatform(1000, 500, 100, 240, "purple");



    // TODO 3 - Create Collectables
createCollectable("diamond", 450, 560 );
createCollectable("max", 850, 469 );
createCollectable("grace", 1162, 340 );


    
    // TODO 4 - Create Cannons
createCannon("left", 500, 2000);
createCannon("right", 330, 2000);
createCannon("top", 600, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
