const card = document.querySelector('.flashcard');
const front = document.querySelector('.front');
const title = document.querySelector('.title');
const back = document.querySelector('.back');
const nextButton = document.querySelector('.next-button');
const backButton = document.querySelector('.back-button');
let isFlipped = false;
front.style.visibility = 'visible';
back.style.visibility = 'hidden';

function handleCardClick() {
    console.log(isFlipped);
    isFlipped = !isFlipped;
    if (isFlipped) {
        front.style.visibility = 'hidden';
        back.style.visibility = 'visible';
    } else {
        front.style.visibility = 'visible';
        back.style.visibility = 'hidden';
    }
}

card.addEventListener('click', handleCardClick);

function parseFlashcards(str) {
    const cards = [];
    const lines = str.split('\n').map(line => line.trim());

    let front = null;
    let back = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith('Front:')) {
            front = line.slice(6).trim();
        } else if (line.startsWith('Back:')) {
            back = line.slice(5).trim();

            if (front !== null && back !== null) {
                cards.push({ front, back });
                front = null;
                back = null;
            }
        }
    }

    return cards;
}

const flashcardData = `
Front: What is Boxing?
Back: Boxing is an implicit conversion of a value type to the type object or to any interface type implemented by this value type.

Front: What happens when a value type is boxed?
Back: Boxing a value type allocates an object instance on the heap and copies the value into the new object.

Front: What is Unboxing?
Back: Unboxing is an explicit conversion from the type object to a value type or from an interface type to a value type that implements the interface.

Front: What are the steps involved in an Unboxing operation?
Back: An unboxing operation consists of: Checking the object instance to make sure that it is a boxed value of the given value type. Copying the value from the instance into the value-type variable.

Front: What is the difference between value types and reference types in C#?
Back: In C#, value types are stored on the stack, while reference types are stored on the heap. Value types contain the actual data, while reference types contain a reference (or pointer) to the data.

Front: What is the difference between a class and a struct in C#?
Back: In C#, a class is a reference type, while a struct is a value type. Classes support inheritance and are used for larger, more complex objects, while structs are used for smaller, simpler objects.

Front: What is the difference between a method and a function in C#?
Back: In C#, the terms "method" and "function" are often used interchangeably, but traditionally a function returns a value, while a method performs an action without necessarily returning a value.

Front: What is a value type in C#?
Back: A value type is a data type that holds the data within the stack. Examples of value types include primitive types (int, byte, long, DateTime, etc, string excluded) and structs.

Front: What is a reference type in C#?
Back: A reference type is a data type that contains a pointer to another memory location in the managed heap that holds the data. Examples of reference types include user-defined classes.

Front: What is the difference between a value type and a reference type in C#?
Back: The main difference between a value type and a reference type in C# is where they store their data. Value types store their data on the stack, while reference types store their data on the managed heap.

Front: How is memory allocation different for value types and reference types in C#?
Back: Memory allocation for value types is done on the stack, which is a more efficient way of allocating memory. Memory allocation for reference types, on the other hand, is done on the managed heap, which can be slower.

Front: Can a class have value type properties?
Back: Yes, a class can have value type properties, such as int or bool. These properties will be allocated on the stack.

Front: Can a class have reference type properties?
Back: Yes, a class can have reference type properties, such as string or user-defined classes. These properties will be allocated on the managed heap.

Front: How can you determine if a variable is a value type or a reference type in C#?
Back: You can use the "is" keyword in C# to determine if a variable is a value type or a reference type. For example, if (myVar is int) { ... } will check if myVar is an integer value type.

Front: What is a delegate in C#?
Back: A delegate is a type that represents references to methods with a particular parameter list and return type. When you instantiate a delegate, you can associate its instance with any method with a compatible signature and return type. You can invoke (or call) the method through the delegate instance.

Front: What is a multicast delegate in C#?
Back: A multicast delegate is a delegate that can have multiple methods assigned to it. When you invoke a multicast delegate, it will invoke all of the methods that are assigned to it.

Front: How is a multicast delegate different from a regular delegate in C#?
Back: A regular delegate can only have one method assigned to it, while a multicast delegate can have multiple methods assigned to it. When you invoke a regular delegate, it will only invoke the one method that is assigned to it, while a multicast delegate will invoke all of the methods that are assigned to it.

Front: How do you create a delegate in C#?
Back: To create a delegate in C#, you need to define a delegate type that specifies the signature of the method that the delegate will reference. Then, you can create an instance of the delegate type and assign it to a method that has a compatible signature and return type.

Front: How do you create a multicast delegate in C#?
Back: To create a multicast delegate in C#, you can use the "+" operator to combine two or more delegate instances into a single multicast delegate instance. For example, myDelegate = myDelegate1 + myDelegate2; will create a multicast delegate that includes both myDelegate1 and myDelegate2.

Front: What is the purpose of a delegate in C#?
Back: The purpose of a delegate in C# is to provide a way to pass methods as parameters to other methods or to store references to methods as variables. This allows for greater flexibility and abstraction in your code.

Front: Can a delegate reference static methods in C#?
Back: Yes, a delegate can reference static methods in C#. To do this, you just need to specify the name of the static method when creating the delegate instance. For example, myDelegate = MyStaticClass.MyStaticMethod; will create a delegate that references the static method MyStaticMethod in the class MyStaticClass.

Front: Which access modifier makes a class accessible for everyone?
Back: Public

Front: Which access modifier makes a class only accessible within its class members?
Back: Private

Front: Which access modifier makes a class accessible in its class and subclasses?
Back: Protected

Front: Which access modifier makes a class accessible within its class' assembly?
Back: Internal

Front: What is the purpose of the "abstract" modifier?
Back: To indicate that a class is intended only to be a base class of other classes.

Front: What is the purpose of the "const" modifier?
Back: To specify that the value of the field or local variable cannot be modified.

Front: What is the purpose of the "readonly" modifier?
Back: To declare a field that can only be assigned values as part of the declaration or in a constructor in the same class.

Front: What is the purpose of the "sealed" modifier?
Back: To specify that a class cannot be inherited.

Front: What is the purpose of the "static" modifier?
Back: To declare a member that belongs to the type itself instead of to a specific object.

Front: What is the purpose of the "virtual" modifier?
Back: To declare a method or an accessor whose implementation can be changed by an overriding member in a derived class.

Front: What is the purpose of the "override" modifier?
Back: To provide a new implementation of a virtual member inherited from a base class.

Front: What is the purpose of the "event" modifier?
Back: To declare an event.

Front: What is the purpose of the "unsafe" modifier?
Back: To declare an unsafe context.

Front: What is the purpose of the "extern" modifier?
Back: To indicate that the method is implemented externally.

Front: What is the purpose of the "partial" modifier?
Back: To define partial classes, structs and methods throughout the same assembly.

Front: What is the purpose of the "volatile" modifier?
Back: To indicate that a field can be modified in the program by something such as the operating system, the hardware, or a concurrently executing thread.

Front: What is the difference between how memory is managed for structs and classes in C#?
Back: Structs are allocated on the stack, while classes are allocated on the heap.

Front: Why are structs considered more efficient than classes in terms of performance?
Back: When a struct is passed as a parameter to a method, a copy of the entire struct is passed to the method, which can be beneficial for small, lightweight structures that are frequently used.

Front: Are structs always allocated on the stack?
Back: Yes, structs are always allocated on the stack when they are declared.

Front: Can structs be stored on the heap like classes?
Back: Yes, structs can be boxed and stored on the heap like any other value type.

Front: When might it be beneficial to box a struct and store it on the heap?
Back: It can be useful in certain scenarios where a value type needs to be treated as a reference type.

Front: What is a class library?
Back: A class library is a collection of reusable code that developers can use to create applications. It contains classes, interfaces, and other types that can be used to build applications for a specific platform or programming language.

Front: What is the purpose of a class library?
Back: The purpose of a class library is to provide a set of reusable components that can be used by multiple applications. It helps to reduce development time and improve software quality by providing a common set of functionality that can be used across different applications.

Front: What are the benefits of using a class library?
Back: The benefits of using a class library include reduced development time, improved software quality, increased code reuse, and easier maintenance. By using a class library, developers can focus on writing application-specific code instead of having to create common functionality from scratch.

Front: What are some examples of class libraries?
Back: Some examples of class libraries include the .NET Framework class library, Java Standard Library, and Python Standard Library. These libraries provide developers with a set of pre-built functionality that can be used to create applications in their respective programming languages.

Front: How are class libraries different from application frameworks?
Back: While both class libraries and application frameworks provide reusable functionality, application frameworks typically provide a more complete set of functionality and a higher-level of abstraction. Class libraries are generally focused on specific functionality or features and are designed to be used in a wider variety of applications.

Front: The namespaces that make up the .NET Framework class library.
Back: System - Contains fundamental classes and base classes that define commonly-used value and reference data types, events and event handlers, interfaces, attributes, and processing exceptions. System.Collections - Contains interfaces and classes that define various collections of objects, such as lists, queues, stacks, and dictionaries. System.IO - Contains types that enable reading and writing to files and streams, as well as classes for working with directories and files. System.Net - Contains types that provide network communication functionality, including classes for working with HTTP, TCP, and UDP protocols. System.Threading - Contains types that enable multithreaded programming, including classes for creating and managing threads and synchronization primitives. And many more...

Front: The benefits of using the .NET Framework class library.
Back: Saves development time and effort by providing pre-built functionality. Increases application reliability and security through the use of well-tested, industry-standard components. Provides a consistent and unified programming model for developers to follow. Enables developers to focus on writing application-specific code instead of re-inventing the wheel for common functionality. Makes it easier to maintain and update applications by leveraging the class library's built-in features and functionality.

Front: The different types of classes in the .NET Framework class library.
Back: Base Classes - Classes that define fundamental data types and functionality used by other classes in the class library. Container Classes - Classes that hold collections of other objects or components, such as forms or controls.
Data Access Classes - Classes that provide functionality for accessing and manipulating data from databases and other sources. Helper Classes - Classes that provide commonly-used utility functions and algorithms.
UI Classes - Classes that provide user interface functionality, such as forms, buttons, and menus. Web Classes - Classes that provide functionality for building web applications, such as ASP.NET and ADO.NET.

Front: The different types of interfaces in the .NET Framework class library.
Back: ComponentModel - Interfaces for creating and managing components. Data - Interfaces for working with databases and data sources. IO - Interfaces for reading and writing to files and streams. Reflection - Interfaces for inspecting and accessing metadata about types and objects. Threading - Interfaces for creating and managing threads and synchronization primitives. And many more...

Front: The difference between classes and interfaces in the .NET Framework class library.
Back: Classes provide implementation details for functionality, while interfaces define contracts for how functionality should be implemented. Classes can be instantiated and used directly, while interfaces cannot be instantiated on their own and must be implemented by classes. Classes can inherit from other classes and implement multiple interfaces, while interfaces can only inherit from other interfaces. Classes can have constructors and destructors, while interfaces cannot. Classes have member fields, while interfaces only have member properties, methods, and events.

Front: The purpose of try, catch and finally blocks in C# programming.
Back: Use try block to obtain and use resources. Use catch block to handle exceptional circumstances. Use finally block to release resources (always executes)

Front: When should specific exceptions be caught in C# programming?
Back: Specific exceptions must be caught prior to general exception.

Front: What is an interface in C# programming?
Back: An interface is a contract that contains only the signatures of methods, properties, events or indexers. A class or struct that implements the interface must implement the members of the interface that are specified in the interface definition.

Front: What are the advantages of using interfaces in C# programming?
Back: Improved code readability: An interface constitutes a declaration about intentions and defines a capability of your class, making your code more clear and concise. Improved code semantics: By separating concepts through interfaces, your code becomes easier to understand and maintain. Improved code maintainability: Interfaces help to reduce coupling and allow you to easily interchange implementations for the same concept without affecting the underlying code. 

Front: What is the difference between an abstract class and an interface?
Back: Every method declared in an interface must be implemented in the subclass, while only abstract methods must be implemented in a subclass that extends an abstract class. An interface can only contain events, delegates, properties, and methods, while an abstract class can contain class variables in addition to these. A class can implement multiple interfaces, but can only inherit from one abstract class due to the non-existence of multiple inheritance in C#.

Front: What is an abstract class?
Back: An abstract class is a class that cannot be instantiated and is designed to be subclassed. It can contain both abstract and non-abstract methods. A subclass that extends an abstract class must provide an implementation for all abstract methods.

Front: What is an interface?
Back: An interface is a contract that defines a set of methods, properties, events, or indexers that a class must implement. It only contains method signatures and does not contain any implementation code.
A class that implements an interface must provide an implementation for all the methods defined in the interface.

Front: Can a class inherit from both an abstract class and an interface?
Back: Yes, a class can inherit from both an abstract class and an interface, as an interface only defines a set of methods that must be implemented and does not contain any implementation code.

Front: What is the purpose of an abstract class?
Back: An abstract class provides a way to create a class that cannot be instantiated and is designed to be subclassed. It can contain both abstract and non-abstract methods, allowing for code reuse and providing a base class that can be specialized by its subclasses. It also allows for the definition of default behavior that can be inherited by its subclasses.

Front: What is the default parameter modifier for method arguments in C#?
Back: Value parameter modifier.

Front: What is the syntax for using the ref parameter modifier in a method signature?
Back: Use the keyword "ref" before the parameter type, like this: void MyMethod(ref int myParameter).

Front: What is the syntax for using the out parameter modifier in a method signature?
Back: Use the keyword "out" before the parameter type, like this: void MyMethod(out int myParameter).

Front: Can you use the ref parameter modifier and the out parameter modifier on the same parameter?
Back: No, a parameter can only have one parameter modifier at a time.

Front: What happens if you don't initialize a variable with a nullable type before using it?
Back: You will get a compilation error, as a nullable type can't have a null value until it's explicitly set to null.

Front: What is the syntax for creating a nullable type in C#?
Back: Use the question mark symbol (?) after the value type, like this: int? myNullableInt.

Front: What is the advantage of using nullable types over regular value types?
Back: Nullable types allow for better representation of data, as they differentiate between null values and default values. This is particularly useful when working with databases and other systems that allow for null values.

Front: What is the difference between "throw" and "throw ex" in C#?
Back: "throw ex" resets the stack trace, so the error appears to originate from the method that caught the exception. "throw" preserves the original stack trace, so you can see where the error actually occurred.

Front: How do you write a static class in C#?
Back: Declare the class as static: "public static class MyClass { }" Ensure that all members of the class are also static. Do not include any instance constructors (only static constructors are allowed).
Mark the class as "sealed" to prevent inheritance.

Front: Can a static class be instantiated?
Back: No, a static class cannot be instantiated because it does not have a public constructor. All members of a static class are accessed using the class name itself, like this: "MyStaticClass.MyStaticMethod()".

Front: What is the purpose of a static class?
Back: To provide a way to group related methods and data without creating an instance of the class. To provide application-wide helper functions that can be accessed from anywhere in the code.
To prevent accidental instantiation of a class that should only have static members. To improve performance by eliminating the overhead of object creation and disposal.

Front: What is Action in C#?
Back: A delegate type that can be used to refer to a method that takes one or more arguments, but doesn't return a value.

Front: What is Predicate in C#?
Back: A delegate type that can be used to refer to a method that takes one argument and returns a Boolean value.

Front: What is Func in C#?
Back: A delegate type that can be used to refer to a method that takes one or more arguments and returns a value.

Front: Can you give an example of using Action in C#?
Back: Action<string> printMessage = message => Console.WriteLine(message); printMessage("Hello, world!");

Front: Can you give an example of using Predicate in C#?
Back: Predicate<int> isPositive = number => number > 0; bool result = isPositive(5);

Front: Can you give an example of using Func in C#?
Back: Func<int, int, int> sum = (x, y) => x + y; int result = sum(2, 3);

Front: What are Generics in C#?
Back: Generics allow you to delay the specification of the data type of programming elements in a class or a method until it is actually used in the program.

Front: What are the features of Generics in C#?
Back: It helps you to maximize code reuse, type safety, and performance. You can create generic collection classes. You can create your own generic interfaces, classes, methods, events, and delegates. You may create generic classes constrained to enable access to methods on particular data types. You may get information on the types used in a generic data type at run-time by means of reflection.

Front: What is the purpose of Generics in C#?
Back: The purpose of Generics in C# is to allow you to write a class or method that can work with any data type, providing flexibility, code reuse, type safety, and performance optimization.

Front: What is the difference between a generic class and a non-generic class in C#?
Back: A generic class in C# has one or more type parameters that allow you to define the type of data that the class will handle. A non-generic class, on the other hand, has no type parameters and is designed to work with a specific data type.

Front: What is a type parameter in C#?
Back: A type parameter in C# is a placeholder for a specific type that will be specified at runtime. It allows you to write code that can work with any data type, without knowing the specific type in advance.

Front: What is the difference between override and overload?
Back: Override is for re-defining a member of a subclass. Overload is another implementation of a method with the same name but different input parameters.

Front: What is the difference between override and virtual?
Back: A method or accessor declared with the virtual modifier can be overridden in a derived class by using the override modifier.

Front: What is the purpose of the virtual keyword in C#?
Back: The virtual keyword is used to allow a method or property to be overridden in a derived class.

Front: What is the purpose of the override keyword in C#?
Back: The override keyword is used to indicate that a method or property is intended to override a virtual method or property in a base class.

Front: What is method overloading in C#?
Back: Method overloading allows multiple methods with the same name but different parameters to be defined in a class.

Front: What is method overriding in C#?
Back: Method overriding allows a method in a derived class to replace (override) a method with the same name and signature in its base class.

Front: What is the difference between method overloading and method overriding in C#?
Back: Method overloading is about defining multiple methods with the same name but different parameters in a class. Method overriding is about replacing a method in a base class with a method in a derived class with the same name and signature.

Front: The importance of documentation in cleancode/best practices.
Back: Documentation is a key aspect of clean code. Summary comments should be used for classes and methods. Proper documentation will make the code easier to maintain and understand.

Front: Commenting best practices in cleancode.
Back: Comments should be used sparingly, and avoid obvious comments like "if country code is US." Comments should be used to explain why something is done a certain way or to provide context for a piece of code.

Front: The importance of consistent indentation in cleancode.
Back: Consistent indentation is crucial for code readability. It helps to make the code more easily understandable, and to identify any errors in formatting or logic.

Front: The importance of a consistent naming scheme in cleancode.
Back: A consistent naming scheme makes the code easier to read and understand. The naming of variables, classes, and methods should be consistent and descriptive.

Front: The arrow antipattern in cleancode.
Back: The arrow antipattern refers to deep nesting, which can make code difficult to read and understand. Code should be refactored to reduce nesting and make it more easily understandable.

Front: Short methods in cleancode.
Back: Short methods with a specific purpose are easier to understand and maintain. Methods should be kept short and focused on a specific task.

Front: Code analysis tools in cleancode.
Back: Code analysis tools, such as MS Stylecop, can help to identify issues with code formatting and structure. These tools can also help to enforce coding standards and best practices.

Front: The importance of check-in notes in cleancode.
Back: Check-in notes are a way to document changes to code over time. They should be used to provide context and explain why changes were made.

Front: Avoiding overuse of patterns in cleancode.
Back: Patterns should be used judiciously, and only when they make sense for the specific problem being solved. Overuse of patterns can make the code difficult to understand and maintain.

Front: What are the three categories of design patterns?
Back: Creational patterns, structural patterns, and behavioral patterns.

Front: What is the Abstract Factory pattern?
Back: It provides an interface for creating families of related or dependent objects without specifying their concrete classes.

Front: What is the Builder pattern?
Back: It separates the construction of a complex object from its representation, allowing the same construction process to create various representations.

Front: What is the Singleton pattern?
Back: It ensures a class has only one instance and provides a global point of access to it.

Front: What is lazy initialization?
Back: It is a tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed.

Front: What is the Factory Method pattern?
Back: It defines an interface for creating a single object but lets subclasses decide which class to instantiate, allowing a class to defer instantiation to its subclasses.

Front: Which design pattern lets a class defer instantiation to its subclasses?
Back: The Factory Method pattern.

Front: What is the Composite pattern?
Back: The Composite pattern is used to compose objects into tree structures to represent part-whole hierarchies.

Front: How is the Composite pattern used?
Back: The Composite pattern allows clients to treat individual objects and compositions of objects uniformly.

Front: What is the Decorator pattern?
Back: The Decorator pattern is used to attach additional responsibilities to an object dynamically while keeping the same interface.

Front: What does the Decorator pattern provide as an alternative to subclassing?
Back: The Decorator pattern provides a flexible alternative to subclassing for extending functionality.

Front: What is the Facade pattern?
Back: The Facade pattern provides a unified interface to a set of interfaces in a subsystem.

Front: What is the purpose of the Facade pattern?
Back: The Facade pattern defines a higher-level interface that makes the subsystem easier to use.

Front: What is the Interpreter pattern?
Back: The Interpreter pattern is used to define a representation for a language's grammar along with an interpreter that uses the representation to interpret sentences in the language.

Front: What is the Iterator pattern?
Back: The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Front: What does the Iterator pattern allow?
Back: The Iterator pattern allows the client to access elements without knowing the internal structure of the aggregate.

Front: What is the Mediator pattern?
Back: The Mediator pattern defines an object that encapsulates how a set of objects interact.

Front: What does the Mediator pattern promote?
Back: The Mediator pattern promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to vary independently.

Front: What is the Strategy pattern?
Back: The Strategy pattern is used to define a family of algorithms, encapsulate each one, and make them interchangeable.

Front: What is the main goal of the Strategy pattern?
Back: The main goal of the Strategy pattern is to let the algorithm vary independently from clients that use it.

Front: What is the Template Method pattern?
Back: The Template Method pattern is used to define the skeleton of an algorithm in an operation, deferring some steps to subclasses.

Front: What does the Template Method pattern allow subclasses to do?
Back: The Template Method pattern allows subclasses to redefine certain steps of an algorithm without changing the algorithm’s structure.

Front: What is the Observer pattern, also known as Publish-Subscribe pattern?
Back: The Observer pattern defines a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically.

Front: What is the purpose of the Observer pattern?
Back: The purpose of the Observer pattern is to decouple objects, so that one object can notify an arbitrary set of other objects without having to know which objects they are.

Front: What is the Visitor pattern?
Back: The Visitor pattern represents an operation to be performed on the elements of an object structure.

Front: What is the main purpose of the Visitor pattern?
Back: The main purpose of the Visitor pattern is to let a new operation be defined without changing the classes of the elements on which it operates, making it easier to add new operations to existing classes.

Front: What is a monitor object?
Back: An object whose methods are subject to mutual exclusion, preventing multiple objects from trying to use it simultaneously.

Front: What is a reactor?
Back: A reactor provides an asynchronous interface to resources that must be handled synchronously.

Front: What is thread-specific storage?
Back: Static or "global" memory local to a thread.

Front: What is mutual exclusion?
Back: A technique to prevent multiple threads from accessing the same resource simultaneously, to avoid race conditions and data inconsistencies.

Front: What is a race condition?
Back: A situation that occurs when two or more threads access a shared resource and the outcome of the operation depends on the order in which the threads execute.

Front: What is deadlock?
Back: A situation where two or more threads are blocked, waiting for each other to release resources, resulting in a standstill.

Front: What is a semaphore?
Back: A synchronization object that controls access to a shared resource by multiple threads. It allows a specified number of threads to access the resource simultaneously.

Front: What is a critical section?
Back: A section of code that accesses shared resources and needs to be executed mutually exclusively to avoid race conditions.

Front: What is the param keyword used for in C#?
Back: The param keyword is used to specify a method parameter that takes a variable number of arguments.

Front: What is the syntax for using the param keyword in C#?
Back: To use the param keyword, you must prefix the last parameter of a method with the keyword params.

Front: How many params parameters can a method have?
Back: A method can have only one params parameter, and it must be the last parameter in the parameter list.

Front: What type of arguments can be passed to a params parameter?
Back: A params parameter can accept any number of arguments of the same type, including zero arguments.

Front: How do you pass arguments to a params parameter?
Back: To pass arguments to a params parameter, you can use a comma-separated list of values, or an array of values.

Front: Can you have other parameters before the params parameter in a method signature?
Back: Yes, you can have any number of parameters before the params parameter, as long as the params parameter is the last one in the parameter list.

Front: What does LINQ stand for?
Back: Language Integrated Query.

Front: What is the purpose of LINQ?
Back: To provide a consistent and unified way to query data from different data sources.

Front: What are the two main syntax types for writing LINQ queries?
Back: Query syntax and Method syntax.

Front: What is the difference between Query syntax and Method syntax in LINQ?
Back: Query syntax uses keywords like SELECT, FROM, and WHERE, while Method syntax uses extension methods to write queries in C#.

Front: What is the difference between Deferred Execution and Immediate Execution in LINQ?
Back: Deferred Execution means that the query is not executed until the results are actually needed, while Immediate Execution means that the query is executed immediately and the results are returned.

Front: What is the purpose of the var keyword in LINQ?
Back: To allow the compiler to infer the type of a variable based on its value, which can make LINQ queries easier to read and write.

Front: What is an anonymous type in LINQ?
Back: A type that is generated automatically by the compiler based on the structure of the LINQ query, which can be useful for temporary data structures.

Front: What is the difference between IQueryable and IEnumerable in LINQ?
Back: IQueryable is used for querying remote data sources like databases, while IEnumerable is used for querying in-memory collections like arrays or lists.

Front: What is a Lambda expression in LINQ?
Back: A shorthand way of writing an anonymous method that can be used in LINQ queries to define the conditions for filtering or sorting data.

Front: What are some common LINQ operators?
Back: Select, Where, OrderBy, ThenBy, GroupBy, Join, and Aggregate, among others.

Front: What is the Select method used for in LINQ?
Back: The Select method is used to project each element of a sequence into a new form or shape.

Front: What is the Where method used for in LINQ?
Back: The Where method is used to filter a sequence based on a specified condition.

Front: What is the OrderBy method used for in LINQ?
Back: The OrderBy method is used to sort the elements of a sequence in ascending order based on a specified key.

Front: What is the ThenBy method used for in LINQ?
Back: The ThenBy method is used to perform a secondary sort on the elements of a sequence that have already been sorted by a primary key.

Front: What is the GroupBy method used for in LINQ?
Back: The GroupBy method is used to group the elements of a sequence based on a specified key and return a sequence of groups.

Front: What is the Join method used for in LINQ?
Back: The Join method is used to combine two sequences based on a common key and return a sequence of matching elements.

Front: What is the Aggregate method used for in LINQ?
Back: The Aggregate method is used to perform a cumulative operation on a sequence of elements and return a single result.

Front: What are extension methods?
Back: Extension methods are a way to add methods to existing types without creating a new derived type, recompiling or modifying the original type.

Front: Are extension methods static or instance methods?
Back: Extension methods are a special kind of static method, but they are called as if they were instance methods on the extended type.

Front: Can extension methods be called in the same way as instance methods?
Back: Yes, extension methods can be called in the same way as instance methods on the extended type, without any apparent difference to the client code.

Front: What are the benefits of using extension methods?
Back: Using extension methods can provide a more concise and expressive way of writing code, allowing you to add functionality to existing types without modifying their source code.

Front: Do you need to modify the original type to use extension methods?
Back: No, you do not need to modify the original type to use extension methods. They can be defined in a separate static class and used on the original type as if they were instance methods.

Front: Limitation of extension methods when it comes to overriding existing methods.
Back: Extension methods cannot override existing methods in the extended type. If an extension method has the same name and signature as an instance method, the instance method will always take precedence.

Front: Limitation of extension methods when it comes to access to private members.
Back: Extension methods cannot access private members of the extended type, as they are defined outside of the class or struct.

Front: Limitation of extension methods when it comes to extension of sealed types.
Back: Extension methods cannot be used to extend sealed types, as these types cannot be inherited from.

Front: Limitation of extension methods when it comes to extension of interfaces.
Back: Extension methods can only be used to extend classes and structs, not interfaces.

Front: What is the Garbage Collector in .NET Framework?
Back: The garbage collector in .NET Framework is responsible for managing the allocation and release of memory for an application.

Front: What is the managed heap in .NET Framework?
Back: The managed heap is a region of memory in .NET Framework where objects are allocated.

Front: What happens when memory is no longer available in the managed heap?
Back: When memory is no longer available in the managed heap, the garbage collector must perform a collection in order to free up some memory.

Front: How does the garbage collector determine the best time to perform a collection?
Back: The garbage collector's optimizing engine determines the best time to perform a collection, based upon the allocations being made.

Front: What happens during a garbage collection in .NET Framework?
Back: During a garbage collection in .NET Framework, the garbage collector checks for objects in the managed heap that are no longer being used by the application and performs the necessary operations to reclaim their memory.

Front: Is it recommended to explicitly call the garbage collector?
Back: No, it is not recommended to explicitly call the garbage collector in most cases. The garbage collector is designed to run automatically and manage memory efficiently without the need for manual intervention. Explicitly calling the garbage collector can have negative impacts on performance and should only be done in very specific and rare scenarios where it is absolutely necessary.

Front: ADO.NET
Back: ADO.NET is a set of libraries that provides data access services for .NET applications.

Front: DataSet object
Back: A DataSet object represents an in-memory cache of data retrieved from a data source.

Front: DataAdapter object
Back: A DataAdapter object is used to retrieve data from a data source and populate a DataSet object with the retrieved data.

Front: SqlCommand object
Back: A SqlCommand object is used to execute SQL commands against a database, including queries, updates, inserts, and deletes.

Front: What is the Dispose Pattern?
Back: The Dispose Pattern is a design pattern in .NET that provides a mechanism for releasing unmanaged resources, such as file handles, network connections, or database connections.

Front: What is the IDisposable interface?
Back: The IDisposable interface is a contract that defines a single method called Dispose(). This method is responsible for releasing any unmanaged resources that the object is holding onto.

Front: When should the Dispose method be called?
Back: The Dispose method should be called whenever an object is no longer needed or when it is about to be destroyed by the garbage collector.

Front: What are some examples of unmanaged resources that should be released using the Dispose pattern?
Back: Some examples of unmanaged resources that should be released using the Dispose pattern are database connections, network sockets, file handles, and graphics objects.

Front: What is the "using" keyword in C#?
Back: The "using" keyword in C# is a statement that defines a scope at the end of which an object will be disposed of automatically. It is typically used with objects that implement the IDisposable interface, such as database connections or file streams, to ensure that resources are properly released after use. The "using" statement can be thought of as a shorthand for a try-finally block that calls the Dispose method on an object.

Front: Is it possible to have an abstract sealed class in C#?
Back: No, it's not possible to write an abstract sealed class in C# code as it won't compile. Although, static classes are compiled in IL to abstract sealed classes.

Front: What is the difference between string and StringBuilder?
Back: Strings are reference types, so each time a value is assigned to a string, a new memory space is created, and the pointer changes, returning a new instance (strings are immutable).
StringBuilder, on the other hand, always uses the same instance, internally using a character buffer.

Front: Why is StringBuilder more efficient than string when concatenating multiple strings?
Back: Because with each concatenation operation in a string, a new string is created in memory, while StringBuilder works by appending characters to an existing buffer. This reduces the number of new memory allocations and improves performance.

Front: What is CLR?
Back: CLR stands for Common Language Runtime and it is the runtime environment on which all .NET applications (regardless of the language) run. It is composed of several components including (but not limited to) the virtual machine, the JIT compiler/profiler, the garbage collector, the assembly/metadata manager, the memory protection layer and so on.

Front: What are the components of CLR?
Back: The components of CLR include the virtual machine, the JIT compiler/profiler, the garbage collector, the assembly/metadata manager, the memory protection layer and so on.

Front: What is the role of virtual machine in CLR?
Back: The virtual machine in CLR is responsible for executing managed code.

Front: What is the role of JIT compiler/profiler in CLR?
Back: The JIT compiler/profiler in CLR is responsible for converting the IL (Intermediate Language) code into native machine code at runtime.

Front: What is the role of garbage collector in CLR?
Back: The garbage collector in CLR is responsible for automatically freeing memory that is no longer being used by the application.

Front: What is the role of assembly/metadata manager in CLR?
Back: The assembly/metadata manager in CLR is responsible for managing the metadata of assemblies, which includes information such as types, methods, properties, and events.

Front: What is the role of memory protection layer in CLR?
Back: The memory protection layer in CLR is responsible for ensuring that managed code does not interfere with or corrupt other processes running on the computer.

Front: What is the relationship between CLR, .NET Framework, and CLS?
Back: CLR is an integral part of the .NET stack, along with the .NET Framework and the CLS-compliant languages (Common Language Specification).

Front: What is a namespace in .NET?
Back: A namespace is a way to group related types and provide a unique naming context for types and other identifiers in a .NET application.

Front: What is the System namespace?
Back: The System namespace is the root namespace in the .NET framework and contains fundamental types and base types that are used throughout the framework.

Front: What is the System.Collections namespace?
Back: The System.Collections namespace contains classes and interfaces that define various collection types, such as arrays, lists, and dictionaries.

Front: What is the System.IO namespace?
Back: The System.IO namespace provides types for working with files, directories, and streams.

Front: What is the System.Net namespace?
Back: The System.Net namespace contains classes for working with network protocols, such as HTTP, FTP, and SMTP.

Front: What is the System.Threading namespace?
Back: The System.Threading namespace provides classes and interfaces for working with threads and synchronization primitives, such as locks and semaphores.

Front: What is the System.Xml namespace?
Back: The System.Xml namespace provides classes for working with XML, including reading and writing XML files and manipulating XML documents.

Front: What is the System.Linq namespace?
Back: The System.Linq namespace provides classes and extensions for querying data in-memory and from different data sources, using a common syntax known as Language Integrated Query (LINQ).

Front: What is MVC.NET?
Back: MVC.NET is a web application framework based on the Model View Controller (MVC) design pattern. It separates the application into three interconnected components - the model, view, and controller - to provide a more organized and maintainable codebase.

Front: What is the Model in MVC?
Back: In MVC, the Model is responsible for managing the application data and business logic. It represents the application core, such as a list of database records. The Model communicates with the Controller to perform operations on the data and notifies the View of any changes.

Front: What is the View in MVC?
Back: In MVC, the View is responsible for displaying the data provided by the Model. It presents the data in a user-friendly format using HTML, CSS, and JavaScript. The View communicates with the Controller to obtain data from the Model and to perform user actions.

Front: What is the Controller in MVC?
Back: In MVC, the Controller is responsible for handling user input and updating the Model and View accordingly. It acts as an intermediary between the Model and View, processing requests from the user and communicating with the other components to execute actions and retrieve data.

Front: What is the purpose of MVC?
Back: The purpose of MVC is to provide a more organized and maintainable codebase for web applications. By separating the application into three interconnected components, MVC allows for easier testing, modular development, and flexibility in design.

Front: How does MVC.NET provide control over HTML, CSS, and JavaScript?
Back: MVC.NET provides full control over HTML, CSS, and JavaScript by allowing developers to define the HTML structure, styling, and behavior of the application through the View component. This separation of concerns ensures that the View remains separate from the business logic and can be easily modified or updated without affecting other parts of the application.

Front: What is the difference between DELETE and TRUNCATE in SQL Server?
Back: DELETE is a DML (Data Manipulation Language) operation that deletes records from a table, while TRUNCATE is a DDL (Data Definition Language) operation that deletes all data from a table and resets the identity seed. TRUNCATE also removes all the pages from the table and deallocates the space used by the table.

Front: Can a TRUNCATE operation be rolled back in SQL Server?
Back: No, a TRUNCATE operation cannot be rolled back in SQL Server. Once the operation is executed, it commits automatically and cannot be undone.

Front: How can you identify a temporary table in a SQL query in SQL Server?
Back: Temporary tables in SQL Server are identified with a '#' symbol preceding the table name. For example, a temporary table named "mytable" would be identified as "#mytable" in a SQL query.

Front: What is an Oracle Global Temporary Table?
Back: An Oracle Global Temporary Table is a temporary table that is created at the schema level and is designed to store data that is private to a session or a transaction. They are similar to temporary tables in SQL Server, but are not identified with a '#' symbol. Instead, they are created using the "CREATE GLOBAL TEMPORARY TABLE" statement.

Front: Which is better, a DataReader or a DataSet?
Back: It depends on your needs. While a DataReader retains an open connection to your database until you're done with it and can only be read forward, a DataSet is an in-memory object that can be manipulated and can be serialized and represented in XML.

Front: What are the different ways to handle session state in an ASP.NET/MVC web application?
Back: The different ways to handle session state are: cookies, tokens, and session variables in Microsoft.AspNet.Session (MVC <= 5).

Front: What is a cookie?
Back: A cookie is a small piece of data that is sent by a web server to be stored on a user's browser, and is sent back to the server with subsequent requests.

Front: What is a token?
Back: A token is a self-contained, digitally signed string that contains claims or assertions about a user, used for authentication and authorization purposes.

Front: What are session variables?
Back: Session variables are variables that can be used to store and retrieve user-specific information during a user's session on a website.

Front: What is Microsoft.AspNet.Session?
Back: Microsoft.AspNet.Session is a library in ASP.NET that provides a way to store session data on the server and retrieve it as needed for a particular user session.

Front: What is session state?
Back: Session state is the data that is associated with a particular user session on a website, and can be used to store user-specific information and preferences.

Front: What does SOLID stand for?
Back: SOLID stands for the First 5 Principles of Object Oriented Design, which are Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle, and Dependency Inversion Principle.

Front: What is the Single Responsibility Principle?
Back: The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one responsibility or job in the software.

Front: What is the Open/Closed Principle?
Back: The Open/Closed Principle states that software entities should be open for extension but closed for modification. This means that you should be able to add new functionality to a system without having to modify existing code.

Front: What is the Liskov Substitution Principle?
Back: The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of a subclass without breaking the system. In other words, a subclass should be able to be used in place of its superclass without causing any problems.

Front: What is the Interface Segregation Principle?
Back: The Interface Segregation Principle states that it's better to have many specific interfaces for clients rather than one general-purpose interface. This helps to avoid clients being forced to implement methods they don't need.

Front: What is the Dependency Inversion Principle?
Back: The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.

Front: What is Dependency Injection?
Back: Dependency Injection (DI) is a software design pattern that implements inversion of control for resolving dependencies.

Front: What is Inversion of Control?
Back: Inversion of Control (IoC) is a programming principle where the control flow of a program is inverted, meaning that instead of the program controlling the flow of execution, external code controls it.

Front: How do DI and IoC patterns remove dependencies from code?
Back: DI and IoC patterns remove dependencies from code by allowing a class to depend on an abstraction (interface) instead of a concrete class, and providing an implementation of that interface when configuring the composition root.

Front: How does DI increase modularity and extensibility in a program?
Back: DI increases modularity and extensibility in a program by making it easier to replace implementations of interfaces, and allowing classes to have control over which implementation to use.

Front: What is the composition root in DI?
Back: The composition root in DI is the place where the entire object graph of an application is composed and dependencies are resolved.`;

const flashcards = parseFlashcards(flashcardData);
console.log(flashcards);

let currentFlashcard = 0;

refreshFlashcard();

function refreshFlashcard(){

    front.innerHTML = "<h2>" + (currentFlashcard + 1).toString() + "</h2>" + "<p>" + flashcards[currentFlashcard].front + "</p";
    back.innerHTML = flashcards[currentFlashcard].back;

}

function handleNext() {
    console.log('next');
    if (currentFlashcard + 1 < flashcards.length)
        currentFlashcard++;
    console.log(currentFlashcard);
    refreshFlashcard();
    front.style.visibility = 'visible';
    back.style.visibility = 'hidden';
    isFlipped = false;
}


function handleBack() {
    console.log('back');
    if (currentFlashcard != 0)
        currentFlashcard--;
    console.log(currentFlashcard);
    refreshFlashcard();
    front.style.visibility = 'visible';
    back.style.visibility = 'hidden';
    isFlipped = false;
}

nextButton.addEventListener('click', handleNext);
backButton.addEventListener('click', handleBack);
