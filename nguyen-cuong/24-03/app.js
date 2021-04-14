class Sinhvien {
  constructor(firstName, lastName) {
    this.firstName = "Ngoc";
    this.lastName = "Mong";
  }
}
class DaiHoc extends Sinhvien {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  showName = () => {
    console.log(this.firstName);
    console.log(this.lastName);
  };
}
const test = new DaiHoc("Cuong", "Nguyen");
test.showName();
