Template.scene.onRendered(function (){
  SceneManager.init();
  addCube(SceneManager.scene);
  Utils.animate( [SceneManager, Utils] );
  randomColor();
});

function addCube(scene){
  var mesh = new THREE.Mesh( new THREE.BoxGeometry( 10, 10, 10 ),
             new THREE.MeshPhongMaterial({ color: 0x009900, specular: 0x00FF00, shininess: 50, shading: 0.5}) );
  scene.add(mesh);
  mesh.name = "box";
  mesh.position.z = -50;
  Utils.registerFunction(rotate, mesh);
}

function rotate(mesh){
  mesh.rotation.x += .01;
  mesh.rotation.y += .01;
}

function randomColor(){
  Utils.transition({
    mesh: SceneManager.scene.getObjectByName('box'),
    type: 'gradient-shift',
    opts: {stop: new THREE.Color(Math.random(), Math.random(), Math.random())},
    duration: 3,
    callback: randomColor,
  });
}