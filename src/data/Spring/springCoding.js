const springCoding = [
  {
    title: "Hello World REST API in Spring Boot",
    question: "Write a Spring Boot application to create a REST API that returns 'Hello, Spring Boot!' when '/hello' endpoint is accessed.",

    code: `package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`,

    explanation:
      "This program creates a REST API using @RestController. The @GetMapping('/hello') annotation maps the '/hello' URL to the hello() method. When the endpoint is accessed, it returns the text 'Hello, Spring Boot!'."
  },

  {
    title: "Student CRUD API using Spring Boot",
    question: "Write a Spring Boot application to perform CRUD operations on Student data using Spring Data JPA.",

    code: `// Student.java
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // Getters and Setters
}

// StudentRepository.java
public interface StudentRepository extends JpaRepository<Student, Long> { }

// StudentController.java
@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @PostMapping
    public Student save(@RequestBody Student student){
        return repository.save(student);
    }

    @GetMapping
    public List<Student> getAll(){
        return repository.findAll();
    }
}`,

    explanation:
      "This application performs CRUD operations using Spring Data JPA. @Entity creates the Student table, JpaRepository provides CRUD methods, and @RestController exposes REST APIs."
  },

  {
    title: "Fetch Employee By ID",
    question: "Write a Spring Boot REST API to fetch an Employee by using Employee ID.",

    code: `@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return repository.findById(id).orElse(null);
    }
}`,

    explanation:
      "The @PathVariable annotation accepts the Employee ID from the URL. JpaRepository's findById() method retrieves the employee record from the database."
  },

  {
    title: "Delete Student Record",
    question: "Write a Spring Boot REST API to delete a student record by ID.",

    code: `@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentRepository repository;

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id){
        repository.deleteById(id);
        return "Student Deleted Successfully";
    }
}`,

    explanation:
      "The @DeleteMapping annotation handles DELETE requests. deleteById() removes the student record from the database using the given ID."
  },

  {
    title: "Update Employee Details",
    question: "Write a Spring Boot REST API to update Employee details using PUT Mapping.",

    code: `@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id,
                                   @RequestBody Employee employee){

        Employee emp = repository.findById(id).orElse(null);

        if(emp != null){
            emp.setName(employee.getName());
            emp.setDepartment(employee.getDepartment());
            emp.setSalary(employee.getSalary());

            return repository.save(emp);
        }

        return null;
    }
}`,

    explanation:
      "The @PutMapping annotation updates an existing employee. The employee is fetched using findById(), its values are updated, and save() stores the modified record."
  }
];

export default springCoding;