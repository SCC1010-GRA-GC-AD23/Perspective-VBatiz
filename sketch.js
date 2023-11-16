//drag the mouse to look around!
function setup() {
  createCanvas(400, 400, WEBGL);
  perspective(PI / 3.0, width / height, 0.1, 500);
  describe(
    'two colored 3D boxes move back and forth, rotating as mouse is dragged.'
  );
}
function draw() {
  background(200);
  orbitControl();
  normalMaterial();

  rotateX(-0.3);
  rotateY(-0.2);
  translate(0, 0, -50);

  push();
  translate(-15, 0, sin(frameCount / 30) * 95);
  box(30);
  pop();
  push();
  translate(15, 0, sin(frameCount / 30 + PI) * 95);
  box(30);
  pop();
}
