const dbQuestions = [
    {
        question: "What is a Database?",
        answer: "A database is an organized collection of data.",
    },
    {
        question: "What is DBMS?",
        answer: "DBMS stands for Database Management System.",
    },
    {
        question: "What are the types of DBMS?",
        answer: [
            "RDBMS (Relational Database Management System)",
            "HDBMS (Hierarchical Database Management System)",
            "NDBMS (Network Database Management System)",
            "NoSQL",
            "Object-Oriented Database Management System"
        ]
    },

    {
        question: "What are the types of languages used in DBMS?",
        answer: [
            "DQL (Data Query Language)",
            "DML (Data Manipulation Language)",
            "TCL (Transaction Control Language)",
            "DDL (Data Definition Language)",
            "DCL (Data Control Language)"
        ]
    },

    {
        question: "What is Aliasing in SQL?",
        answer:
            "SQL alias is used to give a temporary name to a table or column to make query results more readable. It exists only for the duration of the query."
    },

    {
        question: "What are constraints in SQL?",
        answer: [
            "NOT NULL",
            "DEFAULT",
            "UNIQUE",
            "CHECK",
            "PRIMARY KEY",
            "FOREIGN KEY"
        ]
    },

    {
        question: "Difference between TRUNCATE and DELETE?",
        answer: [
            "TRUNCATE is DDL, DELETE is DML",
            "TRUNCATE removes all records permanently, DELETE can remove specific rows",
            "TRUNCATE is faster",
            "DELETE can use WHERE condition",
            "DELETE can be rolled back (with COMMIT control), TRUNCATE generally cannot"
        ]
    },

    {
        question: "What are types of operators in SQL?",
        answer: [
            "Arithmetic (+, -, *, /)",
            "Relational (=, !=, >, <, >=, <=)",
            "Logical (AND, OR, NOT)",
            "Special (IN, LIKE, BETWEEN, IS, AS)",
            "Set Operators (UNION, UNION ALL, INTERSECT, MINUS)"
        ]
    },

    {
        question: "What is normalization in DBMS?",
        answer:
            "Normalization is the process of dividing large tables into smaller tables to reduce redundancy and improve data integrity. It follows 1NF, 2NF, and 3NF rules."
    },

    {
        question: "What is a composite key?",
        answer:
            "A composite key is a primary key made using two or more columns together to uniquely identify a record."
    },

    {
        question: "What is a super key?",
        answer:
            "A super key is any combination of columns that can uniquely identify a record in a table. A primary key is a minimal super key."
    },
    {
        question: "What is DBMS?",
        answer:
            "DBMS (Database Management System) is software used to store, manage, and retrieve data efficiently from a database."
    },

    {
        question: "What is RDBMS?",
        answer:
            "RDBMS is a Relational Database Management System where data is stored in tables with rows and columns and relationships are maintained using keys."
    },

    {
        question: "What is a Primary Key?",
        answer:
            "A primary key is a column or set of columns that uniquely identifies each record in a table. It cannot be NULL and must be unique."
    },

    {
        question: "What is a Foreign Key?",
        answer:
            "A foreign key is a column that creates a relationship between two tables by referencing the primary key of another table."
    },

    {
        question: "What is normalization?",
        answer:
            "Normalization is the process of organizing data into multiple related tables to reduce redundancy and improve data consistency."
    },

    {
        question: "What is denormalization?",
        answer:
            "Denormalization is the process of combining tables to improve read performance, even if it increases redundancy."
    },

    {
        question: "What is SQL?",
        answer:
            "SQL (Structured Query Language) is used to communicate with and manage data in relational databases."
    },

    {
        question: "What is a table in DBMS?",
        answer:
            "A table is a collection of related data organized in rows (records) and columns (fields)."
    },

    {
        question: "What is a schema?",
        answer:
            "A schema is the logical structure of a database that defines tables, fields, relationships, and constraints."
    },

    {
        question: "What is an index in DBMS?",
        answer:
            "An index is used to speed up data retrieval operations in a database by creating a quick lookup structure."
    },

    {
        question: "What is a view in SQL?",
        answer:
            "A view is a virtual table created from a SQL query. It does not store data physically."
    },

    {
        question: "What is a transaction?",
        answer:
            "A transaction is a group of SQL operations executed together as a single unit following ACID properties."
    },

    {
        question: "What are ACID properties?",
        answer:
            [
                "Atomicity: Either all operations succeed or none",
                "Consistency: Database remains valid before and after transaction",
                "Isolation: Transactions do not interfere with each other",
                "Durability: Once committed, changes are permanent"
            ]
    },

    {
        question: "What is the difference between DBMS and RDBMS?",
        answer:
            [
                "DBMS stores data in file format",
                "RDBMS stores data in tabular format",
                "DBMS does not support relationships",
                "RDBMS supports relationships using keys"
            ]
    },

    {
        question: "What is a candidate key?",
        answer:
            "A candidate key is a set of attributes that can uniquely identify a record. One of them becomes the primary key."
    }
];

export default dbQuestions;