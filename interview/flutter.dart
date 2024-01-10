/*
1.What is Flutter?
    * Flutter is an open-source framework by Google for building multi-platform applications from a single codebase.
    * Flutter is not a language; it is an SDK.
    * Flutter uses the Dart programming language for creating an app.
    * The first alpha version of Flutter was released in May 2017.

2. What is Dart?     
    * It is an open source and developed by Google in 2011.
    * The purpose of Dart programming language is to create frontend user interface for the web and mobile apps.

3. What are the Flutter widgets?
    * A Widget is a way to declare and construct UI component.

4. What is the Difference Between Stateless and Stateful Widget in Flutter?
    * There are two types of widgets in flutter -> Stateless & Stateful widgets.
    * Stateless -> No changes in its value.
                -> override the createState and return the State class.
                -> used when user want to change UI dynamically.
                -> calling setState to redraw the widget.
    * Stateful  -> It is a widget that changes its value -> using the State class.
                -> override the build and return the widget.

5. What is StatefulWidget LifeCycle?
    * createState() -> return State.
    * initState() -> It is the first method called after the Widget is created. (it is called once). -> used for initializations. 
    * didChangeDependencies() -> it is called after initState(). -> after the context is built.
    * build() -> This is called right after didChangeDependencies(). All the GUI is rendered here and will be called every single time the UI needs to be rendered.
    * didUpdateWidget() -> It’ll be called once the parent Widget did a change and needs to redraw the UI.
    * deactivate() ->  Framework calls this method whenever it removes this State object from the tree.
    * dispose() -> It is called when this object and its State are removed from the tree permanently and will never build again.
*/
// Singleton design pattern (create a single instance for class)
class Car {
  const Car._();

  static final c = Car._();

  factory Car() => c;
}

// Asynchronous (non blocking) && Synchronous (blocking)
main() {
  print(1);
  p();
  print(3);
}

void p() async {
  print(await pr());
  avd().asBroadcastStream().listen((event) => print(event));
  // await for (int a in avd()) {
  //   print(a);
  // }
  // avd().forEach((element) {print(element)});
}

Future<int> pr() async {
  return await Future.delayed(const Duration(seconds: 4), () => 2);
}

// Streams : are types of async programming -> return shunk of data continuously
Stream<int> avd() => Stream.periodic(Duration(seconds: 2), (val) => val);

// There are two types of streams
// 1. Single subscription streams: one listener
// avd().listen((event) => print(event));
// 2. Broadcast streams: more one listener
// avd().asBroadcastStream()
// avd().listen((event) => print(event));
// avd().listen((event) => print(event * 2));

Stream<int> avd2() async* {
  // to close the stream after loop finished
  for (int i = 0; i <= 10; i++) {
    await Future.delayed(const Duration(seconds: 2));
    yield i;
  }
}

// OOP : a way to arrange the code and make it reusable
// primitive data types: stores a single value. (Byte, Int, Char, Boolan)
// Structure: group of smoe data.
// OOP : group some of data together (attributes) && (behavours)

// Object: is an instance of a class
// class : is a blueprint of object
// يوجد ٤ مفاهيم اساسية
// 1. Encapsulation: Data hiding to protect data
// make data privates
// using setters and getters functions
// 2. Abstraction: implementation hiding (interface - implementation)
// 3. Inheritance:
// 4. Polymorphism: (تعدد الاشكال)
// overriding && overloading
// SOLID: مجوعة من القواعد لتسهيل الكود (reusable, fix, testing, develop)
// 1. Single Responsibility Principle (SRP) : A class should have only one job.
// 2. Open/Closed Principle (OCP) : الكلاس غير قابل للتعديل ولكن يمكن الوراثه منه والتعديل / اى تعديل بيكون على الكلاس الجديد
// using abstract or interface
abstract class Employee {
  final int id;
  final String name;
  final double salary;
  const Employee({
    required this.id,
    required this.name,
    required this.salary,
  });

  double calculateOverTime(double hours);
}

class JuniorEmployee extends Employee {
  JuniorEmployee({
    required super.id,
    required super.name,
    required super.salary,
  });

  @override
  double calculateOverTime(double hours) {
    return 20;
  }
}

class SeniorEmployee extends Employee {
  SeniorEmployee({
    required super.id,
    required super.name,
    required super.salary,
  });

  @override
  double calculateOverTime(double hours) {
    return 50;
  }
}

// 3. Liskov Substitution Principle (LSP) : اقدر اوصل للطفل عن طريق الاب
class UploadFileService {
  void uploadFile() {
    print('file');
  }
}

class UploadVideo extends UploadFileService {
  @override
  void uploadFile() {
    print('video');
  }
}

class UploadImage extends UploadFileService {
  @override
  void uploadFile() {
    print('image');
  }
}

void main1() {
  late UploadFileService f; // polymorphism
  final data = ['file.pdf', 'video.mp4', 'image.png'];

  for (var d in data) {
    if (d.endsWith('mp4')) {
      f = UploadVideo();
    } else if (d.endsWith('png')) {
      f = UploadImage();
    } else {
      f = UploadFileService();
    }
    f.uploadFile();
  }
}

// 4. Interface Segregation Principle: (ISP) نبتعد عن اضافة كل الفانكشن فى كلاس واحد / شبه ال SRP
abstract class IAndroidPayment {
  void payWithGoogle();
}

abstract class IIosPayment {
  void payWithApplePay();
}

abstract class ICreditCardPayment {
  void payWithCreditCard();
}

class AndroidPayment implements IAndroidPayment {
  void payWithGoogle() {}
}

class IosPayment implements IIosPayment {
  void payWithApplePay() {}
}

class CreditCardPayment implements ICreditCardPayment {
  void payWithCreditCard() {}
}

class Payment implements IIosPayment, IAndroidPayment {
  @override
  void payWithApplePay() {}

  @override
  void payWithGoogle() {}
}

// 5. Dependency Inversion (Injection) Principle (DIP): High level modules should not depend on low level modules
abstract class Imessage {
  void sendEmail();
}

class Gemail extends Imessage {
  @override
  void sendEmail() {}
}

class Outlock extends Imessage {
  @override
  void sendEmail() {}
}

class Email {
  final Imessage imessage;

  Email({required this.imessage});

  void sendEmail() {
    imessage.sendEmail();
  }
}
