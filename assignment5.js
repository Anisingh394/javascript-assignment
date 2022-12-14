class Sphere {
    constructor(radius){
      this.radius = radius;
    }
    volume() {
      return (4/3)*(22/7)*(this.radius*this.radius*this.radius);
    }
  }
  
  let sph = new Sphere(5);
  console.log(sph.volume());
  
  
  class Cylinder {
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
    }
    volume() {
      return ((22/7)*(this.radius*this.radius)*(this.height));
    }
  }
  
  let cyl = new Cylinder(5, 8);
  console.log(cyl.volume());
  
  
  class Cone {
    constructor(radius, height){
      this.radius = radius;
      this.height = height;
    }
    volume() {
      return (22/7)*(this.radius*this.radius)*((this.height)/3);
    }
  }
  
  let con = new Cone(5, 9);
  console.log(con.volume());