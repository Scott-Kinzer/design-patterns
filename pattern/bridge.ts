interface Shape {
  draw(): void;
}

class CircleShape implements Shape {
  private x: number;
  private y: number;
  private radius: number;
  private renderer: Renderer;

  constructor(x: number, y: number, radius: number, renderer: Renderer) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.renderer = renderer;
  }

  draw(): void {
    this.renderer.renderCircle(this.x, this.y, this.radius);
  }
}

interface Renderer {
  renderCircle(x: number, y: number, radius: number): void;
}

class SVGRenderer implements Renderer {
  renderCircle(x: number, y: number, radius: number): void {
    console.log(`Rendering circle with SVG at (${x}, ${y}) with radius ${radius}`);
  }
}

class CanvasRenderer implements Renderer {
  renderCircle(x: number, y: number, radius: number): void {
    console.log(`Rendering circle with Canvas at (${x}, ${y}) with radius ${radius}`);
  }
}

const circle1 = new CircleShape(10, 20, 5, new SVGRenderer());
circle1.draw();

const circle2 = new CircleShape(30, 40, 8, new CanvasRenderer());
circle2.draw();
