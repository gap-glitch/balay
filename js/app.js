let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );

//texture

let textureWalls =  new THREE.TextureLoader().load( 'textures/walls.jpg' );
let textureWindows = new THREE.TextureLoader().load( 'textures/Windows.jpg' );
let textureWindows2 = new THREE.TextureLoader().load( 'textures/windows2.jpg' );
let textureDoors = new THREE.TextureLoader().load( 'textures/doors.jpg' );
let textureClouds = new THREE.TextureLoader().load('textures/Clouds.jpg')
let textureconcrete = new THREE.TextureLoader().load('textures/concrete.jpg')
let textureWood = new THREE.TextureLoader().load('textures/wood.jpg')


//material

let materialWindows2 = new THREE.MeshBasicMaterial( { map: textureWindows2 } );
let materialconcrete = new THREE.MeshBasicMaterial({ map: textureconcrete });
let materialWood = new THREE.MeshBasicMaterial({ map: textureWood });
let materialWindows = new THREE.MeshBasicMaterial( { map: textureWindows } );
let materialDoors = new THREE.MeshBasicMaterial( { map: textureDoors } );
let materialWalls = new THREE.MeshBasicMaterial( { map: textureWalls } );

//BOXes GEOMETRY

const CastleBodyProportions = new THREE.BoxBufferGeometry(-4,0, 0);
const DoorProportions = new THREE.BoxBufferGeometry(10,10, -4);
const SideBodyProportions = new THREE.BoxBufferGeometry(2, 0, 0);
const CloudsProportions = new THREE.BoxBufferGeometry(110, 60, -10);
const concreteProportions = new THREE.BoxBufferGeometry(50, 0, 50);
const ConeProportions = new THREE.ConeBufferGeometry(-1,-1,16);
 
//Bed
const radiusTop =3;
const radiusBottom = 2;
const BoxHeight = 2;
const radialSegments = 60;
const geometryCy = new THREE.BoxBufferGeometry(radiusTop, radiusBottom, BoxHeight, radialSegments);

//Shapes
let CastleBody = new THREE.Mesh( CastleBodyProportions, materialWindows );
let CastleWing = new THREE.Mesh( SideBodyProportions, materialWindows );
let CastleWing2 = new THREE.Mesh( SideBodyProportions, materialWindows );
let Door = new THREE.Mesh( DoorProportions, materialDoors );


let concrete = new THREE.Mesh( concreteProportions, materialconcrete );
let ConeWood = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood2 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood3 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood4 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood5 = new THREE.Mesh( ConeProportions, materialWood );
let ConeWood6 = new THREE.Mesh( ConeProportions, materialWood );

let Cylinder = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder2 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder3 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder4 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder5 = new THREE.Mesh( geometryCy, materialWindows2);
let Cylinder6 = new THREE.Mesh( geometryCy, materialWindows2);

scene.add( ConeWood5, ConeWood6, Cylinder5, Cylinder6, CastleWing2, CastleWing,CastleBody, Cylinder, Door, Cylinder2, concrete, ConeWood, ConeWood2, Cylinder3,Cylinder4,ConeWood3,ConeWood4);

//Background
scene.background = (textureClouds);

// cam position
camera.position.z = -9;
camera.position.x = 0;
camera.position.y = -5;
 
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function animate() {
   requestAnimationFrame( animate );

   controls = new THREE.OrbitControls( camera,renderer.domElement);
   controls.update();


  
   Door.position.x = 0;
   Door.position.y = 1;

   

  

  
   renderer.render( scene, camera );

}

animate();

