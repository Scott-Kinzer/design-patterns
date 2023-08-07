// Real subject
class RealImage {
  filename: string;
  constructor(filename: string) {
    this.filename = filename;
    this.loadImageFromDisk();
  }

  display() {
    console.log(`Displaying image: ${this.filename}`);
  }

  loadImageFromDisk() {
    console.log(`Loading image from disk: ${this.filename}`);
  }
}

// Proxy
class ImageProxy {
  filename: string;
  realImage: null | RealImage;

  constructor(filename: string) {
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const image1 = new ImageProxy('image1.jpg');
const image2 = new ImageProxy('image2.jpg');

image1.display();
image1.display();

image2.display();
